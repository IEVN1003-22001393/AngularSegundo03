export class distancia{
  x1:number = 0
  x2:number = 0
  y1:number = 0
  y2:number = 0
  r1:number = 0
  r2:number = 0
  r3:number = 0
  resultado:number = 0
 
opera():void{
   
  this.r1 =(this.x2 - this.x1)**2
  this.r2 =(this.y1 - this.y2)**2
  this.r3=this.r1 + this.r2
  this.resultado=(this.r3)**0.5
}
   
}