import React from 'react';
import styled from 'styled-components';


export const RecipeContainer = styled.div`
margin-top: 24px;
display: grid;
grid-template-columns: 250px 250px 250px 250px 250px;
align-items: baseline;
justify-content: space-evenly;

@media screen and (max-width: 1500px) {
  grid-template-columns: 240px 240px 240px 240px;
}
@media screen and (max-width: 1000px) {
  grid-template-columns: 240px 240px 240px;
}
@media screen and (max-width: 740px) {
  grid-template-columns: 50% 50%;
}
`;

const Tile = styled.div`
    cursor: pointer;
`;

const TileName = styled.p`
    max-width: 200px;
    text-align: center;
    margin: 12px 10px 25px 10px;
    transition: 0.2s ease-in-out;
    color: white;
`;

const TileImg = styled.img`
    height: 200px;
    width: 200px;
    margin: 10px 10px 0px 10px;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
    }
`;



export function RecipeTile({recipe}) {
  return (
    <li key={recipe.id} style={{listStyleType: "none"}}>
    {/* recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && ( */}
    <Tile onClick={() => {
      window.open(recipe["recipe"]["url"]);
    }}>
        <TileImg src={recipe["recipe"]["image"]} />
        <TileName>{recipe["recipe"]["label"]}</TileName>
    </Tile>
    {/* ) */}
    </li>
  );
}