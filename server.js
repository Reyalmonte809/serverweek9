const http = require('http')

function handleRequest(request, response){
    response.write(`Your URL was: ` );//Build it
    response.write(request.url) /// build it more
    return response.end(); //// send it
}

const server = http.createServer(handleRequest)
server.listen(9090)