import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';
import axios from 'axios';
import { Checkbox } from 'antd';

const HomePage = () => {
  const [auth,setAuth]=useAuth()
  const [products,setProducts]=useState([])
  const [categories,setCategories]=useState([])
  //get all cat


  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
     
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);


  //get all products
  const getAllProducts=async()=>{
    try{
      const {data}=await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch(error){
      console.log(error)
    }
  };
  useEffect(()=>{
    getAllProducts();
  },[]);
  return (
    <Layout title={"Home page-All Products"}>
      <div className='row mt-3'>
        <div className='col-md-3'>
          <h4 className='text-center'>Filter By Ctegory</h4>
          {}

        </div>
        <div className='col-md-9'>
          <h1 className='text-center'>All Products</h1>
          <div className='d-flex flex-wrap'>
          {products?.map((p) => (
              
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <div className='btn-style'>
                    <button class="btn btn-primary ms-1">View Details</button>
                    <button class="btn btn-secondary ms-1">Add to cart</button>

                    </div>
                    
                  </div>
                </div>
             
            ))}

          </div>

        </div>
      </div>
       
    </Layout>
    
  );
};

export default HomePage;