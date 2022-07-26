import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Container, RowStyled, SpaceView} from '../../general/general-styles';
import {HeaderFloatTest} from '../../general/headers';
import {COLORS_TEST} from '../../general/colors';
import {TextGral} from '../../general/general-texts';
import {ImgStyled, InfoStyled, ViewAnimated} from './style';

const styleImgBack = {
  width: '100%',
  height: '100%',
  justifyContent: 'flex-end',
};

const styleImg = {
  width: '100%',
};

const DetailPost = () => {
  const navigation = useNavigation();
  const routeParams = useRoute();
  const dataPost = routeParams?.params?.dataPost ?? null;
  return (
    <Container>
      <HeaderFloatTest
        backColor={COLORS_TEST.WHITE_TEST}
        navigation={navigation}
      />
      <ImageBackground
        style={styleImgBack}
        imageStyle={styleImg}
        source={{
          uri: dataPost?.urls?.full,
        }}>
        <InfoStyled colors={['#00000033', '#000000B2']}>
          <ViewAnimated
            useNativeDriver={true}
            animation="fadeInLeft"
            duration={800}
            delay={200}>
            <SpaceView pdBottom={10}>
              <TextGral
                colorText={COLORS_TEST.WHITE_TEST}
                sizeText={42}
                fFont="SB">
                {dataPost?.description ?? 'No hay descripción'}
              </TextGral>
              <SpaceView pdTop={7}>
                <TextGral
                  colorText={COLORS_TEST.WHITE_TEST}
                  sizeText={14}
                  fFont="RE">
                  {dataPost?.likes ?? 0} likes
                </TextGral>
              </SpaceView>
            </SpaceView>
          </ViewAnimated>
          <ViewAnimated
            useNativeDriver={true}
            animation="fadeInUp"
            duration={900}
            delay={300}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Profile', {
                  dataUser: dataPost?.user,
                })
              }>
              <SpaceView pdTop={15} pdBottom={10}>
                <RowStyled notCenter>
                  <SpaceView pdRight={10}>
                    <ImgStyled
                      source={{
                        uri: dataPost?.user?.profile_image?.medium,
                      }}
                    />
                  </SpaceView>
                  <View>
                    <SpaceView pdBottom={4}>
                      <TextGral
                        colorText={COLORS_TEST.WHITE_TEST}
                        sizeText={12}
                        fFont="RE">
                        {dataPost?.user?.first_name ?? ''}{' '}
                        {dataPost?.user?.last_name ?? ''}
                      </TextGral>
                    </SpaceView>
                    <TextGral
                      colorText={COLORS_TEST.WHITE_TEST}
                      sizeText={10}
                      fFont="RE">
                      View profile
                    </TextGral>
                  </View>
                </RowStyled>
              </SpaceView>
            </TouchableOpacity>
          </ViewAnimated>
        </InfoStyled>
      </ImageBackground>
    </Container>
  );
};

export default DetailPost;
