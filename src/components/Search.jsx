import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StyledSearch = styled.div`
  .busca {
    display: grid;
    grid-template-columns: auto 64px;
    align-items: center;
    width: 450px;
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
    border: 1px solid #6c40a5;
    border-radius: 20px;
    max-width: 100%;
  }
  .busca input:focus {
    outline: none;
    color: 000;
    caret-color: #522ba7;
    border: 1px solid #522ba7;
  }
`;
const Search = ({ valorFiltro, setValorFiltro }) => {
  const valorDaBusca = valorFiltro;
  const setValorDaBusca = setValorFiltro;
  return (
    <StyledSearch>
      <div className="busca">
        <input
          placeholder="Buscar"
          type="text"
          onChange={(e) => setValorDaBusca(e.target.value)}
          value={valorDaBusca}
        />
      </div>
    </StyledSearch>
  );
};

export default Search;
