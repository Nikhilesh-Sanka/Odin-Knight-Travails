class Point {
  constructor(point) {
    this.point = point;
    this.possibleMoves = possibleMoves(point);
  }
}
function possibleMoves(point) {
  let x = point[0];
  let y = point[1];
  let possibleMoves = [
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 1, y - 2],
    [x + 2, y + 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 2, y - 1],
  ];
  possibleMoves = possibleMoves.filter((point) => {
    return point.every((coord) => coord >= 1 && coord <= 64);
  });
  return possibleMoves;
}
function knightMoves(startPoint, endPoint) {
  if (
    startPoint[0] > 64 ||
    startPoint[0] < 1 ||
    startPoint[1] > 64 ||
    startPoint[1] < 1 ||
    endPoint[0] > 64 ||
    endPoint[0] < 1 ||
    endPoint[1] > 64 ||
    endPoint[1] < 1
  ) {
    console.log("enter valid points");
    return;
  }
  let queue = [[new Point(startPoint)]];
  function recursive() {
    if (
      queue[0][0].possibleMoves.some(
        (move) => move[0] === endPoint[0] && move[1] === endPoint[1]
      )
    ) {
      return queue[0];
    }
    queue[0][0].possibleMoves.forEach((move) => {
      let newQueue = [...queue[0]];
      newQueue.unshift(new Point(move));
      queue.push(newQueue);
    });
    queue.shift();
    return recursive();
  }
  let shortestPath = recursive();
  shortestPath = shortestPath.map((move) => move.point);
  shortestPath.reverse();
  shortestPath.push(endPoint);
  console.log(
    `You made it in ${shortestPath.length - 1} Moves ,here is Your Path`
  );
  shortestPath.forEach((move) => console.log(move));
}
