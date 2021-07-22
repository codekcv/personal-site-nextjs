import Box from 'components/general/Box/Box.main'
import Text from 'components/general/Text/Text.main'
import Head from 'next/head'

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>Christian Villamin | My personal site.</title>
      <link rel="icon" href="/favicon.ico" />

      <meta
        name="description"
        content="My own personal slice of the internet."
      />
    </Head>

    <Box>
      <Text as="h1">Christian Villamin</Text>
    </Box>
  </>
)

export default Index
