import { useEffect, useState } from "react"
import './styles.css'


export default function LoadMoreData() {

  const [loading, setLoading] = useState(false) //to manage data loading
  const [products, setProducts] = useState([]) //to save imported data from the api which are products
  const [count, setCount] = useState(0) //to count the number of requests (to load more products)

  async function fetchProducts() {
    try {
      setLoading(true) //data is loading
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`) // recieves the data with limits of 20 in each request
      // skip amount is related to the count of requests (clicking on <button>Load more dara...) and when the button havent been clicked it skips 0 based on the num of count(0)...and when count gets up it is * 20... each time it skips 20 products
      const result = await response.json() //recived data saves as result and turns into JSON format.

      console.log(result)

      if (result && result.products && result.products.length) { // it is checking if result is true? products in result exist? and the length of the result.product array is more than 0? (there is at least one product)
        //if all 3 exists... API response is Valid
        setProducts((prevData) => [...prevData, ...result.products]) //this new array consists both prev data (all first 20 items) and new 20 requested items.
        setLoading(false) //loading has finished
      }

    } catch(e) {
      console.log(e) //shows the errors in console
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts() //ensures whenever the count changes (by clicking on the button) fetchProducts() is called.
  }, [count]) // whenever button is clicked and count increases, the fetchProducts is called.... so fetchProducts depands on the count number

  if (loading) {
    return <div>Loading data ! pls wait</div>
  }

  return (
    <div className="load-more-container">
      <div className="products-cont">
        {
          products && products.length ? 
          products.map(item => 
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
            <h4>{item.price}$</h4>
          </div>)
          : null
        }
      </div>
      <div className="button-container">
        <button className="btn" onClick={()=> setCount(count + 1) /* this makes the count to goes up and based on that fetchProducts() will be called again to send request for the api and gets and renders the new 20 images */ }>Load More Products...</button>
      </div>
    </div>
  )
}