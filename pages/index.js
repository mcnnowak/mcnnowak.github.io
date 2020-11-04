import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
import { getAllBlogPosts } from '../lib/posts'

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`)
  const posts = await getAllBlogPosts()

  return {
    props: {
      allBlogs: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
    },
  }
}

export default function Home({allBlogs, title, description}) {
  return <>
    <Head>
      <title>mcnowak.io</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>

    <aside className={styles.menu}>
      <img src="/android-chrome-192x192.png" className={styles.icon}/>
    </aside>

    <h1 className={styles.title}>{ title }</h1>
    <p className={styles.description}>{ description }</p>

    <section>
      <h2 className={styles.heading}>Posts</h2>
      <BlogList allBlogs={allBlogs}></BlogList>
    </section>
  </>
}
