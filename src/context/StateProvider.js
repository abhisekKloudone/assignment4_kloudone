import { createContext, useReducer, useContext } from "react";
import { StateReducer } from "./StateReducer";
import data from "./ProductData";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const initialState = {
		products: data,
		cart: [],
	};

	const [state, dispatch] = useReducer(StateReducer, initialState);
	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => {
	return useContext(StateContext);
};
