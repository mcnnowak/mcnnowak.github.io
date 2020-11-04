import Head from 'next/head'

export default function Projects({ ...props }) {
  return <>
    <Head>
      <title>Projects</title>
      <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
    </Head>
    <div className={"github-card"} data-github="mcnnowak" data-width="400" data-height="150" data-theme="default"></div>
    <h1>Projects</h1>
    <div className={"github-card"} data-github="mcnnowak/mcnowak.io" data-width="400" data-height="150" data-theme="default"></div>
    <div className={"github-card"} data-github="mcnnowak/super-moon-asteroid-railgun-track-3000" data-width="400" data-height="150" data-theme="default"></div>
  </>
}