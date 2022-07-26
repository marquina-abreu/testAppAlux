import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {COLORS_TEST} from './colors';

const typeFont = [
  {
    // regular
    key: 'RE',
    name: 'MuseoSans-100',
  },
  {
    // semiBold
    key: 'SB',
    name: 'MuseoSans-500',
  },
  {
    // bold
    key: 'BO',
    name: 'MuseoSans-700',
  },
  {
    // Medium
    key: 'ME',
    name: 'MuseoSans-300',
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
