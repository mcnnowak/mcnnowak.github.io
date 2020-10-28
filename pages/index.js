import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import BlogList from '../components/BlogList'
import matter from 'gray-matter';

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`)

  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      allBlogs: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
    },
  }
}

export default function Home({allBlogs, title, description}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>mcnowak.io</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <main className={styles.main}>
        <aside className={styles.menu}>
          <img src="/android-chrome-192x192.png" className={styles.icon}/>
        </aside>

        <h1 className={styles.title}>{ title }</h1>
        <p className={styles.description}>{ description }</p>

        <section>
          <h2 className={styles.heading}>Posts</h2>
          <BlogList allBlogs={allBlogs}></BlogList>
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
