import { Component } from '@angular/core';
import { Color, FENChar } from '../../chess-logical/models';
import { ChessBoard } from '../../chess-logical/chess-board';

@Component({
  selector: 'app-chess-board',
  imports: [],
  templateUrl: './chess-board.html',
  styleUrl: './chess-board.css'
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color {
      return this.chessBoard.PlayerColor;
  }
}
