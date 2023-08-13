import { Box, Heading, Text } from '@chakra-ui/react'
import { LoginButton } from './LoginButton'
import { HighlightText } from './HighlightText'

export const Header = ({ token, user, handleLogin }) => {
  return (
    <>
      <Heading size="2xl" paddingY="8" textAlign="center" color="limegreen">
        <Text>Jammming</Text>
      </Heading>
      <Box textAlign="center" paddingTop="0" paddingBottom="4">
        <Text fontSize="xl" color="white" size="3xl">
          {user.name !== '' && (
            <span>
              Hi, <HighlightText>{user.name}</HighlightText>!
              <br />
            </span>
          )}
          Create your new <HighlightText>Spotify</HighlightText> playlist!
        </Text>
        {!token && <LoginButton margin="0 auto" handleLogin={handleLogin} />}
      </Box>
    </>
  )
}
