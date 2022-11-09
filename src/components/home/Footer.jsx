import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  .footer {
    text-align: center;
    padding: 50px 0 50px 0;
    background-color: red;
    background-color: ${({ theme }) => theme.BackgroundColor || '#fff'};
  }
  .footer {
    color: ${({ theme }) => theme.textColorBase3 || '#fff'};
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
