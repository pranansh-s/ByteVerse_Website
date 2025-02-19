import React from 'react'
import "../App.css";
function SponserCard({company,url,link,hCheck}) {
    // console.log(link);
  return (
        <a href={`${link}`} target='_blank' >
        <div className="h-[6rem] w-[10rem] lg:h-[11rem] lg:w-[20rem] bg-white rounded-lg flex justify-center items-center z-10">
            <div className="lg:h-[8rem] h-[4rem] lg:w-[15rem] w-[8rem]  flex justify-center items-center onhoverimg z-10">
              <img src={url} alt={company} className={`object-fill h-${hCheck?'auto':'full'} w-${hCheck?'full':'auto'} z-10`}  />
            </div>
        </div>
        </a> 
    
  )
}

export default SponserCard;