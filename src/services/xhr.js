import $ from 'jQuery'

const xhr = (url, type = 'get', data = null, dataType = 'json') => {
    return $.ajax({
        url: url,
        type: type,
        data: data,
        dataType: dataType
    })
}

export default xhr
