const CLIENT_ID = "3faf6163914c45ffaa5c2f28359bfb7a";
const CLIENT_SECRET = "bc275b3d0b6a48859d941d1c61d6833a";
const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

const requestAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

export const getReleasedThisWeek = async () => {
  const accessToken = await requestAccessToken();
  const response = await fetch(`${SPOTIFY_API_BASE_URL}/browse/new-releases`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  const songsWithAudio = data.albums.items.map((album) => ({
    id: album.id,
    name: album.name,
    images: album.images,
    audioUrl: require("../assests/Arziyan.mp3"),
  }));

  return songsWithAudio;
};

export const getFeaturedPlaylists = async () => {
  const accessToken = await requestAccessToken();
  const response = await fetch(
    `${SPOTIFY_API_BASE_URL}/browse/featured-playlists`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data.playlists.items;
};

export const getBrowseGenres = async () => {
  const accessToken = await requestAccessToken();
  const response = await fetch(`${SPOTIFY_API_BASE_URL}/browse/categories`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.categories.items;
};
