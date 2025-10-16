import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { zodiacal } from './signo'
import { CommonModule } from '@angular/common'
 
@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css',
  standalone: true
})
export class ZodiacoComponent implements OnInit {
 
  signo!: FormGroup
  nombre: string = ''
  apellido1: string = ''
  apellido2: string = ''
  Edad!: number
  nomCom: string = ''
  zodiaco: string = ''
  imagen: string = ''
  extractorDD5000 = new zodiacal()
 
  constructor() { }
 
  ngOnInit(): void {
    this.signo = new FormGroup({
      nombre: new FormControl(''),
      apellido1: new FormControl(''),
      apellido2: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
    })
  }
 
  calcular(): void {
 
   
 
    this.extractorDD5000.dia = this.signo.value.dia
    this.extractorDD5000.mes = this.signo.value.mes
    this.extractorDD5000.anio = this.signo.value.anio
 
 
    this.extractorDD5000.ap1 = this.signo.value.apellido1
    this.extractorDD5000.ap2 = this.signo.value.apellido2
    this.extractorDD5000.nombreUsuario = this.signo.value.nombre
 
    this.extractorDD5000.respuesta()
 
    this.zodiaco = this.extractorDD5000.zodiaco
    this.imagen = this.extractorDD5000.imagenUrl
    this.Edad = this.extractorDD5000.edad
    this.nomCom = this.extractorDD5000.nombreCompleto
 
}
}