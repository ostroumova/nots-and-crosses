# Task and Comments

## Deliverable 2: Place First Piece

As a user, I can place my first piece on the game board so I can see player 1's move. I should be able to:

1. See that it is Player 1's turn and some indication of the token (nought or cross) that I'm using.
2. Place a piece on any of the board squares.

### Todd Comments

So, I will give you some comments on this, but to progress with what we're actually doing, you should really just do the deliverable and we'll continue from there. You can use bits of what you've done here to write the deliverable, but you should only do the deliverable - no more and no less.

1. When you run the game, it doesn't all fit on the screen. You have to scroll up and down to see it. There shouldn't really be any scroll bars.
2. In your App.tsx, you have wrapped your header, main and footer in a div. You can avoid this by wrapping it in a fragment instead `<> ... </>`. Using a fragment should remove the div from the HTML and intuitively, I feel header, main and footer shouldn't be wrapped in a div, but appear straight after the body tag. If you need the div for styling it's no big deal though. I might even be wrong about this - I don't know. I just think it makes more structural sense to have:

```
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
```

than:

```
<body>
  <div>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  </div>
</body>
```

3. In your TurnInfoDisplay, your div class is 'game-info'. It should probably be named after the component (if we are following Jon's bem style.)
4. Your turn info isn't actually doing anything. It doesn't tell you whose turn it currently is; it just lists the players.
5. In your turn indicator tests, you are only testing for player 1. Also, you are using GetByText when you could and should be using getByRole. Plus, your constant should probably have a more appropriate name. In this code, it is not a generic player indicator, but a player 1 indicator.
6. Where you are typing your setWinner in Board, an easier way is to just type it as () => void. Saves you doing the whole React.Dispatch<React.SetStateAction<string>>; nonsense. As you need the winner argument, you can use: (winner: string) => string.
7. In your Board file, Box is not a box. I'd be more inclined to call it BoardState and make the array a part of the type:
   `type BoardState = (Player | null)[]`
8. In Board, winResult is never used. You can get rid of that by going:
   `const [, setWinResult] = useState<number[][]>([]);`
9. Your useEffect lacks a dependency in the dependency array: setWinner
10. Where you build your board, when you map over your box items, you call it boardNumber. It is not a number. It's a string representing the piece (a nought or a cross or null).
11. In Board, in your click handler, you could avoid having to subtract 1 from the target.value if you weren't adding 1 when you assign the button its value down in the jsx. Or if you don't subtract 1 from the target value, you could save yourself adding 1 when you put it in your noughtsArr or crossesArr. You need to decide whether you need the button value to be a 0-index value or a positive integer and pick one. I'd go with keeping it as an index.
12. Maybe change variables names noughtsArr and crossesArr to noughtsMoves and crossesMoves. Up to you.
13. I'd try to simplify that click handler with some helper functions. It's not very readable as it is. I'd write it something like:

```
const handleClick = (event) => {
  const index = Number(event.currentTarget.value);
  const hasClickedEmptySpace = board[index] === null;
  if (hasClickedEmptySpace){
    putPlayerOnBoard(setBoard, index, currentPlayer);
    addMoveToPlayerMoves(currentPlayer, index, setCrossesArr, setNoughtsArr);
      toggleCurrentPlayer(setCurrentPlayer, currentPlayer);
  }
}
```

14. In the defineWinner winner helper, I'm thinking setWinResult should be a boolean, not number[][]. You can do that where you use the isSubset helper. So, rather than using filter, use winArrays.once() instead.
15. In the defineWinner function, you probably shouldn't check for crosses if noughts has already won.

```
export default function defineWinner(...){
  const hasNoughtsWon = winArrays.once((winArray) =>
    isSubset(noughtsArr, winArray)
  );
  if (noughtsHasWon){
    thisWinner = "Noughts";
    setHasWinner(hasNoughtsWon);
  }
  else {
    // do same again for crosses.
    // You should be able to refactor and simplify this even more once you've done this.
  }
  ...
}
```

16. Todd suggestion: My screen reader calls all 9 of your buttons 'button'. It could be worth giving them an aria-label so they are called something like `"tile ${rowIdx}, ${squareIdx}"` etc. Better would be "top left tile", "top middle tile" etc., but I think even I've been too lazy to do that (so far).

17. You have no tests for your gameplay. There should be tests for placing the first piece, then one for the second piece being placed, then one for each player winning the game and one for a draw. You should also have tests that check for every possible winning state (maybe as tests on your defineWinner function). You should also test that trying to place a piece on an occupied square doesn't overwrite it and doesn't advance the turn to the next player.
18. In your package.json name, you've separated the words of your title with underscores. As far as I'm aware, it should be written like you'd write a normal name (i.e. with spaces). I don't think this matters though.

I think that's all for now.
