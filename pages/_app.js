import '../styles/globals.css'
import {TinaProvider, TinaCMS, useCMS } from 'tinacms'

function App({ Component, pageProps }) {
  const cms = new TinaCMS({
    sidebar: true
  })

  return <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
}

export default App
