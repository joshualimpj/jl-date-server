"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    'credentials': true
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use((0, body_parser_1.default)());
const server = http_1.default.createServer(app);
app.get("/", async (req, res) => { return res.sendStatus(200); });
server.listen(8080, () => {
    console.log(`Server running on http://localhost:8080 ${new Date()} production-${process.env.PROD}`);
});
//# sourceMappingURL=index.js.map