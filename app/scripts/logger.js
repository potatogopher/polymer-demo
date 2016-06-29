Logger = {
  log: function(msg) { this._send('log', msg) },

  _send: function(level, msg) {
    if (window.console && this.enabled) {
      console[level](msg)
    }
  },

  get enabled() {
    this._enabled = localStorage.getItem('loggingEnabled')
    return this._enabled
  }
}
