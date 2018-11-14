import React, { Component } from 'react';
import 'App.css';
import Workbook from 'react-excel-workbook';

const data = [
  {
    fullname: 'Arjun Ghimire',
    contact: 'Kathmandu',
    phone: '9840122530',
    status: 'active',
    user_type: 'admin'
  },
  {
    fullname: 'Sunil Regmi',
    contact: 'Kathmandu',
    phone: '9813999347',
    status: 'active',
    user_type: 'admin'
  }
]

class App extends Component {
  render() {
    return (
      <div className="row text-center" style={{marginTop: '100px'}}>
        <Workbook filename="example.xlsx" element={<button className="btn btn-lg btn-primary">Try me!</button>}>
          <Workbook.Sheet data={data} name="Sheet A">
            <Workbook.Column label="WCLMS Fleet" value="WCLMS Fleet"/>
            <Workbook.Column label="Users" value="Users"/>
            <Workbook.Column label="Fullname" value="fullname"/>
            <Workbook.Column label="Contact" value="contact"/>
            <Workbook.Column label="Phone" value="phone"/>
            <Workbook.Column label="Status" value="status"/>
            <Workbook.Column label="User Type" value="user_type"/>
          </Workbook.Sheet>
        </Workbook>
      </div>
    );
  }
}

export default App;
