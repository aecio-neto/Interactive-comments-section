# Overview - Interactive comments section solution

This project is an interactive comment section where users can post comments, reply to others, and upvote or downvote comments. It's built with React and designed to be integrated into websites that require a dynamic discussion platform.

It`s also a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). 

## Features
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- Real-time update comments without page refresh (soon)

### Screenshot
![Versão Mobile](src/images/printscreem/mobile%20version.png)
![Versão Desktop](src/images/printscreem/web%20version.png)

### Links

<a href="https://main--interactive-comment-section-87.netlify.app/" target="_blank">Ver ao vivo</a>

## My Process

This project was a hands-on journey to understand the inner workings of state management and props in React. The process was iterative and incremental, with each step building upon the last.

I kicked off by delineating the necessary components, followed by crafting a static version of the application. Then, I dove into the creation of components, assigning responsibilities and interactions. The focus was to make it work, get a practical understanding, and learn along the way. 

### Built with

- [React](https://reactjs.org/) - JS library
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow

### What I learned

In this project, I reinforced my understanding of React state management and component-based architecture. I also learned how to handle nested comments and implement a voting system.


### Code snippets

```js
const findAndAddReply = (comments) => {
  return comments.map(comment => {
    if (comment.id === parentCommentId) {
      return { ...comment, replies: [...comment.replies, contentObj] };
    }
    if (comment.replies?.length > 0) {
      return { ...comment, replies: findAndAddReply(comment.replies) };
    }
    return comment;
  });
};
```

<!-- ### Continued development -->

### Installation
To set up the project locally, follow these steps:

1) Clone the repository <br>
`git clone https://github.com/aecio-neto/Interactive-comments-section`

2) Install NPM packages <br>
`npm install`

3) Start the development server <br>
`npm start`

After installation, the app will be running on http://localhost:3000. Open this URL in your browser to start using the interactive comment section.


### Useful resources

ReactJS Documentation
- [ReactJS Documentation](https://react.dev/learn) 

## Author

- [Linkedin](https://linkedin.com/in/aecio-neto)
- [Github](https://github.com/aecio-neto)

