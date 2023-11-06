import css from './Searchbar.module.css';
import React, { Component } from 'react';

export class Searchbar extends Component {
    state = {
        value: '',
    }
  
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }
  
  onChangeInput = e => {
    const value = e.target.value.toLowerCase();
    const nameInput = e.target.name;
    this.setState({[nameInput]: value,})
  }
  
  render() {
        return (
<header className={css.searchbar}>
  <form className={css.form} onSubmit={this.onFormSubmit}>
    <button type="submit" className={css.button}>
      <span className={css.search}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      placeholder="Search images and photos"
      value={this.state.value}       
      onChange={this.onChangeInput}         
    />
  </form>
</header>
        )
    }
}