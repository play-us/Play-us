import axios from 'axios';
import { IFieldCommentData, IFieldItem } from '../utils/FieldType';

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

// 구장 단건 조회(상세페이지)
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

// 구장 리뷰 조회(상세페이지)
export const getFieldReview = (fieldId: string) => {
  return new Promise<IFieldCommentData[]>((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/field/getFieldReview`, {
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

// 구장 리뷰 등록
export const insertFieldReview = (
  fieldId: string,
  resvId: string,
  email: string,
  starCnt: string,
  reviewCon: string,
) => {
  return new Promise<IFieldCommentData[]>((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_IP}/field/insertFieldReview`, {
        params: {
          fieldId: fieldId,
          resvId: resvId,
          email: email,
          starCnt: starCnt,
          reviewCon: reviewCon,
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
export const getReservation = (
  email: string,
  pageStart?: number,
  pageEnd?: number,
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/field/getReservation`, {
        params: {
          email: email,
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

// 구장 예약 불가능 일자 조회
export const getReservationImpossibleDate = (
  fieldId: string | null,
  resvYm: string,
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_IP}/field/getReservationImpossibleDate`,
        {
          params: {
            fieldId: fieldId,
            resvYm: resvYm,
          },
        },
      )
      .then((e: any) => {
        resolve(e);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// 구장 예약 가능 시간 조회
export const getReservationPossibleTime = (
  fieldId: string | null,
  resvDate: string,
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_IP}/field/getReservationPossibleTime`,
        {
          params: {
            fieldId: fieldId,
            resvDate: resvDate,
          },
        },
      )
      .then((e: any) => {
        resolve(e);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// 구장 예약 등록
export const insertReservation = (
  fieldId: string | null,
  email: string,
  resvDate: Date,
  resvStartTime: string | null,
  resvEndTime: string | null,
  resvPrice: number | undefined,
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_IP}/field/insertReservation`, {
        fieldId: fieldId,
        email: email,
        resvDate: resvDate,
        resvStartTime: resvStartTime,
        resvEndTime: resvEndTime,
        resvPrice: resvPrice,
      })
      .then((e: any) => {
        resolve(e);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// 구장 예약 취소
export const deleteReservation = (resvId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_IP}/field/deleteReservation`, {
        params: { resvId: resvId },
      })
      .then((e: any) => {
        resolve(e);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
