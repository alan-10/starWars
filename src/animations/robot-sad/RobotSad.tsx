import Lottie from 'react-lottie';
import robotAnimate from './robot-sad-animation.json';
const optionsDefault = {
  animationData: robotAnimate
}

export function RobotSad() {
  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Você ainda não tem favoritos</h3>
      <Lottie
        options={optionsDefault}
        width={400}
        height={400}
      />
    </div>
  );
} 