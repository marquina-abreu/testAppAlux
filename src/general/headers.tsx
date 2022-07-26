import React from 'react';
import {isIphoneX} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import LogoMenu from '../assets/images/Union.svg';
import LogoClose from '../assets/images/Vector.svg';
import {COLORS_TEST} from './colors';
import {TextGral} from './general-texts';

const LeftStyled = styled.View`
  width: 12%;
`;

const BodyStyled = styled.View`
  width: 76%;
  padding-horizontal: 2px;
  align-items: center;
`;

const RightStyled = styled.View`
  width: 12%;
  align-items: flex-end;
`;

const HeaderStyled = styled.View`
  background-color: transparent;
  align-items: center;
  border-bottom-width: 0px;
  elevation: 0;
  width: 100%;
  height: 50px;
  padding-horizontal: 15px;
  flex-direction: row;
`;

const HeaderFloatStyled = styled.View`
  background-color: transparent;
  align-items: center;
  border-bottom-width: 0px;
  background-color: rgba(100, 100, 100, 0.06);
  elevation: 0;
  width: 100%;
  height: ${isIphoneX() ? 95 : 80}px;
  align-items: ${!isIphoneX() ? 'center' : 'flex-end'};
  padding-horizontal: 15px;
  padding-vertical: 10px;
  flex-direction: row;
  position: absolute;
  z-index: 1000;
`;

const BtnBackStyled = styled.TouchableOpacity`
  padding-right: 20px;
  padding-vertical: 2px;
`;

interface PropsHeader {
  navigation: {
    goBack: any;
  };
  noBack?: boolean;
  noLeft?: boolean;
  title?: string;
  renderRight?: any;
  backColor?: string;
}

export const HeaderTest = ({
  navigation,
  title,
  noLeft,
  noBack,
  renderRight = null,
  backColor = COLORS_TEST.BLACK_TEST,
}: PropsHeader) => {
  return (
    <HeaderStyled>
      <LeftStyled>
        {!noLeft ? (
          <BtnBackStyled onPress={() => (!noBack ? navigation.goBack() : null)}>
            {noBack ? <LogoMenu /> : <LogoClose color={backColor} />}
          </BtnBackStyled>
        ) : null}
      </LeftStyled>
      <BodyStyled>
        {title ? (
          <TextGral
            centerText
            colorText={COLORS_TEST.BLACK_TEST}
            sizeText={24}
            fFont="BO">
            {title}
          </TextGral>
        ) : null}
      </BodyStyled>
      <RightStyled>{renderRight ? renderRight() : null}</RightStyled>
    </HeaderStyled>
  );
};

export const HeaderFloatTest = ({
  navigation,
  title,
  noLeft,
  noBack,
  renderRight = null,
  backColor = COLORS_TEST.BLACK_TEST,
}: PropsHeader) => {
  return (
    <HeaderFloatStyled>
      <LeftStyled>
        {!noLeft ? (
          <BtnBackStyled onPress={() => (!noBack ? navigation.goBack() : null)}>
            {noBack ? <LogoMenu /> : <LogoClose color={backColor} />}
          </BtnBackStyled>
        ) : null}
      </LeftStyled>
      <BodyStyled>
        {title ? (
          <TextGral
            centerText
            colorText={COLORS_TEST.BLACK_TEST}
            sizeText={24}
            fFont="BO">
            {title}
          </TextGral>
        ) : null}
      </BodyStyled>
      <RightStyled>{renderRight ? renderRight() : null}</RightStyled>
    </HeaderFloatStyled>
  );
};