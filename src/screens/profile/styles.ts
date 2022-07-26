import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const ContainerItem = styled.TouchableOpacity`
  flex: 0.5;
  margin-top: ${(props: {ix: number}) => (props.ix % 2 === 1 ? 30 : 0)}px;
  padding-right: ${(props: {ix: number}) =>
    props.ix % 2 === 0 ? '10%' : '0px'};
`;

export const ContainerImg = styled.View`
  width: 21%;
`;

export const ContainerInfo = styled.View`
  width: 77%;
`;

export const ImgProStyled = styled.Image`
  width: 63px;
  height: 63px;
  border-radius: 100px;
`;

export const ViewAnimated = styled(Animatable.View)``;
