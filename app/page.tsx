import Banner from '../ui/Banner';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner buttonText="Search" />
    </div>
  );
}
