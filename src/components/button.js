import styled from "styled-components";


export const Button = styled.button`
padding: 6px 16px;
font-size: 20px;
margin-left: 10px;
cursor: pointer;
background-color: #3BC14A;
border: 2px solid #3BC14A;
border-radius: 25px;
color: white;
transition: 0.3s;
display: inline-block;
position: relative;
box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);

@media screen and (max-width: 1000px) {
      font-size: 15px;
    }

&:after {
  content: "➤";
  position: absolute;
  opacity: 0;  
  top: 5px;
  right: -5px;
  transition: 0.3s;
}

&:hover {
  padding-right: 24px;
  padding-left: 8px;
}

&:hover:after {
  opacity: 1;
  right: 1px;
}
`;