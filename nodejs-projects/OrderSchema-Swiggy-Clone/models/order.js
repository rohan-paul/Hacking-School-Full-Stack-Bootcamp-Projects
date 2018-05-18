const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let orderSchema = new Schema ({
    customer: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String
    },
    customerMobile: {
        type: String,
        required: true
    },
    driver: {
        type: String,
        required: true
    },
    driverMobile: {
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