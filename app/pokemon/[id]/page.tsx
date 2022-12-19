import Link from 'next/link';
import Image from 'next/image';

import styles from './pokepage.module.css';

async function getPokemon(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const page = async ({ params }: { params: any }) => {
  const pokemon = await getPokemon(params.id);
  console.log(pokemon);
  return (
    <div>
      <Link href="/">Back to home</Link>
      {pokemon && (
        <section className={styles.pokeSection}>
          <h1>{pokemon.name}</h1>
          <div className={styles.imgContainer}>
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              width={176}
              height={176}
              alt={pokemon.name || 'pokemon'}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default page;
