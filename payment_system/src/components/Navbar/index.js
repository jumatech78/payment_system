import React from "react";
import "./navbarstyles.css";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import ListIcon from "@mui/icons-material/List"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_card">
        <div>
          <h3>Cards</h3>
        </div>
        <div
          style={{
            marginTop: 15,
            paddingLeft: 7,
          }}
        >
          54
        </div>
        <div className="search_section">
          <input className="search_input" placeholder="Cards search" />
          <SearchIcon className="search_icon" />
        </div>

        <div className="navbar_body">
          <TuneIcon className="navbar_body_icon" />
          <h3>Customize table</h3>
          <ListIcon className="navbar_body_icon_middle"/>
        </div>
      </div>
      <div className="add_card">
        <h4>New card</h4>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
