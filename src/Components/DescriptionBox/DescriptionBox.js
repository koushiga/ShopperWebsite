import React from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
        </div>
    </div>
  )
}
