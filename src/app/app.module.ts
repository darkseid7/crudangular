import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { CursoService } from './services/curso.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { EditCursoComponent } from './components/edit-curso/edit-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    AddCursoComponent,
    HomeComponent,
    SupportComponent,
    PageNoFoundComponent,
    EditCursoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularCRUD'),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
