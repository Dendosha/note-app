import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import { persistor, store } from './store/store.ts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>Notes</div>
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PersistGate persistor={persistor}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</PersistGate>
	</React.StrictMode>
);
