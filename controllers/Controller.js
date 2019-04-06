const db = require('../database');

module.exports = {
    // CONTROLLERS FOR ITEMS 
    // Find all items in database
    findAll: async (req, res) => {
        try {
            let response = await db.Item.find({});
            let items = response;
            // console.log(items);
            return res.json(items);
        } catch (error) {
            throw new Error('No API Response');
        }
    }, 
    // Find Item By ID
    findItemByID: (req, res) => {
        db.Item.findById(req.params.id)
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    //
    // Find all existing categories in the items database
    findCategories: (req, res) => {
        console.log("find categories");
        db.Item.find({}).distinct("category").then((dbItems) => {
            res.json(dbItems);
        }).catch(err => {
            res.status(422).json(err);
        });
    },
    // WILL NEED ANOTHER ROUTE TO FIND ALL ITEMS THAT FALL UNDER THE REQUESTED CATEGORY
    // ALSO USING DISTINCT SIMILAR TO ABOVE
    // MONGODB DOCS: https://docs.mongodb.com/manual/reference/method/db.collection.distinct/
    //
    findItemsByCategory: (req, res) => {
        console.log("find item by category");
        db.Item.find({}).distinct("_id", {category: req.params.category}).then((dbItems) => {
            res.json(dbItems);
        }).catch(err => {
            res.status(422).json(err);
        });
    },
    // Add item to database
    addItem: (req, res) => {
        db.Item.create(req.body).
        then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    // Update item in database based on the req.body
    // Use this to change status when needed
    // Use this to change condition when needed
    // Use this to updated number_of_times_rented
    // Use this to update date_rented_out & date_due
    updateItem: (req, res) => {
        db.Item.findByIdAndUpdate({ _id: req.params.id }, req.body).
        then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },
    // Use this if ever necessary to delete an item
    // This currently isn't something we will use in our application.
    deleteItem: (req, res) => {
        db.Item.findById(req.params.id)
        .then(dbItem => dbItem.remove())
        .then(dbItem => res.json(dbItem))
        .catch(err => res.status(422).json(err));
    },

    // CONTROLLERS FOR COMMENTS
    // Find all current comments for a specific item
    findItemWithComments: (req, res) => {
        db.Item.find({ _id: req.params.itemID }).populate('comments').then((dbItem) => {
            res.json(dbItem);
        }).catch((err) => {
            console.log(err);
        });
    },
    // Add a comment to a specific item
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
    // Find all current maintenance comments for a specific item
    findItemWithMaintComments: (req, res) => {
        db.Item.find({ _id: req.params.itemID }).populate('maintenance_comments').then((dbItem) => {
            res.json(dbItem);
        }).catch((err) => {
            console.log(err);
        });
    },
    // Add a maintenance comment to a specific item
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
    // Add a customer to the database
    addCustomer: (req, res) => {
            db.Customer.create(req.body).
            then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    // Add an item to a customer's "items" in database
    // Currently only adds on item at a time so may have to use some 
    // kind of for loop through all selected items and call this for each 
    // selected item in some way to add more than one at a time ???
    addItemToCustomer: (req, res) => {
        db.Customer.findByIdAndUpdate({ _id: req.params.customerID },
            { $push: {items: req.params.itemID}}
            ).
        then(dbCustomer => res.json(dbCustomer))
        .catch(err => res.status(422).json(err));
    },
    // Find Customer by ID with a list of all current items rented out
    findCustomerByID: (req, res) => {
        db.Customer.find({ _id: req.params.customerID }).populate('items').then((dbCustomer) => {
            res.json(dbCustomer);
        }).catch((err) => {
            console.log(err);
        });
    },
    // Deletes ALL items from a customer
    deleteItemFromCustomer: (req, res) => {
        db.Customer.findByIdAndUpdate({ _id: req.params.customerID }, 
            { $unset: {items: req.params.itemID}}
            ).
        then(dbCustomer => res.json(dbCustomer))
        .catch(err => res.status(422).json(err));
    }   
};