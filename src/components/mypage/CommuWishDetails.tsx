import { styled } from 'styled-components';
import * as MypageS from '../../styles/mypage/Mypage';
import CommuWishList from './CommuWishList';
import { useEffect } from 'react';
import Axios from 'axios';
import React from 'react';

const getWishUrl = 'http://localhost:8080/mypage/getMyCommunityWishList';
//
const comDatas = [1, 2, 3, 4, 5, 6]; //임시 데이터 배열

const CommuWishDetails = () => {
  const [wishData, setWishData] = React.useState<any>([]);
  useEffect(() => {
    //   console.log(param1Value);

    // 댓글 조회 정보
    const commentListApiR = Axios.get<any>(getWishUrl, {
      params: {
        email: 'chu',
      },
    }).then((response: any) => {
      console.log(response, 'wow');

      const { result } = response.data;
      console.log(result, 'rest');
      setWishData(result);
      // if (result.length < 0) {
      console.log('hi');

      //   const rows: ICommentData[] = [];
      //   result.forEach((element: any) => {
      //     console.log(element);

      //     const row = {
      //       // createdDate: element.created_date,
      //       // commuTitle: element.commu_title,
      //       commentId: element.commentId,
      //       commentSeq: element.commentSeq,
      //       commentText: element.commentTxt,
      //       name: element.name,
      //       pImg: element.p_img,
      //       commentDate: element.insertDatetime,
      //     };
      //     console.log(row);

      //     rows.push(row);
      //   });

      //   setCommentDataList(rows);
      // }
    });
    // axios
    //   .get(urlGetCommuDetail, {
    //     params: {
    //       commuId: param1Value,
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response, '디테일');
    //     const list = response.data.result['communityDetail'][0];
    //     console.log(list);

    //     // re
    //   });
    // 커뮤니티 상세정보
    // commentListApiR;
  }, []);
  return (
    <MypageS.MyListRight>
      <WishConBox>
        {wishData.map(function (comData: any) {
          return <CommuWishList props={comData}></CommuWishList>;
        })}
      </WishConBox>
    </MypageS.MyListRight>
  );
};

const WishConBox = styled.div``;

export default CommuWishDetails;
