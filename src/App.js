import './App.css';
import Header from './headerComp/header';
import { RepoSection } from './Repo section/repoSection';
import { Routes, Route, Outlet } from 'react-router-dom';
import { PageNotFound } from './features/404';
import { ErrorComp } from './features/errorPage';
import { ErrorBoundary } from 'react-error-boundary';
import { CreateRepo } from './createRepo/createRepo';
import { NewRepo } from './newRepo/newRepo';


function App() {
  return (
    <ErrorBoundary fallback={<div>Oops an error occured</div>}>
      <>
        <div className='body'>
          <Header/>
          <Outlet/>
        </div>
        <Routes>
          <Route path='/' element={<RepoSection/>}/>
          <Route path='/create-repo' element={<CreateRepo/>}/>
          <Route path='/error-page' element={<ErrorComp/>}/>
          <Route path='/view-new-repo' element={<NewRepo/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </>
    </ErrorBoundary>
  );
}

export default App;
