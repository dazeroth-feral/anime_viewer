import initial_state from "../state_initiators/new_animes_initial_state";

// create new initial state
let new_initial_state = {};

// set max count elements in object
let max_object_elements = 20;

// check for cutting out excess elements
if (Object.keys(initial_state).length > max_object_elements) {
    for (var i = 0; i < max_object_elements; i++) {
        var elements_from_old_object = Object.keys(initial_state)[i];
        new_initial_state[i] = initial_state[elements_from_old_object];
    };
};

// if true then the new array is returned, otherwise the old one
const new_AnimesReducer = (store = Object.keys(initial_state).length > max_object_elements ? new_initial_state : initial_state, action) => {
    switch (action.type) {
        default:
            return store;
    }
};

export default new_AnimesReducer;