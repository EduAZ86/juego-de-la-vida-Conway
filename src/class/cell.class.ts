
export class CellClass {
    possition_x:number;
    possition_y:number;
    height:number;
    width:number;
    alive:boolean

    constructor(possition_x:number, possition_y:number, alive:boolean) {
        this.possition_x = possition_x
        this.possition_y = possition_y
        this.alive = alive
        this.height = 5
        this.width = 5
    }
    public setAlive (alive:boolean) {
        this.alive = alive
    }
    public clone() {
        let cloneCell = new CellClass(this.possition_x, this.possition_y, this.alive);
        return cloneCell;
    }
}