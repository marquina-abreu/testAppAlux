import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerItem = styled.TouchableOpacity`
  flex: 0.5;
  margin-top: ${(props: {ix: number}) => (props.ix % 2 === 1 ? 30 : 0)}px;
  padding-right: ${(props: {ix: number}) =>
    props.ix % 2 === 0 ? '10%' : '0px'};
`;

export const InfoStyled = styled(LinearGradient)`
  width: 100%;
  height: 268px;
  justify-content: space-between;
  padding-vertical: 24px;
  padding-horizontal: 25px;
`;

export const ImgStyled = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 100px;
`;

export const ViewAnimated = styled(Animatable.View)``;
