// App.js
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import NavbarScreen from './NavbarScreen'
import FooterPage from './Footer'
import DataTable from './page/DataTable'
import './App.css'

const App = () => {
  return (
    <>
      <div className=" text-center position-relative">
        <NavbarScreen />
        <DataTable />
        <FooterPage />
      </div>
    </>
  )
}

export default App
