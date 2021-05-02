export type PortfolioItemType = {
  slug: string;
  title: string;
  description: string;
  technologies_used: string[];
  image: string;
  project_url: string;
};

export const portfolio: PortfolioItemType[] = [
  {
    slug: "watch-tv-user",
    title: "Watch TV - User",
    description: `The customer facing point of Watch TV app built using react. User browse through a catalog of movies and go to the movie page to see more details about the movie.
    Authenticated Users can add movies to watchlist and preview the movie with also access to a link to watch the movie. While the Movie Catalog come from the Express Backend built for the app, detailed data such as the ratings, actors, and trailerUrl and link to watch the movie are pulled from an external Movie API. 
    I used React Profiler Devtools to determine which persistent components were rerendered and applied memoization to optimize performance of the app.
    I used framer motion to improve the user experience by adding transitions and animations`,
    technologies_used: [
      "Typescript",
      "React",
      "Redux",
      "SASS",
      "framer-motion",
    ],
    image: "watch-tv-user.jpg",
    project_url: "https://watch-tv.jesuseyitan.com",
  },
  {
    slug: "watch-tv-admin",
    title: "Watch TV - Dashboard",
    description: `The Admin side and Dashboard for the Watch TV App. The backend was built with Express and Mongo DB as Database, Admin Users Log in with Email and Password. After Successful Authenticated, can Add movies to the Database and have access to the dashboard. 
    I used AWS S3 for storing images. To improve performance and load times I proccessed the images with sharp on upload to create an optimal sized web friendly version of the images for the app.`,
    technologies_used: [
      "Typescript",
      "React",
      "Redux",
      "AWS",
      "Express",
      "Mongo DB",
      "styled-components",
    ],
    image: "watch-tv-dashboard.jpg",
    project_url: "https://admin.watch-tv.jesuseyitan.com",
  },
  {
    slug: "memories-app",
    title: "Memories App",
    description: `A social media MERN application that allows users to post interesting happenings in their life. Users can login with their google accounts or sign up using Email, Authenticated users can like posts from other people and also create a new post. 
    Users can edit or delete previously created posts as long as they are authenticated with the account used to create the post. I used Redux to manage shared state data among components and local Storage for storing user tokens`,
    technologies_used: [
      "React",
      "Redux",
      "Mongo DB",
      "Express",
      "jwt",
      "Local Storage",
      "Google OAuth",
    ],
    image: "memories-mern.jpg",
    project_url: "https://memories.jesuseyitan.com",
  },
  {
    slug: "netflix-clone",
    title: "Netflix Clone",
    description: `I took an attempt at recreating an existing design by building a clone of the Netflix Home page using react. 
    The movies categories, lists and banner details comnsumes a third party API (TMDB). The Trailer url is fetched using movie-trailer and played after a movie is clicked.`,
    technologies_used: ["React", "firebase", "TMDB API"],
    image: "netflix-clone.jpg",
    project_url: "https://netflix-clone.jesuseyitan.com",
  },
  {
    slug: "todo-planner",
    title: "Todo List App",
    description: `A Todo application with Google auth for signin. It allows users to create Todo Items which are saved in firestore and allows users to perform CRUD operatios. 
    I used Context API to pass shared data to components that need them and avoid prop drilling. Material UI is used for Icons and other Interactive Components. I also implemented additional features such as searching, filtering and sorting of Items in the todo List. `,
    technologies_used: [
      "React",
      "Context API",
      "Firebase",
      "Google OAuth",
      "Material UI",
    ],
    image: "todo_app.jpg",
    project_url: "https://todo-app.jesuseyitan.com",
  },
  {
    slug: "spotify-clone",
    title: "Spotify Clone",
    description: `Clone of the Spotify Home Page. I used spotify API for auth. After users sign in with their spotify account, the playlists associated with the account is pulled and the data consumed is used to populate the playlists section shown in the sidebar and in the main Body.
    My main objective was to create a basic interface similar to Spotify web player with data fetched from the Spotify web API. I customized Material UI pre styled components to build the interface faster`,
    technologies_used: ["React", "Material UI", "Spotify API"],
    image: "spotify-clone.jpg",
    project_url: "https://spotify-clone.jesuseyitan.com",
  },
  {
    slug: "twitter-clone",
    title: "Twitter - Clone",
    description: `Clone of twitter built with react and firebase's firestore. I used Material UI for interactive components. New tweets are stored in firestore. 
    I used this project to get familiar with the react framework and also working with Material UI`,
    technologies_used: ["React", "Firebase", "Material UI"],
    image: "twitter-clone.jpg",
    project_url: "https://twitter-clone.jesuseyitan.com",
  },
];
