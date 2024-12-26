import PropTypes from 'prop-types';

const Button = ({ className, textButton, onClick, disabled }) => {
  return (
    <button
      className={`${className} ${
        disabled ? 'bg-slate-500' : ''
      } text-center w-full p-3 font-bold text-white truncate`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {textButton}
    </button>
  );
};

// Declaración de propTypes fuera del componente
Button.propTypes = {
  className: PropTypes.string,
  textButton: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
