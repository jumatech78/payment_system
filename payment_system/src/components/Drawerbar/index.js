import React from "react";
import "./drawerbarstyles.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

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
      <div className="footer_section">
        <Avatar
          className="footer_avatar"
          img
          src="https://media.istockphoto.com/photos/dreamy-arab-guy-freelancer-working-from-home-using-laptop-picture-id1331298245?b=1&k=20&m=1331298245&s=170667a&w=0&h=nJJGzr-iskXDV_AjXhp03BErbtKuSkrelBIaKBgKO1g="
          alt=""
        />
        <h5>Juma Tech</h5>
      </div>
      <div className="bottom_footer">
        <SettingsOutlinedIcon className="footer_icon"/>
        <h5>Settings</h5>
      </div>
    </div>
  );
}

export default Drawerbar;
