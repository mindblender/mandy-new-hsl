import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from './Details';
import Home from './Home';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Root from './routes/root';
// import ErrorPage from './ErrorPage';
import HomePage from './routes/HomePage';
// import ClassesPage from './routes/ClassesPage';
// import DonationPage from './routes/DonationPage';
// import LivePage from './routes/LivePage';
// import RegisterPage from './routes/RegisterPage';
// import HistoryPage from './routes/HistoryPage';
// import FsCalendarPage from './routes/FsCalendarPage';
// import EventsPage from './routes/EventsPage';

/*

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'classes',
        element: <ClassesPage />,
      },
      {
        path: 'donate',
        element: <DonationPage />,
      },
      {
        path: 'live',
        element: <LivePage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'fscalendar',
        element: <FsCalendarPage />,
      },
      {
        path: 'history',
        element: <HistoryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
*/

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/mandy-new-hsl/">Home</Link>
          <Link to="/mandy-new-hsl/details">Details</Link>
        </header>
        <Routes>
          <Route path="/mandy-new-hsl/details" element={<Details />} />
          <Route path="/mandy-new-hsl/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
