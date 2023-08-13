import { Button } from '@chakra-ui/react'

export const SubmitButton = ({
  handleSubmitPlaylist,
  children,
  playlistName,
}) => {
  return (
    <Button
      width="100%"
      mt="5"
      backgroundColor="limegreen"
      isDisabled={playlistName.length === 0}
      _hover={{ color: 'lightblack', bg: 'white' }}
      _disabled={{ color: 'lightblack', bg: 'gray', cursor: 'not-allowed' }}
      textTransform="uppercase"
      onClick={handleSubmitPlaylist}
    >
      {children}
    </Button>
  )
}
