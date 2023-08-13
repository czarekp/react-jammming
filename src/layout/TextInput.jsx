import { CloseIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

export const TextInput = ({ placeholder, value, handleChange }) => {
  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        value={value}
        size="lg"
        variant="flushed"
        borderColor="limegreen"
        focusBorderColor="white"
        px="3"
        margin="0"
        onChange={({ target: { value } }) => handleChange(value)}
      />

      <InputRightElement>
        <IconButton
          variant="link"
          icon={<CloseIcon />}
          onClick={() => handleChange('')}
        />
      </InputRightElement>
    </InputGroup>
  )
}
