"""
Generate sample customer churn dataset
This script creates a realistic dataset for the ML challenge
"""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Set random seed for reproducibility
np.random.seed(42)

# Generate 1000 customer records
n_customers = 1000

# Generate customer IDs
customer_ids = [f"CUST{str(i).zfill(6)}" for i in range(1, n_customers + 1)]

# Demographics
genders = np.random.choice(['Male', 'Female'], n_customers)
senior_citizens = np.random.choice([0, 1], n_customers, p=[0.84, 0.16])
partners = np.random.choice(['Yes', 'No'], n_customers, p=[0.52, 0.48])
dependents = np.random.choice(['Yes', 'No'], n_customers, p=[0.30, 0.70])

# Services
phone_service = np.random.choice(['Yes', 'No'], n_customers, p=[0.90, 0.10])
internet_service = np.random.choice(['DSL', 'Fiber optic', 'No'], n_customers, p=[0.35, 0.45, 0.20])
contract = np.random.choice(['Month-to-month', 'One year', 'Two year'], n_customers, p=[0.55, 0.24, 0.21])
payment_method = np.random.choice(
    ['Electronic check', 'Mailed check', 'Bank transfer', 'Credit card'],
    n_customers,
    p=[0.33, 0.23, 0.22, 0.22]
)

# Tenure (months with company)
tenure = np.random.exponential(20, n_customers).astype(int)
tenure = np.clip(tenure, 1, 72)

# Monthly charges (varies by service type)
base_charge = 30
monthly_charges = base_charge + np.random.normal(25, 15, n_customers)
monthly_charges = np.where(internet_service == 'Fiber optic', monthly_charges * 1.3, monthly_charges)
monthly_charges = np.where(internet_service == 'No', monthly_charges * 0.5, monthly_charges)
monthly_charges = np.clip(monthly_charges, 18.0, 120.0)
monthly_charges = np.round(monthly_charges, 2)

# Total charges
total_charges = monthly_charges * tenure + np.random.normal(0, 50, n_customers)
total_charges = np.clip(total_charges, monthly_charges, monthly_charges * tenure * 1.2)
total_charges = np.round(total_charges, 2)

# Churn (target variable)
# Higher probability for:
# - Month-to-month contracts
# - Electronic check payment
# - Higher monthly charges
# - Shorter tenure
churn_probability = 0.15  # base rate

churn_probs = np.full(n_customers, churn_probability)
churn_probs = np.where(contract == 'Month-to-month', churn_probs * 2.5, churn_probs)
churn_probs = np.where(contract == 'Two year', churn_probs * 0.3, churn_probs)
churn_probs = np.where(payment_method == 'Electronic check', churn_probs * 1.5, churn_probs)
churn_probs = np.where(tenure < 6, churn_probs * 2.0, churn_probs)
churn_probs = np.where(monthly_charges > 80, churn_probs * 1.3, churn_probs)
churn_probs = np.where(internet_service == 'Fiber optic', churn_probs * 1.2, churn_probs)

churn_probs = np.clip(churn_probs, 0, 0.7)
churn = np.random.binomial(1, churn_probs)
churn = np.where(churn == 1, 'Yes', 'No')

# Create DataFrame
df = pd.DataFrame({
    'customerID': customer_ids,
    'gender': genders,
    'SeniorCitizen': senior_citizens,
    'Partner': partners,
    'Dependents': dependents,
    'tenure': tenure,
    'PhoneService': phone_service,
    'InternetService': internet_service,
    'Contract': contract,
    'PaymentMethod': payment_method,
    'MonthlyCharges': monthly_charges,
    'TotalCharges': total_charges,
    'Churn': churn
})

# Save to CSV
df.to_csv('customer_churn.csv', index=False)

print(f"Generated {len(df)} customer records")
print(f"Churn rate: {(df['Churn'] == 'Yes').sum() / len(df) * 100:.1f}%")
print("\nDataset saved to customer_churn.csv")
print("\nFirst few rows:")
print(df.head())
