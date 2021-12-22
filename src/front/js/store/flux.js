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
      tastedBeer: [],
      breweries: [],
    },
    actions: {
      register: (dataRegister) => {
        fetch(getStore().baseUrl.concat("customer"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dataRegister),
        })
          .then((resp) => {
            if (!resp.ok) {
              throw Error("Invalid register info");
            }
            return resp.json();
          })
          .then((responseAsJson) => {
            let token = jwt_decode(responseAsJson.token);
            setStore({ currentUser: token.sub });
            localStorage.setItem("token", responseAsJson.token);
          })
          .catch((error) => {
            console.error("There as been an unknown error", error);
          });
      },

      login: (dataLogin) => {
        fetch(getStore().baseUrl.concat("login"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dataLogin),
        })
          .then((resp) => {
            if (!resp.ok) {
              throw Error("Invalid register info");
            }
            return resp.json();
          })
          .then((responseAsJson) => {
            let token = jwt_decode(responseAsJson.token);
            setStore({ currentUser: token.sub });
            console.log("token descodificado", token);
            localStorage.setItem("token", responseAsJson.token);
            console.log("me he logueado");
          })
          .catch((error) =>
            console.error("There as been an unknown error", error)
          );
      },

      setUser: (token) => {
        setStore({ currentUser: jwt_decode(token) });
      },

      getBeer: async () => {
        try {
          let response = await fetch(getStore().baseUrl.concat("beer"), {
            method: "GET",
            mode: "cors",
            redirect: "follow",
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          });
          if (response.ok) {
            let allBeer = await response.json();
            setStore({ beers: [...getStore().beers, ...allBeer] });
            console.log("RESPUESTA", getStore().beers);
            localStorage.setItem("beers", JSON.stringify(getStore().beers));
            // getActions().getBeer()
          } else {
            throw new Error("Fail downloading beers.");
          }
        } catch (error) {
          console.log(error);
        }
      },

      getBeerDetail: async (id) => {
        try {
          let response = await fetch(getStore().baseUrl.concat("beer/", id), {
            method: "GET",
            mode: "cors",
            redirect: "follow",
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          });

          if (response) {
            let allBeer = await response.json();
            console.log("RESPUESTA", response);
            setStore({ beersDetail: [allBeer] });
            localStorage.setItem(
              "beers",
              JSON.stringify(getStore().beersDetail)
            );
          }
          throw new Error("Fail downloading beer detail.");
        } catch (error) {
          console.log(error);
        }
      },

      getAllBreweries: () => {
        fetch(getStore().baseUrl.concat("brewerie/"))
          .then((resp) => resp.json())
          .then((data) => {
            setStore({
              breweries: [...data],
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      },

      getProfileInfo: async (id) => {
        const token = localStorage.getItem("token");
        try {
          let response = await fetch(
            getStore().baseUrl.concat("customer/", id),
            {
              method: "GET",
              headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              }),
            }
          );

          if (response) {
            let userInfo = await response.json();
            console.log("RESPUESTA", response);
            setStore({ profileInfo: [userInfo] });
            localStorage.setItem(
              "user",
              JSON.stringify(getStore().profileInfo)
            );
          } else {
            throw new Error("Fail downloading user info.");
          }
        } catch (error) {
          console.log(error);
        }
      },

      // addFavourite: fav => {
      // 	let newFavBeer = getStore().favouriteBeer.map(x => x.id)
      // 	if (!newFavBeer.includes(fav.id)){
      // 		setStore({ favouriteBeer: [...getStore().favouriteBeer, fav] });
      // 	} else {
      // 		setStore({ favouriteBeer: [...getStore().favouriteBeer.filter(x => x.id != fav.id)]})
      // 	}
      // },

      // getProfileInfo: async (id) => {
      //     const token = localStorage.getItem("token");
      //     try {
      //       let response = await fetch(
      //         getStore().baseUrl.concat("customer/", id),
      //         {
      //           method: "GET",
      //           headers: new Headers({
      //             "Content-Type": "application/json",
      //             Authorization: `Bearer ${token}`,
      //           }),
      //         }
      //       );
      //       if (response) {
      //         let userInfo = await response.json();
      //         console.log("RESPUESTA", response);
      //         setStore({ profileInfo: [userInfo] });
      //         localStorage.setItem(
      //           "user",
      //           JSON.stringify(getStore().profileInfo)
      //         );
      //       } else {
      //         throw new Error("Fail downloading user info.");
      //       }
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   },

      // addTastedBeer: async tasted => {
      // 		const token = localStorage.getItem("token");
      // 		try {
      // 			let response = await fetch(getStore().baseUrl + "brewer/tasted-beer/" + tasted.id , {
      // 				method: "POST",
      // 				body: JSON.stringify(tasted),
      // 				headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept:"application/json" },
      // 			});
      // 			if (response.ok) {
      // 				let responseAsJson = await response.json();
      // 				setStore({ tastedBeer: responseAsJson});
      // 			} else {throw new Error("Fail in add tasted.")}
      // 		} catch (error) {
      // 				console.log(error);
      // 		}
      // },

      // getTastedBeer: async () => {
      // 	const token = localStorage.getItem("token");
      // 	const response = await fetch(getStore().baseUrl + "brewer/tasted-beer", {
      // 		headers: { Authorization: `Bearer ${token}`},
      // 	});
      // 	const beer = await response.json();
      // 	setStore({ tastedBeer: beer})
      // }
    },
  };
};

export default getState;
