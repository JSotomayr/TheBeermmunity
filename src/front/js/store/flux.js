const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}`,
			beers: []
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
						console.log("RESPUESTA", allBeer);
						setStore({beers: [...beers, allBeer]});
						localStorage.setItem("beers", JSON.stringify(getStore().beers));
						// getActions().getBeer()
					}
					throw new Error("Fail downloading beers.")
				} catch (error) {
					console.log(error)
				}
			},
		}
	}
};


export default getState;
