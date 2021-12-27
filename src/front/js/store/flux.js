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
      profileInfo: {},
      beers: [],
      beersDetail: [],
      favouriteBeer: [],
      tastedBeer: [],
      wishlist: [],
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
            localStorage.setItem("token", responseAsJson.token);
            localStorage.setItem("user", token.sub.id);
            console.log("me he logueado");
          })
          .catch((error) =>
            console.error("There as been an unknown error", error)
          );
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
          } else {
            throw new Error("Fail downloading beer detail.");
          }
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
              mode: "cors",
              redirect: "follow",
              headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              }),
            }
          );
          if (response) {
            let userInfo = await response.json();
            localStorage.setItem("user", userInfo.id);
            setStore({ profileInfo: userInfo, isProfileLoaded: true });
          } else {
            throw new Error("Fail downloading user info.");
          }
        } catch (error) {
          console.log(error);
        }
      },

      addFavourite: async (brewer_id, fav) => {
        let newFavBeer = getStore().favouriteBeer.map((x) => x.id);
        const token = localStorage.getItem("token");
        try {
          let response = await fetch(
            getStore().baseUrl.concat(
              "brewer/",
              brewer_id,
              "/favourite-beer/",
              fav.id
            ),
            {
              method: "POST",
              body: JSON.stringify(fav),
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          if (response.ok) {
            let responseAsJson = await response.json();
            setStore({ favouriteBeer: responseAsJson });
            console.log("añadida a favoritos");
          } else {
            throw new Error("Fail in add favourite.");
          }
        } catch (error) {
          console.log(error);
        }
      },

      addTastedBeer: async (brewer_id, tasted) => {
        const token = localStorage.getItem("token");
        try {
          let response = await fetch(
            getStore().baseUrl.concat(
              "brewer/",
              brewer_id,
              "/tasted-beer/",
              tasted.id
            ),
            {
              method: "POST",
              body: JSON.stringify(tasted),
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          if (response.ok) {
            let responseAsJson = await response.json();
            setStore({ tastedBeer: responseAsJson });
            console.log("añadida a cerveteca");
          } else {
            throw new Error("Fail in add tasted.");
          }
        } catch (error) {
          console.log(error);
        }
      },

      addWishBeer: async (brewer_id, wish) => {
        const token = localStorage.getItem("token");
        try {
          let response = await fetch(
            getStore().baseUrl.concat(
              "brewer/",
              brewer_id,
              "/wish-beer/",
              wish.id
            ),
            {
              method: "POST",
              body: JSON.stringify(wish),
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          if (response.ok) {
            let responseAsJson = await response.json();
            setStore({ wishlist: responseAsJson });
            console.log("añadida a wishlist");
          } else {
            throw new Error("Fail in adding wished beer.");
          }
        } catch (error) {
          console.log(error);
        }
      },

      getFavouriteBeer: async (id) => {
        const token = localStorage.getItem("token");
        const response = await fetch(
          getStore().baseUrl.concat("brewer/", id, "/favourite-beer"),
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        setStore({ favouriteBeer: data });
      },

      getTastedBeer: async (id) => {
        const token = localStorage.getItem("token");
        const response = await fetch(
          getStore().baseUrl.concat("brewer/", id, "/tasted-beer"),
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const beer = await response.json();
        setStore({ tastedBeer: beer });
      },

      getWishedBeer: async (id) => {
        const token = localStorage.getItem("token");
        const response = await fetch(
          getStore().baseUrl.concat("brewer/", id, "/wish-beer"),
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const beer = await response.json();
        setStore({ wishlist: beer });
      },
    },
  };
};

export default getState;
