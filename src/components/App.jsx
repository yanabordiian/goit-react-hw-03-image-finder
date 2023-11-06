import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    isOpenModal: false,
    dataModal: null,
    value: '',
    page: 1,
    error: null, 
  }

  onHandleClickSubmit = value => {
    if (value.trim() === '') {
      alert('Invalid value entered');
      return;
    }
  }
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onHandleClickSubmit}/>
      </div>
    )
  }
}