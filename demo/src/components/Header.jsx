import React from 'react'


function Header() {
    return (

        <div className='h-81  mt-4  relative animate-[fadeIn 3s] bg-[url(public/header_img.png)] bg-center'>
            <div className='px-12 py-8 w-1/2'>
                <h1 className='font-bold text-3xl py-4 px-4 text-red-50'>Order your favourite food here</h1>
                <p className='py-2 px-4 text-white'>choose from a diverse menu featuring a delectable array of dishes crafted with the finest
                    ingredints and elevate your dining experience,one delicious meal at a time
                </p>
                <button className=' font-bold border-2 '>View Menu</button>
            </div>
        </div>
    )
}

export default Header