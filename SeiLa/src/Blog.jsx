
import './App.css'


export default function Blog(){

    

    return(
        
       <section className="bg-neutral-100 flex-1">

        <div>
            <div className='flex flex-col items-center mt-8 gap-4 '>
                <p className='text-4xl text-'>Bem-vindo ao seu Blog Pessoal</p>
                <p className='text-xl '>Aqui tem espaço para a sua criatividade!</p>
                <div className='w-8/12 flex flex-col items-center focus-within:outline-blue-600 focus-within:outline-1 border-1  border-gray-400 rounded-2xl'>
                    <input type="text" placeholder='Titulo' 
                    className=' w-full bg-white resize-none p-4 h-1 rounded-t-2xl border-b-0 
                    border-gray-400 outline-0 font-extrabold'/>
                    <textarea name="texto" id="texto" placeholder='Adicionar comentário ...' 
                    className=' w-full bg-white resize-none p-3 h-75   border-0 
                    border-gray-400 outline-none font-quicksand' > 
                    </textarea>
                    <div className=' w-full bg-white resize-none p-3    border-0 
                    border-gray-400 rounded-b-2xl outline-0 flex flex-row gap-1 justify-end '>
                        <button className='bg-blue-700 p-1 rounded hover:bg-green-600 transition-colors'>Post</button>
                        <button className='bg-blue-700 p-1 rounded hover:bg-green-600 '>Attach</button>
                        <input type='date' className='bg-blue-700 p-1 rounded hover:bg-green-600 '/>

                    </div>
                </div>
            </div>
            {/* <div className='grid grid-cols-3 h-screen bg-blue-700 '>
                <div className='bg-amber-800'></div>
                <div className='bg-emerald-400'></div>
                <div className='bg-amber-800'></div>
            </div> */}
            <div>
                
                
                
                
                
            </div>
            
        </div>
        
        </section>
        
    
    )
}