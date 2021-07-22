import Box from 'components/general/Box/Box.main'
import Text from 'components/general/Text/Text.main'
import styled from 'styled-components'

const Container = styled(Box)``

const Header = (): JSX.Element => (
  <Container width={1} mt="2rem">
    <Text textAlign="center">Header</Text>
  </Container>
)

export default Header
