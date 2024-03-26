# Todd Comments

## Deliverable 1

As a user, I can

1. see a header for the game so I know what I am playing.
2. see a footer with a copyright sign, the name of the game and the creation date to current date so I know a bit about the game.
3. see a 9 square grid so I'll be able to play the game.

### todd's comments:

1. So, it looks like you do have lint. I think Vite installs it at setup (or maybe you've installed everything I instelled - I'm not sure.)

To run it, you can type 'npm run lint'. This command is set up in the scripts part of your package.json. Anything you can npm run will be in your 'scripts' - the key is the bit you type after run and the value is what gets run by npm in the command line.

So in your scripts, the line:
"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
means you can type:
npm run lint
And this will be exactly the same as you typing the following into your command line
eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0

2. You have a typo in your App.tsx - hearderSubtitle instead of header.

3. "You probably shouldn't use an <h> tag for your footer text." - in your footer, you are using an <h4> tag for your copyrights. There probably shouldn't be any headings in the footer. Maybe put both parts in a <p> tag or a <span> tags.

4. The fact you are automatically generating all 9 tiles on your board now I think is better. However, I'd warn you that I think the way you have it currently, you will get the following array:
   [
   [button, button, button],
   [button, button, button],
   [button, button, button]
   ]
   This might be what you want. Maybe it's even better than the way I did it in that you have a 2 point grid referencing system this way. I'm just writing this to make sure you're aware it's a nested array and not flat.

5. "also, for your footer text, rather than using getByText, you might be able to use toHaveTextContent("whatever you want") on the expect of your footerElement". So rather than that getByText, just do the following on the footerElement you already got by role:
   expect(footerElement).toHaveTextContent('© Noughts And Crosses');

6. Another way of doing this:
   expect(buttons.length).toBe(9);
   is to do this:
   expect(buttons).toHaveLength(9);

7. Todd suggestion: My screen reader calls all 9 of your buttons 'button'. It could be worth giving them an aria-label so they are called something like "tile 0, 0", "tile 0, 1" etc. Better would be "top left tile", "top middle tile" etc., but I think even I've been too lazy to do that (so far).

8. On my screen, your buttons are still not square. They're rectangles. You might want them like this though.

As there isn't much there, here is the second deliverable:

## Deliverable 2: Place First Piece

As a user, I can place my first piece on the game board so I can see player 1's move. I should be able to:

1. See that it is Player 1's turn and some indication of the token (nought or cross) that I'm using.
2. Place a piece on any of the board squares.

At this point, we do not need to change the players turn and it's fine if you can fill up the board with the player's piece.
