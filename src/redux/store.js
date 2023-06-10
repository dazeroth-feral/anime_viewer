import { createStore, combineReducers } from 'redux';

import recommendationsReducer from './reducers/recommendationsReducer'; // Імпортуйте ваш редуктор
import new_AnimesReducer from './reducers/new_AnimesReducer';

const rootReducer = combineReducers({
    recommendation_List: recommendationsReducer,
    new_Animes_List: new_AnimesReducer,
});

const store = createStore(rootReducer); // Створіть стор з кореневим редуктором

export default store;
