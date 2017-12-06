'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

import Colors from '../util/Colors';
import Navigation from '../Navigation';
import NavButtons from '../util/NavButtons';
import { View, Text, Divider } from '../util/DefaultComponents';

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
      <View style={{ backgroundColor: Colors.WhiteAlmost }}>
        <Icon.Button
          name="qrcode"
          color={Colors.GreenLight}
          backgroundColor="transparent"
          onPress={() => {}}
          style={{ height: 60 }}
        >
          <Text>Scan Existing Account</Text>
        </Icon.Button>
        <Divider />
        <Icon.Button
          name="pencil"
          color={Colors.GreenLight}
          backgroundColor="transparent"
          onPress={() => {}}
          style={{ height: 60 }}
        >
          <Text>Input Existing Account</Text>
        </Icon.Button>
        <Divider />
        <Icon.Button
          name="magic"
          color={Colors.GreenLight}
          backgroundColor="transparent"
          onPress={() => {}}
          style={{ height: 60 }}
        >
          <Text>Create New Account</Text>
        </Icon.Button>
      </View>
    );
  }
}

export default connect(mapStateToProps)(AddAccountView);
