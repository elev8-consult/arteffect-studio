function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim()

  if (!value) {
    throw new Error(
      `Missing required environment variable ${name}. Set it in dev/arteffect-studio/.env for local use or in the Vercel project settings before building.`,
    )
  }

  return value
}

export function getStudioEnv(options: {requireProjectId?: boolean} = {}) {
  const {requireProjectId = true} = options

  return {
    projectId: requireProjectId
      ? getRequiredEnv('SANITY_STUDIO_PROJECT_ID')
      : process.env.SANITY_STUDIO_PROJECT_ID?.trim() || '',
    dataset: process.env.SANITY_STUDIO_DATASET?.trim() || 'production',
  }
}
