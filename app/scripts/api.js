API = {

  getProjects: function(success, failure) {
    this._request('GET', `//${App.config.api.host}/projects`, function(response) {
      Logger.log(`succeeded getting projects from api`)
      success(response)
    }, function(response) {
      Logger.log(`failed to get projects from api`)
      failure(repsonse)
    })
  },

  saveProject: function(project, success, failure) {
    if (project.id) {
      this._request('PUT', `//${App.config.api.host}/projects/${project.id}`, function(response) {
        Logger.log(`succeeded saving project:${project.id}`)
        success(response)
      }, function(response) {
        Logger.log(`failed to save project:${project.id}`)
        failure(response)
      })
    } else {
      this._request('POST', `//${App.config.api.host}/projects`, function(response) {
        Logger.log(`succeeded saving project:${response.id}`)
        success(response)
      }, function(response) {
        Logger.log(`failed to save new project`)
        failure(response)
      }, project.serialize('main'))
    }
  },

  _request(method, url, success, failure, data, opts) {
    var options = opts || {}
    var xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.responseType = options.responseType || 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.setRequestHeader('Content-Type', 'applicaiton/json')

    // configure headers
    if (options.headers) {
      for (var key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key])
      }
    }

    xhr.onload = function(e) {
      var response = xhr.response
      if ((typeof response) == 'string') {
        try { response = JSON.parse(response) }
        catch (err) {

        }
      }

      switch(xhr.status) {
        case 200:
        case 201:
          success(response)
          break
        default:
          failure(response)
      }
    }

    xhr.send(JSON.stringify(data))
  }
}
