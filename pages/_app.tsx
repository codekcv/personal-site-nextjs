import Footer from 'components/Footer/Footer.main'
import Box from 'components/general/Box/Box.main'
import Header from 'components/Header/Header.main'
import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components'
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

type Props = LayoutProps & SpaceProps

const AppContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${compose(layout, space)}
`

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <AppContainer width={768} mx="auto">
      <Box width={[1]} flex={1}>
        <Header />
        <Component {...pageProps} />
      </Box>

      <Footer />
    </AppContainer>

    <GlobalStyle />
  </>
)

export default MyApp
