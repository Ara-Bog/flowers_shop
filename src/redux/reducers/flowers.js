const initialState = {
    items: [],
    isLoaded: false
};

const flowers = (state = initialState, action) => {
    if (action.type === 'SET_FLOWERS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    };

    return state;
}

export default flowers; 