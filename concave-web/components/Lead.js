import React, { Component } from 'react';
import Styles from '../styles/lead.module.scss';
import Image from 'next/image';

export default function Lead() {
    return(
        <>
            <section className={Styles.leadBlock}>
                <dl>
                    <dt className={Styles.leadBlock_text}>
                        <h2>戦略立案からクリエティブとテクノロジーで<br />WEBサイト、システムを開発をします。</h2>
                        <p>テクノロジーとクリエイティブで、ビジネスをWEBクリエーションするチームです。</p>
                        <p>お客様とユーザーの課題を双方の視点から分析し、戦略を立案し、日々変化するユーザー体験とクリエティブ、テクノロジーの設計を。</p>
                        <p>私たちが作るのは、現代のニーズと現状の課題を解決した、WEBサイトです。</p>
                    </dt>
                    <dd>About Us</dd>
                </dl>
            </section>
        </>
    )
}