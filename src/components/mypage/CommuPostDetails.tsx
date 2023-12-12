import * as MypageS from '../../styles/mypage/Mypage';
import * as MypageCommuS from '../../styles/mypage/Community';
import CommuPostList from './CommuPostList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICommuDetailProps } from '../../pages';
import ConvertDate from '../common/date/dateFormat';
import { ICommunityRowData } from '../recruitTeam/RecruitTeamList';
const urlGetMainDataList = 'http://localhost:8080/main/getMainData';
const comDatas = [1, 2, 3, 4, 5, 6]; //임시 데이터 배열

const CommunityDetails = () => {
  const [recruitData, setRecruitData] = useState<ICommunityRowData[]>([]);
  useEffect(() => {
    //상세 정보

    // 메인 페이지 커뮤니티 데이터 init
    axios
      .get(urlGetMainDataList, {
        params: {
          email: 'chu',
        },
      })
      .then((response) => {
        // console.log(response);

        const data = response.data.result['commuList'];
        // console.log(data, ' data!!!');

        // if (data.length > 0) {
        const rows: any[] = [];
        data.forEach((element: ICommuDetailProps) => {
          console.log(element, 'dd');

          const row = {
            deadline: ConvertDate(element.insertDatetime),
            commuTitle: element.commuTitle,
            likeCnt: element.wishCnt,
            commentCnt: element.commentCnt,
            name: '황창민',
            userImg: null, //이미지 추후작업
            deadLine: ConvertDate(element.deadLine),
            memberCount: element.memberCnt,
            stadium: element.fieldTp,
            wishCnt: element.wishCnt,
            commuId: element.commuId,
            wishYn: element.wishYn,
          };
          rows.push(row);
        });

        setRecruitData(rows);
        console.log(recruitData, 'initdata');
        // }
      });
  }, []);
  return (
    <MypageS.MyListRight>
      <MypageCommuS.CommuConBox>
        <MypageCommuS.CommuListWrap>
          {recruitData.map((data) => {
            return <CommuPostList data={data}></CommuPostList>;
          })}
        </MypageCommuS.CommuListWrap>
      </MypageCommuS.CommuConBox>
    </MypageS.MyListRight>
  );
};

export default CommunityDetails;
