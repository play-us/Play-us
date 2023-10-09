import { Col, Input, Modal, Radio, Row, Select, DatePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const { Option } = Select;
const { RangePicker } = DatePicker;

const RecruitTeamAddMoadl = (props: { open: boolean; onClose: Function }) => {
  const { open, onClose } = props;

  const handleAddOnClick = () => {
    // 등록 api
    console.log('OkAdd:::');
  };

  const handleCloseOnClick = () => {
    onClose();
  };

  const ModalContent = () => {
    return (
      <>
        <Col span={24} className="grid_search_parent">
          <Row className="grid_search_row">
            <Col span={8} className="grid_search_label">
              종목
            </Col>
            <Col span={16} className="grid_search_content_last">
              <Row align="middle" style={{ height: '100%' }}>
                <Select
                  defaultValue={0}
                  // disabled={isDisable.bal}
                  // onChange={setReckoningId}
                  // value={reckoningId}
                  style={{ width: '100%' }}
                >
                  <Option value={0}>선택</Option>
                  {/* {reckoningList.map((item: IReckoningList, index) => (
                      <Option key={index} value={item.reckoningId}>
                        <em>{item.reckoningName}</em>
                      </Option>
                    ))} */}
                </Select>
              </Row>
            </Col>
          </Row>
          <Row className="grid_search_row">
            <Col span={8} className="grid_search_label">
              인원
            </Col>
            <Col span={16} className="grid_search_content_last">
              <Row align="middle" style={{ height: '100%' }}>
                <Select
                  defaultValue={0}
                  // disabled={isDisable.bal}
                  // onChange={setReckoningId}
                  // value={reckoningId}
                  style={{ width: '100%' }}
                >
                  <Option value={0}>선택</Option>
                  {/* {reckoningList.map((item: IReckoningList, index) => (
                      <Option key={index} value={item.reckoningId}>
                        <em>{item.reckoningName}</em>
                      </Option>
                    ))} */}
                </Select>
              </Row>
            </Col>
          </Row>
          <Col
            span={6}
            className="grid_search_label"
            style={{ height: '100%' }}
          >
            기간검색
          </Col>
          <Col span={18} className="grid_search_content_last">
            <RangePicker
              style={{ width: '100%' }}
              // format={enDateFormatType.Picker}
              // value={createdDate}
              // ranges={{
              //   오늘: [moment(), moment()],
              //   '최근 7일': [moment().add(-7, 'd'), moment()],
              //   '최근 30일': [moment().add(-30, 'd'), moment()],
              // }}
              // onChange={handleCreatedDateOnChange}
            />
          </Col>
          <Row className="grid_search_row">
            <Col span={8} className="grid_search_label">
              제목
            </Col>
            <Col span={16} className="grid_search_content_last">
              <Input
              //  value={solution} onChange={handleResiterSolution}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="grid_search_content_last">
              <TextArea
              // value={ip} onChange={handleRegisterIP} rows={1}
              />
            </Col>
          </Row>
        </Col>
      </>
    );
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
      >
        {ModalContent()}
      </Modal>
    </>
  );
};

export default RecruitTeamAddMoadl;
