const CustomButton = ({ styles, text, action }) => {
  return (
    <button type="button" className={`${styles}`} onClick={action}>
      {text}
    </button>
  );
};

export default CustomButton;
