import React, { Component } from 'react';
import DateMessage from '../Container/DateMessage';
import Search from '../Container/Search';

class OptionDom extends Component {
  render() {
    return (
      <div>
        <DateMessage />
        <Search />
      </div>
    );
  }
}

export default OptionDom;
