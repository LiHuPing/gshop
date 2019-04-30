import ajax from './ajax'

//根据经纬度获取地址信息
export const reqAddress = geohash => (ajax('/api/position/' + geohash))
export const reqCategories = () => (ajax('/api/index_category'))