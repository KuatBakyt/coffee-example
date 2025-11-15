import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { LoginForm } from './components/LoginForm/LoginForm'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import Profile from './components/Profile/Progfile'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import ReviewList from './components/ReviewList/ReviewList'
import { PrivateRoute } from './auth/PrivateRoute'
import ReviewForm from './components/ReviewForm/ReviewForm'

function App() {
  const cart = useSelector((state: RootState) => state.cart.items)

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/registr' element={<RegisterForm />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/reviews' element={
          <PrivateRoute>
            <ReviewList />
          </PrivateRoute>
        } />
        <Route path='/addreview' element={<ReviewForm />} />

        {/* <Route path='/addreview' element={<ReviewForm />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
