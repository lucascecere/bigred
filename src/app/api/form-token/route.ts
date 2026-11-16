import { issueFormToken } from '@/lib/spam'

// The quote form fetches one of these when it mounts and posts it back. The
// signed timestamp proves the page was loaded in a browser before the form was
// sent (see src/lib/spam.ts). A post without one is a bot.

export const dynamic = 'force-dynamic'

export async function GET() {
  return Response.json({ token: issueFormToken() }, { headers: { 'Cache-Control': 'no-store' } })
}
