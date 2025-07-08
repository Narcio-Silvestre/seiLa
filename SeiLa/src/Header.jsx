import './App.css'
import { FaShopify } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi";
import { FaBlog } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Header(){

 

return(
  <div className="bg-white text-black  w-full h-full">
    <nav className='shadow-neutral-500 shadow-2xl p-2'> 
      <div className='flex flex-row justify-between  '>
          <Icon desc ='Home'>
            <HiOutlineHome className='size-6'/>
          </Icon>

          <div className='flex flex-row  gap-5  justify-between  items-center  '>
            <Icon desc={'Blog'}>
              <FaBlog className='size-6' />
            </Icon>
            <Icon   desc={'Carrinho'}>
              <HiOutlineShoppingCart className='size-6'/>
            </Icon>
            <Icon   desc={'MarketPlace'}>
              <FaShopify className='size-6'/>
            </Icon>
            <Icon   desc={'Sales'}>
              <CiShoppingTag className='size-6'/>
            </Icon>
          </div>
          <div className=' flex flex-row items-center gap-1'>
            <input className='rounded  border-black border-2  
            text-black p-1 bg-gray-100 shadow-xs
            shadow-black  focus:outline-none' name='pesquisar' placeholder='Nike'/>
            <Icon >
              <FaSearch className='size-5'/>
            </Icon>
            <Icon >
              <FaRegUserCircle className='size-8 ml-2'/>
            </Icon>
          </div>
      </div>
    </nav>
  </div>
)
}






function Icon ({desc,
  className = 'flex flex-col  items-center justify-center content-center',
  children
}){
  return (
    <div className={className}>
      {children}
      <p className='text-xs'>{desc}</p>
    </div>
  )
}