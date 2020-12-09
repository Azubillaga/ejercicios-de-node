

comprobar_edad = (valor) => {  
 if (valor >= 18) {  
 mensaje = "Mayor de edad. Acceso permitido" }
 else if(valor>=99){
     mensaje="no permitido"
 }else{
    mensaje = `acceso denegado`
 }
}



  
 
mostrar = (dato) => {  
 salida.innerHTML += `<br> Su respuesta: ${dato}` 
}  
iniciar = (edad) => {  
 const edad_verificada = comprobar_edad(edad)  
 mostrar(edad_verificada)  
}  

