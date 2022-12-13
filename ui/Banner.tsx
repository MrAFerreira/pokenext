'use client';

import Image from 'next/image';
import styles from './Banner.module.css';
import pokeball from '../public/static/pokeball.png';

const Banner = ({ buttonText }: { buttonText: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>
          <span className={styles.title1}>Poke</span>
          <span className={styles.title2}>Next</span>
        </h1>
        <Image src={pokeball} alt="pokeball" width={100} height={100} />
      </div>
      <p className={styles.subtitle}>Search your favourite Pokemon</p>
      <button className={styles.button} onClick={() => console.log('clicked')}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
