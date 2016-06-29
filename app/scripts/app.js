App = {
  baseUrl: '/',

  get pageContainer() {
    this._pageContainer = this._pageContainer || document.querySelector('#page-container')
    return this._pageContainer
  },

  get page() {
    return this._page
  },

  set page (value) {
    if (this._page) { this.pageContainer.removeChild(this._page) }
    this._page = document.createElement(value)
    this.pageContainer.appendChild(this._page)
  },

  dateFormatter: {
    short: function(date) {
      if ((typeof date) == 'string') { date = new Date(date) }
      this._short = this._short || d3.time.format.utc("%-d %b %Y")
      return this._short(date)
    },

    serialized: function(date) {
      if ((typeof date) == 'string') { date = new Date(date) }
      return d3.time.format.iso(date)
    }
  }
}
