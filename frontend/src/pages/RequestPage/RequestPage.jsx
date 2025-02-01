import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";

export default function RequestPage() {
    const [request, setRequest] = useState({});
    const [editName, setEditName] = useState('lol');
    const [editQuantity, setEditQuantity] = useState(5);
    const [editStatus, setEditStatus] = useState('not');
    const [isFeatch, setIsFeatch] = useState(false);

    const location = useLocation()

    async function featchRequest() {
        let response = await fetch(`http://localhost:3000${location.pathname}`)
            .then(data => data.json())
        setRequest(response)
        return response
    }

    useEffect(() => {
        featchRequest()
        console.log('render');

    }, [isFeatch]);

    async function getEditData() {
        const dataToSend = { editName, editQuantity, editStatus }

        setIsFeatch(prev => !prev)

        await fetch(`http://localhost:3000${location.pathname}`, { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(dataToSend) })
            .then(response => {
                return response.json();
            })
            .then(() => {
                setIsFeatch(prev => !prev)
            })
            .catch(error => {
                console.log(error, 'Что то пошло не так');
            })
    }
    return (
        <>
            <section>
                <h1>Заявка</h1>
                <h2>{request.productName}</h2>
                <h3>{request.quantity}</h3>
                <span>{request.status}</span>
                <p>{request.createdAt}</p>
            </section>
            <section>
                <label>Название</label>
                <input onChange={(e) => {
                    setEditName(e.target.value)
                }} type="text" />
                <br />
                <label>Количество</label>
                <input onChange={(e) => {
                    setEditQuantity(e.target.value)
                }} type="number" />
                <br />
                <label>Статус</label>
                <select onChange={(e) => {
                    setEditStatus(e.target.value)
                }}>
                    <option value="В обработке">В обработке</option>
                    <option value="Выполнено">Выполнено</option>
                    <option value="Отменено">Отменено</option>
                </select>
                <br />
                <button onClick={() => {
                    getEditData()
                }}>Редактировать</button>
            </section>
        </>
    )
}
