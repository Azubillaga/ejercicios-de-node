const express = require('express')  
const app = express()  
app.use(express.json())  
app.use(express.urlencoded({extended: true}))  

crearalerta = (aviso) => {
    saludar = (nombre) => {  
        return ` La frase es: ${texto} ${nombre} ` 
        }  
        return alertar 
    } 
crearSaludo = (texto) => {  
 saludar = (nombre) => {  
 return ` La frase es: ${texto} ${nombre} ` 
 }  
 return saludar  
}  
app.get('/entrada/', (req, res) => {  
    const aviso =(crearalerta)
 const saludo = crearSaludo(req.query.texto_saludo)  
 res.write(saludo(req.query.nombre1))  
 res.write(saludo(req.query.nombre2))  
 res.write(saludo("Jefe"))  
 res.end()  
})  
app.all('*',(req, res)=>{  
 res.send(`<h3> localhost:3000/entrada/?texto_saludo=buenos_dias&ampnombre1=Maria&ampn ombre2=Pedro </h3>`)  
})  
app.listen(3000)  
console.log("The server is listening on port 3000...")  