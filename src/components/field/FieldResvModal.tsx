import { Modal } from 'antd';
import { MouseEventHandler } from 'react';

interface IModalData {
  isModalOpen: boolean;
  confirmLoading: boolean;
  handleOk: MouseEventHandler;
  handleCancel: MouseEventHandler;
}

const FieldResvModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  confirmLoading,
}: IModalData) => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {confirmLoading ? (
        '결제를 진행중입니다. 잠시만 기다려주세요.'
      ) : (
        <>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </>
      )}
    </Modal>
  );
};

export default FieldResvModal;
