import Head from 'next/head'
import BlogList from '../../components/BlogList'
import { getAllBlogPosts } from '../../lib/posts'

export async function getStaticProps() {
  const posts = await getAllBlogPosts()
  return {
    props: {
      allBlogs: posts,
      title: 'Blog'
    },
  }
}

export default function Blog({allBlogs, title}) {
  return <>
    <Head><title>{title}</title></Head>
    <h1>Blog</h1>
    <BlogList allBlogs={allBlogs}></BlogList>
  </>
}