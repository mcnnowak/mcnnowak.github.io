import '../styles/globals.css'
import Layout from '../components/Layout'
import {TinaProvider, TinaCMS, useCMS } from 'tinacms'
import { GitClient, GitMediaStore } from '@tinacms/git-client'

function App({ Component, pageProps }) {
  const client = new GitClient('/___tina')
  const cms = new TinaCMS({
    apis: {
      git: client,
    },
    media: new GitMediaStore(client),
    sidebar: {
      position: 'overlay'
    }
  })
  cms.registerApi('git', client)
  if(process.env.NODE_ENV === 'development') { cms.enable() }
  else { cms.disable() }

  return <Layout>
      <TinaProvider cms={cms}>
        <Component {...pageProps} />
      </TinaProvider>
    </Layout>
}

export default App
