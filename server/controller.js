module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then(resp => {
            res.status(200).send(resp)
        }).catch(err => console.log(err))
    },

    createProduct: (req, res) => {
        const db = req.app.get('db');
        const {product} = req.body

        db.create_product([product]).then(resp => {
            res.status(200).send(resp)
        })
    }
}