import Footer from 'components/Footer/Footer.main'
import Box from 'components/general/Box/Box.main'
import Header from 'components/Header/Header.main'
import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components'
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system'

const GlobalStyle = createGlobalStyle`
  * {
    position: relative;
    padding: 0;
    margin: 0;
    z-index: 0;
    box-sizing: border-box;
    color: #333;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    background-image: linear-gradient(90deg, transparent 0%, transparent 8%,rgba(90, 90, 90,0.05) 8%, rgba(90, 90, 90,0.05) 21%,transparent 21%, transparent 100%),linear-gradient(45deg, transparent 0%, transparent 23%,rgba(90, 90, 90,0.05) 23%, rgba(90, 90, 90,0.05) 37%,transparent 37%, transparent 100%),linear-gradient(0deg, transparent 0%, transparent 37%,rgba(90, 90, 90,0.05) 37%, rgba(90, 90, 90,0.05) 49%,transparent 49%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));

    -ms-overflow-style: none;
    scrollbar-width: none;  

    ::-webkit-scrollbar {
      display: none;
    }
  }
  
  a {
    color: inherit;
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
