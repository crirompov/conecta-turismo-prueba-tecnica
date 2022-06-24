import router from "./routes/routeInitial";
import swaggerUi from 'swagger-ui-express'
import { swaggerDocument } from "./swagger/swagget";


const INDIVIDUALPART = "/ind"
const VERSION = "v2"
const BASE_API_PATH = "/api/care/"+VERSION;

export default function (app: any) {
    app.use('/', router);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}