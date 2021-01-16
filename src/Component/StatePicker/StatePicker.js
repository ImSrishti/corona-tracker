import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './StatePicker.module.css';
import {fetchStates} from '../../api';

const StatePicker= ({handleCountryChange}) =>{

    const [fetchedStates,setFetchedStates] = useState([])
    useEffect(()=>{
        const fetchAPI = async () =>{
            setFetchedStates(await fetchStates());
        }
        fetchAPI();
    },[fetchedStates]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="Global">global</option>
                {fetchedStates.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker
