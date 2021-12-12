const Contact = ({ email, phone }) => {
  return (
    <section className='contact' id='contact'>
      <h2 className='section__title section__title--contact'>Contact</h2>
      <div className='contact-info'>
        <div>
          <span>email: </span>
          <a className='footer-link' href='#email'>
            {email}
          </a>
        </div>
        <div>
          <span>phone: </span>
          <a className='footer-link' href='#tel'>
            {phone}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
