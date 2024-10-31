import './App.css';
import Header from './headerComp/header';
import { RepoSection } from './Repo section/repoSection';
import { Routes, Route, Outlet } from 'react-router-dom';
import { PageNotFound } from './features/404';
import { ErrorComp } from './features/errorPage';



function App() {
  return (
    <>
      <div className='body'>
        <Header/>
        <Outlet/>
      </div>
      <Routes>
        <Route path='/' element={<RepoSection/>}/>
        <Route path='/create-repo' element={<RepoSection/>}/>
        <Route path='/error-page' element={<ErrorComp/>}/>
        <Route path='/view-new-repo' element={<RepoSection/>}/>
        <Route path='/404page' element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
