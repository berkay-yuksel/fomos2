import { motion } from "framer-motion"
import preloader from '../styles/Preloader.module.css'

const Preloader = () => {
  return (
    <motion.div className={preloader.container}  onAnimationStart={() => document.body.style.setProperty('overflow', 'hidden')}
    onAnimationComplete={() =>
      document.body.style.setProperty('overflow', 'auto')
    } 
     animate={{ y: -2000}}  transition={{ duration: 2, delay: 4,
      ease: [0.87, 0, 0.13, 1] }} >
  <div>Preloader</div>
  <div>Preloader</div>
  <div>Preloader</div>
  <div>Preloader</div>
  <div>Preloader</div>
  <div>Preloader</div>
  <div>Preloader</div>
  <div>Preloader</div>
  <div>Preloader</div>



    </motion.div>
    
  )
}

export default Preloader