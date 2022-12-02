import Image from 'next/image'
import { IoIosMusicalNotes } from 'react-icons/io'
import style from '../styles/Footer.module.css'


const Footer = ({ address, caption }) => {
  return (
    <div className={style.footer}>
      <div className={style.footerText}>
        
        <p>{caption}</p>
        <div className={style.footerTicker}>
          <IoIosMusicalNotes className={style.footerIcon} />
          <p>Music Title</p>
        </div>
      </div>
      <div className={style.footerRecord}>
        <Image
          src='https://static.thenounproject.com/png/934821-200.png'
          alt='vinyl record'
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default Footer