const express = require('express')  
const app = express()  
app.use(express.urlencoded({extended: true}))  

validar = () => {  
 comprueba = (n1,n2) => {  
 const num1 = Number(n1)  
 const num2 = Number(n2)  
 const mensaje = (isNaN(num1) || isNaN(num2))  
 ? "Algún num no es correcto" 
 : " Números correctos" 
 return {  
 mensaje: mensaje,  
 numero1: num1,  
 numero2: num2  
 }  
 }  
 return comprueba  
}  
sumar = (n1,n2) => {  
 return n1 + n2  
}  
restar=(n1,n2) => {
    return n1 - n2
}

multiplicar=(n1,n2) =>{
    return n1*n2
}

dividir=(n1,n2) =>{
    return n1/n2
}
  
app.get('/entrada/', (req, res) => {  
 const numerosValidos = validar()  
 const {mensaje, numero1, numero2} = numerosValidos(req.query.valor1,req.query.valor2 )  
 res.write(mensaje)  
 const resultado = sumar(numero1,numero2)  
 const cadena = ` <h2> El resultado de la suma es: ${resultado} <h2>`  
 res.write(cadena)  
 res.end()  
})  
app.all('*',(req, res)=>{  
 res.send(`<h3> localhost:3000/entrada/?valor1=4&ampvalor2=7 </h3>`)  })  
app.listen(3000)  
console.log("The server is listening on port 3000...") 
