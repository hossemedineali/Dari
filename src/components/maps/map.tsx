import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

export function ChangeView({ coords }:any) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

type Props={
  lat:number,
  lng:number
}

export default function Map(props :Props) {

  const center = [props.lat, props.lng];

  return (
    <MapContainer  zoom={12} style={{ height: '100%',width:'100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     
        <Marker position={[props.lat, props.lng]} />
      
      <ChangeView coords={center} />
    </MapContainer>
  );
}
