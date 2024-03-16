# Todd Comments

## Deliverable 1

As a user, I can

1. see a header for the game so I know what I am playing.
2. see a footer with a copyright sign, the name of the game and the creation date to current date so I know a bit about the game.
3. see a 9 square grid so I'll be able to play the game.

### todd's comments:

- In App.tsx you either need to pass your props to your header or make them optional in the props type.
- Todd suggests - you don't set the header props with Noughts and Crosses defaults, rather just pass the props when you create the header in App.tsx. The idea here is that the Header can be used in future applications, so you might use it in Galina's Portfolio or in some new shopping site or wherever. In those contexts, it would be weird to have the title and subtitle defaulting to Noughts and Crosses. The idea is that you can just pull out the component and use it anywhere.
- You probably shouldn't use an <h> tag for your footer text.
- suggestion: you could make the footer reusable by passing the title and date in through the props just like you've done with the header.
- I had an argument with Jon about functions that return jsx components and I think he'd probably prefer we didn't return jsx from functions. You could do your rows like this instead:
<div className="board__row">{Array(3).map((item) => <button key={i} className="board__square"></button>)}</div>
I'm still not sold on this myself and I need to look into it more, but it might be the way to go for now.
- in your footer test, you don't need to pass empty string as name. You can just not bother putting in the second argument, e.g. const footerElement =
  const footerElement = screen.getByRole("contentinfo");
- also, for your footer text, rather than using getByText, you might be able to use toHaveTextContent("whatever you want") on the expect of your footerElement
- I still don't think your squares are square on my screen. I'm wondering if this is because your board has no height? I'm thinking the width stretches to the max of 300px on my screen, but nothing tells the board what height it should be. You might want it like this though - I know nothing about css.

- No footer yet
