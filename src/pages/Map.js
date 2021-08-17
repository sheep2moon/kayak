import GoogleMapReact from 'google-map-react';
import React from 'react';
import styled from 'styled-components';

const Map = () => {
  const mapProps = {
    center: {
      lat: 49.91640238898631,
      lng: 20.84348012834942,
    },
    zoom: 11,
  };
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC_4DvPyL9pOBGYc4VMwRgZSZGfrlmaRZM' }}
        defaultCenter={mapProps.center}
        defaultZoom={mapProps.zoom}
      >
        <MapPointer lat={49.91640238898631} lng={20.84348012834942}>
          <p>Kayak</p>
        </MapPointer>
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;

const MapContainer = styled.div`
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  width: 100vw;
`;
const MapPointer = styled.div`
  position: relative;
  > p {
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.primaryDark};
    color: #fff;
    padding: 0.5rem;
    position: absolute;
    top: -4rem;
    right: 50%;
    transform: translateX(50%);
    border-radius: 0.25rem;
    ::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background-color: ${({ theme }) => theme.primaryDark};
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      z-index: -1;
    }
  }
`;
