const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}`,
			detailUrl: baseUrl.concat("/api/beer/"),
			beers: [],
			beersDetail: []
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
					 
					if (response) {
						let allBeer = await response.json();
						setStore({beers: [...getStore().beers, ...allBeer]});
						localStorage.setItem("beers", JSON.stringify(getStore().beers));
					}
					throw new Error("Fail downloading beers.")
				} catch (error) {
					console.log(error)
				}
			},
			getBeerDetail: async (id) => {
				try {
					let response = await fetch(getStore().detailUrl.concat(id), {
						method: "GET",
						mode: "cors",
						redirect: "follow",
						headers: new Headers({
							'Content-Type': 'text/plain'
						}),
						
					});
					 
					if (response) {
						let allBeer = await response.json();
						setStore({beersDetail: [...getStore().beersDetail, ...allBeer]});
						localStorage.setItem("beers", JSON.stringify(getStore().beersDetail));
					}
					throw new Error("Fail downloading beer detail.")
				} catch (error) {
					console.log(error)
				}
			},
		}
	}
};


export default getState;
