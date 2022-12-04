import filler from '../styles/Filler.module.css'



const Filler = ({textLeave,textEnter,onMouseEnter,onMouseLeave}) => {
  return (
<div className={filler.container}>
<div>
  
</div>
<div>
  
</div>
<p onMouseEnter={textEnter} onMouseLeave={textLeave}>
more thin text that says a thing about story begins
    </p>
    
</div>
  )
}

export default Filler