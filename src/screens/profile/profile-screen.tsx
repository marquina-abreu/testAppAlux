import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ContainerSafe,
  RowBetweenStyled,
  SpaceView,
} from '../../general/general-styles';
import {HeaderTest} from '../../general/headers';
import {COLORS_TEST} from '../../general/colors';
import {TextGral} from '../../general/general-texts';
import {
  ContainerImg,
  ContainerInfo,
  ContainerItem,
  ImgProStyled,
  ViewAnimated,
} from './styles';
import {getPhotosByUser} from '../discover/discover-actions';
import {ImgGradientStyled} from '../discover/styles';

const styleImg = {
  borderRadius: 10,
};

const styleContent = {
  paddingBottom: 20,
};

const styleImgBack = {
  width: '100%',
  height: 218,
  justifyContent: 'flex-end',
};

const styleFlat = {
  paddingTop: 15,
  paddingHorizontal: 20,
};

const ProfileScreen = () => {
  const navigation = useNavigation();
  const routeParams = useRoute();
  const [photosUser, setPhotosUser] = useState(null);
  const dataUser = routeParams?.params?.dataUser ?? null;

  useEffect(() => {
    handleGetPhotos();
  }, []);

  const handleGetPhotos = async () => {
    try {
      const response = await getPhotosByUser(dataUser?.username);
      setPhotosUser(response);
    } catch (err) {
      // Alert.alert('Error', 'Error.....')
    }
  };

  return (
    <ContainerSafe>
      <HeaderTest navigation={navigation} />
      <FlatList
        style={styleFlat}
        data={photosUser}
        numColumns={2}
        contentContainerStyle={styleContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <ViewAnimated
            useNativeDriver={true}
            animation="fadeInLeft"
            duration={800}
            delay={200}>
            <SpaceView pdBottom={30}>
              <RowBetweenStyled notCenter pdTop={15} pdBottom={20}>
                <ContainerImg>
                  <ImgProStyled
                    source={{
                      uri: dataUser?.profile_image?.medium,
                    }}
                  />
                </ContainerImg>
                <ContainerInfo>
                  <SpaceView pdBottom={5}>
                    <TextGral
                      colorText={COLORS_TEST.BLACK_TEST}
                      sizeText={22}
                      fFont="BO">
                      {dataUser?.first_name ?? ''} {dataUser?.last_name ?? ''}
                    </TextGral>
                  </SpaceView>
                  <TextGral
                    colorText={COLORS_TEST.GRAY_LETTER}
                    sizeText={12}
                    fFont="ME">
                    {dataUser?.bio ?? 'Sin biografía'}
                  </TextGral>
                </ContainerInfo>
              </RowBetweenStyled>
              <SpaceView>
                <TextGral
                  colorText={COLORS_TEST.BLACK_TEST}
                  sizeText={42}
                  fFont="BO">
                  My Photos
                </TextGral>
              </SpaceView>
            </SpaceView>
          </ViewAnimated>
        )}
        renderItem={({item, index}) => (
          <ContainerItem ix={index} key={item?.id}>
            <ViewAnimated
              useNativeDriver={true}
              animation="zoomIn"
              duration={900}
              delay={300}>
              <ImageBackground
                style={styleImgBack}
                imageStyle={styleImg}
                source={{
                  uri: item?.urls?.regular ?? null,
                }}>
                <ImgGradientStyled colors={['#00000000', '#000000B2']}>
                  <SpaceView pdBottom={10}>
                    <TextGral
                      colorText={COLORS_TEST.WHITE_TEST}
                      sizeText={12}
                      fFont="SB">
                      {item?.description ?? 'No hay descripción'}
                    </TextGral>
                  </SpaceView>
                  <TextGral
                    colorText={COLORS_TEST.WHITE_TEST}
                    sizeText={9}
                    fFont="ME">
                    {item?.likes ?? 0} Votos
                  </TextGral>
                </ImgGradientStyled>
              </ImageBackground>
            </ViewAnimated>
          </ContainerItem>
        )}
      />
    </ContainerSafe>
  );
};

export default ProfileScreen;
