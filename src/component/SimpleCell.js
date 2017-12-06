'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Colors from '../util/Colors';
import { View, Text } from '../util/DefaultComponents';

export default class SimpleCell extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    accessory: PropTypes.string,
    renderRightArrow: PropTypes.bool,
    icon: PropTypes.string,
  };

  static defaultProps = {
    renderRightArrow: false,
  };

  constructor(props) {
    super(props);
  }

  renderIcon() {
    if (this.props.icon) {
      return (
        <View style={{ flex: 1, marginLeft: 5 }}>
          <Ionicon name={this.props.icon} size={36} color={Colors.Green} style={{ marginLeft: 5 }} />
        </View>
      );
    } else {
      return <View />;
    }
  }

  renderAccessory() {
    if (this.props.accessory || this.props.renderRightArrow === true) {
      const icon = this.props.renderRightArrow ? 'ios-arrow-dropright-outline' : this.props.accessory;
      return (
        <View style={{ flex: 1 }}>
          <Ionicon name={icon} size={24} color={Colors.Green} style={{ marginLeft: 5 }} />
        </View>
      );
    } else {
      return <View />;
    }
  }

  renderText() {
    return (
      <View style={{ flex: 7, marginLeft: 5 }}>
        <Text type="title">{this.props.title}</Text>
        <View style={{ height: 5 }} />
        <Text type="subheading">{this.props.subTitle}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flexDirection: 'column', height: 60, backgroundColor: Colors.WhiteAlmost }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 10, backgroundColor: Colors.Grey05 }}>
          {this.renderIcon()}
          {this.renderText()}
          {this.renderAccessory()}
        </View>
      </View>
    );
  }
}

//var styles = StyleSheet.create({
//  container: {
//    backgroundColor: Colors.White,
//    flexDirection: 'row',
//    paddingHorizontal: Styles.padSide,
//    alignItems: 'center',
//  },
//  disabledOpacity: {
//    flexDirection: 'row',
//    flex: 1,
//    opacity: 0.5,
//  },
//  flex: {
//    flex: 1,
//  },
//  leftCenterContent: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    flex: 1,
//  },
//  accessoryContent: {
//    flexDirection: 'row',
//    alignItems: 'center',
//  },
//  accessoryItem: {
//    justifyContent: 'center',
//    alignItems: 'center',
//    marginLeft: Styles.padMiddle,
//  },
//  rightArrowStyle: {
//    marginLeft: Styles.padMiddle,
//  },
//  leftItem: {
//    justifyContent: 'center',
//    alignItems: 'center',
//    marginRight: Styles.padMiddle,
//  },
//  content: {
//    flexDirection: 'row',
//    flex: 1,
//    justifyContent: 'space-between',
//    alignItems: 'center',
//  },
//
//  title: {
//    fontFamily: Constants.FontRegular,
//    fontSize: Styles.fontSizeMed,
//    color: Colors.Grey70,
//    textAlign: 'left',
//  },
//  secondaryContainer: {
//    marginTop: 4,
//  },
//  secondaryText: {
//    fontFamily: Constants.FontRegular,
//    fontSize: Styles.fontSizeSmall,
//    color: Colors.Grey50,
//  },
//  value: {
//    fontFamily: Constants.FontRegular,
//    fontSize: Styles.fontSizeMed,
//    textAlign: 'right',
//    color: Colors.Grey50,
//  },
//});
