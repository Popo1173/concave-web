import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

import Styles from '../styles/swiper.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'


// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
  
  
  export default function Swipe() {
    
    return (
      // 
      <>
      
    <Swiper 
      slidesPerView={3} 
      spaceBetween={30} 
      // pagination={{"clickable": true}} 
      navigation
      className="mySwiper"
    >
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /><span className={Styles.read_text}>準備中</span></SwiperSlide>
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /><span className={Styles.read_text}>準備中</span></SwiperSlide>
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /><span className={Styles.read_text}>準備中</span></SwiperSlide>
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /><span className={Styles.read_text}>準備中</span></SwiperSlide>
    </Swiper>
    
    </>
      
    )
  }







