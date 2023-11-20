import axios from 'axios';

// 메인페이지 조회
export const getMainData = (
  sido: string | null,
  sigungu: string | null,
  fieldTp: string | null,
  searchTxt: string | null,
  sort: string | null,
  pageStart: number,
  pageEnd: number,
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/main/getMainData`, {
        params: {
          area1: sido,
          area2: sigungu,
          fieldTp: fieldTp,
          searchTxt: searchTxt,
          sort: sort,
          pageStart: pageStart,
          pageEnd: pageEnd,
        },
      })
      .then((e: any) => {
        resolve(e);
      })
      .catch((e) => {
        reject(e);
      });
  });
};