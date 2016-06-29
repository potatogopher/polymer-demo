ProjectModel.addDeserializer('main', function(model, data) {
  model.set('id', data.id)
  model.set('name', data.name)
  model.set('startDate', data.start_date)
  model.set('createdAt', data.created_at)
  model.set('updatedAt', data.updated_at)
  model.set('deletedAt', data.deleted_at)
})

ProjectModel.addSerializer('main', function(model) {
  return {
    name: model.get('name'),
    start_date: App.dateFormatter.serialized(model.get('startDate'))
  }
})

ProjectModel.addSerializer('vaadin', function(model) {
  return {
    name: { name: model.get('name'), id: model.id },
    startDate: model.startDate(),
  }
})

