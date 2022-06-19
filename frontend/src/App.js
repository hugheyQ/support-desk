import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
	HomePage,
	LoginPage,
	RegisterPage,
	TicketsPage,
	TicketPage,
	NewTicketPage,
} from './pages'
import { PrivateRoute } from './components'
import { Header } from './components'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className='container'>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route
							path='/new-ticket'
							element={
								<PrivateRoute>
									<NewTicketPage />
								</PrivateRoute>
							}
						/>
						<Route
							path='/tickets'
							element={
								<PrivateRoute>
									<TicketsPage />
								</PrivateRoute>
							}
						/>
						<Route
							path='/ticket/:ticketId'
							element={
								<PrivateRoute>
									<TicketPage />
								</PrivateRoute>
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
			<ToastContainer />
		</>
	)
}
export default App
