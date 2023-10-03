import { gridClass } from "../class/grid.class";
import { counter_Neighbor_alive } from "./counter_neighbor";
export const updateGeneration = (GameOfLifeGrid:gridClass) => {
    let copyOfGrid = GameOfLifeGrid.matrix.map(arr => arr.map(cell => cell.clone()));
    for (let i = 1; i < GameOfLifeGrid.matrix.length - 1 ; i++) {
      for (let j = 1; j < GameOfLifeGrid.matrix[0].length - 1; j++) {     
        if (GameOfLifeGrid.matrix[i][j].alive) {
          if (counter_Neighbor_alive(GameOfLifeGrid,i,j) < 2 || counter_Neighbor_alive(GameOfLifeGrid,i,j) > 3) {
            copyOfGrid[i][j].setAlive(false);
          }
        } else {
          if (counter_Neighbor_alive(GameOfLifeGrid,i,j) === 3) {
            copyOfGrid[i][j].setAlive(true);
          }
        }       
      }
    }
    GameOfLifeGrid.matrix = copyOfGrid;
  }