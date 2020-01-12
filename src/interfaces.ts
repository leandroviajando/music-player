export interface State {
  searchTerm: string;
  searchResults: any[];
  selectedItemId: number;
}

export interface SearchResult {
  _id?: number;
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionArtistName: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  releaseDate: string;
  trackTimeMillis: number;
  primaryGenreName: string;
  trackPrice: number;
}

export interface Action<T> {
  type: string;
  payload: T;
}
