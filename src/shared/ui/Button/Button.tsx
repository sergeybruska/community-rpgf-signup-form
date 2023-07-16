import { Button as MantineButton } from '@mantine/core';
import Link from 'next/link';
import type {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  ReactNode,
} from 'react';

import { clsxMerge } from '@/shared/lib/clsxMerge';

type ButtonVariant = 'primary' | 'outline' | 'light' | 'white' | 'dark';
type ButtonSize = 'xs' | 'sm' | 'md' | 'base' | 'lg';
type ButtonColor = 'red' | 'green' | 'gray';

const variantClassName: Record<
  ButtonVariant,
  {
    base: string | string[];
  } & Partial<Record<ButtonColor, string[]>>
> = {
  dark: {
    base: ['bg-dark text-dark-100', 'hover:bg-dark-600', 'active:bg-dark-400'],
  },
  light: {
    base: ['hover:text-white-600', 'active:text-white-600'],
    green: [
      'text-green bg-green-300',
      'hover:bg-green-600',
      'active:bg-green-400',
    ],
    red: ['text-red bg-red-300', 'hover:bg-red-600', 'active:bg-red-400'],
  },
  outline: {
    base: ['border bg-transparent', 'hover:text-white-600'],
    green: [
      'border border-solid text-green border-green',
      'hover:bg-green-600',
      'active:bg-green-400 active:text-white-600',
    ],
    red: [
      'text-red border-red',
      'hover:bg-red-600',
      'active:bg-red-400 active:text-white-600',
    ],
    gray: [
      'text-gray border-gray bg-transparent',
      'hover:bg-gray-600 hover:text-white',
      'active:bg-gray active:text-white',
    ],
  },
  primary: {
    base: [
      'bg-green',
      'hover:bg-green-600',
      'active:bg-green-400',
      'text-white-600',
    ],
    red: ['bg-red-700', 'hover:bg-red-600', 'active:bg-red-400'],
    green: ['bg-green', 'hover:bg-green-600', 'active:bg-green-400'],
  },
  white: {
    base: ['bg-white-600', 'hover:text-white-600', 'active:text-white-600'],
    red: ['text-red', 'hover:bg-red-600', 'active:bg-red-400'],
    green: ['text-green', 'hover:bg-green-600', 'active:bg-green-400'],
  },
};

const classNameBySize: Record<ButtonSize, string> = {
  base: 'w-fit h-[2.25rem] text-sm px-12 rounded-md font-semibold',
  sm: 'w-fit text-sm py-0 px-4 rounded-lg font-semibold',
  md: 'w-fit text-sm px-4 py-2 rounded-lg font-bold',
  xs: 'w-fit text-xs px-3 py-2 rounded-lg font-semibold',
  lg: 'w-fit text-sm px-6 py-4 rounded-lg font-bold',
};

const buttonClassName =
  'flex place-content-center justify-center items-center text-center whitespace-nowrap ease-in duration-150';

const fullWidthClassName = 'w-full';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  ariaLabel?: string;
  className?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: () => void;
  isLinkButton?: boolean;
  linkTo?: string;
  fullWidth?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  disabled?: boolean;
};

export const Button: FC<PropsWithChildren<unknown> & Props> = ({
  children,
  ...props
}) => {
  const {
    type,
    ariaLabel,
    variant = 'primary',
    size = 'sm',
    color = 'green',
    onClick,
    className,
    isLinkButton,
    linkTo,
    fullWidth,
    rightIcon,
    leftIcon,
    disabled,
  } = props;

  const { base: variantBaseClassName, [color]: variantColorClassName } =
    variantClassName[variant];

  const mergedClassName = clsxMerge(
    variantBaseClassName,
    variantColorClassName,
    classNameBySize[size],
    buttonClassName,
    fullWidth && fullWidthClassName,
    className,
  );

  if (isLinkButton && linkTo) {
    return (
      <MantineButton
        aria-label={ariaLabel}
        component={Link}
        variant={variant}
        size={size}
        color={color}
        className={mergedClassName}
        href={linkTo}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        styles={(theme) => ({
          leftIcon: {
            marginRight: theme.spacing.xs,
          },
          rightIcon: {
            marginLeft: theme.spacing.xs,
          },
        })}
      >
        {children}
      </MantineButton>
    );
  }

  return (
    <MantineButton
      type={type}
      aria-label={ariaLabel}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      className={mergedClassName}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      disabled={disabled}
    >
      {children}
    </MantineButton>
  );
};
