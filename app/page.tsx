import styles from './page.module.css';
import Banner from '../ui/Banner';
import Card from './_components/Card';
import pokemon from '../pokemon.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner buttonText="Search" />
      <section className={styles.cardGrid}>
        {pokemon.map((poke) => (
          <Card key={poke.id} name={poke.name} imgUrl={poke.imgUrl} href={poke.href} />
        ))}
      </section>
    </div>
  );
}
