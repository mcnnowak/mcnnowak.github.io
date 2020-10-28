import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{postData.title}</h1>
        <h2 className={styles.date}>{postData.date}</h2>
        <div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>&larr;Home</h2>
            </a>
          </Link>
        </div>
      </main>

    </div>
  )
}