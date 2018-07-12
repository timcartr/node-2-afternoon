module.exports={
    create: (req, res) => {
        const db = req.app.get('db')
        const { name, description, price, imageurl } = req.body;

    db.create_product([name, description, price, imageurl])
    .then( () => res.sendStatus(200))
    .catch( err => {
        res.status(500).send({errorMessage: "Our bad. Engineers notified"});
        console.log(err)
    })},

    getOne: ( req, res, next ) => {
        const db = req.app.get('db');
        const { params } = req

        db.read_product(params.id)
        .then( product => res.status(200).send(product))
        .catch( err => {
            res.status(500).send({errorMessage: "Our bad. Engineers notified"});
            console.log(err)
    })},
    
    getAll: ( req, res, next ) => {
        const db = req.app.get('db');

        db.read_products()
        .then( products => res.status(200).send(products))
        .catch( err => {
            res.status(500).send({errorMessage: "Our bad. Engineers notified"});
            console.log(err)
    })},
    
    update: ( req, res, next ) => {
        const db = req.app.get('db');
        const { params, query } = req;

        db.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Our bad. Engineers notified"});
            console.log(err)
    })},
    
    delete: ( req, res, next ) => {
        const db = req.app.get('db');
        const { params } = req;

        db.delete_product(params.id)
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Our bad. Engineers notified"});
            console.log(err)
    })},
}