import { Link } from "react-router-dom"
export default function RequestComponent({ id, productName, quantity, status, createdAt, ...props }) {
    return (
        <Link to={`/requests/${id}`}>
            <li className="requests__item" >
                <h2>{productName}</h2>
                <h3>{quantity}</h3>
                <span>{status}</span>
                <p>{createdAt}</p>
            </li>
        </Link>
    )
}
