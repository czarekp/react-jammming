import { SectionCard } from '../../layout/SectionCard'
import { PlaylistItem } from './PlaylistItem'
import { TextInput } from '../../layout/TextInput'
import { SubmitButton } from './SubmitButton'
import { InfoBox } from '../../layout/InfoBox'
import { Box } from '@chakra-ui/react'

export const CreatePlaylistSection = ({
  playlist,
  handleDeleteSong,
  handlePlaylistNameChange,
  handleSubmitPlaylist,
}) => {
  const playlistSongs = playlist?.songs.map(
    ({ uri, coverUrl, artist, track }) => (
      <PlaylistItem
        key={uri}
        uri={uri}
        coverUrl={coverUrl}
        artist={artist}
        track={track}
        handleDeleteSong={handleDeleteSong}
      />
    )
  )

  return (
    <SectionCard>
      {playlist.songs.length === 0 && (
        <InfoBox text="Add songs to create your playlist!" />
      )}
      {playlist.songs.length !== 0 && (
        <>
          <TextInput
            placeholder="Name your playlist"
            value={playlist.name}
            handleChange={handlePlaylistNameChange}
          />
          <Box
            maxHeight="504"
            overflowY={playlistSongs.length > 6 ? 'scroll' : 'auto'}
          >
            {playlistSongs}
          </Box>
          <SubmitButton
            handleSubmitPlaylist={handleSubmitPlaylist}
            playlistName={playlist.name}
          >
            Save to Spotify
          </SubmitButton>
        </>
      )}
    </SectionCard>
  )
}
