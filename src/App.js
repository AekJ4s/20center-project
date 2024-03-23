// App.js
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import NavbarScreen from './NavbarScreen'
import DataTable from './page/DataTable'
import FooterPage from './Footer'

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
