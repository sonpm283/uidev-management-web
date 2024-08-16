import envConfig from '@/config/env.config'

class HttpError extends Error {
  status: number
  payload: any

  constructor({ status, payload }: { status: number; payload: any }) {
    super('Http Error')

    this.status = status
    this.payload = payload
  }
}

type CustomOptions = Omit<RequestInit, 'method'> & {
  withCredentials?: boolean | undefined
  baseUrl?: string | undefined
}

const request = async <Response>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  options?: CustomOptions | undefined
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined
  const baseHeaders = {
    'Content-Type': 'application/json'
  }

  const baseUrl = options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options.baseUrl
  const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`
  if (options?.withCredentials) options.credentials = 'include'

  const res = await fetch(fullUrl, {
    ...options,

    headers: {
      ...baseHeaders,
      ...options?.headers
    },

    body,
    method
  })

  const payload: Response = await res.json()

  const data = {
    status: res.status,
    payload
  }

  if (!res.ok) {
    throw new HttpError(data)
  }

  return data
}

const http = {
  get<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('GET', url, options)
  },
  post<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('POST', url, { ...options, body })
  },
  put<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('PUT', url, { ...options, body })
  },
  delete<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('DELETE', url, { ...options })
  }
}

export default http
