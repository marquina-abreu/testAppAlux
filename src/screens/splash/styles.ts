import styled from 'styled-components/native';
// import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export const ImageLogo = styled.ImageBackground`
  width: 100%;
  justify-content: center;
`;

export const CntSplash = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-center: center;
`;

export const CntAnimated = styled.View`
  align-items: center;
`;
