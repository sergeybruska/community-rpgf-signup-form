import {
  Title as MantineTitle,
  type TitleProps as MantineTitleProps,
} from '@mantine/core';
import { type FC, type PropsWithChildren } from 'react';

type TitleProps = MantineTitleProps & {
  className?: string;
};

export const Title: FC<PropsWithChildren<unknown> & TitleProps> = (props) => {
  const { children, ...restProps } = props;
  return <MantineTitle {...restProps}>{children}</MantineTitle>;
};
