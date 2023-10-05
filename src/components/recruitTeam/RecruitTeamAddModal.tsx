import { Modal } from 'antd';

const RecruitTeamAddMoadl = (props: { open: boolean; onClose: Function }) => {
  const { open, onClose } = props;

  const handleAddOnClick = () => {
    // 등록 api
    console.log('OkAdd:::');
  };

  const handleCloseOnClick = () => {
    onClose();
  };
  return (
    <>
      <Modal
        width={'40%'}
        title={'함께 할 때 더 즐거운 순간'}
        open={open}
        maskClosable={false}
        onOk={handleAddOnClick}
        onCancel={handleCloseOnClick}
        okText="등록"
        cancelText="취소"
      ></Modal>
    </>
  );
};

export default RecruitTeamAddMoadl;
