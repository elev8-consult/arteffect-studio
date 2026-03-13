import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './schemaTypes/index.ts'
import {deskStructure} from './src/deskStructure.ts'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || ''
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID. Set it in Vercel Project Settings or your local .env before building the Studio.',
  )
}

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
