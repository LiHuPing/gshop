import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise = null
        if (type === 'GET') {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                //字符串拼接
                dataStr += key + '=' + data[key] + '&'
            })

            if (dataStr !== '') {
                //去掉最后一个&
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        promise.then(response => {
            //修改状态为成功
            resolve(response.data)
        }).catch(errMsg => {
            reject(errMsg)
        })
    })




}