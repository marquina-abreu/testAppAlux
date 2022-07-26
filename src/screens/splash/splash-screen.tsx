import React from 'react';
import {View} from 'react-native';
import {CenterStyled, SpaceView} from '../../general/general-styles';
import {CntAnimated, CntSplash} from './styles';
import {COLORS_TEST} from '../../general/colors';

const SplashScreen = () => {
  return (
    <CntSplash
      colors={[COLORS_TEST.TURQUOISE_TEST, COLORS_TEST.GRAY_DISABLED]}>
      <View>
        <CenterStyled>
        </CenterStyled>
      </View>
    </CntSplash>
  );
};

export default SplashScreen;
