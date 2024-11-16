import React, { useState } from 'react';

const BudgetTracker = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const calculateBalance = () => income - expenses;

    return (
        <div className="p-4 border rounded">
            <h3 className="text-xl mb-4">Budget Tracker</h3>
            <div className="space-y-4">
                <input
                    type="number"
                    placeholder="Income"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Expenses"
                    value={expenses}
                    onChange={(e) => setExpenses(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                />
            </div>
            <p className="mt-4">Balance: ${calculateBalance()}</p>
        </div>
    );
};

export default BudgetTracker;
