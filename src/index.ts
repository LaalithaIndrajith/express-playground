import express, {Request, Response} from "express";
const app = express();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.listen(PORT, () => {
    console.log('It works')
})

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Yeah! Express baby 🚀'});
})
