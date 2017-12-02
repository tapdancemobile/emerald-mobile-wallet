'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Navigation from '../Navigation';

// state map
function mapStateToProps(state) {
  let accounts = state.accounts.get('list');
  let list = [];
  if (accounts) {
    list = accounts.valueSeq().toArray();
  }

  return {
    accounts: list,
  };
}

class AccountsController extends Component {
  static title = 'Accounts';
  static propTypes = {
    accounts: PropTypes.any.isRequired,
  };

  render() {
    return <Text>Accounts</Text>;
  }
}

export default connect(mapStateToProps)(AccountsController);
