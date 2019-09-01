import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const EditFormSuccess = () => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography>
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button as="a" color="blue" href="/map">
          Перейти на карту
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditFormSuccess;
