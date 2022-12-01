import {lazy} from 'react'

import main from './styles/Main.module.css'

//components
import LeftBar from './components/LeftBar.js'
import RightBar from './components/RightBar.js'
import Banner from './components/Banner.js'

const Story = lazy(()=> import('./components/Story.js'))
const Filler = lazy(()=> import('./components/Filler.js'))


const App = () => {
  return (
    <div className={main.container}>
<div className={main.top_layer}>
  <LeftBar/>

  <RightBar />
</div>
<div className={main.text_layer}>
<Banner/>
<Filler/>
<Story/>
</div>

    </div>
  )
}

export default App