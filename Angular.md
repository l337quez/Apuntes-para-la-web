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
