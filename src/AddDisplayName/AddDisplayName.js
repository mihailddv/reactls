import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (SomeComponent) => {

  class withDisplayName extends Component {
    render() {
      return (
        <SomeComponent />
      )
    }
  }

  withDisplayName.displayName = `HOC${getDisplayName(SomeComponent)}`;

  return withDisplayName;

}

const getDisplayName = (SomeComponent) => {
  return SomeComponent.displayName || 'Component';
}