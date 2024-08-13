import "./styles.css"
import React, { useState } from "react"
import {FaStar} from 'react-icons/fa'

//it gets numOfStars props to be re-useable
export default function StarRating({numOfStars = 5}) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  //the hover effect makes the user to see how many stars are they clicking befor submiting their rate

  function handleClick(getCurrentIndex) {
    //when u click on a star u are setting the rating, and when u click on a selected star, it will inactive it and removes the rating
    setRating(getCurrentIndex === rating ? null : getCurrentIndex)
    console.log("its clicked")
  }

  function mouseEnter(getCurrentIndex) {
    //when u are entering a star o hover on it u r setting hover
    setHover(getCurrentIndex)
  }

  function mouseLeave() {
    //when u leave the stars it should stay on the rating that u have given it
    setHover(rating)
  }

  return (
    <div className="star-rating">
      {
        [...Array(numOfStars)].map((_,index) => {
          //index starts with 0... so we have to add +1 to be user friendly and when they click on 1st star it returns 1 and 2 returns 2.....
          index += 1
          return <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={()=> handleClick(index)}
            onMouseMove={()=> mouseEnter(index)}
            onMouseLeave={()=> mouseLeave()}
            size={40}
          />
        })
      }
    </div>
  )
}