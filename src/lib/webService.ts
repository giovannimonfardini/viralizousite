const defaultLoginUrl = 'https://app.viralizou.app'

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
