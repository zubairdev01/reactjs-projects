import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './Components/Home.jsx'
import Features from './Components/Features.jsx'
import Company from './Components/Company.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="company" element={<Company />} />
      <Route path="features" element={<Features />} />
      <Route path="contact" element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
    </Route>,
  ),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
