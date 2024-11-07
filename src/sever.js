import http from 'http'

// sever
const sever = http.createServer((req,resp) => {
console.log(req.method, req.url);
    resp.end("ooohihinaooohihinaa")
});
sever.listen(3000)







