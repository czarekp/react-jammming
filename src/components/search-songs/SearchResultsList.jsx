import { Box, CircularProgress } from '@chakra-ui/react'
import { SearchResultItem } from './SearchResultItem'

export const SearchResultsList = ({
  searchResults,
  loading,
  handleAddSong,
  playlistSongs,
}) => {
  let searchResultsItems = []
  if (searchResults.length) {
    searchResultsItems = searchResults.map(({ album, artists, name, uri }) => ({
      uri,
      coverUrl: album.images[0].url,
      artist: artists.map((artist) => artist.name).join(', '),
      track: name,
    }))
  }

  return (
    <Box
      maxHeight="504"
      overflowY={searchResults.length > 6 ? 'scroll' : 'auto'}
    >
      {loading ? (
        <Box
          height="400"
          borderRadius="lg"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress
            size="120px"
            isIndeterminate
            color="limegreen"
            thickness="10"
          />
        </Box>
      ) : (
        searchResultsItems.map(({ uri, coverUrl, artist, track }) => (
          <SearchResultItem
            key={uri}
            uri={uri}
            coverUrl={coverUrl}
            artist={artist}
            track={track}
            handleAddSong={handleAddSong}
            playlistSongs={playlistSongs}
          />
        ))
      )}
    </Box>
  )
}
