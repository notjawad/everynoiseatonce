export interface Profile {
  name: string;
  age: string;
  subscriber: string;
  realname: string;
  bootstrap: string;
  playcount: string;
  artist_count: string;
  playlists: string;
  track_count: string;
  album_count: string;
  image: {
    size: string;
    url: string;
  }[];
  registered: {
    unixtime: string;
    text: number;
  };
  country: string;
  gender: string;
  url: string;
  type: string;
}

export interface Track {
  artist: Artist;
  streamable: string;
  mbid: string;
  spotifyId: string;
  artwork: string;
  album: Album;
  name: string;
  "@attr": Attr;
  url: string;
  date: {
    uts: string;
    "#text": string;
  };
}

export interface Artist {
  mbid: string;
  "#text": string;
}

export interface Album {
  mbid: string;
  "#text": string;
}

export interface Attr {
  nowplaying: string;
}

export interface BlogPost {
  slug: string;
  meta: {
    title: string;
    date: string;
    description: string;
    tags: string[];
  };
  content: string;
}

export interface TopArtist {
  streamable: string;
  image: {
    size: string;
    "#text": string;
  };

  mbid: string;
  url: string;
  playcount: string;
  "@attr": {
    rank: string;
  };

  name: string;
  spotifyId: string;
  artwork: string;
}
