import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";

import CONTENT from '../Database/Data';

const Item = (props) => {
  const { page } = props;
  if (page === "Introduction") {
    return (

        <>
         <div id="page">
         {CONTENT.map((item, index) => (
        <div key={index}>
          <h6>{item.title}</h6>
   
        <h4>{item.heading}</h4>
        </div>
      ))}
       </div>
        </>
    
    

    )
  } else {
    return (
      <div id="page">
        <Link to="/">
          <button className="btn">
            <ArrowBackIcon /> Back to Home
          </button>
        </Link>
        {page}
      </div>
    );
  }
};

export default Item;