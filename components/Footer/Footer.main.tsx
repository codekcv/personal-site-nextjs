import Box from 'components/general/Box/Box.main'
import Text from 'components/general/Text/Text.main'

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear()

  return (
    <Box width={1} mt="2rem">
      <Text textAlign="center">
        © {currentYear} Christian Villamin | Built with&nbsp;
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
      </Text>
    </Box>
  )
}

export default Footer
