import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/Context';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/blog' element={<Blog />} />
          <Route path='/blog-details' element={<BlogDetails />} /> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}
