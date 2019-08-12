// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { Component } from 'react';
import styles from './Mail.module.css';

class Mail extends Component {

  render() {

    const { to, from, body } = this.props;
    const typemail = from ? 'from' : 'to';

    return (

      <div className={styles.container}>
        <p className="t-mail-to">
          { typemail === 'to' ? 'To: ' : 'From: '} 
          <b>{ to || from }</b>
        </p>
        <p className="t-mail-body">
          { body }
        </p>
      </div>

    )

  }

}

export default Mail;