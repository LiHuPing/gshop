import { RECEIVE_ADDRESS, RECEIVE_CATEGORIES } from './mutation-types'
export default {
    [RECEIVE_ADDRESS](state, { data }) {
        state.address = data
    },
    [RECEIVE_CATEGORIES](state, { data }) {
        state.categories = data
    }
}