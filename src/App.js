import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import routes from './routes';

import { GlobalStyle } from './Components/globalStyles/Index';
import 'antd/dist/antd.css';

function App() {
	return (
		<div>
			<GlobalStyle />
			<Switch>
				{routes.map((route) => {
					const { path, component, exact, key } = route;
					return (
						<route.type
							key={key}
							exact={exact}
							path={path}
							component={component}
						/>
					);
				})}
			</Switch>
		</div>
	);
}

export default App;
