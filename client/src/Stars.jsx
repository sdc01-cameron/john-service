import React from 'react';
import FullStar from '../../public/images/full-star.png';
import HalfStar from '../../public/images/half-star.png';
import EmptyStar from '../../public/images/empty-star.png';

const Stars = ({rating, ratingsNum}) => {
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
        return index === 4 ? <img src={typeOfStar} style={{height: '20px', margin:'0 17px 0 0'}}></img> : <img src={typeOfStar} style={{height: '20px'}}></img>
      })}
      {ratingsNum} ratings
    </div>
  )
}

export default Stars;