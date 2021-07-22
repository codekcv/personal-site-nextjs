import Box from 'components/general/Box/Box.main'
import styled from 'styled-components'

const Container = styled(Box)`
  border: 1px solid green;
`

const Header = (): JSX.Element => (
  <Container width={1} mt="2rem">
    Header
  </Container>
)

export default Header
