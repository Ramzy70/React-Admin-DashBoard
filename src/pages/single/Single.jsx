import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h2 className="title">Information</h2>
            <div className="item">
              <img src="http://placekitten.com/g/200/300" alt="" className="itemImg" />
              <div className="details">
                <h3 className="itemTitle">John Doe</h3>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">johnDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+1 1234 56 78</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Elton St.234 Garden Yd.NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title='User Spending (Last 6 months)'/>
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Last Transactions</h2>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Single
