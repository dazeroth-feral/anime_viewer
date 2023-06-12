import { createStore, combineReducers } from 'redux';

import recommendationsReducer from './reducers/recommendationsReducer';
import new_AnimesReducer from './reducers/new_AnimesReducer';
import trends_reducer from './reducers/trends_reducer';

const rootReducer = combineReducers({
    recommendation_List: recommendationsReducer,
    new_Animes_List: new_AnimesReducer,
    trends_list: trends_reducer,
});

const store = createStore(rootReducer); // Створіть стор з кореневим редуктором

export default store;
