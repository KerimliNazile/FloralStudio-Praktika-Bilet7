import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
const Detail = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    const fetchdetails = async () => {
        const res = await fetch(`http://localhost:5000/trees/${id}`)
        const json = await res.json()
        setDetail(json)
    }
    useEffect(() => {
        fetchdetails()
    }, [])
    return (
        <>
        <div className="Detailarea">
             {detail ? <>
                <div className='cards'>
                    <img src={detail.image} alt="" />
                    <h2>{detail.name}</h2>
                    <p>{detail.title}</p>
                    

                </div></> : ''}
        
        </div>
          </> 
           
    )
}

export default Detail
