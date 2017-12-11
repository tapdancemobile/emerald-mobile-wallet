'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Colors from '../util/Colors';
import Navigation from '../Navigation';
import NavButtons from '../util/NavButtons';
import SimpleCell from '../component/SimpleCell';
import Header from '../component/Header';
import { View, Text, ScrollView, Divider } from '../util/DefaultComponents';

// state map
function mapStateToProps(state) {
  return {};
}

class AddAccountView extends Component {
  static title = 'Add Account';
  static propTypes = {};

  constructor(props) {
    super(props);

    props.navigator.setButtons({
      rightButtons: [NavButtons().close],
    });

    props.navigator.setOnNavigatorEvent(event => {
      if (event.id === NavButtons().close.id) {
        Navigation.dismissModal();
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <Header title="Options" />
        <SimpleCell
          title="Scan Existing Account"
          subTitle="Scan existing account's QR code to import it"
          icon="ios-qr-scanner-outline"
          renderRightArrow={true}
        />
        <Divider />
        <SimpleCell
          title="Enter Existing Account Details"
          subTitle="Enter the details for an existing account to import it"
          icon="ios-create-outline"
          renderRightArrow={true}
        />
        <Divider />
        <SimpleCell
          title="Create New Account"
          subTitle="Securely generate a new account on this device"
          icon="ios-color-wand-outline"
          renderRightArrow={true}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(AddAccountView);
