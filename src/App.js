
import main from './styles/Main.module.css'

//components
import LeftBar from './components/LeftBar.js'
import RightBar from './components/RightBar.js'
import Banner from './components/Banner.js'
import Filler from './components/Filler.js'
import Story from './components/Story.js'


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