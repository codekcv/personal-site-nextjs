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
      <title>Christian Villamin | A Personal Site</title>
      <link rel="icon" href="/favicon.ico" />

      <meta
        name="description"
        content="My own personal slice of the internet."
      />
    </Head>

    <Flex flexDirection="column" alignItems="center" mt={128}>
      <ImageContainer>
        <Image
          className="profile-picture"
          src={profileImage}
          width={256}
          height={256}
          alt="Picture of Christian Villamin"
        />
      </ImageContainer>

      <Text as="h1" color="#333" fontSize={64}>
        Christian Villamin
      </Text>

      <Text as="p" fontSize={24}>
        I&apos;m a software engineer specializing at web applications.
      </Text>
    </Flex>
  </>
)

export default Index
