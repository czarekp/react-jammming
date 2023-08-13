import {
  Container,
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  // ModalCloseButton,
  Link,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import { SearchSongsSection } from '../components/search-songs/SearchSongsSection'
import { CreatePlaylistSection } from '../components/create-playlist/CreatePlaylistSection'
import { useState } from 'react'
import { createPlaylist } from '../spotify'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const MainContainer = ({ token, user }) => {
  const [playlist, setPlaylist] = useState({
    name: '',
    songs: [],
  })

  const handleAddSong = (songToAdd) => {
    setPlaylist(({ name, songs }) => ({
      name,
      songs: [songToAdd, ...songs],
    }))
  }

  const handleDeleteSong = (songUriToDelete) => {
    setPlaylist(({ name, songs }) => ({
      name,
      songs: songs.filter((song) => song.uri !== songUriToDelete),
    }))
  }

  const handlePlaylistNameChange = (userInput) => {
    setPlaylist((prevPlaylist) => ({
      ...prevPlaylist,
      name: userInput,
    }))
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [playlistUrl, setPlaylistUrl] = useState('')

  const handleSubmitPlaylist = () => {
    const trackUris = playlist.songs.map((song) => song.uri)
    createPlaylist(token, user.id, playlist.name, trackUris).then((url) => {
      setPlaylistUrl(url)
      onOpen()
      setPlaylist({
        name: '',
        songs: [],
      })
    })
  }

  return (
    <Container maxW="container.lg" mt="4">
      <Grid gridTemplateColumns={{ md: '1fr', lg: '1fr 1fr' }} gap="6">
        <GridItem>
          <SearchSongsSection
            token={token}
            handleAddSong={handleAddSong}
            playlistSongs={playlist.songs}
          />
        </GridItem>
        <GridItem>
          <CreatePlaylistSection
            token={token}
            playlist={playlist}
            handleDeleteSong={handleDeleteSong}
            handlePlaylistNameChange={handlePlaylistNameChange}
            handleSubmitPlaylist={handleSubmitPlaylist}
          />
        </GridItem>
      </Grid>
      <Modal isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent backgroundColor="limegreen" textAlign="center">
          <ModalHeader fontSize="2xl">Your playlist was created!</ModalHeader>
          <ModalBody>
            <Link href={playlistUrl} fontSize="xl">
              Open Playlist on Spotify <ExternalLinkIcon />
            </Link>
          </ModalBody>
          <ModalFooter margin="0 auto">
            <Button
              variant="ghost"
              color="white"
              _hover={{ color: 'darkblack', backgroundColor: 'white' }}
              onClick={onClose}
            >
              Create Next Playlist
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  )
}
