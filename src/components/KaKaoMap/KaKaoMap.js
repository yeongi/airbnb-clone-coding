import React, { useEffect } from "react";

//html에는 있지만 js 파일에는 없으므로 객체 구조 할당 해줌
const { kakao } = window;

const KaKaoMap = (props) => {
  const pos = props.pos;
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(pos.Lat, pos.Lng),
      level: 6,
    };

    const map = new kakao.maps.Map(mapContainer, mapOptions);

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(pos.Lat, pos.Lng),
    });

    marker.setMap(map);
  }, [pos]);
  return <div id="map" className={props.className}></div>;
};

export default KaKaoMap;
