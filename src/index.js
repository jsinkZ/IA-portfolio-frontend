import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<CssBaseline />
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</>
)
