import React, { useRef, useEffect, useCallback } from 'react'
import {useTransition, animated} from 'react-spring'

const Cart = ({ showCart, setShowCart }) => {
    const ref = useRef();
    const transitions = useTransition(showCart, null, {
        from: { opacity: 0, transform: "translateX(-200px)" },
        enter: { opacity: 1, transform: "translateX(0px)" },
        leave: { opacity: 0, transform: "translateX(-200px)" }
    });
    const handleClick = useCallback(event => {
        if(showCart && event.target.classList.value !== "cart") {
            setShowCart(false);
        }
      });
    useEffect(() => {
        window.addEventListener('click', handleClick);
    
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }, [handleClick]);
    
    return (
        transitions.map(({ item, key, props }) => {
            return item && <animated.div key={key} style={props} className="cart" ref={ref}>Hello</animated.div>
        }
    )
    )
}



export default Cart;
