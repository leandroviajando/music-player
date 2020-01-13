import { SearchResult, State, Action } from "../interfaces";
import { deepCopy } from ".";

const mockSearchResult: SearchResult = {
  wrapperType: "track",
  kind: "song",
  artistId: 32940,
  collectionId: 850697616,
  trackId: 850697815,
  artistName: "Michael Jackson & Justin Timberlake",
  collectionName: "XSCAPE (Deluxe)",
  trackName: "Love Never Felt So Good",
  collectionCensoredName: "XSCAPE (Deluxe)",
  trackCensoredName: "Love Never Felt So Good",
  collectionArtistName: "Michael Jackson",
  previewUrl:
    "http://a599.phobos.apple.com/us/r1000/049/Music/v4/50/f0/1c/50f01ccf-4dd4-eea0-1c94-7d9ce591fdfb/mzaf_6052792677521696178.plus.aac.p.m4a",
  artworkUrl30:
    "http://a1.mzstatic.com/us/r30/Features2/v4/f4/25/67/f425676c-bebd-611b226c-ed4b6e8675f1/dj.sxghjyyn.30x30-50.jpg",
  artworkUrl60:
    "http://a5.mzstatic.com/us/r30/Features2/v4/f4/25/67/f425676c-bebd-611b226c-ed4b6e8675f1/dj.sxghjyyn.60x60-50.jpg",
  artworkUrl100:
    "http://a3.mzstatic.com/us/r30/Features2/v4/f4/25/67/f425676c-bebd-611b226c-ed4b6e8675f1/dj.sxghjyyn.100x100-75.jpg",
  releaseDate: "",
  trackTimeMillis: 2345345,
  primaryGenreName: "Pop",
  trackPrice: 5.0
};

const mockSearchResult2: SearchResult = {
  wrapperType: "track",
  kind: "song",
  artistId: 32941,
  collectionId: 850697617,
  trackId: 850697816,
  artistName: "Michael Jackson & Justin Timberlake",
  collectionName: "XSCAPE (Deluxe)",
  trackName: "Love Never Felt So Good (Remix)",
  collectionCensoredName: "XSCAPE (Deluxe)",
  trackCensoredName: "Love Never Felt So Good",
  collectionArtistName: "Michael Jackson",
  previewUrl:
    "http://a599.phobos.apple.com/us/r1000/049/Music/v4/50/f0/1c/50f01ccf-4dd4-eea0-1c94-7d9ce591fdfb/mzaf_6052792677521696178.plus.aac.p.m4a",
  artworkUrl30:
    "http://a1.mzstatic.com/us/r30/Features2/v4/f4/25/67/f425676c-bebd-611b226c-ed4b6e8675f1/dj.sxghjyyn.30x30-50.jpg",
  artworkUrl60:
    "http://a5.mzstatic.com/us/r30/Features2/v4/f4/25/67/f425676c-bebd-611b226c-ed4b6e8675f1/dj.sxghjyyn.60x60-50.jpg",
  artworkUrl100:
    "http://a3.mzstatic.com/us/r30/Features2/v4/f4/25/67/f425676c-bebd-611b226c-ed4b6e8675f1/dj.sxghjyyn.100x100-75.jpg",
  releaseDate: "",
  trackTimeMillis: 2300000,
  primaryGenreName: "Pop",
  trackPrice: 4.5
};

export function getMockSearchTerm(): string {
  return "nirvana";
}

export function getMockSearchResults(): SearchResult[] {
  return [mockSearchResult, mockSearchResult2].map(mockSearchResult =>
    deepCopy(mockSearchResult)
  );
}

export function getMockInitialState(): State {
  return {
    searchTerm: "",
    searchResults: []
  };
}

export function getMockReduxFunctions() {
  const dispatchMock: any = jest.fn((action: Action<any>): void => {});
  const nextMock: any = jest.fn((action: Action<any>): void => {});
  return { dispatchMock, nextMock };
}
