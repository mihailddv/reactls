import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Paper } from "@material-ui/core";
import { Button } from "semantic-ui-react";
const OrderSuccess = props => {
  const { cancelOrder } = props;
  return (
    <Paper>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" align="left">
            Заказ размещён
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ margin: "10px 0" }}>
            Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button color="red" onClick={cancelOrder}>
            Отменить
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderSuccess;
