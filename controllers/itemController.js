const db = require('../database');

module.exports = {
    // CONTROLLERS FOR ITEMS
    findAll: async (req, res) => {
        // console.log('item hit');
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
    addItem: (req, res) => {
        db.Item.create(req.body).
        then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    updateItem: (req, res) => {
        db.Item.findByIdAndUpdate({ _id: req.params.id }, req.body).
        then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    deleteItem: (req, res) => {
        db.Item.findById(req.params.id)
        .then(dbItem => dbItem.remove())
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },

    // CONTROLLERS FOR COMMENTS
    findItemWithComments: (req, res) => {
        db.Item.find({ _id: req.params.itemID }).populate('comments').then((dbItem) => {
            res.json(dbItem);
        }).catch((err) => {
            console.log(err);
        });
    },
    addComment: (req, res) => {
        console.log(req.body);
        db.Comment.create(req.body)
        .then(function(dbComment) {
            return db.Item.findOneAndUpdate(
                { _id: req.params.itemID }, 
                { $push: { comments: dbComment._id } }, 
                { new: true }
            );
        })
        .then(function(dbItem) {
            res.json(dbItem);
        })
        .catch(function(err) {
            res.json(err);
        });
    },

    // CONTROLLERS FOR MAINTENANCE COMMENTS
    findItemWithMaintComments: (req, res) => {
        db.Item.find({ _id: req.params.itemID }).populate('maintenance_comments').then((dbItem) => {
            res.json(dbItem);
        }).catch((err) => {
            console.log(err);
        });
    },
    addMaintComment: (req, res) => {
        let maintComment;
        req.body.item = req.params.itemID;
        db.MaintenanceComment.create(req.body).then((dbMaintenanceComment) => {
          maintComment = dbMaintenanceComment;
          return db.Item.findOneAndUpdate(
            { _id: req.params.itemID },
            { $push: { maintenance_comments: dbMaintenanceComment._id } },
            { new: true },
          );
        }).then(() => {
          res.json(maintComment);
        }).catch((err) => {
          console.log(err);
        });
    },
    
    // CONTROLLERS FOR CUSTOMERS
    addCustomer: (req, res) => {
            db.Item.create(req.body).
            then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    }
};




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