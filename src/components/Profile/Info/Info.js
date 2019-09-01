import React from "react";
import { Button } from "semantic-ui-react";
// import EditProfile from '../../Profile/EditProfile';
// import Grid from "@material-ui/core/Grid";
// import { Paper } from "@material-ui/core";
import './Info.css';

const Info = () => {
  return (
    <div className="info">
      <div className="info__title">Заполните платежные данные</div>
      <div className="info__text">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
      <Button
        color="red"
        // to="/profile"
        path="/profile"
        // component={EditProfile}
      >
        Перейти в профиль.
      </Button>
    </div>
  );
};

export default Info;
