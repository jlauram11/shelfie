module.exports = {
    //Add Product
    create: (req, res) => {
        let {productName, productPrice, imageUrl} = req.body;
        req.app.get('db').create_product(productName, productPrice, imageUrl)
            .then( dbResponse => {
                res.status(201).send('Created')
            })
            .catch(() => {
                res.send(500).send('Failed to create')
            });
    },

    //View Inventory
    getAll: (req, res) => {
        req.app.get('db').view_inventory()
            .then( products => res.status(200).send(products) )
            .catch( err => res.status(500).send('Failed to retrieve products'));   
    },

    //Delete Product
    delete: (req, res) => {
        req.app.get('db').delete_product()
        .then( dbResponse => {
            res.status(200).send('Deleted')
        })
        .catch(err => res.status(500).send('Failed to Delete'))
    }

    // View Product

    // Delete Product

    
 }