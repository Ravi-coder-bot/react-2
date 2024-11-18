
import './card.css'


const Card = ({idx}) => {
  const content = ["The National Council of Women South Australia has been advocating for women, particularly around safety for over 120 years. In this connected world, it’s time to utilise technology for safety.","My wife and I hv used the track option. I was able to track in real time her movements. This is just a game changer for parents to track their kids, people living on their own, ambulances to track down patients, cops, employers can track employees on their travels. This is just one of the functions. I would recommend all and sundry to utilise this app.","Its very useful app for women’s who are working in night shift as… This app provides us very useful option"];
  const name =["Fiona Dorman","Francis D’souza","Shalini Iall"];
  const about = ["President, National Council of Women SA","Australia","India"]

  return (
     <>
       <div className='card' >
         <div className='card-logo'>Nidar-Nari</div>
         <div className='card-content'>{content[idx]}</div>
         <hr className='hr'/>
         <div className='card-name'>{name[idx]}</div>
         <div className='card-about'>{about[idx]}</div>
        
       </div>
     </>
  )
}

export default Card;
