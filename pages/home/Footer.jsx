import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  .footer {
    text-align: center;
    margin: 50px 0 50px 0;
  }
  .footer p a {
    color: #522ba7;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p className="footer">
        Feito com 💜 by <a href="https://github.com/vitorFRE">Vitor</a> © 2022
      </p>
    </StyledFooter>
  );
};

export default Footer;
