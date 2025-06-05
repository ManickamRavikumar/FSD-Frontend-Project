import React from 'react'
import { menu_list } from '../../public/assets'

function Menu() {
    return (
        <div className='  mt-4  relative'>
            <h1 className='text-4xl px-6 py-2'>Explore our Menu</h1>
            <p className='px-6 '>
                choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy
                your cravings and elevate your dining experience,one delicious meal at a time.
            </p>
            <div className='flex mt-4 flex-row gap-4 cursor-pointer'>
                {menu_list.map((item,index)=>{
                    return(
                        <div key={index}>
                            <img className='transition delay-150 duration-300 ease-in-out' src={item.menu_image} alt="" /> 
                            <p className='mt-2 font-bold text-center'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='mt-2 ' />
        </div>
    )
}

export default Menu