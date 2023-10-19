export default {
  draw,
  highlight,
};

// ****************************

var originalBoardEl;
// let tiles = [];
let diagonals = [];
let tileDiagonals = new Map();
let highlighted = [];

function draw(boardEl) {
  // TODO: draw the chessboard, 8 rows (divs)
  // of 8 tiles (divs) each, inserting all DOM
  // elements into `boardEl` div

  //   set up diagonal DS
  for (let i = 0; i < 30; i++) {
    diagonals.push([]);
  }

  for (let i = 0; i < 8; i++) {
    let rowEl = document.createElement("div");
    // let rowTile = [];

    // tiles.push(rowTile);
    for (let j = 0; j < 8; j++) {
      let tileEl = document.createElement("div");
      //   tileEl.dataset.row = i;
      //   tileEl.dataset.col = j;

      rowEl.appendChild(tileEl);
      //   rowTile.push(tileEl);

      let majorDiagonal = diagonals[7 - (i - j)];
      let minorDiagonal = diagonals[15 + (i + j)];

      majorDiagonal.push(tileEl);
      minorDiagonal.push(tileEl);

      tileDiagonals.set(tileEl, [majorDiagonal, minorDiagonal]);
    }

    boardEl.appendChild(rowEl);
  }
}

function highlight(tileEl) {
  //   clear all highlighted tiles
  //   for (let rowTile of tiles) {
  //     for (let tile of rowTile) {
  //       tile.classList.remove("highlighted");
  //     }
  //   }

  //   clear all highlighted tiles
  for (let diagonal of highlighted) {
    for (let tile of diagonal) {
      tile.classList.remove("highlighted");
    }
  }

  if (tileEl) {
    // let rowEl = tileEl.parentNode;
    // let boardEl = rowEl.parentNode;

    highlighted = tileDiagonals.get(tileEl);

    for (let diagonal of highlighted) {
      for (let tile of diagonal) {
        tile.classList.add("highlighted");
      }
    }

    // let tileRowIdx = Number(tileEl.dataset.row);
    // let tileColIdx = Number(tileEl.dataset.col);

    // // top left direction
    // for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j >= 0; i--, j--) {
    //   let tile = tiles[i][j];

    //   tile.classList.add("highlighted");
    // }

    // // top right direction
    // for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j < 8; i--, j++) {
    //   let tile = tiles[i][j];
    //   i;
    //   tile.classList.add("highlighted");
    // }

    // //   bottom left direction
    // for (let i = tileRowIdx, j = tileColIdx; i < 8 && j >= 0; i++, j--) {
    //   let tile = tiles[i][j];

    //   tile.classList.add("highlighted");
    // }

    // //   bottom right direction
    // for (let i = tileRowIdx, j = tileColIdx; i < 8 && j < 8; i++, j++) {
    //   let tile = tiles[i][j];

    //   tile.classList.add("highlighted");
    // }
  }
}

function findTile(rowIdx, colIdx) {
  //   return document.querySelector(
  //     `#board > div:nth-child(${rowIdx + 1}) > div:nth-child(${colIdx + 1})`
  //   );

  //   for (let tile of tiles) {
  //     if (tile.dataset.row == rowIdx && tile.dataset.col == colIdx) {
  //       return tile;
  //     }
  //   }

  return tiles[rowIdx][colIdx];
}
