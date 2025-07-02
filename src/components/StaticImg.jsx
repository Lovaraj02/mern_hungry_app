import React from "react";
const links = [
    {link:'/vada.jpg'},
    {link:'/bonda.jpg'},
    {link:'/juice.jpg'},
    {link:'/dosa.jpg'},
    {link:'/pancake.jpg'},
    {link:'/paratha.jpg'},
    {link:'/poha.jpg'},
    {link:'/poori.jpg'}
];
const StaticImg = (i)=>{
    return(
        <div className="static_imgbg">
            {
                links.map(item => {
                    return(
                        <div className="imgBox">
                            <img src={item.link} alt="img" onClick={()=>alert("Comming soon..!")}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default StaticImg;
