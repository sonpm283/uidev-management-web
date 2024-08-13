import http from '@/lib/http'
import { UserResType } from '@/types/user.type'

const userService = {
  getUser: async () => {
    const response = await http.get<IBackendRes<UserResType>>('/user/me', {
      withCredentials: true
    })
    return response.payload
  }
}

export default userService
