import React, {useState} from 'react';
import styled from "styled-components";
import {info} from './info'
import maxwell from './maxwell.gif'


//Using styled-components, created and set the syling of buttons
const Button = styled.button`
  background-color: mediumseagreen;
  color: white;
  padding: 5px 15px;
  border-radius: 8px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  margin: 10px 1px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  &:hover {
    background-color: seagreen;
  }
`;

//Using styled-components, created and set the syling of tabs
const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.8;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

//Using styled-components, created and set the syling of an h1 component
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: darkolivegreen;
`;


//Create a tab group that switches content based on which tab is active
function TabGroup() {
  const [active, setActive] = useState(contents[0]);
  const links = (<>
  					<a href="https://www.linkedin.com/in/caius-arias/" 
  					target="_blank" rel="noreferrer">
        			<Button>LinkedIn</Button>
      				</a><a href="https://github.com/CaiusA" 
  					target="_blank" rel="noreferrer">
        			<Button>Github</Button>
      				</a>

      			</>);
  return (
    <>
      <div>
        {contents.map((content) => (
          <Tab
            key={content}
            active={active === content}
            onClick={() => setActive(content)}
          >
            {content}
          </Tab>
        ))}
      </div>
      <p>{info[active]}</p>
      {active === "Resume" && links}
      {active === "Other" && <img src={maxwell} alt="Maxwell the beloved spinning cat"/>}
    </>
  );
}

const contents = Object.keys(info);

export {TabGroup, Title};