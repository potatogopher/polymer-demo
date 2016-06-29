window.addEventListener('WebComponentsReady', function() {

  page.base(App.baseUrl.replace(/\/$/, ''))

  // Routes

  page('/projects', function(data) {
    App.page = 'wheel-projects-index'
  })

  page('*', function(ctx) {
    var redirect = ctx.path.includes('//') ? ctx.path.replace('//', '/') : App.baseUrl
    page.redirect(redirect)
  })

  page({
    hashbang: true
  })
})
