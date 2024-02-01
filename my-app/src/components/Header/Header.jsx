import React from "react";
import { AutoComplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar, // Correção: Toolbar com letra maiúscula
  Typography,
  InputBase,
  Box,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"; // Correção: SearchIcon com letra maiúscula

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Planeje Sua Viagem
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore Novos Lugares
          </Typography>
          {/* <AutoComplete> */}
          <div className={classes.search}> {/* Correção: classes.serach para classes.search */}
            <div className={classes.searchIcon}>
              <SearchIcon /> {/* Correção: serachIcon para SearchIcon */}
            </div>
            <InputBase
              placeholder="..Pesquise seu  destino..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </AutoComplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
