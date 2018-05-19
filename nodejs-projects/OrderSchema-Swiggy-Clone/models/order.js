const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let orderSchema = new Schema ({
    customerId: {
        type: String,
        required: true
    },
    driverId: {
        type: String,
        required: true
    },
    orderItems: {
        type: Array,
        required: true,
        default: []
    },
    selectedRestaurant: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date,
        required: true
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