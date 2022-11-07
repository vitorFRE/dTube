import React from 'react';
import Image from 'next/image';
import data from '../../data.json';
import styles from './TimeLine.module.css';

const TimeLine = () => {
  return (
    <div>
      {Object.keys(data.playlists).map((name) => {
        const videos = data.playlists[name];
        return (
          <section
            key={name}
            className={styles.videos_container + ' container'}
          >
            <h2 className={styles.sublinha_roxa}>{name}</h2>
            <div className={styles.videos}>
              {videos.map((video) => {
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
  );
};

export default TimeLine;
