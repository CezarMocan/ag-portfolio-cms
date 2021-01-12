// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Custom defined schemas
import projectSchema from './project'
import aboutSchema from './about'
import filesSchema from './files'
import newsSchema from './news'
import richTextSchema from './richText'
import richTextContainerSchema from './richTextContainer'
import projectImageSchema from './projectImage'
import projectVideoSchema from './projectVideo'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    aboutSchema,
    filesSchema,
    newsSchema,
    projectSchema,
    richTextSchema,
    richTextContainerSchema,
    projectImageSchema,
    projectVideoSchema
  ])
})
