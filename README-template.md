# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexboxw
- Javascript

### What I learned

This definitely was the most in-depth Javascript project that I've done to date. I'm very pleased that I got it all to work. Calculating the months and days was tricky but it was very satisfying to put it all together. A small thing that I found interesting was that I only needed to convert the data from the user input textbox from a string to a number when using the === operator. The other operators seemed to work just fine without the conversion.

For example :

```js
(Number.parseInt(monthUserInput, 10) === 11 && dayUserInput > 30)
```

The dayUserInput variable is the input from the "Day" textbox, and it is able to recognize if the number is greater than 30 with no problem.


### Continued development

Continue to challenge myself with deeper projects!

## Author

- Frontend Mentor - [@cjcameron13](https://www.frontendmentor.io/profile/cjcameron13)
- GitHub - [@cjcameron13](https://www.twitter.com/yourusername)
