![image](https://user-images.githubusercontent.com/87501964/153520639-8cd7d801-5ddd-4fc2-b5de-446d37a71ebf.png)

# [Recipe Finder App](https://duncan-recipe-app.netlify.app/)

Recipe Finder is a React application that allows users to search the [Edamam database](https://www.edamam.com/) for recipes. This project is currently hosted on [Netlify](https://duncan-recipe-app.netlify.app/).

## Features
* Displays up to 20 recipes with each search query
* Allows users to route to different recipe sites
* Retrieves data from the Edamam API via Axios
* Is mobile and desktop friendly


## Installation

1. Clone this repository to your computer.
```bash
git clone https://github.com/DuncanBrewster/recipe-app.git 
```

2. On the master branch, install the NPM dependencies.
```bash
npm install
```

3. This project requires a Edamam API key. Create an account at [edamam.com](https://www.edamam.com/) to get your key.

4. Create a .env file in your root directory.
```bash
touch .env
```

5. Inside your .env file, create a variable called REACT_APP_KEY and set it to your unique API key.
```bash
REACT_APP_KEY = yourUniqueApiKey
```

6. Open the project on a development server.
```bash
npm start
```

7. View the project in your internet browser at [http://localhost:3000](http://localhost:3000).


## Tools

This project:

* was built with **React**.
* uses **React Router** for client side routing.
* uses **Axios** to fetch data from the Edamam API.
* is styled with **Styled Components**.
* [is hosted here on **Netlify**](https://duncan-recipe-app.netlify.app/).
