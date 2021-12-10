const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			register: {},
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}`,
			beers: [],
			favourites: []
		},
		actions: {
			register: (data) => {console.log(data);
			},
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
			addFavourite: name => {
				setStore({ favourites: [...getStore().favourites, name] });
			}
		}
	}
};


export default getState;
