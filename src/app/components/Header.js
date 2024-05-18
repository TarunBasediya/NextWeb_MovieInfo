import styles from "@/app/styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Nav from "@/app/components/Nav"
const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
        <Link href="/">
          <Image 
          src="/T (1).png"
          alt="my logo image"
          height={80}
          width={150}
          />
        </Link>
       
        </div>
        <Nav/>
      </header>
    </>
  )
}

export default Header
