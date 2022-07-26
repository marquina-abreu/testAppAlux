import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerItem = styled.TouchableOpacity`
  flex: 0.5;
  margin-top: ${(props: {ix: number}) => (props.ix % 2 === 1 ? 30 : 0)}px;
  padding-right: ${(props: {ix: number}) =>
    props.ix % 2 === 0 ? '10%' : '0px'};
`;

export const ImgGradientStyled = styled(LinearGradient)`
  width: 100%;
  height: 59px;
  border-radius: 10px;
  padding-horizontal: 12px;
`;

export const ContainerFlat = styled(Animatable.View)`
  flex: 1;
`;
