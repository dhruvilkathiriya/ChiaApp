import {RFValue} from 'react-native-responsive-fontsize';
import {isIOS} from './constants';

export const fontSize = size => RFValue(size);

export const fontFamily = {
  light: isIOS ? 'Sofia Pro Light' : 'Sofia Pro Light Az',
  regular: isIOS ? 'Sofia Pro' : 'Sofia Pro Regular Az',
  medium: isIOS ? 'Sofia Pro Medium' : 'Sofia Pro Medium Az',
  bold: isIOS ? 'Sofia Pro Bold' : 'Sofia Pro Bold Az',
  semiBold: isIOS ? 'Sofia Pro Semi Bold' : 'Sofia Pro Semi Bold Az',
  title: 'IvyMode-Thin',
  titleRegular: 'IvyMode-Regular',
  titleItalic: 'IvyMode-Italic',
};
