import React, { Component } from 'react';
import 'App.css';
import Workbook from 'react-excel-workbook';

const data1 = [
  {
    fullname: 'Arjun Ghimire',
    contact: 'Kathmandu',
    phone: '9840122530',
    status: 'active'
  },
  {
    fullname: 'Sunil Regmi',
    contact: 'Kathmandu',
    phone: '9813999347',
    status: 'active'
  }
]

class App extends Component {
  render() {
    return (
      <div className="row text-center" style={{marginTop: '100px'}}>
        <Workbook filename="example.xlsx" element={<button className="btn btn-lg btn-primary">Try me!</button>}>
          <Workbook.Sheet data={data1} name="Sheet A">
            <Workbook.Column label="Fullname" value="fullname"/>
            <Workbook.Column label="Contact" value="contact"/>
            <Workbook.Column label="Phone" value="phone"/>
            <Workbook.Column label="Status" value="status"/>
          </Workbook.Sheet>
        </Workbook>
      </div>
    );
  }
}

export default App;
