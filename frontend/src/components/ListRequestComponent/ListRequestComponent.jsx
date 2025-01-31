import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export default function ListRequestComponent() {
    const [requests, setRequests] = useState([])
    async function fetchUser() {
        let response = await fetch('http://localhost:3000/').then(res => res.json())
        setRequests(response)
        return response
    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <section className='requests'>
            <h1 className="requests__title">Лист заявок</h1>
            <ul className="requests__list">
                {requests.map((item) => {
                    return (
                        <Link to={`/requests/${item.id}`}>
                            <li className="requests__item" key={item.id}>
                                <h2>{item.productName}</h2>
                                <h3>{item.quantity}</h3>
                                <span>{item.status}</span>
                                <p>{item.createdAt}</p>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </section >
    )
}