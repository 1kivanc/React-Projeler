import React from 'react'
import { FaFire } from 'react-icons/fa'
import { IoIosAddCircleOutline } from "react-icons/io";
import { GiRead } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const SideBar = () => {
  return (
    <aside>
        <ul>
            <li>
                <NavLink to = "/trendKitaplar" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}
                >
                    <FaFire className='text-rose-700 size-7' />
                    <span>Trend Kitaplar</span>
                </NavLink>
            </li>
            <li>
                <NavLink to = "/yeniKitaplar" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}
                >
                    <IoIosAddCircleOutline className='text-yellow-400 size-7' />
                    <span>Yeni Eklenenler</span>
                </NavLink>
            </li>
            <li>
                <NavLink to = "/okuduklarim" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}
                >
                    <GiRead className='text-indigo-700 size-7'/>
                    <span>Okuduklarım</span>
                </NavLink>
            </li>
            <li>
                <NavLink to = "/favorilerim" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}
                >
                    <FaHeart className='text-rose-800 size-7' />
                    <span>Favorilerim</span>
                </NavLink>
            </li>
            <li>
                <NavLink to = "/incelediklerim" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}
                >
                    <FaEye className='text-lime-700 size-7' />
                    <span>İncelediklerim</span>
                </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar