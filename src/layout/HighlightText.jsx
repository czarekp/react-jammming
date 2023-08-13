import { Box } from '@chakra-ui/react'

export const HighlightText = ({ children }) => {
  return (
    <Box as="span" display="inline-block" color="limegreen" fontWeight="bold">
      {children}
    </Box>
  )
}
