import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let image_arr=imageData()
  console.log("image_arr: ", image_arr);
  return(
    <>
      <h1 className='head'>kalvium gallery</h1>
      <div className='parent'>
        {
          image_arr.map((e)=>{
            return(
              <img src={e.img} className='image' alt="i" />
            )
          })
        }
        {/* <img src={image_arr[0].img} className='image' alt="" />
        <img src={image_arr[1].img} className='image' alt="" />
        <img src={image_arr[2].img} className='image' alt="" />
        <img src={image_arr[3].img} className='image' alt="" /> */}
      </div>
    </>
  )
}

export default App;
