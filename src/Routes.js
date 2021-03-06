import React from "react";

export default [
	{
		name : "Home",
		component : React.lazy(() => import('./views/Home'))
	},
	{
		name : "Profil",
		component : React.lazy(() => import('./views/Profil'))
	},
	{
		name : "Notification",
		component : React.lazy(() => import('./views/Notification'))
	},
	{
		name : "Chat",
		component : React.lazy(() => import('./views/Chat'))
	}
];