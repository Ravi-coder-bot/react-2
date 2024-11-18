import './Testimony.css'
import Card from './card.jsx'



const Testimony = () => {
  return (
    <div className='backgroundb'>
        <div className='bigcard'>
          <p>Tstimony</p>
          <div className='cards'>
            <Card idx={0} />
            <Card  idx={1} />
            <Card  idx={2} />
          </div>
        </div>
    </div>

    
    
  )
}

export  default Testimony;