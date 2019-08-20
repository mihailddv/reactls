import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

import { getIsLoading, getData, getError } from '../../modules/User/reducer.js';

class UserInfo extends PureComponent {  
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю

    const { isLoading, data, error } = this.props;

    if ( isLoading ) {
      return (
        <p>Данные загружаются</p>
      )
    } else if ( error ) {
      return (
        <p>Ошибка</p>
      )
    }

    return (
      <div className={styles.root}>
        {/* Отобразите данные о пользователе */}
        <div className={styles.imageWrapper}>
          {data.avatar_url && (
            <img
              className={styles.image}
              src={data.avatar_url}
              alt={data.name}
            />
          )}
        </div>
        <div>
          <p className="t-user-name">{data.name}</p>
          <p className="t-user-bio">{data.bio}</p>
        </div>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state),
  error: getError(state)
}))(UserInfo);
