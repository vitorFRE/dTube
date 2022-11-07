import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Menu = () => {
  const StyledMenu = styled.header`
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7px 0 7px 0;
    }

    .busca {
      display: grid;
      grid-template-columns: auto 64px;
      align-items: center;
      width: 450px;
    }

    .busca_img {
      height: 100%;
      display: flex;
      border-radius: 0 2px 2px 0;
      background-color: #f0f0f0;
    }

    .busca img {
      width: 28px;
      height: 28px;
      margin: auto auto auto auto;
      display: block;
    }

    .busca input::placeholder {
      font-family: 'Helvetica';
      font-weight: 400;
      font-size: 1rem;
      line-height: 18px;
      color: #222;
    }

    .busca input {
      padding: 12px 0 12px 10px;
      background: #f1f1f1;
      color: #000;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      max-width: 100%;
    }
    .busca input:focus {
      outline: none;
      color: 000;
      caret-color: #522ba7;
      border: 1px solid #522ba7;
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
  return (
    <StyledMenu>
      <div className="menu container">
        <Image
          src="/images/logo.svg"
          alt="Logo aluratube"
          width={127}
          height={25}
        />

        <div className="busca">
          <input placeholder="Buscar" type="text" name="" id="" />
          <div className="busca_img">
            <Image
              src="/images/busca.svg"
              alt="Buscar"
              width={16}
              height={16}
            />
          </div>
        </div>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </StyledMenu>
  );
};

export default Menu;
