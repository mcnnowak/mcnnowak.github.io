import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>mcnowak.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>mcnowak.io</h1>

        <p className={styles.subtitle}>
          A place to post all my dumb projects
        </p>

          <section>
          <h2 className={styles.heading}>Posts</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${encodeURIComponent(id)}`}>
                <div className={styles.card} key={id}>
                  <h3>{title}</h3>
                  <p>{date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="https://github.com/mcnnowak">
          github.com/mcnnowak
        </Link>
      </footer>
    </div>
  )
}
