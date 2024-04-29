import Link from 'next/link'
import './navbar.scss'
import Image from 'next/image'
import Logo from '../../assets/logo.png'

function Navbar() {
  return (
    <section className='nav-container'>
      <div className="nav-wrapper">
        <div className='logo'>
            <Image
            src={Logo}
            alt='Logo'
            width={180}
            height={30}
            />
        </div>
        <div className='navlinks'>
            <Link href=''>Home</Link>
            <Link href=''> About me</Link>
            <Link href=''>Skills</Link>
            <Link href=''>Work</Link>
            <Link href=''>Experience</Link>

        </div>
        <div className='contact'>Contact me</div>
      </div>
    </section>
  )
}

export default Navbar
