import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  mates!:FormGroup
  resultado!:number
    r1!:number
      r2!:number
        r3!:number



  constructor() { }
  ngOnInit():void{
    this.mates = new FormGroup({
    x1: new FormControl(''),
    y1: new FormControl(''),
    x2: new FormControl(''),
    y2: new FormControl(''),
  })
}
distancia():void{
  const x1 = this.mates.get('x1')?.value
  const y1 = this.mates.get('y1')?.value
  const x2 = this.mates.get('x2')?.value
  const y2 = this.mates.get('y2')?.value
  this.r1 =(x2 - x1)^2 
  this.r2 =(y1 - y2)^2
  this.r3=this.r1+this.r2
  this.resultado=(this.r3)^0.5

 

}


}
