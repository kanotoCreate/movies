import fs from 'fs'

export default (app) => {
  /**
   * ユーザ認証登録
   */
  app.post(`/api/auth`, (req, res) => {
    const { id, password } = req.body
    const users = JSON.parse(fs.readFileSync('./server/database/users', { encoding: "utf8" }) || '[]')

    const loginUser = users.find(user => user.id === id && user.password === password)
    if (loginUser) {
      res.status(200).send({
        user: {
          id: loginUser.id,
          createdAt: loginUser.createdAt,
          updatedAt: loginUser.updatedAt,
        }
      })
    } else {
      res.status(401).send({
        code: 'EXIST_LOGIN_ID_PASSWORD',
        message: 'IDもしくはパスワードが見つかりません。'
      })
    }
  })
}