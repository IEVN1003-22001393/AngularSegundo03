import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {distancia} from './distancia';
 
 
@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  mates!:FormGroup
  resultado2!:number
  puntos = new distancia();
 
  constructor() { }
  ngOnInit():void{
    this.mates = new FormGroup({
    x1: new FormControl(''),
    y1: new FormControl(''),
    x2: new FormControl(''),
    y2: new FormControl(''),
  })
}
 
res():void{

  this.puntos.x1 = this.mates.value.x1
  this.puntos.x2 = this.mates.value.x2
  this.puntos.y1 = this.mates.value.y1
  this.puntos.y2 = this.mates.value.y2
 

  this.puntos.opera()

  this.resultado2 = this.puntos.resultado
 
 
}
}
 