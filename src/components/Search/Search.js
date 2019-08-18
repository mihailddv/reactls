// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.css';
import { searchRequest } from '../../actions';
import ShowPreview from '../ShowPreview';
import { getShows, getIsLoading, getError } from '../../reducers/search';

class Search extends Component {
  state = { 
    value: ''
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmit = () => {
    const { value } = this.state;
    const { searchRequest } = this.props;

    if (value) {
      searchRequest(value);
    }
  };

  render() {
    const { shows, isLoading, error } = this.props;

    if (error) return <p>Произошла сетевая ошибка</p>

    return (
      <div>
        <div className={styles.previewList}>
          <input
            className={`${styles.input} t-input`}
            placeholder="Название сериала"
            type="text"
            onChange={this.onChange}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} t-search-button`}
              onClick={this.onSubmit}
            >
              Найти
            </button>
          </div>
          {isLoading && <div>Идет поиск...</div>}
        </div>
        <div className={`${styles.searchPanel} t-search-result`}>
          {shows.map(({ image, name, id, summary }) => (
            <ShowPreview
              key={id}
              image={image}
              name={name}
              id={id}
              summary={summary}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: getShows(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
