export interface IFieldItem {
  addr: string;
  area: string;
  closingHours: Date;
  fieldId: string;
  fieldNm: string;
  fieldTp: string | null;
  hours: number;
  insertDatetime: Date;
  lat: string;
  reviewCnt: number | undefined;
  likeCnt: number;
  likeYn: string;
  lng: string;
  note: string;
  openingHours: Date;
  parkingTp: string;
  price: number;
  remarkTxt: string | null;
  rentalSup: string | null;
  size: string;
  swrmYn: string | null;
  useYn: string;
  imgUrl?: string | undefined;
}

export interface IRowData {
  fieldId: string;
  fieldNm: string;
  area: string;
  addr: string;
  price: number;
  hours: number;
  reviewCnt?: number | undefined;
  likeCnt?: number | undefined;
  imgUrl?: string | undefined;
  likeYn?: string | undefined;
}

export interface IFieldTypeData {
  area1: string | null;
  area2: string | null;
  fieldTp: string | null;
  searchTxt: string | null;
}

export interface IFieldCommentData {
  length: boolean;
  map(
    arg0: (data: IFieldCommentData) => import('react/jsx-runtime').JSX.Element,
  ): any;

  reviewId: string;
  fieldId: string;
  email: string;
  name: string;
  reviewSeq: string;
  starCnt: string;
  reviewCon: string;
  remarkTxt: string;
  insertDatetime: string;
  updateDatetime: string;
}
