import {defineCliConfig} from 'sanity/cli'

import {getStudioEnv} from './src/env'

const {dataset, projectId} = getStudioEnv({requireProjectId: false})

export default defineCliConfig({
  api: {projectId, dataset},
})
