import {Text, View, Image} from 'react-native';
const ProductDisplay = ({element}) => {
  return (
    <>
      <View style={{flex: 1,borderWidth: 0.8,borderColor: 'Black',}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: element.item.images[0]}}
            style={{height: 100, width: 100}}></Image>
          
        </View>
        <View>
          <Text>{element.item.id}</Text>
        {/* <Text>john wick</Text>
        <Text>{element.item.title}</Text>
         <Text>{element.item.price}</Text>
         <Text>{element.item.description}</Text> */}
        </View>
      </View>
    </>
  );
};
export default ProductDisplay;
