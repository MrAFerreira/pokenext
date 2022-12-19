import { cardProps } from '../../types';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ name, href, imgUrl }: cardProps) => {
  return (
    <Link href={href}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>{name}</h2>
        </div>
        <div className={styles.cardImgContainer}>
          <Image src={imgUrl} width={120} height={120} alt={name || 'pokemon'} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
