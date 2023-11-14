import axios from 'axios';
import { IFieldItem } from '../utils/FieldType';

// 구장목록 전체조회
export const getFieldList = (
  area: string,
  fieldTp: string,
  searchTxt: string,
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/field/getFieldList`, {
        params: {
          area: area,
          fieldTp: fieldTp,
          searchTxt: searchTxt,
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

// 구장 단건 조회(성새패아자)
export const getFieldDetail = (fieldId: string, email?: string) => {
  return new Promise<IFieldItem[]>((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/field/getFieldDetail`, {
        params: {
          fieldId: fieldId,
          email: email,
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

// 구장 좋아요
export const postFieldLike = (
  fieldId: string,
  email: string,
  state: boolean,
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_IP}/field/fieldLike`, {
        fieldId: fieldId,
        email: email,
        state: state,
      })
      .then((e: any) => {
        resolve(e);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// 구장 좋아요 조회
export const getFieldLike = (fieldId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/field/getFieldLike`, {
        params: {
          fieldId: fieldId,
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

// 구장 예약정보 조회
export const getReservation = (email: string, resvId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/field/getReservation`, {
        params: {
          email: email,
          resvId: resvId,
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
