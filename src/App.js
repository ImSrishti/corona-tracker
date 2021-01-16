

import React, { Component } from 'react'
import { Cards , Chart , StatePicker } from './Component'
import styles from './App.module.css'
import {fetchData} from './api'
import coronaImg from './Images/coronavirus_logo-2.jpg';

 class App extends Component {

  state = {
    data:{},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    console.log(country)
   this.setState({data:fetchedData,country:country})
  }

  render() {
     const {data,country} = this.state;    
    
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt='covid 19'/> 
        <Cards data={data}/>
        <StatePicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        
       </div>
    )
  }
}

export default App;