import React from "react";
import "./navbarstyles.css";
import SearchIcon from "@mui/icons-material/Search";

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

        <div>
          <h3>Account Balance</h3>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
