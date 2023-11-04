import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import FallbackLoader from './components/Common/FallbackLoader/FallbackLoader';
import Header from './components/Common/Header/index';
import Footer from './components/Common/Footer/Footer';

import { ALL_ROUTES } from './utils/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const ToastWrapper = () => (
    <ToastContainer
      position="top-right"
      autoClose={6000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      className="text-xs sm:text-sm toastStyles"
    />
  );

  return (
    <main className={`h-screen`}>
      <ToastWrapper />
      <header>
        <Header />
      </header>

      <main className={`marginTopRoot w-full h-full`}>
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            {ALL_ROUTES.map((item, index) => (
              <Route path={item.pathName} element={<item.Component />} key={index} />
            ))}

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
