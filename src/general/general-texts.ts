import {Dimensions, Platform} from 'react-native';
import styled from 'styled-components/native';
import {COLORS_TEST} from './colors';

const typeFont = [
  {
    // regular
    key: 'RE',
    name: Platform.OS === 'ios' ? 'MuseoSans-100' : 'MuseoSans_100',
  },
  {
    // semiBold
    key: 'SB',
    name: Platform.OS === 'ios' ? 'MuseoSans-500' : 'MuseoSans_500',
  },
  {
    // bold
    key: 'BO',
    name: Platform.OS === 'ios' ? 'MuseoSans-700' : 'MuseoSans_700',
  },
  {
    // Medium
    key: 'ME',
    name: Platform.OS === 'ios' ? 'MuseoSans-300' : 'MuseoSans_300',
  },
];

export const TextGral = styled.Text`
  font-family: ${(props: {fFont: string}) =>
    typeFont.find(res => res.key === props.fFont)
      ? typeFont.find(res => res.key === props.fFont)?.name
      : 'MuseoSans-100'};
  font-size: ${(props: {sizeText: number}) =>
    Dimensions.get('window').width > 410
      ? props.sizeText + 1
      : Dimensions.get('window').width <= 375
      ? props.sizeText - 1
      : props.sizeText}px;
  text-align: ${(props: {centerText: boolean}) =>
    props.centerText ? 'center' : 'left'};
  text-decoration: ${(props: {underLine: boolean}) =>
    props.underLine ? 'underline' : 'none'};
  text-decoration-color: ${(props: {underLine: boolean}) =>
    props.underLine ? COLORS_TEST.BLACK_TEST : 'transparent'};
  color: ${(props: {colorText: string}) => props.colorText};
`;
