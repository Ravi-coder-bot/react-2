import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
import Background from '../Background/Background'

 const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    
  return (
    <div className='hero'>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <div className="hero-text " >
            <p className='animated-card slideInLeft'>{heroData.text1}</p>
            <p className='animated-card slideInRight'>{heroData.text2}</p>
        </div>
        <div className="hero-explore bounceIn">
            <p>Start Free Trail</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange" : "hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange" : "hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange" : "hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                <p>See the video</p>
            </div>
        </div>

    </div>
  )
}

export default  Hero;