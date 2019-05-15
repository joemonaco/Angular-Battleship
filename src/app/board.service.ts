import { Injectable } from '@angular/core';
import { Board } from '../app/board';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  boards: Board[] = [];

  constructor() { }

  createBoard(size: number = 5) : BoardService {
    let tiles = [];

    for(let i=0; i < size; i++) {
      tiles[i] = [];
      for(let j=0; j< size; j++) {
        tiles[i][j] = { used: false, value: 0, status: '' };
      }
    }

    let board = new Board({
      // player: new Player({ id: this.playerId++ }),
      tiles: tiles
    });

    this.boards.push(board);
    return this;
  }

  getBoards() : Board[] {
    return this.boards;
  }
}
