import React from "react";
import "./drawerbarstyles.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
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

      <div className="badge_text">
        <TransferWithinAStationIcon className="drawer_icon" />
        <h4 className="h4">Transactions</h4>
        <Badge className="badge" badgeContent={2} color="primary" />
      </div>

      <div className="deposit_slide">
        <AccountBalanceIcon className="drawer_icon" />
        <h4 className="h4">Deposit</h4>
      </div>
      <div className="deposit_slide">
        <SystemUpdateAltIcon className="drawer_icon" />
        <h4 className="h4">Withdraw</h4>
      </div>
      <div className="deposit_slide">
        <ExitToAppIcon className="drawer_icon" />
        <h4 className="h4">Send</h4>
      </div>
    </div>
  );
}

export default Drawerbar;
