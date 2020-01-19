export interface MovieState {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: Array<string>;
  download_count: number;
  like_count: number;
  description_intro: string;
  description_full: string;
  yt_trailer_code: string;
  language: string;
  background_image: string;
  background_image_original: string;
  medium_cover_image: string;
  date_uploaded: string;
  torrents: Array<Torrent>;
}

export interface Torrent {
  url: string;
  type: string;
  size_bytes: number;
  size: string;
  seeds: number;
  quality: string;
  peers: number;
  hash: string;
  date_uploaded: string;
  date_uploaded_unix: number;
}
