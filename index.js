class Polygon{
    constructor(array) {
        this.sides = array; 
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let total = 0;
        for(let i = 0; i <this.sides.length; i++){
            total += this.sides[i];
        }
        return total
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]){
            return true;
        } else {
            return false;
        }          
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.sides[0] === this.sides[1]){
            return true;
        } else {
            return false;
        }
    }

    get area(){
        return this.sides[0] * this.sides[1];
    }
}