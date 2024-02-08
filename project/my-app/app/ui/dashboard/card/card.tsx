import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Card = () => {
    return (
      <div className={styles.container}>
        <MdSupervisedUserCircle size={24}/>
      </div>
    )
  }
  
export default Card