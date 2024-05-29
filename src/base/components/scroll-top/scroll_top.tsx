import React, { forwardRef } from 'react'
import scroll from '@images/scroll.svg';
import './scroll.scss'

const ScrollToTop = () => {
    // const ScrollToTop = forwardRef<any, any>(props, ref) => {


    const goToTop = () => {
        // console.log("ref", ref)
        // ref?.current?.scroll({
        //     top: 0,
        //     behavior: "smooth"
            
        // })
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

  return (
    <div className='scroll__to_top'>
    <img onClick={goToTop} src={scroll} alt="metlife" />
    </div>

  )
}

export default ScrollToTop;