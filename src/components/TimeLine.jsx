import React, { useRef, useState } from 'react';
import Image from 'next/image';
import data from '../../data.json';
import styled from 'styled-components';

const StyledHeader = styled.div`
  .videos {
    display: flex;
    gap: 15px;
    overflow-x: auto;
  }
  .videos_bg {
    background-color: ${({ theme }) => theme.BackgroundColor2 || '#fff'};
  }
  .videos span {
    font-family: 'Roboto', 'Arial', sans-serif;
    width: 320px;
    max-width: 320px;
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;
    max-height: 4rem;
    overflow: hidden;
    display: block;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: ${({ theme }) => theme.textColorBase || '#222'};
  }

  .videos a img {
    display: block;
    width: 320px;
    max-width: 320px;
  }

  .videos a:hover {
    opacity: 0.9;
  }

  .videos_container h2 {
    padding-top: 30px;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.textColorBase || '#222'};
  }

  .sublinha_roxa {
    position: relative;
  }

  .sublinha_roxa::after {
    content: '';
    display: block;
    position: absolute;
    background: #7121d9;
    width: 30px;
    height: 3px;
    border-radius: 10px;
    left: -1px;
  }

  @media (max-width: 800px) {
    .videos a img {
      display: block;
      width: 220px;
      max-width: 220px;
    }
    .videos span {
      width: 220px;
      max-width: 220px;
    }
  }
`;

const StyledModal = styled.div`
  @keyframes mainAnime {
    from {
      opacity: 0;
      transform: translate3d(0, -120px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .modal_container {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: linear-gradient(130.02deg, #231254 0.66%, #522ba7 83.32%)
      no-repeat;
    padding: 30px;
    border: 3px solid #180d39;
    box-shadow: 0 0 40px 2px var(--Primary);
    position: relative;
    animation: mainAnime 0.3s forwards;
  }

  .fechar {
    transform: skew(0deg);
    font-size: 1.2rem;
    color: white;
    background-color: #522ba7;
    padding: 0;
    position: absolute;
    width: 40px;
    height: 40px;
    top: -23px;
    right: -23px;
    border: 4px solid #180d39;
    border-radius: 50%;
    cursor: pointer;
  }
  .modal_video {
    width: 600px;
    height: 358px;
    border: 1px solid var(--Primary);
  }

  @media (max-width: 900px) {
    .modal_video {
      width: 500px;
      height: 350px;
    }
  }

  @media (max-width: 600px) {
    .modal_video {
      width: 300px;
      height: 200px;
    }
  }

  @media (max-width: 400px) {
    .modal_video {
      width: 280px;
      height: 200px;
    }
  }
`;

const TimeLine = ({ searchValue }) => {
  const [modalabrir, setModalabrir] = useState(false);
  const [videolink, setVideoLink] = useState('');
  const umaRef = useRef();

  function abrirModal(link) {
    setModalabrir(true);
    setVideoLink(link);
  }
  function fecharModal() {
    setModalabrir(false);
  }

  function foraModal(event) {
    if (event.target === umaRef.current) {
      setModalabrir(false);
    }
  }

  return (
    <StyledModal>
      <StyledHeader>
        {modalabrir ? (
          <section ref={umaRef} onClick={foraModal} className="modal_container">
            <div className="modal">
              <button onClick={fecharModal} className="fechar">
                X
              </button>
              <iframe className="modal_video" src={videolink}></iframe>
            </div>
          </section>
        ) : null}

        <div className="videos_bg">
          {Object.keys(data.playlists).map((name) => {
            const videos = data.playlists[name];
            return (
              <section key={name} className="videos_container container">
                <h2 className="sublinha_roxa">{name}</h2>
                <div className="videos">
                  {videos
                    .filter((video) => {
                      const titleNormalized = video.title.toLowerCase();
                      const searchValueNormalized = searchValue.toLowerCase();
                      return titleNormalized.includes(searchValueNormalized);
                    })
                    .map((video) => {
                      return (
                        <div
                          onClick={() => {
                            const string = video.url;
                            const id = string.split('=');
                            const embedlink =
                              'https://www.youtube.com/embed/' + id[1];
                            abrirModal(embedlink);
                          }}
                          key={video.title}
                          href={video.url}
                        >
                          <Image
                            alt="Thumbnail video"
                            width={320}
                            height={180}
                            src={video.thumb}
                          />
                          <span>{video.title}</span>
                        </div>
                      );
                    })}
                </div>
              </section>
            );
          })}
        </div>
      </StyledHeader>
    </StyledModal>
  );
};

export default TimeLine;
