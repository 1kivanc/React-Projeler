import React from 'react'
import {FaHeart} from 'react-icons/fa';
import Rating from './Rating';
const BookCard = ({book}) => {
  return (
    <>
        <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10  rounded-xl'>
            <a href="">
                <div className='relative'>
                    <button className='absolute top-2 right-2 p-1'>
                        <FaHeart />
                    </button>
                    <img src={book?.image} alt={book?.title} className='h-96 object-cover' />
                </div>
                <figcaption className='pt-4'>
                    <h3 className='text-xl mb-1'>{book?.title}</h3>
                    <p className='text-[#575A6E] text-sm mb-2'>{book?.cat}</p>
                    <div className='flex items-center space-x-1 mb-3'>
                        <Rating value={book?.rating} />
                    </div>
                    <p className='mb-2'>{book?.price} TL</p>
                    <button className='bg-orange-600 rounded-lg py-2 px-5 flex items-center gap-2 justify-center text-black font-semibold text-sm'>
                        <span>Sepete Ekle</span>
                    </button>
                </figcaption>
            </a>
        </figure>
    </>
  )
}

export default BookCard