import React from "react";

const CustomButton = ({ styles, text, img, alt, imgStyles }) => {
  return (
    <button type="button" className={`${styles}`}>
      {text}
      {img ? <img src={img} alt={alt} className={imgStyles} /> : <></>}
    </button>
  );
};

export default CustomButton;

/* CustomButtons, CustomButtonWithImage */
