export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
  }

  getCell() {
    return Math.floor(
      Math.random() * (this.gamePlay.boardSize * this.gamePlay.boardSize)
    );
  }

  init() {
    this.gamePlay.drawUi();

    const newsInterval = setInterval(() => {
      let newCell = this.getCell();
      while (newCell === this.gamePlay.activeCell) {
        newCell = this.getCell();
      }
      this.gamePlay.redrawPositions(newCell);
      this.gamePlay.activeCell = newCell;
    }, 1000);
  }
}
