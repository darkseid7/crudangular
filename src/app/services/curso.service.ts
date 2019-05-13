import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CursoInterface } from '../model/cursoInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursosCollection: AngularFirestoreCollection<CursoInterface>;
  cursos: Observable<CursoInterface[]>;
  cursoDoc: AngularFirestoreDocument<CursoInterface>;


  constructor(public afs: AngularFirestore) {
  //  this.cursos = afs.collection('cursos_fav').valueChanges();
  this.cursosCollection = afs.collection<CursoInterface>('cursos_fav', ref => ref.orderBy('fecha', "desc"));
  this.cursos = this.cursosCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
    const data = a.payload.doc.data() as CursoInterface;
    const id = a.payload.doc.id;

    return { id, ...data };
  }))
  );
}

   getCursos() {
     console.log("listo mi perro");
     return this.cursos;
    }

    addCurso( curso: CursoInterface) {
      Swal.fire(
        'Success',
        'Course has been added succesfully',
        'success'
      )
      this.cursosCollection.add(curso);
    }

    deleteCurso(curso: CursoInterface) {
      this.cursoDoc = this.afs.doc(`cursos_fav/${curso.id}`);
      Swal.fire(
        'Completado',
        'El curso se ha eliminado exitosamente',
        'success'
      )
      this.cursoDoc.delete();
    }

    updateCurso(curso: CursoInterface) {
     // console.log('Update Course');
     Swal.fire(
      'Completado',
      'El curso se ha actualizado exitosamente',
      'success'
    )
     this.cursoDoc = this.afs.doc(`cursos_fav/${curso.id}`);
     this.cursoDoc.update(curso);
    }
}


