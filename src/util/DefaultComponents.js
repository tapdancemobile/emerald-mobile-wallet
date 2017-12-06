import glamorous from 'glamorous-native';
import {
  dynamicStyles,
  getBorderRadius,
  getBackgroundColor,
  getSpacing,
  getFontSize,
  getThemeColor,
  getTextAlign,
  dynamicTextStyles,
  textTypeStyles,
  testBorderStyles,
  dynamicLayoutStyles,
} from './StyleUtil';

export const View = glamorous.view({}, testBorderStyles, dynamicLayoutStyles, dynamicStyles);

export const ScrollView = glamorous.scrollView({}, testBorderStyles, dynamicLayoutStyles, dynamicStyles);

export const Text = glamorous.text({}, textTypeStyles, dynamicTextStyles, dynamicStyles);

export const Divider = glamorous.view({}, props => ({ height: props.height ? props.height : 1 }), dynamicStyles);

export const TextInput = glamorous.textInput({}, textTypeStyles, dynamicTextStyles, dynamicStyles);

export const TouchableOpacity = glamorous.touchableOpacity({}, testBorderStyles, dynamicLayoutStyles, dynamicStyles);
