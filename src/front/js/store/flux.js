import jwt_decode from "jwt-decode";


const getState = ({ getStore, getActions, setStore }) => {
	const PORT = 3001;
	const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");
	
	return {
		store: {

			baseUrl: `${PROTOCOL}://${PORT}-${HOST}/api/`,
			register: [],
			login: [],
			currentUser: {},
			profileInfo: [],
			beers: [],
			favourites: [],
			beersDetail: [],
			tastedBeers: []
		},
		actions: {
			
			register: (dataRegister) => {
				fetch(getStore().baseUrl.concat("customer"), {
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
						let token = jwt_decode(responseAsJson.token)
						setStore({currentUser: token.sub});
						localStorage.setItem("token", responseAsJson.token);
					})
					.catch(error => {
						console.error("There as been an unknown error", error);
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
							
							let token = jwt_decode(responseAsJson.token)
							setStore({currentUser: token.sub});
							console.log("token descodificado", token)
							localStorage.setItem("token", responseAsJson.token);
							console.log("me he logueado")
						})
						.catch(error => console.error("There as been an unknown error", error));
				},

			getBeer: async data => {
				try {
					let response = await fetch(getStore().baseUrl.concat("beer"), {
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

				}catch (error) { 
					console.log(error)
				}
			},

			
			getBeerDetail: async id => {
				try {
					let response = await fetch(getStore().baseUrl.concat("beer/", id), {
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

			addFavourite: name => {
				setStore({ favourites: [...getStore().favourites, name] });
			},

			addTastedBeer: beer => {
				setStore({ tastedBeer: [...getStore().tastedBeer, beer] });
			}
		}
	}
};


export default getState;

