const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("//")



const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "url",
			currentUsers: []
		},

		actions: {
			register: (first_name, last_name, email, password, username) => {
				fetch(getStore().baseURL.concat("/signup"), {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						email: email,
						password: password,
						username: username
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid register info");
						}
					})
					.then(responseAsJson => {
						localStorage.setItem("token", responseAsJson);
					})
					.catch(error => console.error("There as been an unknown error", error));
			},

			login: async data => {
                try {
                    let response = await fetch(getStore().baseUrl.concat("api/loginUser"), {
                        method: "POST",
                        mode: "cors",
                        redirect: "follow",
                        headers: new Headers({
                            'Content-Type': 'text/plain'
                        }),
                        body: JSON.stringify(data)
                    });
                    console.log("RESPUESTA", response);

                    if (response.ok) {
                        let newUser = await response.json();
                        setStore({currentUsers: [...getStore().user, ...responseAsJson.results]});
 
                        // getActions().getBeer()
                    }
                    throw new Error("Fail login User")
                } catch (error) {
                    console.log("Fail login User", error)
                }
            },
		}
	};
};

export default getState;