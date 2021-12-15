import React, { useContext } from "react"
import { Context } from "../store/appContext";




export const Favourite = () => {
    const {store, actions} = useContext(context);
    return (
    <div>
        <p>CERVEZAS FAVORITAS</p>
        <div>
            <p>LISTA DE CERVEZAS</p>
            {/* {store.favourite.map((favourite, index) => (
            key={index.toString()}>{favourite.name}
                            ))}  */}
        </div>
    </div>
    );
}