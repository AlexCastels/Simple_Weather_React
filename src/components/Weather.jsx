import { useState } from "react"
import { Link } from "react-router-dom"

export function Weather(){
    
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(false)
    const [input , setInput] = useState('')
    const [error , setError] = useState(false)
    
    async function getData(){
        
        setLoading(true)

        try {
            const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=04ec7298495148a39b2154137232812&q=${input}`)
            const json = await res.json()
            setData(json)
            if(res.status !== 200){
                setError(true)
                setData(null)
            } 
        } catch (error) {
            console.log(error)  
        } finally {
            setLoading(false)
            
        }
    }
    

    function handleInput(e){
        const value = e.target.value
        setInput(value)
        console.log(value)
        setError(false)    
    }

    function handleBtn(){
        getData()
        setInput('')
    }

    return (
        <div className="weather-container">
            <div className="content-container">
                <div className="input-container">
                    <input className="input" onChange={handleInput} value={input} placeholder="Location.."></input>
                    <button className='button' onClick={handleBtn}>Search</button>
                </div>
                <div className="content">
                    {loading && <p>Loading...</p>}
                    {error && <p>Errore</p>}
                    {data && data.location ? <div>
                        <p>{data.location.name}</p>
                        <p>{data.location.localtime}</p>
                        <img src={data.current.condition.icon} width={100} alt="icona"></img>
                        <p>{data.current.temp_c}°</p>
                        <p>{data.current.condition.text}</p>
                    </div> : <p>Scegli una città</p>}    
                </div>
            </div> 
            <span>| <Link className="link" to='/'>Go Home</Link> |</span>
        </div>
    )
}