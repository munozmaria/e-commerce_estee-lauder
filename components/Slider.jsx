import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Thumbs } from "swiper";

import Image from "next/image";

import React from 'react'
import PropTypes from 'prop-types'



const Slider = props => {

  return (
		<div>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={true}
				modules={[Navigation, Thumbs]}
				grabCursor={true}
			>
				{props.images.data.map((index, item) => (
					<SwiperSlide key={index}>
						<img src={item}></img>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

Slider.propTypes = {
	images: PropTypes.array.isRequired
     
    
  
}

export default Slider
