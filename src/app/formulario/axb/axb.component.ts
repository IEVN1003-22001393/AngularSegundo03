import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { operacion } from './axb';

@Component({
  selector: 'app-axb',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './axb.component.html',
})
export class AxbComponent {
  valores!:FormGroup
  resultado:number = 0
  objExt = new operacion();

    constructor() { }
  ngOnInit():void{
    this.valores = new FormGroup({
    v1: new FormControl(''),
    v2: new FormControl('')
  })
}


botonazo(){
  this.objExt.val1=this.valores.value.v1
  this.objExt.val2=this.valores.value.v2

  this.objExt.fin()

  this.resultado = this.objExt.res
}
}
