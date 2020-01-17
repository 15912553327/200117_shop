
import ajax from './ajax'

// 获取经纬度
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

export const reqFootTypes = () => ajax(`/index_category`)

export const reqShops = (lng, lat) => ajax(`/shops`, {lng, lat})
