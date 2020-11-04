import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

export default function About() {
  return <>
      <Head><title>About</title></Head>
      <h1>About</h1>
      <p>Hello!</p>
      <p>I'm Michael Nowak, a software engineer based in California. I built this site to keep a record of my projects, and to hold myself accountable for actually starting that blog that I told myself that I would start.</p>
      <p>Thanks for stopping by!</p>
  </>
}