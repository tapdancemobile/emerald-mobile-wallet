import Immutable from 'immutable';

const ACTION_ACCOUNT_SET_ACCOUNT_ATTRIBUTE = 'ACTION_ACCOUNT_SET_ACCOUNT_ATTRIBUTE';

const InitialState = Immutable.fromJS({
  currentAccountId: '',
});

export function setAccountAttribute(accountId, attribute) {
  return {
    type: ACTION_ACCOUNT_SET_ACCOUNT_ATTRIBUTE,
    accountId: accountId,
    attribute: attribute,
  };
}

// reducer
export default function reducer(state = InitialState, action) {
  console.log(action);

  switch (action.type) {
    //dummy reducer placeholder
    case ACTION_ACCOUNT_SET_ACCOUNT_ATTRIBUTE:
      return state.setIn(['list', action.accountId, 'attribute'], action.attribute);
  }

  // default
  return state;
}
