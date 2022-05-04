/* eslint-disable import/no-anonymous-default-export */
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import { persistStore, persistReducer,FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import countryApiSlice from "./countryApiSlice";
import companyTypeSlice from './companyTypeSlice';
import employeeAuth from './auth/employeSlice';
import modalSlice from './modal/modalSlice';


const persistConfig = {
    key: 'onlineoffice',
    storage,
    blacklist:["country","companies","modal"]
}
// first reducer setup for persist storage blacklisting country and companies
const rootReducer= combineReducers({
    country:countryApiSlice,
    companies:companyTypeSlice,
    employeeAuth:employeeAuth,
    modal:modalSlice
})

// persist store
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store=configureStore({
    // sending 
    reducer:persistedReducer,
    // apply middleware
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export default{
    store:store,
    persistStore:persistStore(store)
}