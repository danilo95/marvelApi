import styled, { createGlobalStyle } from 'styled-components';

export const Content = styled.div`
	min-height: 100vh;
`;

export const LayoutWrapper = styled.div`
	box-sizing: border-box;
	padding: 0 35px;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

//here start global styles
export const GlobalStyle = createGlobalStyle`
 


  body{
    font-family: 'Roboto', sans-serif;
	line-height: 1.2;
	box-sizing: border-box;
	margin:0px;
  }
  strong{
    font-weight: bold;
  }
  button {
    font-family: 'Roboto', sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 20px 0;
  }
  h1{
    font-size: 3em;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-size: 0.75em;
  }
  
`;
