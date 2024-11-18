import React,  {useState,useEffect} from 'react'
import './Women.css';

const Women = () => {
    const[ApiData,setApiData]=useState(null);
    const[SearchInput, setSearchInput]=useState("");
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res)=>res.json())
        .then((json)=>{console.log(json)
        setApiData(json)});
        
      
      }   , []);
  return (
    <div>
          <div className="title"><header >Shopping</header>
  </div> 
  <div className="search"> 
   
        <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={SearchInput}
        onChange={ (e)=>setSearchInput(e.target.value)}/>

  </div>
    <div className="product">
        {ApiData?.filter((filtered_value)=>{
        if(SearchInput === ""){
            return filtered_value;
        }
        else if(filtered_value?.title?.toLowerCase()?.includes(SearchInput?.toLowerCase())){
            return filtered_value;
        }


    })?.map((data,index)=> {
        return(  <div key={data?.id} className="card">

            <div className="image" > 
                <img src={data?.image} alt="img" />
            </div>

            <div className="name"> <h3> {data?.title}</h3>
            </div>

            <div className="cat-price">   
                <p className="cat">{data?.category} </p>
                <p className="price"> ${data?.price} </p>
            </div>
            <div className='bt'>
              <button>Buy</button>
            </div>

        </div>

    
    
    
    
   );
 }
   )}
    
   </div>




    </div>
  )
}

export default Women;