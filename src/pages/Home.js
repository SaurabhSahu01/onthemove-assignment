import React from 'react'
import Layout from './Layout'
import SliderCard from '../components/SliderCard'
function Home() {
  return (
    <Layout>
        <div className='text-white text-2xl'>Home</div>
        <SliderCard/>
    </Layout>

  )
}

export default Home