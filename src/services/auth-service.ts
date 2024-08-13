import http from '@/lib/http'
import { LoginDataType, LoginResType } from '@/schemaValidations/auth.schema'

const authService = {
  login: async (body: LoginDataType) => {
    const response = await http.post<LoginResType>('/auth/login', body, {
      withCredentials: true
    })
    return response.payload
  }
}

export default authService
