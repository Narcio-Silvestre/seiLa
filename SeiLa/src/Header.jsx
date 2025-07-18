
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
            <input className='rounded-2xl  border-black border-1  
            text-black p-1 pl-2 bg-white 
              ' name='pesquisar' placeholder='Nike'/>
            <Icon >
              <FaSearch className='size-4 hover:opacity-100 opacity-8 transition-all duration-200'/>
            </Icon>
            <Icon >
              <FaRegUserCircle className='size-5 ml-2 '/>
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