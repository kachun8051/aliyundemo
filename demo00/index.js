const r = require('./route')

module.exports.handler = function(req, resp, context) {
    console.log('hello world')
    console.log(req.url)
    resp.setHeader('content-type', 'application/json')
    var uri = (req.url).split('/')
    if(uri.length == 0) {
    resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request'}, null, ''))
    } else {
    var route = uri[uri.length-1]
    console.log(route)
    switch(req.method) {
        case 'GET':
            resp.send(JSON.stringify(r.get(route)))
            break
        case 'POST':
            resp.send(JSON.stringify({'code': 200, 'body': 'This is a POST request'}))
        }
    }
}