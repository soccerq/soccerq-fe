import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from '../components/login/login';
import Home from '../components/home/home';
import Signup from '../components/signup/signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
)

export default router;