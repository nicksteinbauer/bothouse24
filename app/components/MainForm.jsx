import React from "react";


const DatePicker = require('react-datepicker');
//import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns'; // Import addDays


class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentaloption: '',
      date: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  dateChange = (date) => {
    this.setState({
        date: date,
    });
};
  handleSubmit(event) {
    //console.log('Cart or Bike Options: ' + this.state.value + ' ' + this.state.date.toLocaleDateString());


    if((this.state.date.toLocaleDateString() == '5/2/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/3/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/4/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-4-2025';
    }
    
    
    if((this.state.date.toLocaleDateString() == '5/9/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/10/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/11/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-11-2025';
    }
    

    if((this.state.date.toLocaleDateString() == '5/16/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/17/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/18/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/19/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/20/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/21/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/22/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-22-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/23/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-23-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/24/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/25/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/26/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/27/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/28/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/29/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-29-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/30/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-30-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/31/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/may-31-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/1/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-1-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/2/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/3/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/4/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/5/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/6/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-6-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/7/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-7-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/8/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-8-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/9/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/10/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/11/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/12/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/13/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-13-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/14/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-14-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/15/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-15-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/16/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/17/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/18/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/19/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/20/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/21/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/22/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-22-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/23/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-23-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/24/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/25/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/26/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/27/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/28/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/29/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-29-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/30/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/june-30-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/1/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-1-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/2/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/3/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/4/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/5/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/6/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-6-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/7/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-7-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/8/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-8-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/9/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/10/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/11/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/12/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/13/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-13-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/14/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-14-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/15/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-15-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/16/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/17/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/18/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/19/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/20/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/21/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/22/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-22-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/23/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-23-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/24/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/25/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/26/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/27/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/28/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/29/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-29-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/30/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-30-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/31/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/july-31-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/1/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-1-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/2/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/3/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/4/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/5/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/6/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-6-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/7/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-7-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/8/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-8-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/9/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/10/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/11/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/12/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/13/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-13-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/14/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-14-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/15/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-15-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/16/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/17/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/18/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/19/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/20/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/21/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/22/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-22-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/23/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-23-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/24/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/25/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/26/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/27/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/28/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/29/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-29-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/30/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-30-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/31/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/august-31-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/1/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-1-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/2/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/3/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/4/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/5/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/6/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-6-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/7/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-7-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/8/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-8-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/9/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/10/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/11/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/12/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/13/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-13-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/14/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-14-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/15/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-15-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/16/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/17/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/18/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/19/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/20/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/21/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/26/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/27/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/28/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/september-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/3/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/4/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/5/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/10/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/11/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/12/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/17/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/18/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/19/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/24/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/25/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/26/2025') && (this.state.value == 'cartrental')) {
      window.location.href = '/products/october-26-2025';
    }


    // Bicycles


    if((this.state.date.toLocaleDateString() == '5/2/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/3/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/4/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-4-2025';
    }
    
    
    if((this.state.date.toLocaleDateString() == '5/9/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/10/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/11/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-11-2025';
    }
    

    if((this.state.date.toLocaleDateString() == '5/16/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/17/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/18/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/19/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/20/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/21/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/22/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-22-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/23/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-23-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/24/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/25/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/26/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/27/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/28/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/29/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-29-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/30/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-30-2025';
    }
    if((this.state.date.toLocaleDateString() == '5/31/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-may-31-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/1/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-1-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/2/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/3/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/4/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/5/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/6/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-6-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/7/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-7-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/8/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-8-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/9/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/10/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/11/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/12/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/13/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-13-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/14/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-14-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/15/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-15-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/16/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/17/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/18/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/19/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/20/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/21/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/22/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-22-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/23/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-23-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/24/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/25/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/26/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/27/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/28/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/29/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-29-2025';
    }
    if((this.state.date.toLocaleDateString() == '6/30/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-june-30-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/1/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-1-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/2/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/3/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/4/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/5/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/6/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-6-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/7/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-7-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/8/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-8-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/9/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/10/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/11/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/12/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/13/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-13-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/14/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-14-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/15/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-15-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/16/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/17/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/18/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/19/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/20/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/21/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/22/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-22-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/23/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-23-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/24/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/25/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/26/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/27/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/28/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/29/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-29-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/30/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-30-2025';
    }
    if((this.state.date.toLocaleDateString() == '7/31/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-july-31-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/1/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-1-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/2/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/3/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/4/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/5/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/6/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-6-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/7/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-7-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/8/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-8-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/9/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/10/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/11/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/12/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/13/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-13-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/14/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-14-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/15/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-15-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/16/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/17/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/18/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/19/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/20/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/21/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/22/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-22-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/23/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-23-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/24/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/25/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/26/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/27/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/28/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/29/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-29-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/30/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-30-2025';
    }
    if((this.state.date.toLocaleDateString() == '8/31/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-august-31-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/1/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-1-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/2/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-2-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/3/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/4/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/5/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/6/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-6-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/7/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-7-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/8/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-8-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/9/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-9-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/10/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/11/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/12/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/13/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-13-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/14/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-14-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/15/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-15-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/16/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-16-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/17/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/18/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/19/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/20/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-20-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/21/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-21-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/26/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-26-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/27/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-27-2025';
    }
    if((this.state.date.toLocaleDateString() == '9/28/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-september-28-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/3/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-3-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/4/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-4-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/5/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-5-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/10/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-10-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/11/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-11-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/12/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-12-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/17/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-17-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/18/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-18-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/19/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-19-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/24/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-24-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/25/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-25-2025';
    }
    if((this.state.date.toLocaleDateString() == '10/26/2025') && (this.state.value == 'bikerental')) {
      window.location.href = '/products/bicycle-october-26-2025';
    }
    
    


    event.preventDefault();
  }

  // Function to generate excluded dates within a given range
  generateExcludedDates = (startDate, endDate) => {
    const excludedDates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      excludedDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return excludedDates;
  };

  render() {
    const tomorrow = addDays(new Date(), 1); // Get tomorrow's date

    // Generate dates for exclusion
    const excludedDates = [
      ...this.generateExcludedDates("2024-12-01", "2025-05-02"), // First range
      ...this.generateExcludedDates("2025-05-06", "2025-05-09"), // Second range
      ...this.generateExcludedDates("2025-05-13", "2025-05-16"), // Third range
      ...this.generateExcludedDates("2025-09-23", "2025-09-26"), // Fourth range
      ...this.generateExcludedDates("2025-09-30", "2025-10-03"), // Fifth range
      ...this.generateExcludedDates("2025-10-07", "2025-10-10"), // Fifth range
      ...this.generateExcludedDates("2025-10-14", "2025-10-17"), // Sixth range
      ...this.generateExcludedDates("2025-10-21", "2025-10-24"), // Seventh range
      ...this.generateExcludedDates("2025-10-28", "2030-10-31"), // Final range
    ];

    return (
      <form onSubmit={this.handleSubmit} className='flex-sm heroForm'>
        <div className='forty inputContainer'>
          <label>
            <span>Pick your Date:</span>
            <DatePicker.default
              type="text"
              name="date"
              selected={this.state.date}
              onChange={this.dateChange}
              placeholderText="Pick Rental Date"
              minDate={tomorrow} // Set minDate to tomorrow's date
              excludeDates={excludedDates} // Exclude generated dates
            />
          </label>
        </div>
        <div className='forty inputContainer'>
        <label>
          <span>Pick your favorite flavor:</span>
          <div className="select flex-vertical">
            <select id="standard-select" value={this.state.value} onChange={this.handleChange}>            
              <option value="">Cart or Bike Options</option>
              <option value="cartrental">Golf Cart Rental</option>
              <option value="bikerental">Bike Rental</option>
            </select>
            <span className="focus"></span>
          </div>
        </label>
        </div>
        <button type="submit" className='inputButton'>Reserve Now</button>
        
      </form>
    );
  }
}


export default MainForm;







