import { Switch as MantineSwitch } from '@mantine/core';
import type { ChangeEvent, FC } from 'react';

type SwitchProps = {
  name: string;
  label?: string;
  description?: string;
  checked: boolean;
  onChange: (arg: boolean) => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export const Switch: FC<SwitchProps> = (props) => {
  const { label, description, checked, disabled, onChange, ariaLabel, name } =
    props;

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.checked);

  return (
    <MantineSwitch
      name={name}
      label={label}
      description={description}
      checked={checked}
      onChange={handleChecked}
      color='green.5'
      disabled={disabled}
      aria-label={ariaLabel}
    />
  );
};
