const db = require('../database');

module.exports = {
    // ITEMS
    findAll: async (req, res) => {
        try {
            let response = await db.Item.find({});
            let items = response;
            return res.json(items);
        } catch (error) {
            throw res.status(422).json(error) ;
        }
    }, 
    findItemByID: (req, res) => {
        db.Item.findById(req.params.id)
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    findCategories: (req, res) => {
        db.Item.find({}).distinct('category').then((dbCategories) => {
            res.json(dbCategories);
        }).catch(err => {
            res.status(422).json(err);
        });
    },
    findItemsByCategory: (req, res) => {
        db.Item.find({category: req.params.category}).then((dbItems) => {
            res.json(dbItems);
        }).catch(err => {
            res.status(422).json(err);
        });
    },
    addItem: (req, res) => {
        db.Item.create(req.body)
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    process: (req, res) => {
        db.Item.find({
            'status' : 'Unavailable'  
        }).then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    checkout: (req, res) => {
        db.Item.updateMany({
            'status' : 'Unavailable'  
        }, {
            'status' : 'Out for Rent'
        })
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    updateItem: (req, res) => {
        db.Item.findByIdAndUpdate(
            { _id: req.params.id }, 
            req.body
        )
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    deleteItem: (req, res) => {
        db.Item.findById(req.params.id)
        .then(dbItem => dbItem.remove())
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },

    // COMMENTS
    findItemWithComments: (req, res) => {
        db.Item.find({ _id: req.params.itemID }).populate('comments').then((dbItem) => {
            res.json(dbItem);
        }).catch((err) => {
            console.log(err);
        });
    },
    findItemsInMaintenance: (req, res) => {
        db.Item.find({status: "In Maintenance"}).populate("maintenance_comments").then((dbItems) => {
            res.json(dbItems);
        }).catch(err => {
            res.status(422).json(err);
        });
    },
    // Add a comment to a specific item
    addComment: (req, res) => {
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

    // MAINTENANCE COMMENTS
    findItemWithMaintComments: (req, res) => {
        db.Item.find({ serial_number: req.params.itemID, status: "In Maintenance" }).populate('maintenance_comments').populate('comments').then((dbItem) => {
            res.json(dbItem);
        }).catch((err) => {
            console.log(err);
        });
    },
    addMaintComment: (req, res) => {
        let maintComment;
        req.body.item = req.params.itemID;
        console.log('req.parms= ',req.params)
        console.log('addMaintComment req.body= ',req.body);
        db.MaintenanceComment.create(req.body).then((dbMaintenanceComment) => {
          maintComment = dbMaintenanceComment;
          return db.Item.findOneAndUpdate(
            { _id: req.params.itemID },
            { $push: { maintenance_comments: dbMaintenanceComment._id } },
            { new: true }
          );
        }).then(() => {
          res.json(maintComment);
        }).catch((err) => {
          console.log(err);
        });
    },
    
    // CUSTOMERS
    addCustomer: (req, res) => {
            db.Customer.create(req.body)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    findAllCustomers: async (req, res) => {
        try {
            let response = await db.Customer.find({});
            let customers = response;
            return res.json(customers);
        } catch (error) {
            throw res.status(422).json(error) ;
        }
    }, 
    addItemToCustomer: (req, res) => {
        db.Customer.findByIdAndUpdate({ _id: req.params.customerID },
            { $push: {items: req.params.itemID }}
            )
        .then(dbCustomer => res.json(dbCustomer))
        .catch(err => res.status(422).json(err));
    },
    findCustomerByLastName: (req, res) => {
        db.Customer.find({ last_name: req.params.lastname }).populate('items').then((dbCustomer) => {
            res.json(dbCustomer);
        }).catch((err) => {
            console.log(err);
        });
    },
    findCustomerByPhoneNumber: (req, res) => {
        db.Customer.find({ phone_number: req.params.phonenumber}).populate('items').then((dbCustomer) => {
            res.json(dbCustomer);
        }).catch((err) => {
            console.log(err);
        });
    },
    findCustomerByMemberNumber: (req, res) => {
        db.Customer.find({ member_number: req.params.membernumber}).populate('items').then((dbCustomer) => {
            res.json(dbCustomer);
        }).catch((err) => {
            console.log(err);
        });
    },
    findCustomerByEmail: (req, res) => {
        db.Customer.find({ email: req.params.email}).populate('items').then((dbCustomer) => {
            res.json(dbCustomer);
        }).catch((err) => {
            console.log(err);
        });
    },
    deleteItemFromCustomer: (req, res) => {
        console.log('HIT ROUTE');
        console.log(req.params.customerID);
        console.log(req.params.itemID);
        db.Customer.findByIdAndUpdate({ _id: req.params.customerID }, 
            { $pull: {items: req.params.itemID}}
            )
        .then(dbCustomer => res.json(dbCustomer))
        .catch(err => res.status(422).json(err));
    }   
};