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