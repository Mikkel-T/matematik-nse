import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer.jsx';

function Home() {
  const pages = [
    { name: '2. gradsfunktion', path: '/2-grad-funktion' },
    { name: 'Renters rente', path: '/renter' },
  ];
  return (
    <div>
      <Head>
        <title>Beregnere</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
        />
      </Head>
      <h1 className={styles.title}>Beregnere</h1>
      <div className={styles.grid}>
        {pages.map((e) => (
          <a href={e.path} className={styles.card}>
            {e.name}
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
