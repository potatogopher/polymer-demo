Datastore = {
  getProjects(callback) {
    API.getProjects(function(response) {
      ProjectModel.clearAll()

      for (var i in response) {
        var data = response[i]
        var existingModel = ProjectModel.select(data.id)
        if (existingModel) {
          existingModel.deserialize('main', data)
          existingModel.save()
        } else {
          ProjectModel.deserialize('main', data).save()
        }
      }

      callback(ProjectModel.selectAll())
    }, function(response) {

    })
  }
}
