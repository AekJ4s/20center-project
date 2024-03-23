import { ProductDetail1 } from '../data/20Data'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded'
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default function DataTable() {
  const [textSeacrh, settextSeacrh] = useState('')
  const itemsPerPage = 1000
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(ProductDetail1.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, ProductDetail1.length)
  const currentItems = ProductDetail1.slice(startIndex, endIndex)
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }
  const firstPage = () => {
    setCurrentPage(1)
  }

  const lastPage = () => {
    setCurrentPage(totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }
  console.log(textSeacrh)

  return (
    <div className=" position-relative">
      <div className=" mt-3">
        <h3>ราคาอัพเดตสินค้าล่าสุด 22 มีนาคม 2566</h3>
      </div>
      <div className="card m-3">
        <div className="m-3">
          <div className=" border border-bottom bg-warning bg-opacity-25">
            <h5 className=" mt-3">
              {' '}
              สินค้าทั้งหมด {ProductDetail1.length} รายการ | จำนวนทั้งหมด{' '}
              {totalPages} หน้า | หน้าละ {itemsPerPage} รายการ{' '}
            </h5>
            <input
              type=" search"
              placeholder=" พิมพ์ชื่อสินค้าที่ต้องการค้นหา แนะนำ* ให้ค้นหากว้างๆ และกดไล่หาทุกเพจเพื่อไม่ให้ตกหล่น "
              className=" mt-3 search-box w-25"
              onChange={(e) => settextSeacrh(e.target.value)}
            ></input>

            <br />
            <div className=" mt-3">
              <error className=" text-danger mt-2">
                ****บางรายการอาจชื่อไม่ตรงกับที่ลูกค้าคิดไว้
                แนะนำให้เสิร์ธเป็นหมวดหมู่ก่อน****
              </error>
              <br />
              <br />
              <error className=" text-danger mt-2">
                ****หากต้องการความแม่นยำมากขึ้น สามารถกด Ctrl+A ที่คีย์บอร์ด
                หลังจากนั้นกด Ctrl+F จะมีช่องขึ้นมาทางด้านขวามือ
                ให้พิมพ์ชื่อสินค้าที่ต้องการได้อีกช่องทางหนึ่ง****
              </error>
            </div>
            <div className=" m-3">
              <button
                className=" btn btn-sm btn-info ms-3"
                onClick={firstPage}
                disabled={currentPage === 1}
              >
                <FirstPageRoundedIcon />
              </button>
              <button
                className=" btn btn-sm btn-info mx-3"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ArrowBackIosNewRoundedIcon />
              </button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                className=" btn btn-sm btn-info ms-3"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <ArrowForwardIosRoundedIcon />
              </button>
              <button
                className=" btn btn-sm btn-info ms-3"
                onClick={lastPage}
                disabled={currentPage === totalPages}
              >
                <LastPageRoundedIcon />
              </button>
            </div>
          </div>

          <div className=" text-center mt-3">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead className=" table-success">
                  <TableRow>
                    <StyledTableCell align="center">
                      รายการสินค้า
                    </StyledTableCell>
                    <StyledTableCell align="center">ชื่อสินค้า</StyledTableCell>
                    <StyledTableCell align="center">ราคาสินค้า</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody className=" ">
                  {currentItems.map((item, index) => {
                    let ProductName = item.from.Name
                    let ProductPrice = item.from.price
                    if (ProductName.includes(textSeacrh))
                      return (
                        <StyledTableRow key={index} className=" text-center">
                          <StyledTableCell align="center">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {ProductName}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {ProductPrice}
                            <span className=" text-success"> ฿</span>
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                  })}
                </TableBody>
              </Table>
              <h3 className=" m-3 bg-black text-warning">
                * ไล่ดูทุกหน้าเพื่อหน้านี้ไม่มีนะครับ *
              </h3>
            </TableContainer>
            <div className=" m-3">
              <button
                className=" btn btn-sm btn-info ms-3"
                onClick={firstPage}
                disabled={currentPage === 1}
              >
                <FirstPageRoundedIcon />
              </button>
              <button
                className=" btn btn-sm btn-info mx-3"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ArrowBackIosNewRoundedIcon />
              </button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                className=" btn btn-sm btn-info ms-3"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <ArrowForwardIosRoundedIcon />
              </button>
              <button
                className=" btn btn-sm btn-info ms-3"
                onClick={lastPage}
                disabled={currentPage === totalPages}
              >
                <LastPageRoundedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
