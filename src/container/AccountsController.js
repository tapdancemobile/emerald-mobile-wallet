'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from '../util/DefaultComponents';
import { connect } from 'react-redux';

import Navigation from '../Navigation';
import NavButtons from '../util/NavButtons';
import SimpleCell from '../component/SimpleCell';

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

  constructor(props) {
    super(props);

    props.navigator.setButtons({
      rightButtons: [NavButtons().add],
    });

    props.navigator.setOnNavigatorEvent(event => {
      if (event.id === NavButtons().add.id) {
        Navigation.showModal('AddAccountController', { title: 'Add Account' });
      }
    });
  }

  render() {
    return (
      <SimpleCell title="Test Title" subTitle="Test SubTitle" accessory="ios-add-outline" icon="ios-add-outline" />
    );
  }
}

export default connect(mapStateToProps)(AccountsController);
