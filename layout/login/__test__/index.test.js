// __tests__/index.test.jsx
import { render, screen } from '@testing-library/react'
import Login from "../Login"
import {Provider} from "react-redux"
import store from '../../../redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const MockRedux=()=>{
    return <Provider store={store.store}>
        <PersistGate persistor={store.persistStore}>
            <Login/>
        </PersistGate>
    </Provider>
}


describe('Home', () => {
  it('login btn renders a text of Login ', () => {
      render(
         <MockRedux/>
      )
      const loginBtnText=screen.getByTestId("login-btn")
      expect(loginBtnText.textContent).toBe("Login")
  })
  it('login anchor tag of forgot password ', () => {
    render(
       <MockRedux/>
    )
    const linkBtnText=screen.getByRole("link",
    {
        name:"Forgotten Password ?"
    })
    expect(linkBtnText.textContent).toBe("Forgotten Password ?")
})
})