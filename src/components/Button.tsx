import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

export type ButtonProps = ComponentPropsWithRef<"button"> & {};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <button ref={ref} {...props} />;
  },
);
