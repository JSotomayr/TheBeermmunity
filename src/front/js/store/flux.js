const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}`,
			beers: [],
			registerCustomer: {}
		},
		actions: {
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
					 
					if (response.ok) {
						let allBeer = await response.json();
						setStore({beers: [...getStore().beers, ...allBeer]});
						console.log("RESPUESTA", getStore().beers)
						localStorage.setItem("beers", JSON.stringify(getStore().beers));
						// getActions().getBeer()
					}
					throw new Error("Fail downloading beers.")
				} catch (error) {
					console.log(error)
				}
			},
			registerBusiness: (data)
			// registerCustomer: (email, password, username, country, city) => {
			// 	fetch(getStore().baseURL.concat("/signup"), {
			// 		method: "POST",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify({
			// 			email: email,
			// 			password: password,
			// 			username: username,
			// 			country: country,
			// 			city: city	
						
			// 		})
			// 	})
			// 		.then(resp => {
			// 			if (!resp.ok) {
			// 				throw Error("Invalid register info");
			// 			}
			// 		})
			// 		.then(responseAsJson => {
			// 			localStorage.setItem("token", responseAsJson);
			// 		})
			// 		.catch(error => console.error("There as been an unknown error", error));
			// },

			// login: async data => {
            //     try {
            //         let response = await fetch(getStore().baseUrl.concat("api/loginUser"), {
            //             method: "POST",
            //             mode: "cors",
            //             redirect: "follow",
            //             headers: new Headers({
            //                 'Content-Type': 'text/plain'
            //             }),
            //             body: JSON.stringify(data)
            //         });
            //         console.log("RESPUESTA", response);

            //         if (response.ok) {
            //             let newUser = await response.json();
            //             setStore({currentUsers: [...getStore().user, ...responseAsJson.results]});
 
            //             // getActions().getBeer()
            //         }
            //         throw new Error("Fail login User")
            //     } catch (error) {
            //         console.log("Fail login User", error)
            //     }
            // },
		}
	}
};


export default getState;
