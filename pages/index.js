import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pocket Canvas</title>
        <meta name="description" content="Simple paint app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is Pocket Canvas
        </h1>

        <p className={styles.description}>
          Try the app and learn about its development process
        </p>

        <div className={styles.grid}>
          <Link href='/paint'>
            <a className={styles.card}>
              <h2>Start painting &rarr;</h2>
              <p>Try the painting and filling features</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/kalau/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Kevin
        </a>
      </footer>
    </div>
  )
}
