import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../features/login/LoginPage';
import Child1Page1 from '../features/page1/Child1Page1';
import Child1Page2 from '../features/page1/Child1Page2';
import Page1 from '../features/page1/Page1';
import Page2 from '../features/page2/Page2';
import { Page2Info } from '../features/page2/Page2Info';
import { AuthProvider } from '../shared/UseAuth';
import Navigation from './Navigation';
import NoMatch from './NoMatch';
import ProtectedPage from './ProtectedPage';

const AppRouter = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route element={<ProtectedPage />}>
            <Route path="/home" element={<Navigation />}>
              <Route path="page1" element={<Page1 />}>
                <Route path="child1-1" element={<Child1Page1 />} />
                <Route path="child1-2" element={<Child1Page2 />} />
              </Route>
              <Route path="page2" element={<Page2 />}>
                <Route index element={<div>Silahkan pilih product</div>} />
                <Route path=":id" element={<Page2Info />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default AppRouter;
