import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import themeExtension from './themeExtension'
import { Header } from './layout/Header'
import { MainContainer } from './layout/MainContainer'
import { useState, useEffect } from 'react'
import { authorize, fetchCurrentUserProfile } from './spotify'

const theme = extendTheme(themeExtension)

const App = () => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({
    name: '',
    id: '',
  })

  useEffect(() => {
    if (window.location.hash.includes('access_token')) {
      const hash = window.location.hash.substring(1)
      const accessToken = new URLSearchParams(hash).get('access_token')
      setToken(accessToken)
      localStorage.setItem('access_token', accessToken)
      fetchCurrentUserProfile(accessToken).then((user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
      })
      window.location.hash = ''
    }
  }, [window.location.hash])

  return (
    <ChakraProvider theme={theme}>
      <Header token={token} user={user} handleLogin={authorize} />
      {token && <MainContainer token={token} user={user} />}
    </ChakraProvider>
  )
}
export default App
