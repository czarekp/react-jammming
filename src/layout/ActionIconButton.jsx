import { IconButton } from '@chakra-ui/react'

export const ActionIconButton = ({ icon, handleClick }) => {
  return (
    <IconButton
      color="limegreen"
      variant="link"
      height="40px"
      _hover={{
        backgroundColor: 'limegreen',
        color: 'white',
      }}
      icon={icon}
      onClick={handleClick}
    />
  )
}
