import * as bodyParser from "body-parser";
import express, {Application, Router} from "express";

class App {
    public app: Application;
    private router: Router = express.Router();

    constructor() {
        this.app = express();
        this.config();
        this.addRoute();
        this.addErrorHandler();
    }

    private config(): void {
        this.app.use(bodyParser.raw());
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // // enable cors
        // this.app.use(cors({
        //     exposedHeaders: ["Authorization"],
        // }));
        // // enable file upload
        // this.app.use(fileUpload());
    }

    private addRoute(): void {
        this.app.use(this.router);
        //this.app.use("/",);
    }

    private addErrorHandler(): void {
        // this.app.use(apiErrorHandler);
    }
}
export default new App().app;
