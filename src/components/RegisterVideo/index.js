import React, { useState } from 'react';
import { StyledRegisterVideo } from './styles';

function useForm(propsDoForm) {
  const [values, setValues] = useState(propsDoForm.initialValues);
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ ...values, [name]: value });
    },
    clearForm() {
      setValues({});
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: 'Frost punk', url: 'https://youtube..' },
  });
  const [modal, setModal] = useState(false);

  return (
    <StyledRegisterVideo>
      <button onClick={() => setModal(true)} className="add-video">
        +
      </button>
      {modal ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setModal(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button className="close-modal" onClick={() => setModal(false)}>
              X
            </button>
            <input
              placeholder="Título do video"
              type="text"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              type="text"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
