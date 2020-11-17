import React from 'react';
import FullStar from '../../public/images/full-star.png';
import HalfStar from '../../public/images/half-star.png';
import EmptyStar from '../../public/images/empty-star.png';

const Stars = ({rating}) => {
  return (
    <div>
      {[...Array(5)].map((item, index) => {
        let star = rating - index;
        let typeOfStar;
        if (star >= 0.8) {
          typeOfStar = FullStar;
        } else if (star >= 0.21) {
          typeOfStar = HalfStar;
        } else {
          typeOfStar = EmptyStar;
        }
        return <img src={typeOfStar} style={{height: '25px'}}></img>
      })}
    </div>
  )
}