import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Eye, Heart } from 'lucide-react';

interface IRowData {
  field_id: string;
  field_name: string;
  area: string;
  addr: string;
  price: number;
  hours: number;
  views: number;
  like_cnt: number;
  img_url: string;
}

const FieldListItem = (props: { data: IRowData }) => {
  const data = props.data;

  return (
    <Wrap key={data.field_id}>
      <Link to={`/fieldDetail?id=${data.field_id}`}>
        <ThumbImg>
          <img src={data.img_url} alt="썸네일 이미지" />
        </ThumbImg>
        <InfoWrap>
          <Date>10월 22일 일요일</Date>
          <FieldName>{data.field_name}</FieldName>
          <Interest>
            <Eye />
            {data.views}
            <Heart />
            {data.like_cnt}
          </Interest>
          <Contour />
          <UseInfo>
            <Price>{data.price}원</Price>
            <Hours>/ {data.hours}시간</Hours>
          </UseInfo>
        </InfoWrap>
      </Link>
    </Wrap>
  );
};

export default FieldListItem;

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;
  ointer-events: none;
  outline: 1px solid rgba(23, 23, 23, 0.08);
  border-radius: 12px;
  outline-offset: -1px;
  margin-bottom: 1.2rem;

  &:hover {
    box-shadow: 0px 2px 8px #f0f1f2;
    box-sizing: border-box;
    transition: all 0.5s ease;
  }

  &:hover img {
    width: 105%;
    height: 105%;
    transition: all 0.5s ease;
  }
`;

const ThumbImg = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 246px;

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    min-height: 196px;
    height: 100%;
    max-height: 100%;
    transition: border 200ms ease;
  }
`;

const InfoWrap = styled.div`
  padding: 1rem;
  text-align: left;
`;

const Date = styled.div`
  font-size: 1.1rem;
  color: #7b7b7b;
`;

const FieldName = styled.div`
  font-size: 1.3rem;
  padding: 0.5rem 0;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: #222;
`;

const Interest = styled.div`
  color: #9c9c9c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.8rem;

  & svg {
    width: 20px;
    padding: 0 0.2rem;

    &:first-child {
      padding-left: 0;
    }
  }
`;

const Contour = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 1px;
  background-color: rgba(23, 23, 23, 0.08);
`;

const UseInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Price = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Hours = styled.div`
  margin-left: 0.2rem;
  color: rgb(157 155 155);
`;
