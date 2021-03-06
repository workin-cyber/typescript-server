"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const postRoute_1 = __importDefault(require("./router/postRoute"));
const port = Number(process.env.PORT) || 3001;
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use("/post", postRoute_1.default);
app.listen(port, () => console.log(`server runing on port ${port}`));
