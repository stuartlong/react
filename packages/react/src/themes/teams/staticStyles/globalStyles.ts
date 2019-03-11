import { StaticStyleFunction } from '../../types'

const globalStyles: StaticStyleFunction = siteVars => ({
  html: {
    fontSize: siteVars.htmlFontSize,
  },
  body: {
    padding: siteVars.bodyPadding,
    margin: siteVars.bodyMargin,
    fontFamily: siteVars.bodyFontFamily,
    fontSize: siteVars.bodyFontSize,
    lineHeight: siteVars.bodyLineHeight,
  },
})

export default globalStyles


const htmlFontSize = 10
pxToRem(10, htmlFontSize) // Teams 1rem, 0.714rem...

// ??
pxToRem(14, htmlFontSize) // CSS in JS ThemeB 1rem, 1.4rem...
