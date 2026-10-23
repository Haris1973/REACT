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
    <div className='w-full h-screen bg-black'>
      <Navbar />

      <div className='text-white absolute top-32 left-1/2 -translate-x-1/2 text-center font-["Helvetica_Now_Display"] z-10 pointer-events-none'>
        <h3 className='text-7xl font-[700]'>MACBOOK PRO</h3>
        <p className='mt-4 text-lg text-white/60 font-light'>Mind-blowing. Head-turning.</p>
      </div>

      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files={[
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'
        ]} />
        {/* pages = 1 hero screen + 3 content screens */}
        <ScrollControls pages={4}>
          {/* 3D scene — unchanged */}
          <MacContainer />

          {/* Page content scrolls with the 3D lid animation */}
          <Scroll html style={{ width: '100%' }}>
            <div style={{ marginTop: '100vh' }}>
              <Features />
              <Specs />
              <Footer />
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}
export default App