import React from 'react';
import offerslist from '../../Data/offersList';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import allprd from '../../Data/Allproducts';

export default function Mainpost() {
  let params = useParams();
  const [post, setPost] = useState(allprd);
  const newpost = post.find((newpost) => newpost.id === Number(params.Id)) 


  let finallP = newpost.price + 3.50
  return (
    <div>
      <div className='flex flex-wrap p-20 justify-center'>
        <div>
            <img className='w-96' src={newpost.img}></img>
        </div>
        <div className='mx-20'>
            <div className='text-2xl mt-5'>
                {newpost.title}
            </div>
            <div className='container mt-10'>
                <div className='text-xl'>
                    Select your size:
                </div>
                <form className='mt-3'>
                    <label>
                        <input type="radio" name="radio"></input>
                        <span>Medium</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" checked></input>
                        <span>Large</span>
                    </label>
                    <label>
                        <input type="radio" name="radio"></input>
                        <span>X-large</span>
                    </label>
                    <label>
                        <input type="radio" name="radio"></input>
                        <span>2X-large</span>
                    </label>
                </form>
                <div className='mt-5'>
                    <div className='text-xl'>
                        Choose the color:
                    </div>
                    <div className='flex flex-wrap w-96 gap-1 mt-3'>
                        <label>
                            <input type="radio" name="radio" checked></input>
                            <span>Black</span>
                        </label>
                        <label>
                            <input type="radio" name="radio"></input>
                            <span>White</span>
                        </label>
                        <label>
                            <input type="radio" name="radio"></input>
                            <span>Red</span>
                        </label>
                        <label>
                            <input type="radio" name="radio"></input>
                            <span>Green</span>
                        </label>
                        <label>
                            <input type="radio" name="radio"></input>
                            <span>Blue</span>
                        </label>
                        <label>
                            <input type="radio" name="radio"></input>
                            <span>Pink</span>
                        </label>                        <label>
                            <input type="radio" name="radio"></input>
                            <span>Purple</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className='bill mt-7'>
            <div className='text-2xl'>
                {newpost.price}$
            </div>
            <div className='postfee mt-2'>
                <div>
                    + 2$ Desasters insurance
                </div>
                <div>
                    + 1$ Taxes
                </div>
                <div>
                    + 0.50$ Package fee 
                </div>
            </div>
            <div className='text-2xl mt-4'>
                Finall price : {finallP}$
            </div>
            <button className='dark-btn mt-4' id='addtocart'>
                Add to Cart <i className='fa fa-shopping-cart'></i>
            </button>
        </div>
      </div>
    </div>
  );
}
