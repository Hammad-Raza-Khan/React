import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import User from './Components/User/User.jsx'
import GitHub, {githubinfoloader} from './Components/GitHub/GitHub.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {path: "",
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "ContactUs",
//         element: <ContactUs/>
//       },
//       {
//         path: "User/:userid",
//         element: <User/>
//       },
//       {
//         path: "GitHub",
//         element: <GitHub/>,

//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='ContactUs' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader ={githubinfoloader}
       path='Github' element={<GitHub />} />
    </Route>
  )  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
