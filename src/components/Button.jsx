import PropTypes from "prop-types";
import "/src/App.scss";

export const Button = ({
  size = "sm",
  variant,
  boxShadow = true,
  disabled = false,
  startIcon,
  endIcon,
  color = "default",
}) => {
  return (
    <button
      style={{
        outline:
          variant === "outline" && color
            ? `1px solid var(--${color})`
            : variant === "outline"
            ? `1px solid grey`
            : variant === "text"
            ? "0px"
            : "0px",
        boxShadow: boxShadow && "3px 3px 3px rgba(0,0,0,.3)",
        border: 0,
        width:
          size === "sm"
            ? "100px"
            : size === "md"
            ? "120px"
            : size === "lg"
            ? "150px"
            : "0px",
        backgroundColor:
          variant === "outline" || variant === "text"
            ? `white`
            : `var(--${color})`,
        color:
          variant === "outline" || variant === "text"
            ? `var(--${color})`
            : `white`,
      }}
      disabled={disabled}
      className="Button"
    >
      {startIcon && <span className="material-icons">{startIcon}</span>}
      Button
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  color: PropTypes.string,
  boxShadow: PropTypes.bool,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};
