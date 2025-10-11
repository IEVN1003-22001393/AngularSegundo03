export class operacion {
val1:number = 0
val2:number = 0
res:number = 0

fin(){
    
    while (this.val2 > 0){
        this.res += this.val1

        this.val2 -= 1
    }
}
}