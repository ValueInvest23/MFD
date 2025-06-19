import React from 'react'
import CreateClientForm from './components/CreateClientForm'
import Navbar from './components/Navbar'
import AuthComponent from './components/AuthComponent'
import Dashboard from './components/Dashboard'


const App = () => {
  return (
    <>
      <Navbar />
      {/* {<CreateClientForm />} */}
      {/* <AuthComponent /> */}
      <Dashboard />

    </>
  )
}

export default App
