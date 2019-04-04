const db = require('../database');


module.exports = {
    items: async (req, res) => {
        console.log('item hit')
        // db.Item.findOne({}).then(dbItem => res.json(dbItem)).catch(err => res.status(422).json(err));
        try {
            const response = await db.Item.find({});

            const items = response;
            console.log(items);
            return res.json(items);
        } catch (error) {
            throw new Error('no api response');
        }
    },
    addInventory: (req, res) => {
        if (req.body.Item) {
            db.Item.create({
                name: req.body.name,
                otherDetail: req.body.otherDetail,
                serialNumber: req.data.serialNumber,
                blahBlah: req.body.blahBla
            }).then((results) => {
                res.json(results);

            });
        }
        else {
            return ('no item data entered or whatever whatever')
        }

    }
}




// router.get('/api/items', (req, res) => {
//     db.Item.find({}).populate('comments').populate('maintenance_comments')
//     .then(dbItem => res.json(dbItem))
//     .catch(err => res.status(422).json(err));
// });

// router.post('/api/items', (req, res) => {
//     db.Item.create(req.body)
//     .then(dbItem => res.json(dbItem))
//     .catch(err => res.status(422).json(err));
// });

// router.update('/api/items/:id', (req, res) => {
//     db.Item.findByIdAndUpdate(req.params.id)
//     .then(dbItem => res.json(dbItem))
//     .catch(err => res.status(422).json(err));
// });

// router.delete('/api/items/:id', (req, res) => {
//     db.Item.findByIdAndRemove(req.params.id)
//     .then(dbItem => res.json(dbItem))
//     .catch(err => res.status(422).json(err));
// });

// module.exports = router;