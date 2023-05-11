import {useState} from 'react';
import {Text, View, Image,Pressable} from 'react-native';
import { useDispatch } from 'react-redux';
import { delete_from_cart } from '../Redux/Action/Action';

const CartDisplay = ({data}) => {
  let newTotal;
  const [total,setTotal]=useState(0)
price=data.item.price;
newTotal=total+price;
console.log("price is:",total)

const dispatch = useDispatch();
    
const Deletedfromcart = () => {
  dispatch(delete_from_cart(data.item));
};
  return (
    <>
      <View
        style={{flex: 1, borderWidth: 0.8, borderColor: 'Black', padding: 10,flexDirection:"row"}}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}>
          <Text>{data.item.title}</Text>
          <Text>₹{data.item.price}</Text>
          <Pressable style={{
        width: 60,
        borderColor: 'grey',
        borderRadius: 8,
        borderWidth: 0.4,
        backgroundColor: "black",
        marginVertical:20,
        padding: 6,
        alignItems: 'center',
      }} onPress={()=>{Deletedfromcart()}}><Text style={{color:"white"}}>Delete</Text></Pressable>
        </View>
      
        <View>
          
        </View>
        <Image
            source={{uri: data.item.images[0]}}
            style={{height: 160, width: 130}}></Image>
      </View>
    </>
  );
};
export default CartDisplay;
