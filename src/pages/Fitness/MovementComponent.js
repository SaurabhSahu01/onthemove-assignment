import React from 'react'
import SliderCard from '../../components/SliderCard'
import "../Fitness/MovementComponent.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function MovementComponent({ program }) {
    return (
        <div className='w-11/12 h-full flex flex-col items-center justify-start mt-3 gap-4'>
            <div className='w-full flex flex-col justify-center items-start gap-1'>
                <h2 className='movementCompHeader text-left'>{program?.name}</h2>
                <p className='movementCompDesc text-left'>{program?.description}</p>
            </div>
            <div className='w-full flex flex-row items-center justify-center'>
                <Swiper
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        program?.movements.map((movement, index) => {
                            return (
                                <SwiperSlide>
                                    <SliderCard movement={movement} key={index} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            {/* <div className='w-full'>
                <h2 className='movementCompDataInput w-full text-start'>Data Inputs</h2>
                {
                    program?.dataInput.map((input, index) => {
                        return(
                            <input type={input.type} placeholder={input.placeholder}/>
                        )
                    })
                }
            </div> */}
        </div>
    )
}

export default MovementComponent