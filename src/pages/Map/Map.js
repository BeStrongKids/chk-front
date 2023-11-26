// import React, { useEffect } from 'react';
import React from 'react';

// const { kakao } = window;
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function Maps() {

	const locations = [
		{ title: '카카오', latlng: { lat: 33.450705, lng: 126.570677 } },
		{ title: '생태연못', latlng: { lat: 33.450936, lng: 126.569477 } },
		{ title: '텃밭', latlng: { lat: 33.450879, lng: 126.56994 } },
		{ title: '근린공원', latlng: { lat: 33.451393, lng: 126.570738 } },
	];

    // useEffect(() => {
    //     const container = document.getElementById('myMap');
	// 	const options = {
	// 		center: new kakao.maps.LatLng(33.450701, 126.570667),
	// 		level: 3
	// 	};
    //     const map = new kakao.maps.Map(container, options);
    // }, []);

    return (
        <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '800px', height: '600px' }} level={3}>
			{locations.map((loc, idx) => (
				<MapMarker
					key={`${loc.title}-${loc.latlng}`}
					position={loc.latlng}
					image={{
						src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
						size: { width: 24, height: 35 },
					}}
					title={loc.title}
				/>
			))}
		</Map>
        // <div id='myMap' style={{
        //     width: '500px', 
        //     height: '500px'
        // }}></div>
    );
}
