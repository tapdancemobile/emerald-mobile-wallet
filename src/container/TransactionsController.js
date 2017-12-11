'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ListView } from 'react-native';
import { View, Text, ScrollView, Divider } from '../util/DefaultComponents';
import Colors from '../util/Colors';
import Constants from '../util/Constants';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Navigation from '../Navigation';
import SimpleCell from '../component/SimpleCell';
import Header from '../component/Header';

export default class TransactionsController extends Component {
  static propTypes = {
    account: PropTypes.object.isRequired,
    transactions: PropTypes.any.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.transactions),
    };
  }

  componentWillReceiveProps(newProps) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(newProps.transactions),
    };
  }

  getListOrPlaceholder() {
    if (this.props.transactions.length === 0) {
      return <Text style={styles.introText}>{'No Tokens'}</Text>;
    } else {
      return (
        <ListView
          style={[{ flex: 1, margin: 5 }]}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderSeparator={(sectionId, rowId, adjacentRowHighlighted) => {
            return <View key={`sep:${sectionId}:${rowId}`} style={{ height: 1 }} />;
          }}
          renderSectionHeader={() => {
            return <Header key={'header'} title="Transactions" />;
          }}
          renderRow={(rowData, sectionID: number, rowID: number, highlightRow) => {
            const address = this.props.account.get('address').toLowerCase();
            const to = rowData.get('to').toLowerCase();
            const from = rowData.get('from').toLowerCase();
            const iconName = address === from ? 'ios-remove-outline' : 'ios-add-outline';
            const iconColor = address === from ? Colors.RedFlat : Colors.GreenLight;

            return (
              <SimpleCell
                title={rowData.get('to')}
                subTitle={rowData.get('from')}
                value={rowData.get('balance')}
                subValue={rowData.get('value')}
                renderIcon={() => {
                  return <Ionicon name={iconName} size={36} color={iconColor} style={{ marginLeft: 5 }} />;
                }}
                renderRightArrow={true}
              />
            );
          }}
        />
      );
    }
  }

  render() {
    return <ScrollView style={{ flex: 1 }}>{this.getListOrPlaceholder()}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
  },
  qr: {
    padding: 10,
    marginTop: 20,
  },
  deleteText: {
    textAlign: 'right',
  },
  changePinText: {
    textAlign: 'left',
    color: 'green',
  },
  actionsContainer: {
    marginTop: 40,
    flexDirection: 'row',
  },
  actionButtonContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: Colors.BlackAlmost,
    marginBottom: 5,
  },
  nameInput: {
    fontSize: 16,
    color: Colors.BlackAlmost,
    backgroundColor: Colors.Red,
    width: 100,
  },
  address: {
    color: Colors.Grey50,
    fontSize: 14,
  },
  balance: {
    color: Colors.Grey50,
    fontSize: 14,
  },
  introText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 60,
  },
  header: {
    fontSize: 14,
    color: Colors.BlackAlmost,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
});
