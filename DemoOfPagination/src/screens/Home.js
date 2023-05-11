import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import ProductDisplay from '../Components/ProductDisplay';
import axios from 'axios';


const Home = () => {
  const [Data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    getId()
  }, [page]);

  const getId =async () => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );
    setData([...Data, ...response.data?.products]);
 
    console.log('page is', limit);
    console.log('skip is', skip);
  };

  return (
    <View>
    <FlatList
      data={Data}
      onEndReachedThreshold={0.4}
      onEndReached={() => {
        console.log(Data.length);
        if (Data?.length === page * limit) {
          console.log("hello data",Data.length)
          setPage(page + 1);
          console.log("page is after if ",page)
          setSkip(skip + 10);
        }
      }}
      renderItem={element => <ProductDisplay element={element} />}
      keyExtractor={element => element.skip}
    />
    </View>
  );
};
export default Home;
