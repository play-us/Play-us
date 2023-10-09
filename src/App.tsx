import React from 'react';
import './App.css';
import Header from './components/common/Navbar';
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import FieldListPage from './pages/FieldListPage';
import FieldDetailPage from './pages/FieldDetailPage';
import Community from './pages/Community';
import RecruitTeamDetail from './components/recruitTeam/RecruitTeamDetail';
import Home from './pages/index';
import SocialKakao from './components/kakaoLogin/SocialKakao';
import SignIn from './pages/SignIn';

const Wrap = styled.div`
  background-color: #f2f5f7;
  margin: 0 auto;
`;
const InnerWrap = styled.div`
  width: 51.25rem;
  margin: 0 auto;
  background-color: #ffffff;
`;
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wrap>
        <InnerWrap>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
            <Route path="/signUp"></Route>
            <Route path="/mypage" element={<MyPage></MyPage>}></Route>
            <Route path="/fieldList" element={<FieldListPage />}></Route>
            <Route path="/fieldDetail" element={<FieldDetailPage />}></Route>
            <Route path="/community" element={<Community />}></Route>
            <Route
              path="/recruitTeamDetail"
              element={<RecruitTeamDetail />}
            ></Route>
          </Routes>
        </InnerWrap>
      </Wrap>
    </div>
  );
}

export default App;
