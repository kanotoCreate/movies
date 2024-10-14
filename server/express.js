import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

// api
import user from './api/user.js'
import auth from './api/auth.js'

const app = express()

// bodyを使えるように調整
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

// api
user(app)
auth(app)

app.listen(3000)