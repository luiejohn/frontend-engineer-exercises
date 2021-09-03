import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
  isModal: boolean;
  setModal: (op: boolean) => void;
  submitFunc: () => void;
}

const DeleteModal: FC<IProps> = ({ isModal, setModal, submitFunc }) => (
  <Modal isOpen={isModal} onClose={(): void => setModal(false)} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Delete Product</ModalHeader>
      <ModalBody>Are you sure you want to delete this product? You can't undo this afterwards</ModalBody>

      <ModalFooter>
        <Button variant="ghost" mr={3} onClick={(): void => setModal(false)}>
          Close
        </Button>
        <Button variant="solid" onClick={submitFunc} bgColor="#E53E3E" color="#fff">
          Delete
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default DeleteModal;
