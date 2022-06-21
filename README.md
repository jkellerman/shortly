# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Preview](#preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the site depending on their device's screen size
- [x] Shorten any valid URL
- [x] See a list of their shortened links, even after refreshing the browser
- [x] Copy the shortened link to their clipboard in a single click
- [x] Receive an error message when the `form` is submitted if:
  - [x] The `input` field is empty

Added Features:

- [x] Loading animation
- [x] Option for client to delete URLs

### 📸 Preview

![preview](./preview.jpg)

### 🔗 Links

- Solution URL: [Solution](https://github.com/jkellerman/shortly)
- Live Site URL: [Live](https://shrtly-app.netlify.app)

## My process

I love working with css and whilst I've had fun using plain old css or scss, this was an opportunity to experiment with styled components which I must say seems like a step forward, particularly when building React applications. More times than not I will build applications with a mobile first workflow which felt even more natural when working with styled components. I styled each component completely across all breakpoints with functionality before moving onto the next. You will find the styles in their components file, I felt this made it easier to go back and forth between styles and JSX, which is more cumbersome when separating concern.

All challenges were completed and I added some extra features which I thought were necessary, including adding a spinner on the 'Shorten It' button using pure css. This will show the client that their request is loading in case the API call takes longer than expected or their network speed is slow.

I also added a feature where they can clear their links history, just in case it gets too long.

### 🧰 Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Shrtcode API](https://app.shrtco.de/)
- Mobile-first workflow

### 💡 What I learned

#### Form validation is harder in React 🫠

I had no issue with form functionality and I am comfortable with building a form with multiple inputs when needed, the problems I faced were to do with styling, particularly when displaying an error. I tried the approach of updating styles if input is invalid, using css (see snippet below) and then adding the "required" attribute to the input tag. The problem was that when entering any input the error message would appear before the client has submitted anything, which is annoying for user experience. After prowling docs, tutorials and Stack Overflow, I found the better solution was to create a regular expression to identify if a url had been entered and then **useState** to determine whether there was an error or not. I then created an input component which used props to render the border and placeholder styles based on inputError state.

Snippet:

```css
&:invalid ~ ${ErrorMessage} {
  display: block;
}
```

#### Cleaner mobile navigation 😺

In the past, when creating a modal-like mobile navigation, I ended up creating a separate navigation from desktop and then display mobile navigation when the hambuger is clicked. Whilst this has worked in the past with no issue I found that it is actually pretty easy to do this without creating a separate navigation which is much cleaner. The trick is to create logo first, hamburger second and then the navigation. Much simpler.

#### Axios

First time using Axios, instead of fetch. I found the syntax is easier to manage.

#### Clipboard

This was the first time I needed a button that would copy to clipboard. I came across the react copy-to-clipboard libary which is easy to set up and use.

### Continued development

#### Build user authentication

I have some projects I want to build that allows users to log in to an account, I think this would be a good project to practice building user authentication.

#### CRUD app

This could be updated to a real CRUD app, which would include updating, reordering and deleting individual links.

#### Create more global styles

After going back into the project and making amendments, I realised some extra global styles for things like text color would be handy, similar to custom properties when using css/scss.
