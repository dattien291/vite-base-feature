import classNames from "classnames";
import { Link } from "react-router-dom";

export const KaLink = ({
  children,
  textTransform,
  hasUnderline,
  className,
  target,
  color,
  size,
  leftIcon,
  rightIcon,
  textClassName,
  ...rest
}) => {
  return (
    <Link target={target} {...rest}>
      <span
        className={classNames(
          "ks-link",
          `-${textTransform}`,
          `-${size}`,
          {
            [`-${color}`]: color,
          },
          { "-hasIcon": leftIcon || rightIcon },
          { "-underline": hasUnderline },
          className
        )}
      >
        {leftIcon}

        {hasUnderline ? <span className={classNames("text", { "-underline": hasUnderline }, textClassName)}>{children}</span> : children}

        {rightIcon}
      </span>
    </Link>
  );
};

KaLink.defaultProps = {
  hasUnderline: false,
  textTransform: "unset",
  target: "_self",
  size: "unset",
  title: "",
  textClassName: "",
  color: "black",
};
