import Flex from 'components/general/Flex/Flex.main'
import Item from 'components/general/Item/Item.main'
import Text from 'components/general/Text/Text.main'
import styled from 'styled-components'

const Container = styled(Flex)`
  li {
    list-style: none;
  }
`

const menus = ['Home', 'Projects', 'Blogs', 'Contact'].map((menu) => (
  <Item key={menu} as="li" mx={2}>
    <Text>{menu}</Text>
  </Item>
))

const Header = (): JSX.Element => {
  return (
    <Container width={1} my="2rem" justifyContent="center" alignItems="center">
      <Flex as="ul">{menus}</Flex>
    </Container>
  )
}

export default Header
