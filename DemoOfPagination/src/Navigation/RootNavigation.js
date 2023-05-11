import React,{useEffect,useState} from "react";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
const RootNavigation = () => {

  useEffect(()=>{getId()},[])


  const [value,setValue]=useState(null) 
  const [loading,setLoading]=useState(true)
  const getId=async()=>{
       setValue(await AsyncStorage.getItem('token'))
       setLoading(false)
  }

  if(loading==true){
    return(
      <ActivityIndicator/>
    )
  }

  else if(value==null)
  return (
    <>
    {console.log("watch")}
    <AuthNavigation/>
    </>
  )
  else 
  return(
    <>
       {console.log("watch fjidcvidf")}
       <AppNavigation/>
    </>
   
  )
};
export default RootNavigation;
