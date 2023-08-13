import { SectionCard } from '../../layout/SectionCard'
import { SearchResultsList } from './SearchResultsList'
import { SearchBar } from './SearchBar'
import { useState, useCallback } from 'react'
import { fetchSearchResults } from '../../spotify'
import debounce from 'lodash.debounce'

export const SearchSongsSection = ({ token, handleAddSong, playlistSongs }) => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchNewSearchResults = (searchInput, token) => {
    fetchSearchResults(searchInput, token).then((results) => {
      setSearchResults(results)
      setLoading(false)
    })
  }

  const debouncedFetchNewSearchResults = useCallback(
    debounce(fetchNewSearchResults, 500),
    []
  )

  const handleSearchInputChange = (searchInput) => {
    setLoading(true)
    if (searchInput.length) {
      debouncedFetchNewSearchResults(searchInput, token)
    } else {
      debouncedFetchNewSearchResults.cancel()
      setSearchResults([])
      setLoading(false)
    }
  }

  return (
    <SectionCard>
      <SearchBar handleSearchInputChange={handleSearchInputChange} />
      <SearchResultsList
        searchResults={searchResults}
        loading={loading}
        handleAddSong={handleAddSong}
        playlistSongs={playlistSongs}
      />
    </SectionCard>
  )
}
