import { useDisclosure } from '@mantine/hooks';
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { Modal } from '@/shared/ui/Modal/Modal';

type InitialModal = {
  title?: string | null;
  content: React.ReactNode | string | null;
  isCentered?: boolean;
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isContentOverflowYVisible?: boolean;
};

type ModalContext = {
  isOpen: boolean;
  modal: InitialModal;
  pushModal: (value: InitialModal) => void;
  popModal: (arg?: unknown) => void;
};

const ModalStateDefault: ModalContext = {
  isOpen: false,
  modal: {
    title: '',
    content: null,
    isCentered: true,
    size: 'md',
    isContentOverflowYVisible: false,
  },
  pushModal: (value) => value,
  popModal: (value) => value,
};

const ModalContext = createContext<ModalContext>(ModalStateDefault);

type ModalState = [
  boolean,
  InitialModal,
  (value: InitialModal) => void,
  () => void,
];

const useModalState = (initialValue: InitialModal): ModalState => {
  const [isOpened, { open, close }] = useDisclosure(false);
  const [modalContent, setModalContent] = useState<InitialModal>(
    () => initialValue,
  );

  const push = (value: InitialModal) => {
    setModalContent(value);
    open();
  };

  const pop = () => {
    setModalContent(initialValue);
    close();
  };

  return [isOpened, modalContent, push, pop];
};

export const ModalProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [isOpened, modalContent, pushModal, popModal] = useModalState(
    ModalStateDefault.modal,
  );

  const modal = modalContent;

  const isOpen = modal.content !== null || isOpened;

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        modal,
        pushModal,
        popModal,
      }}
    >
      {children}
      <Modal>{modal.content}</Modal>
    </ModalContext.Provider>
  );
};

export const useModalController = () => useContext(ModalContext);
