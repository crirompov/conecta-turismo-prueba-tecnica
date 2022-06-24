
import config from "./config";
import Logger from "./lib/logget/logger";
import router from "./router";

const express = require( "express" );
const app = express();

config(app)
router(app)

app.listen( app.locals.config.PORT, () => {
	Logger.info(`Started at http://localhost:${ app.locals.config.PORT }`)
} );