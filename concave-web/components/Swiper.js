import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

import Styles from '../styles/swiper.module.scss';


// import Swiper core and required modules
import SwiperCore, {
    Pagination
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Pagination]);
  
  
  export default function Swipe() {
    
    return (
      <section className={Styles.block_slide}>
    <Swiper slidesPerView={3} spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" />dddd</SwiperSlide>
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /></SwiperSlide>
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /></SwiperSlide>
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /></SwiperSlide>
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /></SwiperSlide>
    <SwiperSlide><Image src="/static/img/work/work_pic01.png" width={574} height={332} alt="" /></SwiperSlide>    
    </Swiper>
      </section>
    )
  }



