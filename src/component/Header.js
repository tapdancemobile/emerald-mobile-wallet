'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from '../util/DefaultComponents';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text type="bodyS" style={{ marginLeft: 10, marginTop: 20, marginBottom: 5 }}>
        {this.props.title}
      </Text>
    );
  }
}
