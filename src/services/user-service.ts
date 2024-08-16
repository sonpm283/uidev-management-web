import http from '@/lib/http'
import { IUserProfile } from '@/types/user.type'

const userService = {
  getUser: async (accessToken?: string): Promise<IBackendRes<IUserProfile>> => {
    const response = await http.get<IBackendRes<IUserProfile>>('/user/me', {
      withCredentials: true,
      headers: {
        Cookie: `accessToken=${accessToken}`
      }
    })
    return response.payload
  }
}

export default userService
