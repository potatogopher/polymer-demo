Polymer({
  is: 'wheel-projects-index',
  properties: {
    projects: Array 
  },
  listeners: { },

  observers: [
    'updateProjects(projects)'
  ],

  ready: function() {
    var self = this
    var grid = this.querySelector('.projects-grid')

    grid.columns[0].renderer = function(cell) {
      cell.element.innerHTML = `<a href="/projects/${cell.data.id}">${cell.data.name}</a>`
    }

    Datastore.getProjects(function(projects) {
      self.projects = projects
    })
  },
  
  updateProjects: function(projects) {
    var items = []
    for (var i in projects) { items.push(projects[i].serialize('vaadin')) }
    this.querySelector('.projects-grid').items = items
  }
})
