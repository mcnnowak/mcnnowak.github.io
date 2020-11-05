import styles from './ProjectList.module.css'
import Link from 'next/link'

function getProjectList(projects) {
  return <ul className={styles.projectList}>
    {
      projects.map((project) => {
        return <li className={styles.projectItem}>
          <Link href={project.link}>
            <div>
              <h3 className={styles.projectName}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </Link>
        </li>
      })
    }
  </ul>
}

export default function ProjectList({ projects }) {
  return getProjectList(projects)
}