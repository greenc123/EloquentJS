// Chessboard

function chessBoard(num) {
  let result = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (j % 2 === 0) {
        result += " ";
      } else {
        result += "#";
      }
    }

    result += "\n";
    if (i % 2 == 0) {
      result += "#";
    }
  }

  return result;
}

console.log(chessBoard(8));
