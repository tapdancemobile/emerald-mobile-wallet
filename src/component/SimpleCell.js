'use strict';

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Colors from '../util/Colors';
import { View, Text } from '../util/DefaultComponents';

export default class SimpleCell extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    value: PropTypes.string,
    subValue: PropTypes.string,
    accessory: PropTypes.string,
    renderRightArrow: PropTypes.bool,
    icon: PropTypes.string,
    renderIcon: PropTypes.func,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    renderRightArrow: false,
  };

  constructor(props) {
    super(props);
  }

  getTextFlex() {
    if (this.props.value || this.props.subValue) {
      return 5;
    } else {
      return 7;
    }
  }

  renderIcon() {
    if (this.props.icon) {
      return (
        <View style={{ flex: 1, marginLeft: 5 }}>
          <Ionicon name={this.props.icon} size={36} color={Colors.Green} style={{ marginLeft: 5 }} />
        </View>
      );
    } else if (this.props.renderIcon) {
      return <View style={{ flex: 1, marginLeft: 5 }}>{this.props.renderIcon()}</View>;
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
    var textFlex = this.getTextFlex();
    return (
      <View style={{ flex: textFlex, marginLeft: 5 }}>
        <Text ellipsizeMode="tail" numberOfLines={1} type="title">
          {this.props.title}
        </Text>
        <View style={{ height: 5 }} />
        <Text type="subheading" ellipsizeMode="middle" numberOfLines={1}>
          {this.props.subTitle}
        </Text>
      </View>
    );
  }

  renderValue() {
    if (this.props.value || this.props.subValue) {
      return (
        <View style={{ flex: 2, marginLeft: 5 }}>
          <Text ellipsizeMode="middle" numberOfLines={1} type="title">
            {this.props.value}
          </Text>
          <View style={{ height: 5 }} />
          <Text type="subheading" ellipsizeMode="tail" numberOfLines={1}>
            {this.props.subValue}
          </Text>
        </View>
      );
    } else {
      return <View />;
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ flexDirection: 'column', height: 60, backgroundColor: Colors.White }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 10 }}>
          {this.renderIcon()}
          {this.renderText()}
          {this.renderValue()}
          {this.renderAccessory()}
        </View>
      </TouchableOpacity>
    );
  }
}
