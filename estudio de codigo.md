Para mostrar codigo en markdown, debemos cambiarles algunas cosas, esta pagina nos convierte el codigo
https://www.plus2net.com/html_tutorial/tags-page.php  
  
</br>
      
      
### Suscribirse para llamar a un mock 
  <pre>
    <code>
  // Lista Seguidores
    this._userService.getFollowed().subscribe(
      resp => {
      this.listaSeguidores = resp.usuarios;
      },
      error => { console.log(error); });    </code>
  </pre>
  
</br>
  
  En este codigo a un servicio de usuarios en donde hay una funcion que reotorna a un mock (datos falsos) luego se iguala una 
  variabale a una respuesta y esta respuesta tiene una variable llamada usuarios. porque vemos que dice resp.usuarios.
  
  
</br>
  
</br>
