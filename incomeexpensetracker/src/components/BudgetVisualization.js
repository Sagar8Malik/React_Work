import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import { data } from './data'; // Import the data from your data.js file

const BudgetVisualization = () => {
  // State to store categories and expenses data
  const [categories, setCategories] = useState(data.categories);
  const [expenses, setExpenses] = useState(data.expenses);

  // Create a ref to store the chart instance
  const chartRef = useRef(null);

  // Function to calculate budget based on categories and expenses data
  const calculateBudget = () => {
    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    // Calculate total budget
    const totalBudget = categories.reduce((total, category) => {
      const categoryExpenses = expenses.filter((expense) => expense.categoryId === category.id);
      const categoryTotal = categoryExpenses.reduce((categoryTotal, expense) => categoryTotal + expense.amount, 0);
      return total + categoryTotal;
    }, 0);

    // Calculate remaining budget
    const remainingBudget = totalBudget - totalExpenses;

    // Return the budget values
    return {
      totalExpenses,
      totalBudget,
      remainingBudget,
    };
  };

  useEffect(() => {
    // Fetch the canvas element for the chart
    const ctx = document.getElementById('budgetChart');

    // If a chart instance exists, destroy it before creating a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a chart using Chart.js
    const newChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Total Expenses', 'Remaining Budget'],
        datasets: [
          {
            data: [calculateBudget().totalExpenses, calculateBudget().remainingBudget],
            backgroundColor: ['#ff6b6b', '#6bff6b'],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Store the chart instance in the ref
    chartRef.current = newChart;
  }, [expenses]);

  return (
    <div className="budget-visualization">
      <h3 className="budget-heading">Budget Visualization</h3>
      <canvas id="budgetChart" className="budget-chart" width={400} height={400} />
    </div>
  );
};

export default BudgetVisualization;
