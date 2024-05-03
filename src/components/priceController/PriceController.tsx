import { useState } from "react";
import "./PriceController.scss";

const PriceController = () => {
  
    const [minRange, setMinRange] = useState<number>(100)
    const [maxRange, setMaxRange] = useState<number>(400)

  return (
    <div className="price_controller" >
        <h3> Price </h3>
        <div className="slider">
            <div className="progress"></div>
        </div>
        <div className="range-input">
            <input type="range" className="rang-min" min = "0"  max = "500" onChange={(e) => setMaxRange(parseInt(e.target.value))}/>
            <input type="range" className="rang-max" min = "0"  max = "500" onChange={(e) => setMinRange(parseInt(e.target.value))}/>

            <p> <span> {minRange} </span> - <span> {maxRange} </span> </p>
        </div>
    </div>
  )
}

export default PriceController