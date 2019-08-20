    
import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';
import {
  getFollowersData,
  getIsLoading,
  getError
} from '../../modules/Followers';

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { followers, isLoading, error } = this.props;

    if (isLoading) {
      return <p>Загрузка данных</p>;
    } else if (error) {
      return <p>Cетевая ошибка</p>;
    }

    if (!followers.length) {
      return <p className="t-no-followers">Нет информации о подписчиках</p>;
    }
      

    return (
      <div className={cx(styles.root, 't-followers')}>
        {/* 
        Отобразите список пользователей.
        Для каждого пользователя покажите имя и аватарку.
        */}
        {followers.map(({ avatar_url, login }) => (
          <div className={styles.follower}>
            <img 
              className={styles.followerImg} 
              src={avatar_url} 
              alt={login} />
            <p className={styles.followerLogin}>{login}</p>
          </div>
        ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  followers: getFollowersData(state),
  isLoading: getIsLoading(state),
  error: getError(state)
}))(Followers);