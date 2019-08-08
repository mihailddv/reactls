// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';
import classNames from 'classnames';

class AppRouter extends Component {
  render() {

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={classNames(styles.navList, 't-nav-list')}>
              <li className={styles.navElement}>
                <a className={classNames(styles.link, 't-link-home')} aria-current="page" href="/app">Home</a>
              </li>
              <li className={styles.navElement}>
                <a className={classNames(styles.link, 't-link-inbox')} href="/app/inbox">Inbox</a>
              </li>
              <li className={styles.navElement}>
                <a className={classNames(styles.link, 't-link-outbox')} href="/app/outbox">Outbox</a>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>            
            <h3 className={styles.title}>Home</h3>
            <Switch>/
              <Route path="/app" exact component={Home} />
              <Route path="/app/inbox" exact component={InboxList} />
              <Route path="/app/outbox" exact component={OutboxList} />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Route path="/app/outbox/:id" component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    )

  }
}

export default AppRouter;