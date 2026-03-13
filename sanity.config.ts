import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './schemaTypes'
import {deskStructure} from './src/deskStructure'
import {getStudioEnv} from './src/env'

const {dataset, projectId} = getStudioEnv()

export default defineConfig({
  name: 'default',
  title: 'ArtEffect Studio',
  projectId,
  dataset,
  plugins: [structureTool({structure: deskStructure})],
  schema: {
    types: schemaTypes,
  },
})
