const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			register: [],
			login: [],
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}`,
			// baseUrl: "https://3001-peach-piranha-m7oodx19.ws-eu23.gitpod.io/api/",
			favourites: [],
			beers: [],

			beersDetail: [],
			tastedBeer: []

		},
		actions: {
				register: (dataRegister) => {
					// fetch(getStore().baseURL.concat("customer"), {
						fetch("https://3001-peach-piranha-m7oodx19.ws-eu23.gitpod.io/api/customer", {
						method: "POST", 
						headers: { "Content-Type": "application/json", Accept:"application/json" },
						body: JSON.stringify(dataRegister)
					})
						.then(resp => {
							if (!resp.ok) {
								throw Error("Invalid register info");
							}
							return resp.json();
						})
						.then(responseAsJson => {
							console.log("respuesta json", responseAsJson);
							localStorage.setItem("token", responseAsJson.token);
							console.log("me he registrado")
							return true;
						})
						.catch(error => {
							console.error("There as been an unknown error", error);
							return false;
						});

				},


			login: (dataLogin) => {
					// fetch(getStore().baseURL.concat("customer"), {
						
						fetch("https://3001-peach-piranha-m7oodx19.ws-eu23.gitpod.io/api/login", {
						method: "POST", 
						headers: { "Content-Type": "application/json", Accept:"application/json" },
						body: JSON.stringify(dataLogin)
					})
						.then(resp => {
							if (!resp.ok) {
								throw Error("Invalid register info");
							}
							return resp.json();
						})
						.then(responseAsJson => {
							console.log("respuesta json", responseAsJson);
							localStorage.setItem("token", responseAsJson.token);
							console.log("me he logueado")
						})
						.catch(error => console.error("There as been an unknown error", error));
				},

				// login: async dataLogin => {
				// 	try {
				// 		let response = await fetch(getStore().baseUrl.concat("api/loginUser"), {
				// 			method: "POST",
				// 			headers: new Headers({
				// 				'Content-Type': 'text/plain'
				// 			}),
				// 			body: JSON.stringify(dataLogin)
				// 		});
				// 		console.log("RESPUESTA", response);

				// 		if (response.ok) {
				// 			let newUser = await response.json();
				// 			setStore({currentUsers: [...getStore().user, ...responseAsJson.results]});
	
				// 			// getActions().getBeer()
				// 		}
				// 		throw new Error("Fail login User")
				// 	} catch (error) {
				// 		console.log("Fail login User", error)
				// 	}
				// },	

			getBeer: async data => {
				try {
					let response = await fetch(getStore().baseUrl.concat("/api/beer"), {
						method: "GET",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							'Content-Type': 'text/plain'
						}),
						
					});
				if(response.ok) {
						let allBeer = await response.json();
						setStore({beers: [...getStore().beers, ...allBeer]});
						console.log("RESPUESTA", getStore().beers)
						localStorage.setItem("beers", JSON.stringify(getStore().beers));
						// getActions().getBeer()
					}else{throw new Error("Fail downloading beers.")}
				} catch (error) {
					console.log(error)
				}				
			},
			addFavourite: name => {
				setStore({ favourites: [...getStore().favourites, name] });
			},	
			getBeerDetail: async id => {
				try {
					let response = await fetch(getStore().baseUrl.concat("/api/beer/").concat(id), {
						method: "GET",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							'Content-Type': 'text/plain'
						}),
						
					});
					
					if (response) {
						let allBeer = await response.json();
						console.log("RESPUESTA", response)
						setStore({beersDetail: [allBeer]});
						localStorage.setItem("beers", JSON.stringify(getStore().beersDetail));
					}
					throw new Error("Fail downloading beer detail.")
				} catch (error) {
					console.log(error)
				}
			},

			addTastedBeer: beer => {
				setStore({ tastedBeer: [...getStore().tastedBeer, beer] });
			}
		}
	}
};


export default getState;

