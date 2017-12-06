import React from 'react';
import { Navigation } from 'react-native-navigation';

import AccountsController from './container/AccountsController';
import AddAccountController from './container/AddAccountController';

export const screensMap = {
  AccountsController,
  AddAccountController,
};

export function registerScreens(store, Provider) {
  for (let key in screensMap) {
    if (screensMap.hasOwnProperty(key)) {
      const ViewObject = screensMap[key];
      Navigation.registerComponent(key.toString(), () => ViewObject, store, Provider);
    }
  }
}

export default screensMap;
