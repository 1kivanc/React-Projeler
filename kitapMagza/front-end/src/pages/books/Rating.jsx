import React from 'react'
import { FaStar } from "react-icons/fa";
import Star from "../../../public/star.svg";
const Rating = ({value}) => {
    const starts = Array(value).fill(Star)
  return (
    <>
    {
      starts.map((star,index) => (
        <img src={star} alt="" key={index} />
      ))
    }
    </>
  )
}

export default Rating