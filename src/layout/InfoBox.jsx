import { Box, Text } from '@chakra-ui/react'

export const InfoBox = ({ text }) => {
  return (
    <Box
      height="300px"
      backgroundColor="lightblack"
      borderRadius="lg"
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingX="4"
    >
      <Text fontWeight="bold" fontSize="xl" textAlign="center">
        {text}
      </Text>
    </Box>
  )
}
