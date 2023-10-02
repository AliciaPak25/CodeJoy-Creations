const CustomButton = ({ theType, styles, text, action }) => {
  return (
    <button type={theType} className={`${styles}`} onClick={action}>
      {text}
    </button>
  );
};

export default CustomButton;
