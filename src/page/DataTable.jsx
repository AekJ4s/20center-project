import { ProductDetail } from '../data/20Data'
import React, { useState, useRef } from 'react'
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
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import box1 from '../assets/box1.jpg'
import box2 from '../assets/box2.jpg'
import box3 from '../assets/box3.jpg'
import box4 from '../assets/box4.jpg'
import { LastPage } from '@mui/icons-material'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.success,
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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'warning',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  justifyContent: 'center',
}))

export default function DataTable() {
  const form = useRef()
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const itemsPerPage = 500
  const [currentPage, setCurrentPage] = useState(1)

  const filteredItems = ProductDetail.filter((item) => {
    const productName = item.from.ProductName.toLowerCase()
    const productType = item.from.ProductType.toLowerCase()
    const searchText = search.toLowerCase()
    return productName.includes(searchText) || productType.includes(searchText)
  })

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, filteredItems.length)
  const currentItems = filteredItems.slice(startIndex, endIndex)

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

  const onSubmitForm = (event) => {
    event.preventDefault()
    const searchText = form.current.ProductName.value.toLowerCase()
    setSearch(searchText)
    setCurrentPage(1)
  }

  return (
    <div>
      <div>
        <div className=" mt-3">
          <h5>
            สินค้าทั้งหมด {ProductDetail.length} รายการ | จำนวนทั้งหมด{' '}
            {totalPages} หน้า | หน้าละ {itemsPerPage} รายการ{' '}
          </h5>
        </div>

        <div
          className="card mt-3 bg-warning mx-auto p-4 rounded bg-success-subtle"
          style={{ width: '400px', background: '#fff' }}
        >
          <form onSubmit={onSubmitForm} ref={form}>
            <input
              type="text"
              placeholder=" ** พิมพ์ชื่อสินค้า **  "
              name="ProductName"
              className="form-control form-control-sm text-center mx-auto"
              required
            />
            <br />
            <button className=" btn btn-sm btn-success" type="submit">
              SEARCH
            </button>
          </form>
        </div>

        <div>
          <div className="m-2">
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
            <span>{`Page ${currentPage} / ${totalPages}`}</span>
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
          <TableContainer className=" mt-3 ">
            <Table className=" text-center mx-auto w-50 font-weight-bold">
              <TableHead className="bg-success">
                <TableRow>
                  <StyledTableCell align="center">รายการสินค้า</StyledTableCell>
                  <StyledTableCell align="center">ชื่อสินค้า</StyledTableCell>
                  <StyledTableCell align="center">ประเภทสินค้า</StyledTableCell>
                  <StyledTableCell align="center">ราคาสินค้า</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentItems.map((item, index) => (
                  <StyledTableRow key={index} className=" text-center">
                    <StyledTableCell align="center">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.from.ProductName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.from.ProductType}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.from.Sell} <span className=" text-success"> ฿</span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}
