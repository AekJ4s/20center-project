import React from 'react'
import { Navbar } from 'react-bootstrap'
import './App.css'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import { FiFacebook } from 'react-icons/fi'

const NavbarScreen = () => {
  return (
    <Navbar
      bg="success"
      variant="dark"
      className=" text-center text-black nav "
    >
      <div className=" text-center mx-auto ">
        <h3 className=" ms-5 text-white">
          20 Center มีทั้งหมด 2 สาขา |
          <a
            href="https://maps.app.goo.gl/jr8SRGLypdhp5nadA"
            className="ms-3 text-white"
          >
            <ShareLocationOutlinedIcon />

            <span className=" text-warning">สำนักท้อน</span>
          </a>
          <span className=" text-white ms-3">และ</span>
          <a
            href="https://maps.app.goo.gl/3hy9ggQNRrrZ4R8m9"
            className="ms-3 text-white"
          >
            <ShareLocationOutlinedIcon />

            <span className=" text-warning">บ้านฉาง</span>
          </a>
          <span className=" text-white ms-3">
            <AccessTimeFilledRoundedIcon /> เปิด 8 โมง ถึง 2 ทุ่ม
          </span>
        </h3>
      </div>
    </Navbar>
  )
}
export default NavbarScreen
