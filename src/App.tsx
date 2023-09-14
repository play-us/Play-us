import React from 'react';
import './App.css';
import Header from './components/common/Navbar';
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import Community from './pages/Community';
import RecruitTeamDetail from './components/recruitTeam/RecruitTeamDetail';

const Wrap = styled.div`
  background-color: #f2f5f7;
  margin: 0 auto;
`;
const InnerWrap = styled.div`
  width: 51.25rem;
  height: 1200px;
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
            <Route path="/"></Route>
            <Route path="/signIn"></Route>
            <Route path="/signUp"></Route>
            <Route path="/mypage" element={<MyPage></MyPage>}></Route>
            <Route path="/fieldList"></Route>
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
