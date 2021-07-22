import Head from 'next/head'

import Hero from './Hero/Hero.main'
import TechnologyStack from './TechnologyStack/TechnologyStack.main'

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
    <TechnologyStack />
  </>
)

export default Home
