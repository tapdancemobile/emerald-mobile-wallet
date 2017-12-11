'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
import { View, Text, ScrollView, Divider } from '../util/DefaultComponents';
import Blocky from 'react-native-blockies';

import { connect } from 'react-redux';
import { selectAccount } from '../reducer/accounts';

import Navigation from '../Navigation';
import NavButtons from '../util/NavButtons';
import SimpleCell from '../component/SimpleCell';
import Header from '../component/Header';

import Colors from '../util/Colors';

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

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.accounts),
    };

    props.navigator.setButtons({
      rightButtons: [NavButtons().add],
    });

    props.navigator.setOnNavigatorEvent(event => {
      if (event.id === NavButtons().add.id) {
        Navigation.showModal('AddAccountController', { title: 'Add Account' });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.accounts),
    });
  }

  render() {
    return <ScrollView>{this.getAccountsOrPlaceholder()}</ScrollView>;
  }

  getBlockyOrNothing(address) {
    if (address) {
      return (
        <Blocky
          blockies={address} //string content to generate icon
          size={40} // blocky icon size
          style={{
            width: 40,
            height: 40,
          }}
        />
      );
    } else {
      return null;
    }
  }

  getAccountsOrPlaceholder() {
    if (this.props.accounts.length === 0) {
      return <Text type="bodyL">{"Tap '+' to import/create an Ethereum Classic Address"}</Text>;
    } else {
      return (
        <ListView
          style={{ flex: 1 }}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderSeparator={(sectionId, rowId) => {
            return <View key={`sep:${sectionId}:${rowId}`} style={{ height: 1 }} />;
          }}
          renderSectionHeader={() => {
            return <Header key={'header'} title="Accounts" />;
          }}
          renderRow={(rowData, sectionID: number, rowID: number, highlightRow) => {
            return (
              <SimpleCell
                title={rowData.get('name')}
                subTitle={rowData.get('address')}
                value={rowData.get('balance')}
                subValue={rowData.get('value')}
                renderIcon={() => {
                  return this.getBlockyOrNothing(rowData.get('address'));
                }}
                renderRightArrow={true}
                onPress={() => {
                  highlightRow(sectionID, rowID);
                  this.props.dispatch(selectAccount(rowData.get('address'))).then(account => {
                    Navigation.push(this.props.navigator, 'AccountController');
                  });
                }}
              />
            );
          }}
        />
      );
    }
  }
}

export default connect(mapStateToProps)(AccountsController);
