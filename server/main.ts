import { env } from 'process';
import app from './server'
import 'dotenv/config'

const port = env.PORT


console.log("hello from the server")

app.listen(port,()=>{
    console.log("server running on port :")
    console.log(port)
})