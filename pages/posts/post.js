import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Post() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          What is <a href="https://nextjs.org">Next.js?</a>
        </h1>


        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h3>Back to home &rarr;</h3>
            </a>
          </Link>
        </div>
      </main>

    </div>
  )
}