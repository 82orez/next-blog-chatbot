import { clsx } from "clsx";
import { ComponentPropsWithoutRef, ElementType, createElement } from "react";
import { IconType } from "react-icons";

type IconButtonProps<Component extends ElementType> = ComponentPropsWithoutRef<Component> & {
  component?: Component;
  className?: string;
  iconClassName?: string;
  label: string;
  Icon: IconType;
};

const IconButton = <Component extends ElementType = "button">({
  Icon,
  component,
  className,
  iconClassName,
  ...props
}: IconButtonProps<Component>) => {
  return createElement(
    component ?? "button",
    {
      className: clsx("p-1.5 lg:p-2", className),
      "data-cy": props.label,
      ...props,
    },
    <Icon className={clsx("h-5 w-5 transition-all lg:h-6 lg:w-6", iconClassName)} />,
  );
};

export default IconButton;
