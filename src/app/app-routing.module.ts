import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { SupportComponent } from './components/support/support.component';

const routes: Route[] = [

   { path: '', redirectTo: '/home', pathMatch: 'full' },
   {
     path: 'home',
     component : HomeComponent
   },
   { path: 'cursos', component : CursosComponent },
   { path: 'addcurso', component : AddCursoComponent, },
   { path: '**', component : PageNoFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
