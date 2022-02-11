import Axios from "axios";
import { useState } from "react";
import { RecipeContainer, RecipeTile } from "./components/RecipeTile";
import { Background } from "./components/background";
import { Button } from "./components/button";
import { Body, Container } from "./components/container";
import { Title, AppSearchForm, Input } from "./components/form";




function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const ID = /* process.env.REACT_APP_ID */ "b512b6e5";
  const Key = /* process.env.REACT_APP_KEY */ "47a00943b5464e3281ba5a9d0575fd2d";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${Key}&from=0&to=20`;
  
  async function getRecipes() {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  

  return (
    
      <Body>
        <Background />
        <Container>
          <Title>Recipe Finder</Title>
          <AppSearchForm onSubmit={submit}>
            <Input 
              type="text" 
              placeholder="enter ingredient" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
            />
            <Button type="submit">Search</Button>
          </AppSearchForm>

          <RecipeContainer>
            {recipes.map(recipe => {
              return <RecipeTile recipe={recipe}/>;
            })}
          </RecipeContainer>
        </Container>
        
      </Body>
    
  );
}

export default App;
