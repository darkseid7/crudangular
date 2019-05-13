import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { CursoInterface } from '../../model/cursoInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';
  import { from } from 'rxjs';
@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {
  curso: CursoInterface = {
    nombre: '',
    formador: '',
    precio: '',
    idioma: '',
    tecnologia: '',
    fecha: '',
    descripcion: '',
  };


  constructor(private cursoService: CursoService) { }

  ngOnInit() {
  }

  onGuardarCurso(myForm: NgForm) {
    if(myForm.valid == true){
      const fechanow = Date.now();
      this.curso.fecha = fechanow;
      this.cursoService.addCurso(this.curso);
      myForm.resetForm();
    }else{
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }

  }

}
