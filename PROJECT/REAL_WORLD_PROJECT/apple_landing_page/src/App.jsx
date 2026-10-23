import { Canvas } from '@react-three/fiber'
import './style.css';
import { Environment, ScrollControls, Scroll } from '@react-three/drei'
import MacContainer from './component/MacContainer';
import Navbar from './component/Navbar';
import Features from './component/Features';
import Specs from './component/Specs';
import Footer from './component/Footer';

function App() {
  return (
    <div className='w-full h-screen bg-black overflow-hidden font-sans'>
      {/* Use h-screen and overflow-hidden to lock the main window scroll */}
      <Navbar />

      <Canvas camera={{fov:12 , position: [0,-10,220]}}>
        <Environment files={[
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'
        ]}/>
        
        <ScrollControls pages={3}>
          <MacContainer />
          
          <Scroll html style={{ width: '100%' }}>
            <div className='text-white absolute top-32 left-1/2 -translate-x-1/2 font-["Helvetica_Now_Display"] z-10 text-center w-full'>
              <h3 className='text-5xl md:text-7xl font-[700] tracking-tight'>MACBOOK PRO</h3>
              <p className='mt-2 text-xl md:text-2xl text-gray-400 font-medium'>Mind-blowing. Head-turning.</p>
            </div>
            
            <div style={{ height: '100vh' }}></div>
            
            <Features />
            <Specs />
            <Footer />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App