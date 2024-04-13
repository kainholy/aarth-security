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
        <section id='tab' className={'p-service-tab__tab'}>
            <div className={'p-service-tab__container'}>
                <button onClick={firstTabClickHandler} className={currentTab === 1 ? 'p-service-tab__button p-service-tab__activeButton' : 'p-service-tab__button'}>
                    <p className={`p-service-tab__number c-service-tab-number bk`}>01</p>
                    <p className={`p-service-tab__text c-service-tab-text bk`}>雑踏(イベント)警備</p>
                </button>
                <button onClick={secondTabClickHandler} className={currentTab === 2 ? `p-service-tab__button p-service-tab__activeButton` : 'p-service-tab__button'}>
                    <p className={`p-service-tab__number c-service-tab-number bk`}>02</p>
                    <p className={`p-service-tab__text c-service-tab-text bk`}>交通誘導警備</p>
                </button>
                <button onClick={thirdTabClickHandler} className={currentTab === 3 ? `p-service-tab__button p-service-tab__activeButton` : 'p-service-tab__button'}>
                    <p className={`p-service-tab__number c-service-tab-number bk`}>03</p>
                    <p className={`p-service-tab__text c-service-tab-text bk`}>駐車場警備</p>
                </button>
            </div>
        </section>
    )
}

export default Tab
