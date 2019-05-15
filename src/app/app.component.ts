import { Component } from '@angular/core';
import { BoardService } from '../app/board.service';
import { Board } from '../app/board';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BoardService]
})



export class AppComponent {

  title = 'BattleshipV1';
  BOARD_SIZE: number = 6;
  boards: Board[];

  ships: boolean[];

  cellStyle: string = 'cell';

  constructor(private boardService: BoardService, private dragulaService: DragulaService){
    this.createBoards();
    this.boards = this.boardService.getBoards();
    this.ships = [true, true, false, false, false, true, false];
    // dragulaService.createGroup("TEST", {
      
    // });
  }


  createBoards() : AppComponent {
    this.boardService.createBoard(this.BOARD_SIZE);
    return this;
  }

  selectCell(row: number, col:number) {
    // this.cellStyle = 'cell-clicked';
    this.boards[0].tiles[row][col].used = !this.boards[0].tiles[row][col].used;
    console.log('CLCIEKD');
  }

  onDrop(event: CdkDragDrop<boolean[]>) {
    let b = event.previousContainer.data;
    console.log(b)
    // console.log(event.previousContainer.data);
  }
}
