import { Button } from '@chakra-ui/react'

export const LoginButton = ({ handleLogin }) => {
  return (
    <Button
      backgroundColor="limegreen"
      _hover={{ color: 'lightblack', bg: 'white' }}
      marginTop="6"
      onClick={handleLogin}
    >
      Login to Spotify
    </Button>
  )
}
