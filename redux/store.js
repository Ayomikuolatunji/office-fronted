import AllUserSlice from "./AllUser-slice";
/* eslint-disable import/no-anonymous-default-export */
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import { persistStore, persistReducer,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import countryApiSlice from "./countryApiSlice";


const persistConfig = {
    key: 'users',
    storage,
    blacklist:["country"]
}
// first reducer setup
const rootReducer= combineReducers({
    users:AllUserSlice,
    country:countryApiSlice
})

// persist store
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store=configureStore({
    // sending 
    reducer:persistedReducer,
    // apply middleware
    middleware:[thunk]
})


export default{
    store:store,
    persistStore:persistStore(store)
}