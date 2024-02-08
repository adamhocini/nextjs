import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

interface CardProps {
  title: string;
  number: string;
  detail: string;
  isPositive?: boolean;
}

const Card: React.FC<CardProps> = ({ title, number, detail, isPositive = true }) => {
  const numberClassName = isPositive ? styles.positive : styles.negative;

    return (
      <div className={styles.container}>
        <MdSupervisedUserCircle size={24}/>
        <div className={styles.texts}>
          <span className={styles.title}>Total Users</span>
          <span className={styles.number}>10.273</span>
          <span className={styles.detail}>
            <span className={styles.positive}>12%</span> more than previous week
          </span>
        </div>
      </div>
    )
  }
  
export default Card