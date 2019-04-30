import { RECEIVE_ADDRESS, RECEIVE_CATEGORIES } from './mutation-types'
import { reqAddress, reqCategories } from '../api'
export default {
    async  getAddress({ commit, state }) {
        const geohash = state.latitude + ',' + state.longitude
        //请求地址
        const { code, data } = await reqAddress(geohash)
        if (data && code === 0) {
            commit(RECEIVE_ADDRESS, { data })
        }
    },
    async getCategories({ commit }) {
        const { code, data } = await reqCategories()
        if (data && code === 0) {
            commit(RECEIVE_CATEGORIES, { data })
        }
    }
}