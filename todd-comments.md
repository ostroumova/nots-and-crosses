# Todd Comments

## Deliverable 1
As a user, I can
1. see a header for the game so I know what I am playing.
2. see a footer with a copyright sign, the name of the game and the creation date to current date so I know a bit about the game.
3. see a 9 square grid so I'll be able to play the game.

### todd's comments:
* No footer yet
* The grid tiles are not square (if you don't want them square, that's fine).
* Wonder if you can make it so a browser automatically opens when you do npm run dev (not part of the deliverable, but could be fun).
* your app needs a meaningful title in the index.html <head>
* there are some unexpected dependencies in your package.json file, e.g. i and npm. I also don't have @testing-library/dom, but I'm less concerned about this one.
* you still have a debug function in your App test and your App test doesn't test anything.
* You could write tests for your header to make sure both the header and the tagline are displayed.
* you could also make your header a common component that takes a title and a tagline prop so other future projects can use it.
* you could automate the creation of your board - instead of writing out each individual square manually, you could use a for-loop to place 9 squares. 
* You need to write a test to make sure your board is rendering correctly.
* In your board css, maybe you should add your hover style to focus too. It's more friendly for people who navigate their screen with the keyboard.
