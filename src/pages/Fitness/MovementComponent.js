import React from 'react'
import SliderCard from '../../components/SliderCard'
import "../Fitness/MovementComponent.css";
import CustomInput from '../../components/CustomInput';


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

            <div className='w-full'>
                <h2 className='movementCompDataInput w-full text-start'>Data Inputs</h2>
                <div className='flex flex-col justify-center items-start gap-3 mt-3'>
                    {
                        program?.dataInput.map((input, index) => {
                            return (
                                <CustomInput type={input?.type} placeholder={input?.placeholder} label={input?.label} options={input?.options} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-[146px] h-[34px] bg-[#FA5757] rounded-[7px] flex flex-row items-center justify-center mt-7' onClick={() => {
                console.log("workout ended");
            }}>
                <p className='flex flex-row justify-center items-center gap-1 endworkout'>END WORKOUT <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10.2179 1.78125L1.78125 10.2179M10.2179 10.2179L1.78125 1.78125" stroke="black" stroke-width="2" stroke-linecap="round" />
                </svg></span></p>
            </div>
        </div>
    )
}

export default MovementComponent