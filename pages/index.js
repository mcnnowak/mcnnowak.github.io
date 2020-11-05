import Head from 'next/head'
import styles from '../styles/Index.module.css'
import BlogList from '../components/BlogList'
import ProjectList from '../components/ProjectList'
import { getAllBlogPosts } from '../lib/posts'

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`)
  const posts = await getAllBlogPosts()

  return {
    props: {
      posts: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
      projects: siteConfig.default.projects,
    },
  }
}

export default function Index({ posts, title, description, projects }) {
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

    <div className={styles.display}>
      <section className={styles.card}>
        <h2 className={styles.heading}>Blog</h2>
        <BlogList posts={posts}></BlogList>
      </section>
      
      <section className={styles.card}>
        <h2 className={styles.heading}>Projects</h2>
        <ProjectList projects={projects}></ProjectList>
      </section>

      <section className={styles.card}>
        <h2 className={styles.heading}>Resume</h2>
        <a href={"/michael-nowak-resume2020.pdf"}>
          <img className={styles.cardImage} src={"/resume_image.png"} href={"/michael-nowak-resume2020.pdf"}></img>
        </a>
      </section>
    </div>
  </>
}
