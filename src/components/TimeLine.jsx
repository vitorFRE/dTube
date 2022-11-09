import React from 'react';
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

const TimeLine = ({ searchValue }) => {
  return (
    <StyledHeader>
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
                      <a key={video.title} href={video.url}>
                        <Image
                          alt="Thumbnail video"
                          width={320}
                          height={180}
                          src={video.thumb}
                        />
                        <span>{video.title}</span>
                      </a>
                    );
                  })}
              </div>
            </section>
          );
        })}
      </div>
    </StyledHeader>
  );
};

export default TimeLine;
