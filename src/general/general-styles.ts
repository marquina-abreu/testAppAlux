import styled from 'styled-components/native';
import {COLORS_TEST} from './colors';

export const ContainerSafe = styled.SafeAreaView`
  flex: ${(props: {topSafe: boolean}) => (props.topSafe ? 0 : 1)};
  background-color: ${(props: {colorBack: string}) =>
    props.colorBack ? props.colorBack : COLORS_TEST.WHITE_TEST};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS_TEST.WHITE_TEST};
  align-items: ${(props: {centerActive: boolean}) =>
    props.centerActive ? 'center' : 'flex-start'};
  padding-horizontal: ${(props: {pdHorizontal: number}) =>
    props.pdHorizontal ? props.pdHorizontal : 0}px;
`;

export const SpaceView = styled.View`
  padding-top: ${(props: {pdTop: number}) => (props.pdTop ? props.pdTop : 0)}px;
  padding-bottom: ${(props: {pdBottom: number}) =>
    props.pdBottom ? props.pdBottom : 0}px;
  padding-left: ${(props: {pdLeft: number}) =>
    props.pdLeft ? props.pdLeft : 0}px;
  padding-right: ${(props: {pdRight: number}) =>
    props.pdRight ? props.pdRight : 0}px;
  margin-top: ${(props: {mgTop: number}) => (props.mgTop ? props.mgTop : 0)}px;
  margin-bottom: ${(props: {mgBottom: number}) =>
    props.mgBottom ? props.mgBottom : 0}px;
  border-bottom-width: ${(props: {bottomWidth: boolean}) =>
    props.bottomWidth ? 1 : 0}px;
  border-bottom-color: ${COLORS_TEST.GRAY_DISABLED};
  align-items: ${(props: {centerActive: boolean}) =>
    props.centerActive ? 'center' : 'flex-start'};
`;

export const RowStyled = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: ${(props: {pdTop: number}) => (props.pdTop ? props.pdTop : 0)}px;
  padding-bottom: ${(props: {pdBottom: number}) =>
    props.pdBottom ? props.pdBottom : 0}px;
  align-items: ${(props: {notCenter: boolean}) =>
    props.notCenter ? 'flex-start' : 'center'};
  border-bottom-width: ${(props: {bottomWidth: boolean}) =>
    props.bottomWidth ? 1 : 0}px;
  border-bottom-color: ${COLORS_TEST.GRAY_DISABLED};
`;

export const RowBetweenStyled = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: ${(props: {pdTop: number}) => (props.pdTop ? props.pdTop : 0)}px;
  padding-bottom: ${(props: {pdBottom: number}) =>
    props.pdBottom ? props.pdBottom : 0}px;
  align-items: ${(props: {notCenter: boolean}) =>
    props.notCenter ? 'flex-start' : 'center'};
  justify-content: space-between;
  border-bottom-width: ${(props: {bottomWidth: boolean}) =>
    props.bottomWidth ? 1 : 0}px;
  border-bottom-color: ${COLORS_TEST.GRAY_DISABLED};
`;

export const RowAroundStyled = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: ${(props: {pdTop: number}) => (props.pdTop ? props.pdTop : 0)}px;
  padding-bottom: ${(props: {pdBottom: number}) =>
    props.pdBottom ? props.pdBottom : 0}px;
  align-items: ${(props: {notCenter: boolean}) =>
    props.notCenter ? 'flex-start' : 'center'};
  justify-content: space-around;
  border-bottom-width: ${(props: {bottomWidth: boolean}) =>
    props.bottomWidth ? 1 : 0}px;
  border-bottom-color: ${COLORS_TEST.GRAY_DISABLED};
`;

export const CenterStyled = styled.View`
  align-items: center;
`;
