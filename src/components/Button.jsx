import PropTypes from 'prop-types';

const Button = ({ className, textButton, onClick }) => {
  return (
    <button
      className={`${className} text-center w-full p-3 font-bold text-white truncate`}
      onClick={() => onClick()}
    >
      {textButton}
    </button>
  );
};

// Declaración de propTypes fuera del componente
Button.propTypes = {
  className: PropTypes.string,
  textButton: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
