import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";


import PlaceDetails from '../PlaceDetails/PLaceDetails';

import useStyles from "./style";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [
    { name: "Cool Place" },
    { name: "Best beer" },
    { name: "Best  Steak" },
    { name: "Cool Place" },
    { name: "Best beer" },
    { name: "Best  Steak" },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurantes, Hoteis E Atrações turisticas Para Você
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Tipo</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurantes</MenuItem>
          <MenuItem value="hotels">Hoteis</MenuItem>
          <MenuItem value="attactions">Atrações</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>Todas</MenuItem>
          <MenuItem value={3}>Notas 3.0</MenuItem>
          <MenuItem value={4}>Notas 4.0</MenuItem>
          <MenuItem value={4.5}>Nota 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} classes={classes.list}>
        {places?.map((place, i) => (
            <Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
            </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
