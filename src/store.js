import { configureStore } from '@reduxjs/toolkit'
import { addressReducer, allReducer, emailreducer, nameReducer, partnerIdReducer } from './reduxslice'
export default configureStore({
    reducer: {
      address : addressReducer,
      name : nameReducer,
      email : emailreducer,
      all : allReducer,
	  partnerid : partnerIdReducer,
    },
  })