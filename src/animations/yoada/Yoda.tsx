
import Lottie from 'react-lottie';
import yoadaAnimate from './18720-baby-yoda.json';

const defaultOption = {
  animationData: yoadaAnimate
}

export function Yoada(){
  return (
    <div>
       
   <Lottie height={300} width={300}
    options={defaultOption}
   />
    </div>
  );
}