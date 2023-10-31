import React from 'react';
import './App.css';
import Header from './components/common/Navbar';
import { styled } from 'styled-components';
import {  Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import FieldListPage from './pages/FieldListPage';
import FieldDetailPage from './pages/FieldDetailPage';
import Community from './pages/Community';
import RecruitTeamDetail from './components/recruitTeam/RecruitTeamDetail';
import Home from './pages/index';
import SocialKakao from './components/kakaoLogin/SocialKakao';
import SignIn from './pages/SignIn';
import ProfileRetouch from './pages/ProfileRetouch';
import AdminPage from './pages/AdminPage';
import FieldRegis from './pages/FieldRegis';
import CompletePaymentPage from './pages/CompletePaymentPage';

const Wrap = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
`;
const InnerWrap = styled.div`
  width: 51.25rem;
  margin: 0 auto;
  background-color: #ffffff;
  height: 100vh;
`;
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wrap>
        <InnerWrap>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signIn" element={<SignIn/>}></Route>
            <Route path="/signUp"></Route>
            <Route path="/mypage" element={<MyPage></MyPage>}></Route>
            <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
            <Route path='profileRetouch' element={<ProfileRetouch></ProfileRetouch>}></Route>
            <Route path="/fieldRegis" element={<FieldRegis></FieldRegis>}></Route>
            <Route path="/fieldList" element={<FieldListPage />}></Route>
            <Route path="/fieldDetail" element={<FieldDetailPage />}></Route>
            <Route path="/community" element={<Community />}></Route>
            <Route
              path="/recruitTeamDetail"
              element={<RecruitTeamDetail />}
            ></Route>
            <Route
              path="/completePayment"
              element={<CompletePaymentPage />}
            ></Route>
          </Routes>
        </InnerWrap>
      </Wrap>
    </div>
  );
}

export default App;
