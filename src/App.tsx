import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import GestureDetail from './pages/GestureDetail'
import Quiz from './pages/Quiz'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'catalog', Component: Catalog },
      { path: 'gesture/:id', Component: GestureDetail },
      { path: 'quiz', Component: Quiz },
      { path: 'login', Component: Login },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}