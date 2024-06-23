const mongoose = require('mongoose');
const { Schema } = mongoose;

const invoiceSchema = new Schema({
    userId: String,
    amount: Number,
    dueDate: Date,
    recipient: String,
    status: { type: String, default: 'due' }
});

mongoose.model('invoices', invoiceSchema);
