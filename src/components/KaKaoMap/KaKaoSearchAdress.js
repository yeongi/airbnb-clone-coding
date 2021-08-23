import React, { useEffect } from "react";

const KaKaoSearchAdress = (props) => {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
      draggable: false,
    };
    const map = new kakao.maps.Map(container, options);
    //위도, 경도로 변환 및 마커표시
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(props.addr, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        map.setCenter(coords);
      }
    });
  }, [props.addr]);
  return <div id="map" className={props.className}></div>;
};

export default KaKaoSearchAdress;
