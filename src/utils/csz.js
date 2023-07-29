
import csz from 'csz'

// fix csz to avoid to use template literal and setup global
const css = (v)=>csz([v]) 
window.css = css

export { css }