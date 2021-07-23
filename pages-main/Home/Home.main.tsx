import Head from 'next/head'

import About from './About'
import Hero from './Hero'
import TechnologyStack from './TechnologyStack'

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Christian Villamin | A Personal Site</title>
      <link rel="icon" href="/favicon.ico" />

      <meta
        name="description"
        content="My own personal slice of the internet."
      />
    </Head>

    <Hero />
    <About />
    <TechnologyStack />
  </>
)

export default Home
