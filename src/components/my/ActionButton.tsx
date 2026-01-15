import React, { ReactNode, MouseEvent, ButtonHTMLAttributes, ElementType } from "react";

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: ElementType<{ size?: number; className?: string }>;
  label?: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "danger" | "outline" | "ghost" | "success";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const variants: Record<string, string> = {
  primary: "bg-uno text-dos hover:bg-dos hover:text-uno font-bold shadow-lg",
  secondary:
    "bg-white border-2 border-divisiones/20 text-divisiones hover:border-divisiones/40 hover:bg-fondo shadow-sm",
  accent: "bg-gradient-to-r from-uno to-uno/90 text-dos hover:shadow-lg",
  danger:
    "bg-red-600 text-white hover:text-white border-0 shadow-lg hover:shadow-red-500/25",
  outline:
    "border-2 border-divisiones/30 text-divisiones hover:bg-fondo hover:border-divisiones/50",
  ghost: "text-divisiones hover:bg-fondo hover:text-dos",
  success: "bg-green-500 text-white hover:bg-green-600 hover:shadow-green-400/20",
};

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  icon: Icon,
  label,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`
        flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm
        transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${variants[variant] ?? variants.primary} ${className}
      `}
      {...rest}
    >
      {Icon && (
        <Icon
          size={20}
          className={`${
            label ? "mr-2" : ""
          } ${disabled ? '' : 'group-hover:rotate-12'} transition-transform duration-300`}
        />
      )}
      {label}
      {children}
    </button>
  );
};

export default ActionButton;
