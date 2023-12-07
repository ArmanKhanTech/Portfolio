import { Html } from "@react-three/drei";
import StarsCanvas from "./Stars";

const Loader = ({
    wholePage
}) => {
  if(!wholePage){
    return (
      <Html>
        <div className='flex justify-center items-center'>
          <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
        </div>
      </Html>
    );
  } else {
    return (
      <Html>
        <div className='w-screen h-screen absolute justify-center items-center'>
          <StarsCanvas />
        </div>
      </Html>
    );
  }
};

export default Loader;
