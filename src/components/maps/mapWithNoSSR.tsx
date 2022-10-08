
import dynamic from 'next/dynamic';


const MapWithNossr = dynamic(() => import('./map'), {
  ssr: false,
});

type Props={
  lat:number,
  lng:number
}
const MapWithNoSSR = (props:Props) => {
    return ( <MapWithNossr lat={props.lat} lng={props.lng}/> );
}
 
export default MapWithNoSSR;