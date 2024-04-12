import React from 'react'
import styles from '@/styles/section/service/Tab.module.scss'

function Tab({ currentTab, setCurrentTab }: { currentTab: number, setCurrentTab: React.Dispatch<React.SetStateAction<number>> }) {
    const firstTabClickHandler = () => {
        setCurrentTab(1)
    }
    const secondTabClickHandler = () => {
        setCurrentTab(2)
    }
    const thirdTabClickHandler = () => {
        setCurrentTab(3)
    }
    return (
        <section id='tab' className={styles.tab}>
            <div className={styles.container}>
                <button onClick={firstTabClickHandler} className={currentTab === 1 ? `${styles.button} ${styles.activeButton}` : styles.button}>
                    <p className={`${styles.number} c-service-tab-number bk`}>01</p>
                    <p className={`${styles.text} c-service-tab-text bk`}>雑踏(イベント)警備</p>
                </button>
                <button onClick={secondTabClickHandler} className={currentTab === 2 ? `${styles.button} ${styles.activeButton}` : styles.button}>
                    <p className={`${styles.number} c-service-tab-number bk`}>02</p>
                    <p className={`${styles.text} c-service-tab-text bk`}>交通誘導警備</p>
                </button>
                <button onClick={thirdTabClickHandler} className={currentTab === 3 ? `${styles.button} ${styles.activeButton}` : styles.button}>
                    <p className={`${styles.number} c-service-tab-number bk`}>03</p>
                    <p className={`${styles.text} c-service-tab-text bk`}>駐車場警備</p>
                </button>
            </div>
        </section>
    )
}

export default Tab
