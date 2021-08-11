import React, { useEffect } from "react";

//html에는 있지만 js 파일에는 없으므로 객체 구조 할당 해줌
const { kakao } = window;

const KaKaoMap = (props) => {
  useEffect(() => {
    const pos = props.pos;
    const markers = [
      {
        position: new kakao.maps.LatLng(pos.Lat, pos.Lng),
      },
    ];
    const container = document.getElementById("map");
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(pos.Lat, pos.Lng),
      level: 2,
      marker: markers,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);
  return <div id="map" className={props.className}></div>;
};

export default KaKaoMap;
