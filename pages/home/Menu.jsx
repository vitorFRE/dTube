import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Search from '../../src/components/Search';

const StyledMenu = styled.header`
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0 7px 0;
  }

  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #522ba7;
    transition: 0.5s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 15px -4px 0px 15px #fff;
    background: #522ba7;
    transition: 0.5s;
  }

  input:checked + .slider {
    background-color: #522ba7;
  }

  input:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 8px -4px 0px 0px #fff;
  }

  @media (max-width: 800px) {
    .busca {
      display: none;
    }
  }
`;

const Menu = ({ valorFiltro, setValorFiltro }) => {
  return (
    <StyledMenu>
      <div className="menu container">
        <Image
          src="/images/LogoMenu.svg"
          alt="Logo aluratube"
          width={127}
          height={25}
        />

        <Search valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />

        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </StyledMenu>
  );
};

export default Menu;
