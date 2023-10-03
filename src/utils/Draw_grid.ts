import { gridClass } from "../class/grid.class"

const Draw = (ctx:any, GameOfLifeGrid:gridClass) => {
    for (let i = 0; i < GameOfLifeGrid.matrix.length; i++) {
      for (let j = 0; j < GameOfLifeGrid.matrix[0].length; j++) {
        ctx.fillStyle = (GameOfLifeGrid.matrix[i][j].alive? 'white' : 'black')
        ctx.fillRect(GameOfLifeGrid.matrix[i][j].possition_x,GameOfLifeGrid.matrix[i][j].possition_y,GameOfLifeGrid.matrix[i][j].height,GameOfLifeGrid.matrix[i][j].width)
      }      
    }    
}

export default Draw