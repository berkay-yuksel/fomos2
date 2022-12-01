import {lazy} from 'react'
import banner from '../styles/Banner.module.css'

/* import PlutoImage from '../assets/plt.webp' */
const Pluto = lazy(()=> import('./Pluto'))

const Banner = () => {
  return (
    <div className={banner.container}>
        <h1 className={banner.first_row}> fomo</h1>
        <h1 className={banner.second_row}>_sapiens</h1>
<div className={banner.pluto_container}><Pluto  />    </div>    
  <p>we fomoed so much that we<br/>have passed to the next level of<br/>evolution as 'fomo-sapiens'.</p>
  <span className={banner.halo}> </span>
    </div>
    
  )
}

export default Banner