import styles from './BlogList.module.css'
import Link from 'next/link'

export default function BlogList({ allBlogs }) {
  return <div>
    <ul>
      {allBlogs.map((post) => {
        return <Link href={`/blog/${encodeURIComponent(post.slug)}`} key={post.slug}>
          <li key={post.slug}>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.date}</p>
          </li>
        </Link>
      })}
    </ul>
  </div>
}