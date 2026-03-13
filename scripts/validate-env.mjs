const requiredVars = ['SANITY_STUDIO_PROJECT_ID']

const missingVars = requiredVars.filter((name) => !process.env[name]?.trim())

if (missingVars.length > 0) {
  const message = [
    `Missing required environment variable${missingVars.length > 1 ? 's' : ''}: ${missingVars.join(', ')}`,
    'Set these in Vercel Project Settings -> Environment Variables before deploying.',
  ].join('\n')

  throw new Error(message)
}
