import Flex from 'components/general/Flex/Flex.main'
import Text from 'components/general/Text/Text.main'
import Head from 'next/head'
import Image from 'next/image'
import profileImage from 'public/images/christian_villamin.jpg'
import styled from 'styled-components'

const ImageContainer = styled.div`
  .profile-picture {
    border-radius: 50%;
    border: 1px solid red;
  }
`

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

    <Flex flexDirection="column" alignItems="center">
      <ImageContainer>
        <Image
          className="profile-picture"
          src={profileImage}
          width={256}
          height={256}
          alt="Picture of Christian Villamin"
        />
      </ImageContainer>

      <Text as="h1">Christian Villamin</Text>
    </Flex>
  </>
)

export default Index
