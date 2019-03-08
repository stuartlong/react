import * as _ from 'lodash'

enum STYLE_BATCHING_STRATEGY {
  PER_PROPERTY = 'PER_PROPERTY',
  PER_SLOT = 'PER_SLOT',
  PER_COMPONENT = 'PER_COMPONENT',
  ENTIRE_TREE = 'ENTIRE_TREE',
}

enum STYLE_NODE_UPDATE_STRATEGY {
  SKIP = 'SKIP',
  INSERT_RULE = 'INSERT_RULE',
  INSERT_RULE_MEDIA_QUERY_ALL = 'INSERT_RULE_MEDIA_QUERY_ALL',
  TEXT_CONTENT = 'TEXT_CONTENT',
}

type PERF_FLAGS = {
  /**
   * Stop all calls into fela methods.
   * Isolates timings to React and Stardust.
   */
  SKIP_FELA: boolean

  /**
   * Skips context providers/consumers.
   */
  SKIP_CONTEXT: boolean

  /**
   * Simulate dev/production mode (enable rule textContent vs insertion replace).
   */
  FELA_RENDERER_DEV_MODE: boolean

  /**
   * Skip wrapping components in FocusZone.
   * Removes FocusZone timings.
   */
  SKIP_FOCUS_ZONE: boolean

  /**
   * Different strategies for batching
   */
  STYLE_BATCHING_STRATEGY: STYLE_BATCHING_STRATEGY

  /**
   * Different strategies for updating the DOM/CSSOM _after_ class names and styles are computed.
   */
  STYLE_NODE_UPDATE_STRATEGY: STYLE_NODE_UPDATE_STRATEGY
}

const DEFAULT_FLAGS_PROD: PERF_FLAGS = {
  FELA_RENDERER_DEV_MODE: false,
  SKIP_CONTEXT: false,
  SKIP_FELA: false,
  SKIP_FOCUS_ZONE: false,
  STYLE_NODE_UPDATE_STRATEGY: STYLE_NODE_UPDATE_STRATEGY.INSERT_RULE,
  STYLE_BATCHING_STRATEGY: STYLE_BATCHING_STRATEGY.PER_PROPERTY,
}

const DEFAULT_FLAGS_DEV: PERF_FLAGS = {
  FELA_RENDERER_DEV_MODE: true,
  SKIP_CONTEXT: false,
  SKIP_FELA: false,
  SKIP_FOCUS_ZONE: false,
  STYLE_NODE_UPDATE_STRATEGY: STYLE_NODE_UPDATE_STRATEGY.INSERT_RULE,
  STYLE_BATCHING_STRATEGY: STYLE_BATCHING_STRATEGY.PER_PROPERTY,
}

const initialFlags: PERF_FLAGS = JSON.parse(localStorage.getItem('flags')) || DEFAULT_FLAGS_DEV

const makeFlags = json => {
  const proxy = new Proxy(json, {
    set(target: PERF_FLAGS, p: PropertyKey, value: any, receiver: any): boolean {
      const ret = Reflect.set(target, p, value, receiver)
      localStorage.setItem('flags', JSON.stringify(target, null, 2))
      location.reload()
      return ret
    },
  })
  localStorage.setItem('flags', JSON.stringify(proxy, null, 2))
  return proxy
}

export const flags = makeFlags(initialFlags)

window.flags = flags
window.dev = () => {
  window.flags = makeFlags(DEFAULT_FLAGS_DEV)
  location.reload()
}
window.prod = () => {
  window.flags = makeFlags(DEFAULT_FLAGS_PROD)
  location.reload()
}
window.prodNoFela = () => {
  window.flags = makeFlags({ ...DEFAULT_FLAGS_PROD, SKIP_FELA: true })
  location.reload()
}

export const timeStart = function timeStart(id) {
  const uniqueId = _.uniqueId()
  const markStart = id + '-start' + uniqueId
  const markEnd = markStart.replace('-start', '-end')

  performance.mark(markStart)

  return function timeEnd() {
    performance.mark(markEnd)
    performance.measure(id + uniqueId, markStart, markEnd)
  }
}

export const time = function time(id, fn) {
  let call = 0
  return function(...args) {
    call++
    const timeEnd = timeStart(id + call)
    const res = fn(...args)
    timeEnd()
    return res
  }
}

export const printTimings = () => {
  const entryList = performance.getEntriesByType('measure')
  const [reactEntries, ourEntries] = _.partition(entryList, entry => entry.name.startsWith('⚛ '))

  const reactEntriesById = _.groupBy(
    reactEntries.filter(({ name }) => name.includes('[mount]')),
    group => group.name.replace(/\d/g, ''),
  )
  const ourEntriesById = _.groupBy(ourEntries, group => group.name.replace(/\d/g, ''))

  const summedReactEntriesObject = _.mapValues(reactEntriesById, vals =>
    _.sum(_.map(vals, 'duration')),
  )
  const summedOurEntriesObject = _.mapValues(ourEntriesById, vals => _.sum(_.map(vals, 'duration')))

  const sortedReactObject = _.fromPairs(
    _.sortBy(_.toPairs(summedReactEntriesObject), pair => -pair[1]),
  )
  const sortedOurObject = _.fromPairs(_.sortBy(_.toPairs(summedOurEntriesObject), pair => -pair[1]))

  console.table(flags)
  console.table(sortedOurObject)
  console.table(sortedReactObject)
}
