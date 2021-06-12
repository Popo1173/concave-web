import React, { Component } from 'react';
import Link from 'next/link'
import Styles from '../styles/lead.module.scss';
import Image from 'next/image';





export default function Lead({home}) {
    //home リード文
    var homedatas = [
        { text: "テクノロジーとクリエイティブで、ビジネスをWEBクリエーションするチームです。" },
        { text: "お客様とユーザーの課題を双方の視点から分析し、戦略を立案し、日々変化するユーザー体験とクリエティブ、テクノロジーの設計を。" },
        { text: "私たちが作るのは、現代のニーズと現状の課題を解決した、WEBサイトです。" }
    ]

    return(
        <>
            <section>
                <dl className={Styles.leadBlock}>
                    <dt className={Styles.leadBlock_text}>
                        <h2>戦略立案からクリエティブとテクノロジーで、WEBサイト・システムを開発をします。</h2>
                        <ul>
                            {homedatas.map((data) => {
                                return <li>{data.text}</li>;
                            })}
                        </ul>
                        <div className="button"><Link  href="/">ABOUT US</Link></div>
                    </dt>
                    <dd className={Styles.leadBlock_img}></dd>
                </dl>
            </section>
        </>
    )
}