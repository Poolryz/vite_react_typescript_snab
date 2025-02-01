import { useEffect, useState } from "react"
import RequestComponent from "../RequestComponent/RequestComponent"



export default function ListRequestComponent() {
    const [requests, setRequests] = useState([])
    async function fetchUser() {
        let response = await fetch('http://localhost:3000/requests')
            .then(res => res.json())
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
                        <RequestComponent id={item.id} productName={item.productName} quantity={item.quantity} status={item.status} createdAt={item.createdAt} key={item.id} />
                    )
                })}
            </ul>
        </section >
    )
}