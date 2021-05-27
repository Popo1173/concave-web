import React, { Component } from 'react'
import styles from '../styles/header.module.scss'
import Link from "next/link"
import react, {useState} from "react"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
      setOpenMenu(!openMenu);
}
return (
    <React.Fragment>
        <header id="header" className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">
            <a className={styles.logo}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224.12 28.936"><g id="グループ_8885" data-name="グループ 8885" transform="translate(-399.395 -311.962)"><path id="パス_3578" data-name="パス 3578" d="M413.745,340.9a14.123,14.123,0,0,1-14.35-14.39v-.08a14.219,14.219,0,0,1,14.586-14.466c5.275,0,8.435,1.756,11.034,4.315l-3.919,4.516c-2.156-1.96-4.356-3.156-7.152-3.156-4.719,0-8.115,3.916-8.115,8.711v.08c0,4.8,3.316,8.794,8.115,8.794,3.2,0,5.155-1.28,7.352-3.279l3.919,3.959A14.308,14.308,0,0,1,413.745,340.9Z" transform="translate(0 0)"/><path id="パス_3579" data-name="パス 3579" d="M422.793,340.9c-8.631,0-14.826-6.435-14.826-14.39v-.08c0-7.951,6.275-14.466,14.906-14.466s14.83,6.435,14.83,14.386v.08C437.7,334.383,431.428,340.9,422.793,340.9Zm8.475-14.47a8.5,8.5,0,0,0-8.475-8.791,8.367,8.367,0,0,0-8.394,8.711v.08a8.5,8.5,0,0,0,8.474,8.794,8.368,8.368,0,0,0,8.395-8.714Z" transform="translate(19.994 0)"/><path id="パス_3580" data-name="パス 3580" d="M438.214,340.085,424.667,322.3v17.786h-6.075v-27.98h5.675l13.11,17.229V312.105h6.075v27.98Z" transform="translate(44.777 0.333)"/><path id="パス_3581" data-name="パス 3581" d="M427.988,321.743v-5.835H440.3v5.835Z" transform="translate(66.693 9.204)"/><path id="パス_3582" data-name="パス 3582" d="M447.736,340.9a14.122,14.122,0,0,1-14.346-14.39v-.08a14.217,14.217,0,0,1,14.586-14.466c5.275,0,8.435,1.756,11.031,4.315l-3.916,4.516c-2.16-1.96-4.356-3.156-7.155-3.156-4.716,0-8.115,3.916-8.115,8.711v.08c0,4.8,3.319,8.794,8.115,8.794,3.2,0,5.155-1.28,7.355-3.279l3.916,3.959A14.3,14.3,0,0,1,447.736,340.9Z" transform="translate(79.293 0)"/><path id="パス_3583" data-name="パス 3583" d="M465.127,340.224l-2.559-6.275h-11.83l-2.556,6.275H441.9l11.99-28.18h5.679l11.99,28.18Zm-8.475-20.781-3.716,9.071h7.431Z" transform="translate(99.149 0.194)"/><path id="パス_3584" data-name="パス 3584" d="M467.3,340.285H461.86l-11.31-28.179h6.792l7.315,19.708,7.315-19.708h6.635Z" transform="translate(119.318 0.333)"/><path id="パス_3585" data-name="パス 3585" d="M460.256,340.085v-27.98h21.1v5.479H466.371v5.675h13.19v5.475h-13.19v5.875h15.186v5.475Z" transform="translate(141.958 0.333)"/></g></svg></a>
            </Link>
        </div>
        <nav>
            <ul>
            <li>
                <Link href="/">HOME</Link>
            </li>
            <li>
                <Link href="/">ABOUT US</Link>
            </li>
            <li>
                <Link href="/">OUR SERVICE</Link>
            </li>
            <li>
                <Link href="/">WORKS</Link>
            </li>
            <li>
                <Link href="/">NEWS & BLOG</Link>
            </li>
            </ul>
        </nav>
        <div className={styles.container}>
            <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            
            </div>
        </div>
        </header>
        <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>


        <ul>
            <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
            </div>
            <li>
            <Link href="/">
                <a>
                <p className={styles.mainTitle}>メニュー</p>
                <p className={styles.subTitle}>私のメニュー</p>
                </a>
            </Link>
            </li>
            <li>
            <Link href="/">
            <a>
                <p className={styles.mainTitle}>メニュー</p>
                <p className={styles.subTitle}>私のメニュー</p>
            </a>
            </Link>
            </li>
            <li>
            <Link href="/">
            <a>
                <p className={styles.mainTitle}>メニュー</p>
                <p className={styles.subTitle}>私のメニュー</p>
            </a>
            </Link>
            </li>
            <li>
            <Link href="/">
            <a>
                <p className={styles.mainTitle}>メニュー</p>
                <p className={styles.subTitle}>私のメニュー</p>
            </a>
            </Link>
            </li>
            <li>
            <Link href="/">
            <a>
                <p className={styles.mainTitle}>メニュー</p>
                <p className={styles.subTitle}>私のメニュー</p>
            </a>
            </Link>
            </li>
            <li>
            <Link href="/contact">
            <a>
                <p className={styles.mainTitle}>メニュー</p>
                <p className={styles.subTitle}>私のメニュー</p>
            </a>
            </Link>
            </li>
        </ul>
        </div>
    </React.Fragment>
    )
}
// class Header extends Component {
//     render(){
//         return(
//             <header>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="224.12" height="28.936" viewBox="0 0 224.12 28.936"><g id="グループ_8885" data-name="グループ 8885" transform="translate(-399.395 -311.962)"><path id="パス_3578" data-name="パス 3578" d="M413.745,340.9a14.123,14.123,0,0,1-14.35-14.39v-.08a14.219,14.219,0,0,1,14.586-14.466c5.275,0,8.435,1.756,11.034,4.315l-3.919,4.516c-2.156-1.96-4.356-3.156-7.152-3.156-4.719,0-8.115,3.916-8.115,8.711v.08c0,4.8,3.316,8.794,8.115,8.794,3.2,0,5.155-1.28,7.352-3.279l3.919,3.959A14.308,14.308,0,0,1,413.745,340.9Z" transform="translate(0 0)"/><path id="パス_3579" data-name="パス 3579" d="M422.793,340.9c-8.631,0-14.826-6.435-14.826-14.39v-.08c0-7.951,6.275-14.466,14.906-14.466s14.83,6.435,14.83,14.386v.08C437.7,334.383,431.428,340.9,422.793,340.9Zm8.475-14.47a8.5,8.5,0,0,0-8.475-8.791,8.367,8.367,0,0,0-8.394,8.711v.08a8.5,8.5,0,0,0,8.474,8.794,8.368,8.368,0,0,0,8.395-8.714Z" transform="translate(19.994 0)"/><path id="パス_3580" data-name="パス 3580" d="M438.214,340.085,424.667,322.3v17.786h-6.075v-27.98h5.675l13.11,17.229V312.105h6.075v27.98Z" transform="translate(44.777 0.333)"/><path id="パス_3581" data-name="パス 3581" d="M427.988,321.743v-5.835H440.3v5.835Z" transform="translate(66.693 9.204)"/><path id="パス_3582" data-name="パス 3582" d="M447.736,340.9a14.122,14.122,0,0,1-14.346-14.39v-.08a14.217,14.217,0,0,1,14.586-14.466c5.275,0,8.435,1.756,11.031,4.315l-3.916,4.516c-2.16-1.96-4.356-3.156-7.155-3.156-4.716,0-8.115,3.916-8.115,8.711v.08c0,4.8,3.319,8.794,8.115,8.794,3.2,0,5.155-1.28,7.355-3.279l3.916,3.959A14.3,14.3,0,0,1,447.736,340.9Z" transform="translate(79.293 0)"/><path id="パス_3583" data-name="パス 3583" d="M465.127,340.224l-2.559-6.275h-11.83l-2.556,6.275H441.9l11.99-28.18h5.679l11.99,28.18Zm-8.475-20.781-3.716,9.071h7.431Z" transform="translate(99.149 0.194)"/><path id="パス_3584" data-name="パス 3584" d="M467.3,340.285H461.86l-11.31-28.179h6.792l7.315,19.708,7.315-19.708h6.635Z" transform="translate(119.318 0.333)"/><path id="パス_3585" data-name="パス 3585" d="M460.256,340.085v-27.98h21.1v5.479H466.371v5.675h13.19v5.475h-13.19v5.875h15.186v5.475Z" transform="translate(141.958 0.333)"/></g></svg>

//                 {/* <div>{this.props.header}</div> */}
//                 {/* <h1>{this.props.title}</h1> */}
//             </header>
//         );
//     }
// }
// export default Header;

