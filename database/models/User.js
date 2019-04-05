const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        unique: false,
        required: false,
    },
    password: {
        type: String,
        unique: false,
        required: false,
    },
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
        }
    ],
    maintenance_comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'MaintenanceComment'
        }
    ]

});

userSchema.methods = {
    checkPassword: function (inputPass) {
        return bcrypt.compareSync(inputPass, this.password);
    },
    hashPassword: userPassword => {
        return bcrypt.hashSync(userPassword, 10);
    }
}

userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======');
		next();
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password);
		next();
	}
});

const User = mongoose.model('User', userSchema);
module.exports = User;