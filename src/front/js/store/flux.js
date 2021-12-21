import jwt_decode from "jwt-decode";


const getState = ({ getStore, getActions, setStore }) => {
	const PORT = 3001;
	const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");
	
	return {
		store: {

			baseUrl: `${PROTOCOL}://${PORT}-${HOST}/api/`,
			register: [],
			login: [],
			currentUser: null,
			profileInfo: [],
			beers: [],
			beersDetail: [],
			favouriteBeer: [],
			tastedBeer: []
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
							localStorage.setItem("currentUser", JSON.stringify(getStore().currentUser))
							console.log("me he logueado")
						})
						.catch(error => console.error("There as been an unknown error", error));
				},

			getBeer: async () => {
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

			getProfileInfo: async id => {
				const token = localStorage.getItem("access_token");
				try {
					let response = await fetch(getStore().baseUrl.concat("customer/", id), {
						method: "GET",
						headers: new Headers({
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`
						}),
						
					});
					
					if (response) {
						let userInfo = await response.json();
						console.log("RESPUESTA", response)
						setStore({profileInfo: [userInfo]});
						localStorage.setItem("user", JSON.stringify(getStore().profileInfo));
					}else{throw new Error("Fail downloading user info.")}
				} catch (error) {
					console.log(error)
				}
			},
			
			addFavourite: async fav => {
				let newFavBeer = getStore().favouriteBeer.map(x => x.id)
					const token = localStorage.getItem("token");			
					try {
						let response = await fetch(getStore().baseUrl + "brewer/favourite-beer/" + fav.id , {
							method: "POST",
							body: JSON.stringify(fav),
							headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept:"application/json" }, 
						});
						if (response.ok) {
							let responseAsJson = await response.json();
							setStore({ favouriteBeer: responseAsJson});
						} else {throw new Error("Fail in add favourite.")}
					} catch (error) {
							console.log(error);
					}
			},

			getFavouriteBeer: async () => {
				const token = localStorage.getItem("token");			
				const response = await fetch(getStore().baseUrl + "brewer/favourite-beers", {
					headers: { Authorization: `Bearer ${token}`}, 
			} );
				const data = await response.json();
				setStore({favouriteBeer:data})
			},

			addTastedBeer: beer => {
				setStore({ tastedBeer: [...getStore().tastedBeer, beer] });
			}
		}
	}
};


export default getState;

