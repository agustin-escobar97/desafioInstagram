const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')
const { response } = require('express')
const app = express()   
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, resp) => resp.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var publicaciones = [
    {
        id : 1,
        image : 'https://i.imgur.com/rlXE2LP.jpg',
        text : 'citricos',
        likes : 0
    },
    {
        id : 2,
        image : 'https://i.imgur.com/Qxe6gau.jpg',
        text : 'atm flores',
        likes : 0
    },
    {
        id : 3,
        image : 'https://i.imgur.com/r0vgloo.jpg',
        text : 'ur handsome',
        likes : 0
    }
]

//get todas las publicaciones
app.get('/api/publicaciones', (req, resp)=>{
    resp.json(publicaciones)
})

//get una publicacion
 app.get('/api/publicaciones/:id', (req, resp)=>{
    let id = req.params.id
    let publicacion = publicaciones.find(v => v.id === parseInt(id))

    if(publicacion === undefined){
        resp.status(404).send('libro no encontrado')
    }

    resp.send(publicacion)
})

//subir publicacion
app.post('/api/publicaciones/agregarPublicacion', (req, resp)=>{
    let publicacion = req.body

    publicacion.id = publicaciones.length+1

    if((!publicacion.image || !publicacion.text) || (publicacion.likes != 0)){
        resp.status(400)
        resp.send("esta intentando subir una publicacion sin imagen, texto o con likes diferente a 0")
    }
    else(publicaciones.push(publicacion))
    resp.send(publicaciones)

})

//dar like
app.put('/api/publicaciones/darLike/:id', (req, resp)=>{
    let id = req.params.id
    let publicacion = publicaciones.find(v => v.id ===parseInt(id))

    if(!publicacion){
        resp.status(400)
    }
    
    publicacion.likes = publicacion.likes+1
    resp.send(publicacion)
})

// https://i.imgur.com/f648Vth.png imagen de prueba