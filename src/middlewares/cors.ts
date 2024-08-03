import cors from 'cors';

export default cors({
    origin: ['https://express-redis.didiamuri.dev', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
})