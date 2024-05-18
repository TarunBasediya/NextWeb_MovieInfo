import ContactCard from "../components/ContactCard"

import styles from "@/app/styles/contact.module.css"
import ContactForm from "../components/ContactForm"
const page = () => {
  return (
    <>
<div className={styles.container}>
      <h1>
        Contact Us
      </h1>
      <ContactCard/>
      <section className={styles.contact_section}>
        <h2>
          We'd love to hear <span>from you</span></h2>
          <ContactForm/>
        
      </section>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.525054037822!2d73.84839177465071!3d18.45986137102689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac82b882317%3A0x5e8595671778d500!2sRamkrushna%20Boys%20Hostel!5e0!3m2!1sen!2sin!4v1715863215496!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default page
