import styles from './page.module.css';
import Banner from '../ui/Banner';
import Card from './_components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner buttonText="Search" />
      <section className={styles.cardGrid}>
        <Card
          name="Bulbasaur"
          imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          href="/pokemon/1"
        />
        <Card
          name="Charmander"
          imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          href="/pokemon/4"
        />
        <Card
          name="Squirtle"
          imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
          href="/pokemon/7"
        />
        <Card
          name="Pikachu"
          imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          href="/pokemon/25"
        />
      </section>
    </div>
  );
}
