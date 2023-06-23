import styles from './page.module.css'
import Weather from '@/components/weather/Weather'
import DatePainel from '@/components/datePainel/DatePainel'
import Todomanager from '@/components/todoManager/Todomanager'

export default function Home() {
  return (
    <main className={styles.main}>
           <main className={styles.mainContainer}>
            <div className={styles.container}>
                <Weather />
                <DatePainel />
            </div>
            <Todomanager />
        </main>
    </main>
  )
}
