import xhr from './xhr'

class Getinfo {
    getNewsList () {
        let url = "https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1C5E9552849453&cp=5958A9B495939E1&min_behot_time=0"
        return xhr(url, 'get', null, 'jsonp')
    }
}

export default new Getinfo()
