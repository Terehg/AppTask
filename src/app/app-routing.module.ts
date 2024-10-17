import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 'pipes' es el nombre de la ruta(que parace después del slash), y component (nombre del componente que queremos renderizar)
  // Es importante poner en el html de app component o donde se va arenderizar, la etiqueta<router-outlet></router-outlet>
//{ path :'pipes', component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
