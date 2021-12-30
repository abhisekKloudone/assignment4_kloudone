export const StateReducer = (state, action) => {
	switch (action.type) {
		case "SET_CART":
			return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

		case "REMOVE_PRODUCT":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};

		default:
			return state;
	}
};
