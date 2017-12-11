import Immutable from 'immutable';

const ACTION_ACCOUNT_SET_ACCOUNT_ATTRIBUTE = 'ACTION_ACCOUNT_SET_ACCOUNT_ATTRIBUTE';
const ACTION_ACCOUNT_SET_CURRENT_ACCOUNT = 'ACCOUNT_SET_ACCOUNT';

const InitialState = Immutable.fromJS({
  currentAccountId: '',
  list: {
    '0xacd22487a7dd4a52bdccc33ea61e42ede19074f7': {
      name: 'Main Account',
      address: '0xacd22487a7dd4a52bdccc33ea61e42ede19074f7',
      balance: '213 ETC',
      value: '$4473.23 USD',
      transactions: [
        {
          hash: '0xacdHASH01',
          balance: '2.25 ETC',
          value: '$90.67 USD',
          to: '0xacd22487a7dd4a52bdccc33ea61e42ede19074f7',
          from: '0xacd22487a7dd4a52bdccc33ea61e42ede19074f6',
        },
        {
          hash: '0xacdHASH02',
          balance: '1.25 ETC',
          value: '$60.67 USD',
          to: '0xacd22487a7dd4a52bdccc33ea61e42ede19074f6',
          from: '0xacd22487a7dd4a52bdccc33ea61e42ede19074f7',
        },
        {
          hash: '0xacdHASH03',
          balance: '0.25 ETC',
          value: '$7.56 USD',
          to: '0xacd22487a7dd4a52bdccc33ea61e42ede19074f5',
          from: '0xacd22487a7dd4a52bdccc33ea61e42ede19074f7',
        },
      ],
    },
  },
});

export function setAccountAttribute(accountId, attribute) {
  return {
    type: ACTION_ACCOUNT_SET_ACCOUNT_ATTRIBUTE,
    accountId: accountId,
    attribute: attribute,
  };
}

function setCurrentAccount(accountId) {
  return {
    type: ACTION_ACCOUNT_SET_CURRENT_ACCOUNT,
    accountId: accountId,
  };
}

export function selectAccount(accountId) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(setCurrentAccount(accountId));
      return resolve(accountId);
    });
  };
}

// reducer
export default function reducer(state = InitialState, action) {
  console.log(action);

  switch (action.type) {
    //dummy reducer placeholder
    case ACTION_ACCOUNT_SET_ACCOUNT_ATTRIBUTE:
      return state.setIn(['list', action.accountId, 'attribute'], action.attribute);

    case ACTION_ACCOUNT_SET_CURRENT_ACCOUNT:
      return state.set('currentAccountId', action.accountId);
  }

  // default
  return state;
}
