const defaultLoginUrl = 'https://app.viralizou.app'
const attributionParams = [
  'fbclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const

function normalizeUrl(value: string | undefined) {
  const candidate = value?.trim() || defaultLoginUrl

  try {
    const url = new URL(candidate)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') throw new Error('invalid-protocol')
    return url
  } catch {
    return new URL(defaultLoginUrl)
  }
}

const loginUrl = normalizeUrl(import.meta.env.VITE_WEB_SERVICE_LOGIN_URL)

export const webServiceLoginUrl = loginUrl.toString()
export const webServiceGoogleLoginUrl = webServiceLoginUrl

export const webServiceAppUrl = new URL('/series', loginUrl).toString()

export function withAttribution(destination: string) {
  if (typeof window === 'undefined') return destination

  const target = new URL(destination)
  const currentParams = new URLSearchParams(window.location.search)

  attributionParams.forEach((name) => {
    const value = currentParams.get(name)?.trim()
    if (value) target.searchParams.set(name, value.slice(0, 500))
  })

  return target.toString()
}
