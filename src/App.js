import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/Context';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';

export function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog-page' element={<BlogPage />} />
          {/* <Route path='/blog-details' element={<BlogDetails />} /> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}
