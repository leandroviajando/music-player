import React from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import SearchResultsListItemDetails from "../../Search/SearchResultListItemDetails";
import { SearchResult } from "../../../interfaces";
import { APP_BASE_URL } from "../../../config";
import "../../../styles.css";

const PreviewList: React.FC<PropTypes> = ({
  previousSearchResult,
  searchResult,
  nextSearchResult
}) => (
  <div className="flex-column margin-1pc">
    <div className="center margin-1pc">
      <div className="margin-1pc">
        <img
          alt={String(searchResult.trackId)}
          src={searchResult.artworkUrl100}
        ></img>
      </div>

      <div
        className="margin-1pc top-botttom-margin-5pc"
        style={{ marginLeft: "40%" }}
      >
        <Iframe url={searchResult.previewUrl} width="250px" height="75px" />
      </div>

      <SearchResultsListItemDetails
        searchResult={searchResult}
        displayTitleArtistAndCollection={false}
      />

      <div className="flex-row-space-evenly margin-1pc top-botttom-margin-5pc">
        <div>
          {previousSearchResult && (
            <Link
              to={{
                pathname: `/preview/${previousSearchResult._id}`
              }}
            >
              <button>Previous</button>
            </Link>
          )}
        </div>

        <div>
          <Iframe
            url={`https://www.facebook.com/plugins/share_button.php?href=${APP_BASE_URL}&layout=button&size=small&width=67&height=20&appId`}
            width="67"
            height="20"
            scrolling="no"
            allow="encrypted-media"
          ></Iframe>
        </div>

        <div>
          {nextSearchResult && (
            <Link
              to={{
                pathname: `/preview/${nextSearchResult._id}`
              }}
            >
              <button>Next</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

interface PropTypes {
  previousSearchResult?: SearchResult | undefined;
  searchResult: SearchResult;
  nextSearchResult?: SearchResult | undefined;
}

export default PreviewList;
