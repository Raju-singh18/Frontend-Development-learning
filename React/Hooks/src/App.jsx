import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './Components/useEffect/UseEffect'
import Example2 from './Components/useEffect/Example2'
import Example3 from './Components/useEffect/Example3'
import Challenge from './Components/useEffect/Challenge'
import CleanUp from './Components/useEffect/CleanUp'
import UseState from './Components/useState/UseState'
import StateChallenge from './Components/useState/StateChallenge'
import RegistrationForm from './Components/useState/RegistrationForm'
import RegistrationReact from './Components/useState/RegistrationReact'
import LoginForm from './Components/useState/LoginForm'
import ContactForm from './Components/useState/ContactForm'
import UseRef from './Components/useRef/UseRef'
import ForwardRef from './Components/useRef/ForwardRef'
import UseId from './Components/useId/UseId'
import { ParentComponent } from './Components/Prop Drilling/PropDrilling'
import { Home } from './Components/ContextAPI/Home'
import { BioProvider } from './Components/ContextAPI'
import { About } from './Components/ContextAPI/About'
import { Services } from './Components/ContextAPI/Services'
import { ReducerComp } from './Components/UseReducer'
import { ImpReducerComp } from './Components/UseReducer/Improved'
import ReactMemo from './Components/Memo/ReactMemo'
import { MemoParentComponent } from './Components/Memo/UseMemo'
import UseCallback from './Components/Memo/UseCallback'
 
 

function App() {
 

  return (
   <div>
    {/* <Example2/> */}
    {/* <Example3/> */}
    {/* <Challenge/> */}
    {/* <CleanUp/> */}
{/* 
    <UseState/> */}
    {/* <StateChallenge/> */}
    {/* <RegistrationForm/> */}
    {/* <RegistrationReact/> */}
    {/* <LoginForm/> */}
    {/* <ContactForm/> */}

    {/* <useRef state> */}
    {/* <UseRef/> */}
    {/* <ForwardRef/> */}

    {/* <useId Hook */}
    {/* <UseId/> */}

    {/* <ParentComponent/> */}

    {/* <BioProvider>
      <Home/>
      <About/>
      <Services/>
    </BioProvider> */}

{/* useReducer Hook */}
    {/* <ReducerComp/> */}
    {/* <ImpReducerComp/> */}

{/* Memo */}
    {/* <ReactMemo/> */}
    {/* <MemoParentComponent/> */}
    <UseCallback/>

   </div>
  )
}
 
export default App
