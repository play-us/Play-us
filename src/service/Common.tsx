import axios from 'axios';

// 메인페이지 조회
export const getMainData = (
  area: string,
  fieldTp: string,
  searchTxt: string,
  sort: string,
  pageStart: number,
  pageEnd: number,
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/main/getMainData`, {
        params: {
          area: area,
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
