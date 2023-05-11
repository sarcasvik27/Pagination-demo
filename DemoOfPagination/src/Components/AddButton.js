import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { Add_to_cart } from '../Redux/Action/Action';

const AddButton = ({element,type}) => {
  const [buttoncolor, setbuttoncolor] = useState('black');
  const [buttontype, setbuttontype] = useState(type);
  const [clicked,setclicked]=useState(false);
  // const[data,setdata]=useState()

  const cartdata = useSelector(state => state.Addtocart);
  const {products} = cartdata;


  const dispatch = useDispatch();
  const Addedtocart = () => {
    if(products.length==0){
    dispatch(Add_to_cart(element.item));}
    else if(products.includes(element.item)){

    }
    else{
      dispatch(Add_to_cart(element.item))
    }
  };
  return (
    <TouchableOpacity
      style={{
        width: 60,
        borderColor: 'grey',
        borderRadius: 8,
        borderWidth: 0.4,
        backgroundColor: buttoncolor,
        margin: 19,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={Addedtocart}disabled={clicked}>
      <Text style={{color: 'white'}}>{buttontype}</Text>
    </TouchableOpacity>
  );
};
export default AddButton;
