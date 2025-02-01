import Express from 'express'
import cors from 'cors'

const supplyRequests = [
    {
        id: 1,
        productName: "Болт М10х50",
        quantity: 100,
        status: "В обработке",
        createdAt: "2023-10-01"
    },
    {
        id: 2,
        productName: "Гайка М10",
        quantity: 200,
        status: "Выполнено",
        createdAt: "2023-10-02"
    },
    {
        id: 3,
        productName: "Шайба пружинная",
        quantity: 500,
        status: "Отменено",
        createdAt: "2023-10-03"
    },
    {
        id: 4,
        productName: "Электрод 3мм",
        quantity: 50,
        status: "В обработке",
        createdAt: "2023-10-04"
    },
    {
        id: 5,
        productName: "Краска белая",
        quantity: 20,
        status: "Выполнено",
        createdAt: "2023-10-05"
    }
]
const app = Express()
const port = "3000"
app.use(cors())
app.use(Express.json())
app.get('/requests', (req, res) => {
    res.send(supplyRequests)
})
app.get('/requests/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const request = supplyRequests.find(req => req.id === id)
    if (request) {
        res.send(request)
    } else {
        res.status(404).send({ message: 'Заявка не найдена' })
    }
})
app.post('/requests/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let requestIndex = supplyRequests.findIndex(req => req.id === id)
    const body = req.body
    supplyRequests[requestIndex] = { ...supplyRequests[requestIndex], productName: body.editName, quantity: body.editQuantity, status: body.editStatus }
    console.log(supplyRequests);

    res.send(body)
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})