# Reddit Clone

Web app that allows the user to posts and view the list of all posts with title, content, timestamp, votes, and author's name/alias. Users can also click buttons below each post to upvote or downvote the post.

#### By Nicole Freed (see bottom for final weeks' planning)

## Specs / User Stories
* Users can add new posts to list of all posts.
* App displays title and content for each post, plus author's name, timestamp, and number of votes.
* Users can also click buttons below each post to upvote or downvote the post.
* App does all this without reloading/refreshing page.

## Planning / Execution

The purpose of this project was to integrate Redux with React. Since I didn't have any clear guidelines on how to do this from the outset of a project, and I knew I would need data in order to properly display all the component parts of the app, my process was a mixture of building out the React app structure and mixing in the Redux. I referenced several of my own prior projects——one without Redux integration (Garden Buddy) and one with Redux integrated post-React (React Help Queue) for proper syntax and placement of the various Redux commands and components within the overall component structure.

I ended up having to go back and read portions of the curriculum that I had missed as I was executing, especially the _Retrieving Items from State_ and _Dispatching the Redux Action_ sections at https://www.learnhowtoprogram.com/react/react-and-redux/advanced-routing-with-react-router-removing-items-from-state, which made me realize I was writing my upvote and downvote methods all wrong (I was writing them pre-Redux and didn't realize that I needed to dispatch the actions directly in the methods and have the actions and reducers handle the functional code).

Since it was allowed this week, I also ended up consulting another student's project and collaborating with her on troubleshooting when I couldn't get the buttons to work (which we finally did; yay!). I feel that my understanding of Redux has gone up a couple of notches, but it's still a rather complicated mess in my head, partly as a result of not having the time that others did to pull things together.

## Prerequisites

  You will need the following platforms, apps, and languages properly installed on your computer.

  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)

## Installation (in Terminal)

  * `git clone https://github.com/gitasong/react-garden-buddy`
  * `cd react-garden-buddy`
  * `npm install`
  * `npm start` (to start server)
  * Migrate to `localhost:8080` in your browser

## Known Bugs

None known.

## Support and Contact details

You can contact me with questions or inquiries at gitasong@github.io.

## Technologies Used

  * JavaScript 5
  * JSX
  * Node.js 8.2.1
  * npm (Node package manager) 5.3.0
  * React/React DOM  15.5.4
  * Redux 3.7.2
  * React-Redux 5.0.6
  * React-Bootstrap 0.31.3
  * Webpack 2.6.0
  * webpack-dev-server 2.5.0
  * Babel 6.24.1
  * ESLint 4.6.1
  * React Hot Loader 3.0.0-beta.7 (live reloading/hot module replacement)
  * Jest 20.0.4 (testing suite)
  * Moment.js 2.18.1 (time formatting module)
  * UUID 3.1.0 (universal unique identifier module)

  ### License

  This project is licensed under the MIT license.

  Copyright (c) 2017 Nicole Freed. All rights reserved.
