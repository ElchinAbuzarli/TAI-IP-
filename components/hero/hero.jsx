import Link from 'next/link'
import  './hero.scss'
import Image from 'next/image'
import AI from '../../assets/ai.png'

function Hero() {
  return (
    <section id='home' className='hero-container'>
      <div className="hero-wrapper">
        <div className='hero-right'>
            <h1>Hi, I'm</h1>
            <h1>Elchin Abuzarli,</h1>
            <span>A Passionate <span className='front'>Frontend Web Development</span> with 1 year experinece creating user friendly websites </span>
            <Link className='booking' href="tel:+994-51-840-40-02"> Book a call</Link>
        </div>
        <div className='hero-left'>
            <Image
            className='AI'
            src={AI}
            alt='AI'
            width={530}
            height={600}
            />  
        </div>
      </div>
    </section>
  )
}

export default Hero
