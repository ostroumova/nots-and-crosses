# Todd Comments

## Deliverable 2: Place First Piece

As a user, I can place my first piece on the game board so I can see player 1's move. I should be able to:

1. See that it is Player 1's turn and some indication of the token (nought or cross) that I'm using.
2. Place a piece on any of the board squares.

At this point, we do not need to change the players turn and it's fine if you can fill up the board with the player's piece.

### todd's comments:

1. The typo in your App.tsx is still there - hearderSubtitle instead of header.
   Line 8: const heardeSubtitle = "Use your brain";
   Should be: const headerSubtitle = "Use your brain";

2. In App.ts, 'copyrights' should probably be singular 'copyright'.

3. Todd note: I told you in the last comments that you shouldn't have header tags in the footer. Though I don't like it, I have since seen it on the GitHub site, so it does look like people do it. So I was wrong about that, but I still prefer the way you have it now.

4. Suggestion: You could separate your turn info component from your board. So in your App.ts, you could have the components:

   ```
   <AppHeader />
   <AppMain />
   <AppFooter />
   ```

   Then in your AppMain component, have:

   ```
   <main>
      <TurnInfoDisplay />
      <Board />
   </main>
   ```

The benefit here is that you simplify your board file so that it only contains 'Board' details. It also prepares you for reuse, that is, you could use `<Board>` in other projects that don't need a TurnInfoDisplay

5. The way you are generating that board is quite interesting. Though I quite like it, I think it would be better to relate it more directly to your board state. You already have a state with 9 slots and this will eventually contain your square contents. To keep creating arrays in the board JSX and then searching the state for the contents using indexes therefore feels a bit wasteful. I have however been staring at it for over an hour now trying to think of a way to do it that doesn't depart too much from your thinking, but can't. You could maybe do it with BoardRow components:

```
<div className={...}>
   <BoardRow contents={board.slice(0, 3)}>
   <BoardRow contents={board.slice(3, 6)}>
   <BoardRow contents={board.slice(6, 9)}>
</div>
```

Another thing you might want to consider is board reuse. Right now, your board is fixed at 9 squares, so it will only be useful for games with boards of 9 squares. You could instead have a board where you pass it a size so it can be as large or small as you like. `<Board size={GameConfig.BoardSize}>`. This would ruin my suggestion of BoardRows above though. You'd need a completely different way of doing it.

6. On your click handler in the button props, I don't think you need that anonymous function wrapper. If you set the value prop of button to index, then you should be able to get a click event in your handler and access the number with `e.target.value`.

7. Todd suggestion: My screen reader calls all 9 of your buttons 'button'. It could be worth giving them an aria-label so they are called something like `"tile ${rowIdx}, ${squareIdx}"` etc. Better would be "top left tile", "top middle tile" etc., but I think even I've been too lazy to do that (so far).

8. You have no test for your turn info display
9. In your App tests, in the 'render game component' test, your test is async and you are using findAllByRole instead of getAllByRole. Is there any reason for this or is it Copilot's doing?
10. In your package.json name, you've separated the words of your title with underscores. As far as I'm aware, it should be written like you'd write a normal name (i.e. with spaces). I don't think this matters though.
