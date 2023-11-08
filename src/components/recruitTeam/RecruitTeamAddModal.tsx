import { Col, Input, Modal, Row, Select, DatePicker, Typography } from 'antd';
import styled from 'styled-components';
import TextArea from 'antd/es/input/TextArea';
import Axios from 'axios';
import { useState } from 'react';
const { Title } = Typography;

const { Option } = Select;

const url = '';

const RecruitTeamAddMoadl = (props: { open: boolean; onClose: Function }) => {
  const { open, onClose } = props;
  const [recruitCountType, setRecruitCountType] = useState<number>(0);
  const [groundType, setGroundType] = useState<string>('전체');
  const [recruitTitle, setRecruitTitle] = useState<string>('');
  const [recruitText, setRecruitText] = useState<string>('');

  const handleAddOnClick = () => {
    // 등록 api
    console.log('OkAdd:::');
    Axios.post(url).then((response) => {
      // if(response === '성공'){
      // // '성공알럿'
      //   onClose()
      // }
      // else{
      //  //실패 앐럿
      //  //창 유지
      // }
    });
  };
  const handleSelectChange = (type: string) => (e: any) => {
    if (type === 'deliType') setRecruitCountType(e);
    else if (type === 'salesType') setGroundType(e);
  };
  const handleCloseOnClick = () => {
    onClose();
  };
  const handleRecruitTitleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setRecruitTitle(value);
  };
  const handleRecruitTextOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    setRecruitText(value);
  };

  const ModalContent = () => {
    return (
      <>
        <Col span={24}>
          <Container>
            <ColumnName>
              <Title level={5}>종목</Title>
            </ColumnName>
            <Col span={24}>
              <Row align="middle" style={{ height: '100%' }}>
                <Select
                  placeholder={'종목을 선택해주세요'}
                  value={groundType}
                  onChange={handleSelectChange}
                  // value={}
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
          </Container>
          <Container>
            <ColumnName>
              <Title level={5}>모집 인원</Title>
            </ColumnName>
            <Col span={24}>
              <Row align="middle" style={{ height: '100%' }}>
                <Select
                  placeholder={'인원을 선택하세욤'}
                  // value={recruitCountType}
                  onChange={handleSelectChange}
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
          </Container>
          <Container>
            <ColumnName>
              <Title level={5}>지역</Title>
            </ColumnName>
            <Col span={24}>
              <Row align="middle" style={{ height: '100%' }}>
                <Select
                  value={groundType}
                  onChange={handleSelectChange}
                  // value={}
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
          </Container>
          <Container>
            <ColumnName style={{ height: '100%' }}>
              <Title level={5}>모집 마감일</Title>
            </ColumnName>
            <Col span={24}>
              <DatePicker
                style={{ width: '100%' }}
                // defaultValue={moment()}
                // onChange={handleDateOnChange('end')}
                // value={moment(propsRow.validityEnd)}
                // format={enDateFormatType.Picker}
              />
            </Col>
          </Container>

          <Container>
            <ColumnName>
              <Title level={5}>제목</Title>
            </ColumnName>
            <Col span={24}>
              <Input
                value={recruitTitle}
                onChange={handleRecruitTitleOnChange}
              />
            </Col>
          </Container>
          <Col span={24}>
            <TextArea
              style={{ height: 170 }}
              value={recruitText}
              onChange={handleRecruitTextOnChange}
              rows={4}
            />
          </Col>
        </Col>
      </>
    );
  };
  return (
    <>
      <CustomModal
        width={'35%'}
        bodyStyle={{ height: '620px' }}
        title={
          <Row style={{ height: '100%', marginBottom: '10px' }}>
            <Title level={2}>함께 할 때 더 즐거운 순간</Title>
            <Col style={{ marginTop: '10px', marginBottom: '10px' }} span={24}>
              <Title style={{ color: 'BBBBBB' }} level={5}>
                {'선희'}님 play-us에서 다양한 사람들을 만나고 즐겁게 운동하세요
              </Title>
            </Col>
          </Row>
        }
        open={open}
        maskClosable={false}
        onOk={handleAddOnClick}
        onCancel={handleCloseOnClick}
        okText="등록"
        cancelText="취소"
      >
        {ModalContent()}
      </CustomModal>
    </>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
`;

const ColumnName = styled.div`
  margin-bottom: 5px;
`;
const CustomModal = styled(Modal)`
  .ant-modal-footer {
    display: flex;
    justify-content: space-between;
  }
`;
const CustomTitle = styled(Title)`
  /* color: 'cfcfcf'; */
  color: red;
`;
export default RecruitTeamAddMoadl;
