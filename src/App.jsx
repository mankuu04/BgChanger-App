
import { useState } from 'react'
import './App.css'

function App() {

   const[color, setColor] = useState("#212121")

    return (
        <>
        <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
            <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-5 shadow-xl bg-white px-3 py-2 rounded-3xl'>
                    <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"red"}}>Red</button>
                        <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"green"}}>Green</button>
                        <button onClick={() => setColor("pink")} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"pink"}}>Pink</button>
                        <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"orange"}}>Orange</button>

                </div>
            </div>
        </div>
        </>
    )
}

export default App
