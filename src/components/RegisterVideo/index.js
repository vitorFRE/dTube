import React, { useState } from 'react';
import { StyledRegisterVideo } from './styles';
import { createClient } from '@supabase/supabase-js';

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
const supabase = createClient(
  process.env.NEXT_PUBLIC_URL,
  process.env.NEXT_PUBLIC_KEY,
);

function getThumb(url) {
  const urlDoVideo = url;
  const id = urlDoVideo.split('=');
  const thumb = `https://img.youtube.com/vi/${id[1]}/mqdefault.jpg`;
  return thumb;
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: '',
      url: '',
      playlist: 'music',
    },
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

            supabase
              .from('Videos')
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumb(formCadastro.values.url),
                playlist: formCadastro.values.playlist,
              })
              .then((oq) => {
                console.log(oq);
              })
              .catch((err) => {
                console.log(err);
              });
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
            <select name="playlist" onChange={formCadastro.handleChange}>
              <option value="music">Musica</option>
              <option value="front-end">Front-End</option>
            </select>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
