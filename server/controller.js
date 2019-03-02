module.exports = {
    //Add Product
    create: (req, res) => {
        let {product_name, product_price, image_url} = req.body;
        
        req.app.get('db').create_product(product_name, product_price, image_url)
            .then( dbResponse => res.status(201).send('Created'))
            .catch(() => {
                res.send(500).send('Failed to create')
            });
    },

    //View Inventory
    getAll: (req, res) => {
        req.app.get('db').view_inventory()
            .then( products => res.status(200).send(products) )
            .catch( err => res.status(500).send('Failed to retrieve products'));   
    }

    // View Product

    // Delete Product

    
 }