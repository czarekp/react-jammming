import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const TrackItem = ({ coverUrl, track, artist, children }) => {
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)

  return (
    <Grid
      gridTemplateColumns="48px 1fr 40px"
      alignItems="center"
      borderRadius="lg"
      padding="3"
      marginTop="3"
      bgColor={isHover && 'lightblack'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image boxSize="48px" src={coverUrl} />
      <Box ml="6">
        <Text fontSize="md" fontWeight="semibold">
          {track}
        </Text>
        <Text fontSize="sm" fontWeight="thin">
          {artist}
        </Text>
      </Box>
      {children}
    </Grid>
  )
}
