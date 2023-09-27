export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
  }

  getCell() {
    while (true) {
      let randomCell = Math.floor(Math.random() * (this.gamePlay.boardSize ** 2));
      if (!(this.gamePlay.activeCell === randomCell)) {
        return randomCell;
      }
    }
  }

  init() {
    this.gamePlay.drawUi();

    const newsInterval = setInterval(() => {
      const newCell = this.getCell();
      this.gamePlay.redrawPositions(newCell);
      this.gamePlay.activeCell = newCell;
    }, 1000);

  }

}