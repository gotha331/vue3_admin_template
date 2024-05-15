import { defineStore } from 'pinia'
import type { loginForm } from '@/api/user/type'
import type { UserState } from './types/type'
import { reqLogin } from '@/api/user/index'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

export const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户的唯一标识token
    }
  },
  getters: {},
  actions: {
    async userLogin(data: loginForm) {
      let result = await reqLogin(data)

      if (result.code == 200) {
        // pinia仓库存储token
        this.token = result.data.token as string
        SET_TOKEN(this.token)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
})

export default useUserStore
