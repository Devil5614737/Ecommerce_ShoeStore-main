import Products from './pages/Products'
import './styles/App.css'
import ProductInfo from './pages/ProductInfo';
import {Route,Routes,useNavigate} from 'react-router-dom';
import Cart from './pages/Cart';
import Login from './pages/Login';
import {Context} from './Context'
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const navigate=useNavigate()
  const[searchTerm,setSearchTerm]=useState('')
  const[data,setData]=useState([])
  const[cartItems,setCartItems]=useState([])
  const [item,setItem]=useState([])
  const[loading,setLoading]=useState(true)



const fetchData=()=>{

  axios.get('https://shoes-collections.p.rapidapi.com/shoes',{
    headers: {
      'x-rapidapi-host': 'shoes-collections.p.rapidapi.com',
      'x-rapidapi-key': '0aa8991588msh298ffca364ebd56p1972a4jsn4d14adcec561'
    }
  }).then(res=>{
    
    setLoading(true)
    setData(res.data)
    setLoading(false)
  
  }).catch(e=>console.log(e))
}

useEffect(()=>{
fetchData()
},[])

const handleCart=(item)=>{
if(!localStorage.getItem('token')){
  window.alert('you have to login first...')
  navigate('/login')
  
}
else if(cartItems.includes(item)){
  window.alert('item already added')
}
else{

  setCartItems([...cartItems,item])
}
}

const productDesc=(item)=>{
  setItem(item)


}

const handleDelete=(item)=>{
setCartItems(cartItems.filter(d=>d.id!==item.id))
}


const increaseQuantity = (id) => {
  setCartItems(
    cartItems.map((item) =>
      id.id === item.id ? { ...item, quantity: item.quantity + (item.quantity<5?1:0 )} : item
    )
  );
};
const decreaseQuantity = (id) => {
  setCartItems(
    cartItems.map((item) =>
      id.id === item.id ? { ...item, quantity: item.quantity -(item.quantity >1 ?1:0)} : item
    )
  );
};





  return (
    <Context.Provider value={{loading,item,data,handleCart,cartItems,productDesc,handleDelete,increaseQuantity,decreaseQuantity,searchTerm,setSearchTerm}}>
 <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/productInfo" element={<ProductInfo />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>

 </Routes>
    </Context.Provider>
  );
}

export default App;
