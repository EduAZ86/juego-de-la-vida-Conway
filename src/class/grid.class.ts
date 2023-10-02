import { CellClass } from "./cell.class";

export class gridClass {
    width:number;
    height:number;
    matrix: CellClass[][]
    constructor(width:number, height:number){
        this.height = height
        this.width = width
        this.matrix = this.matrixGenerator()
    }
    private matrixGenerator(){
        const matrixCell = []
        for (let i = 0; i < this.width; i += 10) {
            const array_j = []
            for (let j = 0; j < this.height; j += 10) {
              const currentCell = new CellClass(j,i,false)
              array_j.push(currentCell)
            }
            matrixCell.push(array_j)
        }
        return matrixCell
    }
}