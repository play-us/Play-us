import axios from 'axios';

// 회원가입
export const insertMember = (
  email: string,
  password: string,
  name: string,
  area: string,
  phone: string,
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_IP}/login/insertMember`, {
        email: email,
        password: password,
        name: name,
        area: area,
        phone: phone,
      })
      .then((e: any) => {
        resolve(e);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// 로그인
export const getMember = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_IP}/login/getMember`, {
        params: {
          email: email,
          password: password,
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
