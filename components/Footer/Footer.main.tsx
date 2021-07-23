import Flex from 'components/general/Flex/Flex.main'
import Text from 'components/general/Text/Text.main'

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width={1}
      height={64}
      mt="25vh"
    >
      <Text color="#666" textAlign="center">
        © {currentYear} Christian Villamin | Built with&nbsp;
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
      </Text>
    </Flex>
  )
}

export default Footer
