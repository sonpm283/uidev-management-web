import http from '@/lib/http'
import { UserResType } from '@/types/user.type'

const userService = {
  getUser: async (accessToken?: string) => {
    const response = await http.get<IBackendRes<UserResType>>('/user/me', {
      withCredentials: true,
      headers: {
        Cookie: `accessToken=${accessToken}`
      }
    })
    return response.payload
  }
}

export default userService
