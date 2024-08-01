import Image from 'next/image'
import './about.scss'
import me from '@/assets/men.png'

function About() {
  return (
    <section id='about' className='about-container'>
      <div className="about-wrapper">
        <div className="about-left">
          <Image
          className='my-img'
          src={me}
          alt='me'
          />
        </div>
        <div className="about-right">
            <span className='about'>About me</span>
            <h1 className='about-title'>Transforming visions into exceptional portfolios</h1>
            <p className='about-txt'>
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.

            </p>
        </div>
      </div>
    </section>
  )
}

export default About
