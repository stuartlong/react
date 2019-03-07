enum STYLE_BATCHING_STRATEGY {
  PER_PROPERTY,
  PER_SLOT,
  PER_COMPONENT,
  PER_TREE,
}

enum STYLE_NODE_UPDATE_STRATEGY {
  SKIP,
  INSERT_RULE,
  INSERT_RULE_MEDIA_QUERY_ALL,
  TEXT_CONTENT,
}

type PERF_FLAGS = {
  /**
   * Stop all calls into fela methods.
   * Isolates timings to React and Stardust.
   */
  SKIP_FELA: boolean

  /**
   * Different strategies for updating the DOM/CSSOM _after_ class names and styles are computed.
   */
  STYLE_NODE_UPDATE_STRATEGY: STYLE_NODE_UPDATE_STRATEGY

  /**
   * Different strategies for batching
   */
  STYLE_BATCHING_STRATEGY: STYLE_BATCHING_STRATEGY
}

const DEFAULT_FLAGS: PERF_FLAGS = {
  SKIP_FELA: false,
  STYLE_NODE_UPDATE_STRATEGY: STYLE_NODE_UPDATE_STRATEGY.INSERT_RULE,
  STYLE_BATCHING_STRATEGY: STYLE_BATCHING_STRATEGY.PER_PROPERTY,
}

const initialFlags: PERF_FLAGS = JSON.parse(localStorage.getItem('perf.flags')) || DEFAULT_FLAGS

window.perfFlags = new Proxy(initialFlags, {
  set(target: PERF_FLAGS, p: PropertyKey, value: any, receiver: any): boolean {
    const ret = Reflect.set(target, p, value, receiver)
    localStorage.setItem('perf.flags', JSON.stringify(target, null, 2))
    return ret
  },
})

export const time = function time(id, fn) {
  let call = 0
  return function(...args) {
    call++
    performance.mark(id + call + '-start')
    const res = fn(...args)
    performance.mark(id + call + '-end')
    performance.measure(id + call, id + call + '-start', id + call + '-end')
    return res
  }
}
