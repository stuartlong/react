import { task, series } from 'gulp'
import { argv } from 'yargs'

import sh from '../sh'
import config from '../../../config'
import createScreenshotFiles from 'build/screener/createScreenshotFiles'

const { paths } = config

// ----------------------------------------
// Visual
// ----------------------------------------

task('screener:createScreenshotFiles', cb => {
  createScreenshotFiles()
  cb()
})

task('screener:runner', cb => {
  // screener-runner doesn't allow to pass custom options
  if (argv.filter) process.env.SCREENER_FILTER = argv.filter

  // kill the server when done
  sh(`screener-runner --conf ${paths.base('build/screener/screener.config.js')}`)
    .then(() => {
      cb()
      process.exit(0)
    })
    .catch(err => {
      cb(err)
      process.exit(1)
    })
})

// ----------------------------------------
// Default
// ----------------------------------------

task('screener', series('screener:createScreenshotFiles')) // , 'dll', 'build:docs', 'serve:docs', 'screener:runner'))
