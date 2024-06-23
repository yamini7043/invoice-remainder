import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            const response = await axios.get('/api/invoices');
            setInvoices(response.data);
        };

        fetchInvoices();
    }, []);

    return (
        <div>
            <h2>Due Invoices</h2>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice._id}>
                        <strong>Amount:</strong> {invoice.amount} <br />
                        <strong>Due Date:</strong> {new Date(invoice.dueDate).toLocaleDateString()} <br />
                        <strong>Recipient:</strong> {invoice.recipient} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceList;
