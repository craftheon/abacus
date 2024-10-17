const { generatorHandler, GeneratorOptions } = require('@prisma/generator-helper')

generatorHandler({
  onManifest() {
    return {
      defaultOutput: 'generated',
      prettyName: 'Custom Table Names Generator',
    }
  },
  async onGenerate(options) {
    const prefix = 'abacus_'
    options.dmmf.datamodel.models.forEach(model => {
      const tableName = prefix + model.name.toLowerCase()
      model.dbName = tableName
    })
  },
})