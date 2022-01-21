import * as React from "react";
import jwt_decode from "jwt-decode";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <div className="userIconText" onClick={handleClick}>
          <i className="fas fa-user"></i>
          {localStorage.getItem("logged") ? (
            <p className="infoIcon">Perfil</p>
          ) : (
            <p className="infoIcon">Iniciar Sesión</p>
          )}
        </div>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 40,
              height: 40,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 30,
              height: 30,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {localStorage.getItem("logged") ? (
          <div>
            <Link to={`/profile/${localStorage.getItem("user")}`}>
              <MenuItem>
                <ListItemIcon>
                  <Avatar />
                  <div className="menu">Perfil</div>
                </ListItemIcon>
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings sx={{ width: 40, height: 40 }} />
              </ListItemIcon>
              <div className="menu">Configuración</div>
            </MenuItem>
            <Link to="/" onClick={() => localStorage.clear()}>
              <MenuItem>
                <ListItemIcon>
                  <Logout sx={{ width: 40, height: 40 }} />
                </ListItemIcon>
                <div className="menu">Salir</div>
              </MenuItem>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <MenuItem>
                <Avatar sx={{ width: 40, height: 40 }} />
                <div className="menu">Iniciar Sesión</div>
              </MenuItem>
            </Link>
            <Link to="/register">
              <MenuItem>
                <ListItemIcon>
                  <PersonAdd sx={{ width: 40, height: 40 }} />
                </ListItemIcon>
                <div className="menu">Crear Cuenta</div>
              </MenuItem>
            </Link>
          </div>
        )}
      </Menu>
    </React.Fragment>
  );
}
