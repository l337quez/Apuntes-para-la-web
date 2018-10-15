## mostrar un componente dentro de otro
<app-nombre_del_componente > </app-nombre_del_componente>

</br>

## Compartir informacion entre compoenentes
podemos usar las @input  y mostrar esas input desde otro componente, por ejemplo:

<app-list1 [tipoLista]=tipo>  </app-list1>

donde tipo es la variable cualquiera, pero tipoLista es la variable @Input

https://blog.ng-classroom.com/blog/angular/compartiendo-info-componentes/
