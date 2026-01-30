const { showBooks } = require("../services/bookdb.services")


exports.showallbooks = (req, res) => {
  const result=showBooks()
  return res.status(200).json({
    success: true,
    data: result,
  })
}