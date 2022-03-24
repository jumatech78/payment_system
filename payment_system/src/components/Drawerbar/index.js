import React from "react";
import "./drawerbarstyles.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Badge from "@mui/material/Badge";

function Drawerbar() {
  return (
    <div>
      <div className="drawerbar">
        <div className="drawer_header">
          <img className="drawer_image" src="/images.png" alt="" />
        </div>
        <div>
          <h2>Nexon</h2>
        </div>
      </div>
      <div className="drawer_section">
        <AccountBalanceIcon className="drawer_icon" />
        <h4>Transactions</h4>
        <Badge className="badge" badgeContent={2} badgeSize={15} color='primary'/>
      </div>
    </div>
  );
}

export default Drawerbar;
