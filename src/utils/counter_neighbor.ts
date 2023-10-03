import { gridClass } from "../class/grid.class"
export const counter_Neighbor_alive = (GameOfLifeGrid:gridClass, pos_x:number, pos_y:number) => {
    const arrayNeighbor = [
      GameOfLifeGrid.matrix[pos_x-1][pos_y-1],
      GameOfLifeGrid.matrix[pos_x][pos_y-1],
      GameOfLifeGrid.matrix[pos_x+1][pos_y-1],
      GameOfLifeGrid.matrix[pos_x-1][pos_y],
      GameOfLifeGrid.matrix[pos_x+1][pos_y],
      GameOfLifeGrid.matrix[pos_x-1][pos_y+1],
      GameOfLifeGrid.matrix[pos_x][pos_y+1],
      GameOfLifeGrid.matrix[pos_x+1][pos_y+1],
    ]
    let counter = 0
    for (let i = 0; i < arrayNeighbor.length; i++) {
      if (arrayNeighbor[i].alive) {
        counter++
      }     
    }    
    return counter
  }