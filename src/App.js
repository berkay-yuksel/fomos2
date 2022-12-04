import {Suspense,lazy,useState,useEffect} from "react"
import main from './styles/Main.module.css'

import {motion} from "framer-motion"

//components
import Banner from './components/Banner.js'

import Preloader from './components/Preloader.js'
const Story = lazy(()=>import('./components/Story.js'))
const Filler = lazy(()=>import('./components/Filler.js'))
const LeftBar = lazy(()=>import('./components/LeftBar.js'))

const App = () => {
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      height: 300,
      width: 300,
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
      color:"transparent",
      background: "radial-gradient(50% 50% at 50% 50%,rgba(22,184,243,.5) 0,rgba(22,0,0,.1) 80%,rgba(255,0,0,0) 100%)",
    
    },
    text: {
      height: 300,
      width: 300,
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
      background: "radial-gradient(50% 50% at 50% 50%,rgba(157,251,24,.5) 0,rgba(22,0,0,.1) 80%,rgba(255,0,0,0) 100%)",
      mixBlendMode: "difference",
      color:"transparent"
    },
    image: {
      height: "7vw",
      width: "7vw",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      color: "black"
    },
    banner: {
      height: "1000px",
      width: "1000px",
      x: mousePosition.x - 500,
      y: mousePosition.y - 500,
      zIndex:"-2",
      background: "radial-gradient(50% 50% at 50% 50%,rgba(157,251,24,.5) 0,rgba(22,0,0,.1) 80%,rgba(255,0,0,0) 100%)",
      color:"transparent"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const imageEnter = () => setCursorVariant("image");
  const bannerEnter = () => setCursorVariant("banner");
  const textLeave = () => setCursorVariant("default");


return (
  
<div>
<Preloader />
<Suspense fallback={<div>loading..</div>}>
 <div>
     <div >
       
        <div className={main.text_layer}>
          
        <Banner bannerEnter={bannerEnter}  textLeave={textLeave} onMouseEnter onMouseLeave  />
        <Filler textEnter={textEnter} textLeave={textLeave} onMouseEnter onMouseLeave  />
        
        <Story imageEnter={imageEnter} textLeave={textLeave} onMouseEnter onMouseLeave/>

       
    
        </div>
        
        <motion.div
        className={main.cursor}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', restDelta: 0.1 }}
      > explore </motion.div>
   


            </div>
     </div>
            </Suspense>
</div>
)
}

export default App