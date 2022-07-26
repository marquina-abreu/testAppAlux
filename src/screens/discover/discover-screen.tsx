import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ImageBackground} from 'react-native';
import {HeaderTest} from '../../general/headers';
import {COLORS_TEST} from '../../general/colors';
import {ContainerSafe, SpaceView} from '../../general/general-styles';
import {TextGral} from '../../general/general-texts';
import {ContainerFlat, ContainerItem, ImgGradientStyled} from './styles';
import {getPhotos} from './discover-actions';

const styleImgBack = {
  width: '100%',
  height: 218,
  justifyContent: 'flex-end',
};

const styleContent = {
  paddingBottom: 20,
};

const styleImg = {
  borderRadius: 10,
};

const styleFlat = {
  paddingTop: 15,
  paddingHorizontal: 20,
};

const DiscoverScreen = () => {
  const navigation = useNavigation();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const res = await getPhotos();
      setPost(res);
    } catch (err) {
      console.log('err ', err);
    }
  };

  return (
    <ContainerSafe>
      <HeaderTest noBack navigation={navigation} title="Discover" />
      <ContainerFlat
        useNativeDriver={true}
        animation="zoomIn"
        duration={900}
        delay={200}>
        <FlatList
          style={styleFlat}
          data={posts}
          numColumns={2}
          contentContainerStyle={styleContent}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ContainerItem
              onPress={() =>
                navigation.navigate('DetailPost', {
                  dataPost: item,
                })
              }
              ix={index}
              key={item?.id}>
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
            </ContainerItem>
          )}
        />
      </ContainerFlat>
    </ContainerSafe>
  );
};

export default DiscoverScreen;
