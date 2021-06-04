import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';
import { useForm } from "react-hook-form";

import "./index.css";

const UploadItems = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div class="form-container">
            <form class="register-form">
              {/* Uncomment the next line to show the success message */}
              {/* <div class="success-message">Success! Thank you for registering</div> */}
              <input
                id="first-name"
                class="form-field"
                type="text"
                placeholder="Nombre"
                name="firstName"
              />
              {/* Uncomment the next line to show the error message */}
              {/* <span id="first-name-error">Please enter a first name</span> */}
              <input
                id="last-name"
                class="form-field"
                type="number"
                placeholder="Precio"
                name="lastName"
              />
              {/* Uncomment the next line to show the error message */}
              {/* <span id="last-name-error">Please enter a last name</span> */}
              <input
                id="email"
                class="form-field"
                type="file"
                placeholder="Email"
                name="email"
              />
              {/* Uncomment the next line to show the error message */}
              {/* <span id="email-error">Please enter an email address</span> */}
              <button class="form-field" type="submit">
                Submit
              </button>
            </form>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default UploadItems;
