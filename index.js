class Usuario{
    
     constructor (nombre, apellido){
            
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas =[]; 

    }
      // metodos
    
      getFullName (){ 
      let nombreCompleto= this.nombre+" "+ this.apellido
      return nombreCompleto
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }
  
    countMascota(){
      let contarMascotas=this.mascotas.length
      return contarMascotas

    }

    addBook(titulo,autor){
      let libroAgregado={
        titulo:titulo,
        autor:autor,
      }
      this.libros.push(libroAgregado)
    }


}

   
  let usuario1= new Usuario("leandro","nieto")
  usuario1.addBook("el señor de los anillos y las dos torres","peter jackson")
  usuario1.addBook("harry potter y el caliz de fuego","J K rowling")
  usuario1.addMascota("perro")
  usuario1.addMascota("gato")
  usuario1.addMascota("carpincho")
  usuario1.countMascota()
  console.log(usuario1.countMascota())
  console.log(usuario1.getFullName())
  console.log(usuario1);
  
