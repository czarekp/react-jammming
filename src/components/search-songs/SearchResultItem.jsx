import { TrackItem } from '../../layout/TrackItem'
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { ActionIconButton } from '../../layout/ActionIconButton'

export const SearchResultItem = ({
  coverUrl,
  track,
  artist,
  uri,
  handleAddSong,
  playlistSongs,
}) => {
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    setIsAdded(playlistSongs.find((song) => song.uri === uri))
  }, [playlistSongs])

  const handleClick = () => {
    setIsAdded(true)
    handleAddSong({
      uri,
      coverUrl,
      track,
      artist,
    })
  }

  return (
    <TrackItem coverUrl={coverUrl} track={track} artist={artist}>
      {isAdded ? (
        <CheckIcon color="limegreen" width="40px" />
      ) : (
        <ActionIconButton icon={<AddIcon />} handleClick={handleClick} />
      )}
    </TrackItem>
  )
}
