import { TrackItem } from '../../layout/TrackItem'
import { DeleteIcon } from '@chakra-ui/icons'
import { ActionIconButton } from '../../layout/ActionIconButton'

export const PlaylistItem = ({
  coverUrl,
  track,
  artist,
  uri,
  handleDeleteSong,
}) => {
  const handleClick = () => {
    handleDeleteSong(uri)
  }

  return (
    <TrackItem coverUrl={coverUrl} track={track} artist={artist}>
      <ActionIconButton icon={<DeleteIcon />} handleClick={handleClick} />
    </TrackItem>
  )
}
