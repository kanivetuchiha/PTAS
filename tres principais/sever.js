let express = require ('express')
let app = express()
let port = 3000
let cont = require('./controladores')
let rotas = require('./rotas')

app.listen(port, () => {console.log("Hello wolrd")})