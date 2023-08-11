import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

export const notificationTitles = {
  success: 'Success',
  error: 'Error',
};

export const notificationMessages = {
  createProjectSuccess:
    'The project has been added successfully and is awaiting validation. ',
  editProjectSuccess: 'Project has been successfully changed',
  somethingWentWrong: 'Something went wrong',
  loginError: 'Incorrect email or password',
  deleteValueError:
    'You cant perform this action because attribute has variants',
};

const success = (title: string, message: string) =>
  notifications.show({
    title: title,
    message: message,
    autoClose: 3000,
    color: 'green.5',
    icon: <IconCheck size={16} />,
    withCloseButton: true,
  });

const error = (title: string, message: string) =>
  notifications.show({
    title: title,
    message: message,
    autoClose: 3000,
    color: 'red.5',
    icon: <IconX size={16} />,
    withCloseButton: true,
  });

export const notification = {
  success,
  error,
};
