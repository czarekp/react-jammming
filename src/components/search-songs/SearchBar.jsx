import { TextInput } from '../../layout/TextInput'
import { useState } from 'react'

export const SearchBar = ({ handleSearchInputChange }) => {
  const [searchInput, setSearchInput] = useState('')
  const handleChange = (value) => {
    setSearchInput(value)
    handleSearchInputChange(value)
  }
  return (
    <TextInput
      placeholder="Search by song title or artist..."
      value={searchInput}
      handleChange={handleChange}
    />
  )
}
