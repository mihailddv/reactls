// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import styles from './AppRouter.module.css';

export default class AppRouter extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}
