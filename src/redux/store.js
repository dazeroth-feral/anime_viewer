import { createStore, combineReducers } from 'redux';

import recommendationsReducer from './reducers/recommendationsReducer';
import new_AnimesReducer from './reducers/new_AnimesReducer';
import trends_reducer from './reducers/trends_reducer';
import footer_reducer from './reducers/footer_reducer';

const rootReducer = combineReducers({
    recommendation_List: recommendationsReducer,
    new_Animes_List: new_AnimesReducer,
    trends_list: trends_reducer,
    footer_list: footer_reducer,
});

const store = createStore(rootReducer); // Створіть стор з кореневим редуктором

export default store;
