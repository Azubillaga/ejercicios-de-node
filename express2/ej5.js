const express = require('express')  
const app = express()  
app.use(express.urlencoded({ extended: true }))  

app.get('/mayoromenor/', (req, res) => {  
 const a = Number(req.query.primero)  
 const b = Number(req.query.segundo)  
 let resultado
 if (a>b) {
     resultado=`el mayor es ${a}`
 }else if (b>a) {
     resultado=`el mayor es ${b}`
 }else{
    resultado = `son`
 }

})  

app.all('/', (req, res) => {  
 res.send(`<p>Puedes ir a la siguiente dirección:  
 <br>localhost:5000/mayoromenor/?primero=5&segundo=9  <br><br> Cambiar valores y probar funcionamiento  `)  
});  

app.listen(5000, () => console.log('Server ready on localhost:5000'))  