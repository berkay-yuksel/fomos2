
import banner from '../styles/Banner.module.css'

 import PlutoImage from '../assets/plt.webp' 

 import Pluto from '../components/Pluto'

const Banner = ({textLeave,bannerEnter,onMouseEnter,onMouseLeave}) => {
  return (
  <div onMouseEnter={bannerEnter} onMouseLeave={textLeave} >
      <div className={banner.container}>
        <h1 className={banner.first_row}> fomo</h1>
        <h1 className={banner.second_row}>_sapiens</h1>
<div className={banner.pluto_container}><Pluto  />    </div>    
  <p >we fomoed so much that we<br/>have passed to the next level of<br/>evolution as 'fomo-sapiens'.</p>
  <div className={banner.coming_soon}>coming in January19th.</div>
  <span className={banner.halo}> </span>
    </div>
  </div>
    
  )
}

export default Banner

