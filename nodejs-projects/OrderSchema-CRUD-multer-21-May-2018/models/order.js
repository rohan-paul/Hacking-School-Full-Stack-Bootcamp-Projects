const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let orderSchema = new Schema ({
    customerId: {
        type: Number
    },
    driverId: {
        type: Number
    },
    orderItems: {
        type: Array,
        default: []
    },
    selectedRestaurant: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date

      },
      updatedAt: {
        type: Date,
        default: new Date

      },
      deletedAt: {
          type: Date,
      },
      completed: {
        type: Boolean,
      },
      specialInstructions: {
          type: String
      }
})

module.exports = mongoose.model('Order', orderSchema);
