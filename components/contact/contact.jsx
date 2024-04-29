import Link from 'next/link'
import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandFist } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section className='contact-container'>
      <div className="contact-wrapper">
        <div className="contact-content">
          <h1 className='contact-title'>Start a project</h1>
          <span className='contact-txt'>Interested in working together? We should queue up a time to chat I'll buy the tea</span>
          <Link className='contact-link' href=''>
          <FontAwesomeIcon className='contact-icon' icon={faHandFist} />
            Let's do this
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact
