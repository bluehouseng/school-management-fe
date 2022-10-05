import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';
import PageRoutes, { general } from './pages';

function App() {
  const user = {
    isAdmin: false,
    role: 'student'
  };

  const renderRoute = {
    student: PageRoutes.student.map((item, idx) => <Route key={idx} path={item.path} element={item.element} />),
    hod: PageRoutes.hod.map((item, idx) => <Route key={idx} path={item.path} element={item.element} />),
    registrar:PageRoutes.registrar.map((item, idx) => <Route key={idx} path={item.path} element={item.element} />),
    isAdmin: PageRoutes.pages.map((item, idx) => <Route key={idx} path={item.path} element={item.element} />)
  }

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  const userRole = (user?.isAdmin && 'isAdmin') || user?.role;
  const CommonPath = general().map((item) => <Route key={item.path} path={item.path} element={item.element}/>);
  const LoggedOut = !user && PageRoutes.loggedOut.map((item, idx) =>  <Route key={idx} path={item.path} element={item.element} />)

  return (
    <>
      <Routes>
        {/* <Route path='/' element={(() => (<h1>Hello</h1>))()}/> */}
        {renderRoute[userRole] }
        {LoggedOut}
        {CommonPath}
      </Routes>
    </>
  );
}

export default App;

        // {/* {
        //   pages.map((item, idx) => <Route key={idx} path={item.path} element={item.element} />)
        // } */}
        // {/* {
        //   user === 'student' ? student.map((item, idx) => <Route key={idx} path={item.path} element={item.element} />) : null
        // }
        // {
        //   user === 'hod' ? hod.map((item, idx) => <Route key={idx} path={item.path} element={item.element} />) : null
        // } */}