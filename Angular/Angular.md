Para mostrar codigo en markdown, debemos cambiarles algunas cosas, esta pagina nos convierte el codigo https://www.plus2net.com/html_tutorial/tags-page.php

</br>

## Como pasar datos
Podremos pasar datos usando servicios, si solo queremos pasar una variable o algo minimo podemos usar @input
</br>
</br>

## mostrar un componente dentro de otro
<app-nombre_del_componente > </app-nombre_del_componente>
</br>

Importante: para poder copartirlo debe estar en el modulo, es decir el componente donde se va mostrar debe tener
un .module y en este debe tener importado el modulo donde se encuetra el componente que quiere llamar.

</br>
</br>

## Compartir informacion entre compoenentes
podemos usar las @input  y mostrar esas input desde otro componente, por ejemplo:

<app-list1 [tipoLista]=tipo>  </app-list1>

donde tipo es la variable cualquiera, pero tipoLista es la variable @Input

https://blog.ng-classroom.com/blog/angular/compartiendo-info-componentes/

export class FollowedComponent implements OnInit {
  lista: string[];
  
  constructor(
    private router: Router  ) {
  this.lista = [];
  }

  ngOnInit() {
    
    // Buscar lista de artistas
    this._userService.getFollowed().subscribe(
      resp => {
      this.lista = resp.usuarios;
        console.log(this.lista = resp.usuarios);
      },

      error => { console.log(error); });
  }


</br>
</br>

## Pasar una variable de angular js dentro de una funcion CLICK

Debemos usar ng-click, en el archivo .ts llegara la variable
En el html:
&lt;a ng-click=nomFuncion(lista.documento)&gt;{{ lista.documento}} &lt;/a&gt;

</br>

en el ts:
nomFuncion(NombredelPdf) {
     const namepdf = NombredelPdf; 
 }

</br>
</br>

## Unsafe value used in a resource URL context; Mostrando pdf

Estaba mostrando un pdf de forma dinamica, dependiendo del nombre del pdf que llegara era el que iba a mostrar,
pero me salio ese ERROR. Para solventar ese error hay que hacer lo que sale la imagen.

</br>

<img src="https://github.com/l337quez/Apuntes-para-la-web/blob/master/Angular/imagenes/Unsafe%20value%20used%20in%20a%20resource%20URL%20context.png">

</br>

En this.url, va la direccion del archivo que se quiere mostrar

</br>
</br>

## Concatenar texto en html con variable de js

Si por ejemplo queremos hacer una ruta concatenada, se hace asi: 

</br>

src="{{'assets/adminpro/mockPdf/'+rutaPdf}}"

</br>
</br>

## Enviar una variable dentro de la funcion click a javascript

(click)="enviarnombre(parti.documento)" 
