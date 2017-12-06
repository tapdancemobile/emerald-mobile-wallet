import Constants from './Constants';
import { appColors, appFonts, fontWeights, Colors } from './Theme';

export const dynamicStyles = props => ({
  flex: props.flex ? (typeof props.flex === 'number' ? props.flex : 1) : 0,
  backgroundColor: getBackgroundColor(props),
  padding: getSpacing(props.padding),
  margin: getSpacing(props.margin),
  paddingHorizontal: getSpacing(props.paddingHorizontal || props.ph),
  paddingVertical: getSpacing(props.paddingVertical || props.pv),
  marginHorizontal: getSpacing(props.marginHorizontal || props.mh),
  marginVertical: getSpacing(props.marginVertical || props.mv),
  paddingLeft: getSpacing(props.paddingLeft || props.pl),
  paddingRight: getSpacing(props.paddingRight || props.pr),
  paddingTop: getSpacing(props.paddingTop || props.pt),
  paddingBottom: getSpacing(props.paddingBottom || props.pb),
  marginLeft: getSpacing(props.marginLeft || props.ml),
  marginRight: getSpacing(props.marginRight || props.mr),
  marginTop: getSpacing(props.marginTop || props.mt),
  marginBottom: getSpacing(props.marginBottom || props.mb),
  borderRadius: getBorderRadius(props),
});

export const dynamicLayoutStyles = props => ({
  flexDirection: props.row ? 'row' : 'column',
});
export const testBorderStyles = props => ({
  borderWidth: props.testBorder ? 1 : null,
  borderColor: props.testBorder ? getThemeColor(props.testBorder) : null,
});

export const textTypeStyles = props => ({
  fontFamily: props.type ? appFonts[props.type].fontFamily : appFonts.default.fontFamily,
  fontSize: props.type ? appFonts[props.type].fontSize : appFonts.default.fontSize,
});

export const dynamicTextStyles = props => ({
  fontFamily: getFontFamily(props),
  color: getColor(props),
  fontSize: getFontSize(props),
  textAlign: getTextAlign(props),
});

export const getFontFamily = props => {
  switch (true) {
    case props.type:
      return appFonts[props.type].fontFamily;
    case props.bold:
      return fontWeights.bold;
    case props.semibold:
      return fontWeights.semibold;
    case props.regular:
      return fontWeights.regular;
    case props.thin:
      return fontWeights.thin;
    default:
      return props.type ? appFonts[props.type].fontFamily : fontWeights.regular;
  }
};
export const getBorderRadius = props => {
  const borderRadius = props.br || props.borderRadius;
  switch (borderRadius) {
    case 'xsmall':
      return 3;
    case 'small':
      return 10;
    case 'med':
      return 12;
    case 'large':
      return 18;
    case 'xlarge':
      return 20;
    default:
      return typeof spacing === 'number' ? spacing : null;
  }
};

export const getBackgroundColor = props => {
  switch (true) {
    case props.greyBackground != null:
      return Colors.Grey10;
    case props.whiteBackground != null:
      return Colors.White;
    case props.backgroundColor != null:
      return getThemeColor(props.backgroundColor);
    default:
      return 'transparent';
  }
};

export const getThemeColor = color => {
  let value = null;
  Object.keys(appColors).forEach(key => {
    if (color === key) value = appColors[key];
  });
  if (!value) {
    Object.keys(Colors).forEach(key => {
      if (color === key) value = Colors[key];
    });
  }
  return value;
};

export const getSpacing = spacing => {
  switch (spacing) {
    case 'xsmall':
      return 3;
    case 'small':
      return 10;
    case 'med':
      return 12;
    case 'large':
      return 18;
    case 'xlarge':
      return 20;
    default:
      return typeof spacing === 'number' ? spacing : null;
  }
};

export const getFontSize = props => {
  const fontSize = typeof props === 'string' ? props : props.fontSize || props.fs;
  switch (fontSize) {
    case 'xsmall':
      return 9;
    case 'small':
      return 11;
    case 'med':
      return 13;
    case 'large':
      return 14;
    case 'xlarge':
      return 24;
    default:
      return props.type ? appFonts[props.type].fontSize : props.fontSize;
  }
};

export const getColor = props => {
  const color = typeof props === 'string' ? props : props.color ? props.color : props.type ? '__type' : null;
  switch (color) {
    case 'red':
      return appColors.primary;
    case 'blue':
      return appColors.secondary;
    // custom
    case 'primary':
      return appColors.grey70;
    case 'secondary':
      return appColors.grey50;
    case '__type':
      return appFonts[props.type].color;
    default:
      return getThemeColor(color);
  }
};

export const getIconColor = props => ({
  color: props.color === 'red' ? Colors.Red : props.color === 'blue' ? Colors.BlueMain : Colors.Grey50,
});

export const getTextAlign = props => {
  switch (true) {
    case props.alignRight:
      return 'right';
    case props.alignLeft:
      return 'left';
    case props.alignCenter:
      return 'center';
    default:
      return props.textAlign || props.ta || 'auto';
  }
};
