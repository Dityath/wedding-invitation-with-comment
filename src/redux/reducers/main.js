const main_state = {
	posts: false,
}

const main = (state = main_state, action) => {
	switch (action.type) {
		case "PUT_DATA":
			return { ...state, [action.key]: action.data };				
		default:
			return state;
	}
};

export default main;