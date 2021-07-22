import Box from 'components/general/Box/Box.main'
import Text from 'components/general/Text/Text.main'

const Footer = (): JSX.Element => (
  <Box width={1} mt="2rem">
    <Text textAlign="center">
      © {new Date().getFullYear()} Christian Villamin
    </Text>
  </Box>
)

export default Footer
