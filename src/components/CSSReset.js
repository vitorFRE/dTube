import { createGlobalStyle } from 'styled-components';

export const CSSReset = createGlobalStyle`
.container {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}

body {
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
  color: #111111;
}

ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

h1,
h2,
h3,
h3,
h4,
p,
blockquote,
dd {
  margin: 0px;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
`;
