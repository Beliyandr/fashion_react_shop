import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import App from './App';
import { MainPage } from './pages/MainPage';
import { CataloguePage } from './pages/CataloguePage';
import { FashionPage } from './pages/FashionPage';
import { LifestylePage } from './pages/LifestylePage';
import { FavoritePage } from './pages/FavoritePage';
import { LoginPage } from './pages/LoginPage';


export const Root = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<MainPage />} />
          <Route path='catalogue' element={<CataloguePage />}></Route>
          <Route path='fashion' element={<FashionPage />}></Route>
          <Route path='favorite' element={<FavoritePage />}></Route>
          <Route path='lifestyle' element={<LifestylePage />}></Route>
        </Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </Router>

  )
}
