const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			login_func: (login_email, login_password) => {

				console.log("Haciendo login con" + login_email + "  clave es  " + login_password)
				let request_body = {
					email: login_email,
					password: login_password
				}

				var requestOptions = {
					method: 'POST',
					redirect: 'follow',
					body: request_body
				};

				console.log(requestOptions)

				fetch("https://3001-sneelyg-jwtauthenticati-duxtun3mp5i.ws-us70.gitpod.io//login", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result)) /**Se pone result.results pq la API entrega un objeto, con info y results. */
					.catch(error => console.log('error', error));


			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
