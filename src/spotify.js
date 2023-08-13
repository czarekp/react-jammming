const CLIENT_ID = '1184464d1749486e9ba9e2f13298b6b5'
const SCOPE =
  'user-read-private user-read-email playlist-modify-private playlist-modify-public'
const REDIRECT_URI = 'http://localhost:3000/'

const callEndpoint = async ({
  url,
  token,
  headers = {
    Authorization: `Bearer ${token}`,
  },
  resolve,
}) => {
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })
  if (response.ok) {
    return resolve(response)
  } else {
    const { status, statusText } = response
    console.error(response)
    throw new Error(`[${status}] ${statusText}`)
  }
}

export const authorize = async () => {
  const authorizeQuery = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'token',
    redirect_uri: REDIRECT_URI,
    scope: SCOPE,
  })

  window.location = 'https://accounts.spotify.com/authorize?' + authorizeQuery
}

export const fetchCurrentUserProfile = async (token) =>
  await callEndpoint({
    url: 'https://api.spotify.com/v1/me',
    token,
    resolve: async (response) => {
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      const { display_name: name, id } = jsonResponse
      return new Promise((resolve) => {
        resolve({ name, id })
      })
    },
  })

export const fetchSearchResults = async (searchValue, token) =>
  await callEndpoint({
    url: `https://api.spotify.com/v1/search?q=${searchValue}&type=track`,
    token,
    resolve: async (response) => {
      const jsonResponse = await response.json()
      const songs = jsonResponse.tracks.items
      return new Promise((resolve) => {
        resolve(songs === undefined ? [] : songs)
      })
    },
  })

export const createPlaylist = async (
  token,
  userId,
  playlistName,
  trackUris
) => {
  const body = JSON.stringify({ name: playlistName })
  console.log(body)
  const response = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    }
  )
  if (response.ok) {
    const { id: playlistId } = await response.json()
    const addTracksToPlaylistResponse = fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          uris: trackUris,
          position: 0,
        }),
      }
    )
    if (addTracksToPlaylistResponse.ok) {
      const {
        external_urls: {
          spotify: { playlistUrl },
        },
      } = await addTracksToPlaylistResponse.json()
      return new Promise((resolve) => {
        resolve(playlistUrl)
      })
    }
  } else {
    const { status, statusText } = response
    console.error(response)
    throw new Error(`[${status}] ${statusText}`)
  }
}
