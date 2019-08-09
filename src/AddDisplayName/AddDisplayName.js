import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (displayName) => {

  class addLoggedInUser extends displayName {
    render() {
      
    }
  }
  
  return addLoggedInUser
}


// export const withDisplayName = () => {}
