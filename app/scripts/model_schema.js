RiverDB.config.storage = localStorage

ProjectModel = RiverDB.Model.create('project', 'projects', function(project) {
  project.prototype.startDate = function() { return App.dateFormatter.short(this.get('startDate')) }
})
