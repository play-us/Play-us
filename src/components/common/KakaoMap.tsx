import React, { useEffect } from 'react';
import { styled } from 'styled-components';

const { kakao } = window;
/* 스크립트로 kakao maps api를 심어서 가져오면 window 전역 객체에 들어가는데 함수형 컴포넌트에서는 바로 인식 못함 */

interface IMapData {
  mapX: number;
  mapY: number;
}

const KakaoMap = ({ mapX, mapY }: IMapData) => {
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(mapX, mapY), // 지도의 중심좌표,
      lever: 3,
    };
    const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  return <Map id="map"></Map>;
};

export default KakaoMap;

const Map = styled.div`
  width: 100%;
  height: 400px;
`;
