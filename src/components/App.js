
import './App.css';
import  { Outlet,Link } from 'react-router-dom'
import React  from "react";



function App() {
 


  return (
    <div className="App">
     
        <div>
        <Link to="/">Home</Link><br/>
        <Link to="/certificate">Certificate</Link><br/>
        <Link to="/activity">activity</Link><br/>
        <Link to="/volunteer">volunteer</Link><br/>
          <h1>สวัสดีครับ!!</h1>

          <h3>ผมชื่อ ธีรภัทร แสงราช</h3>
          <img src="https://i.ibb.co/1nLLjjm/22481.jpg" alt="Italian Trulli" width="100" height="120"></img>


          <p>ปัจจุบันผมอยู่ชั้นมัธยมศึกษาปีที่ 6 โรงเรียนเมืองราดวิทยาคม ตำบลนาซำ อำเภอหล่มเก่า จังหวัดเพชรบูรณ์</p>
          <p>นี่เป็น website แนะนำตัวของผม โดยผมใช้ react.js ในการทำครับ</p>

          
  
      

      <Outlet />
 
        </div>
     
    </div>

  );
}

export default App;
