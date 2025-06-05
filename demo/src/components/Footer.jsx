import React from 'react'
// import '../components/Footer.css'; // Assuming you have a CSS file for styling

function Footer() {
  return (
   <div className='flex bg-black h-84 mt-4 px-4'>
      <div className='flex flex-row justify-start justify-between gap-8 text-white mb-2'>
        <div className='w-1/2 mt-4'>
          <h1 className='text-4xl text-orange-500'>🛒 Foods </h1>
          <p className='mt-2'>Loren ipsum is simply dummy text of the printing and typesettiing industry.Loren ipsum has been the industry,s dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <div className='flex flex-row justify-start gap-4 mt-4'>
            <img src="facebook_icon.png" alt=""  />
            <img src="twitter_icon.png" alt="" />
            <img src="linkedin_icon.png" alt="" />
          </div>
        </div>
        <div className='mt-4'>
            <h2 className='text-4xl'>Company</h2>
            <ul className='mt-2'>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>

          </div>
          <div className='mt-4'>
            <h2 className='text-4xl'>GET IN TOUCH</h2>
            <ul className='mt-2'>
              <li>+91 1234567890</li>
              <li>foods@gmail.com</li>
            </ul>
          </div>         
      </div>
      <hr className='mt-2 '/>
    </div>
  )
}

export default Footer