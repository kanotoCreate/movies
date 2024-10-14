import fs from 'fs'

export default (app) => {
  /**
   * ユーザ情報登録
   */
  app.post(`/api/user`, (req, res) => {
    try {
      const { id, password } = req.body
      const users = JSON.parse(fs.readFileSync('./server/database/users', { encoding: "utf8" }) || '[]')

      const hasNotUserId = !users.find(item => item.id === id)
      if (hasNotUserId) {
        users.push({
          id,
          password,
          createdAt: new Date(),
          updatedAt: new Date()
        })

        fs.writeFileSync('./server/database/users', JSON.stringify(users))

        res.status(200).send()
      } else {
        res.status(400).send({
          code: 'ALREADY_EXIST_ID',
          message: '既に存在するIDです。'
        })
      }
    } catch (error) {
      res.status(500).send({
        code: 'SYSTEM_ERROR',
        message: '予期しないエラーが発生しました。'
      })
    }  
  })
}