import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

import {Fragment, useState} from 'react';

import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import "./index.css";

const UploadItems = ({ onaddProduct }) => {
  const classes = useStyles();

  const [datos, setDatos] = useState({
    nombre : '',
    apellido : ''
  })

  const [numP, setNumP] = useState(0)

  const hadleInputChange = (event) => {
    console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const efectuar = () => onaddProduct(numP);

  const enviarDatos = (data) => {
    data.preventDefault();
    console.log(datos.nombre + ' ' + datos.precio)
    setNumP(numP+1);
    efectuar();
  }



  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Grid container justify="center">
          <Typography  variant="h3" className={classes.title} color="inherit">
            Subir Producto
          </Typography>
        </Grid>
      <Grid container justify="center" spacing={4}>
          <div class="form-container">
            <form class="register-form" onSubmit={enviarDatos}>
              <input
                id="first-name"
                class="form-field"
                type="text"
                placeholder="Nombre"
                name="nombre"
                onChange = {hadleInputChange}
              />
              <input
                id="last-name"
                class="form-field"
                type="number"
                placeholder="Precio"
                name="precio"
                onChange = {hadleInputChange}
              />
              <input
                id="email"
                class="form-field"
                type="file"
                placeholder="Email"
                name="image"
              />
              <button class="form-field" type="submit">
                Submit
              </button>
            </form>
          </div>
      </Grid>
      <Grid container justify="center">
        <div className={classes.button}>
          <IconButton component={Link} to="/" aria-label="Show cart items" color="inherit">
            <CheckCircleIcon /> ¿Terminar? Productos añadidos: {numP}
          </IconButton>
        </div>
      </Grid>
    </main>
  );
};

export default UploadItems;
