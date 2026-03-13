"""
Generate sample customer churn dataset
This script creates a realistic but messy dataset for the ML challenge.
The data intentionally contains quality issues that participants must
discover and fix using GitHub Copilot.
"""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Set random seed for reproducibility
np.random.seed(42)

# Generate 5000 customer records
n_customers = 5000

# Generate customer IDs
customer_ids = [f"CUST{str(i).zfill(6)}" for i in range(1, n_customers + 1)]

# Demographics
genders = np.random.choice(['Male', 'Female'], n_customers)
# Introduce inconsistent casing for ~3% of gender values
messy_idx = np.random.choice(n_customers, size=int(n_customers * 0.03), replace=False)
for i in messy_idx:
    genders[i] = np.random.choice(['male', 'female', 'MALE', 'FEMALE', 'M', 'F'])

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
tenure = np.clip(tenure, 0, 72)  # 0 = brand new customers

# Monthly charges (varies by service type)
base_charge = 30
monthly_charges = base_charge + np.random.normal(25, 15, n_customers)
monthly_charges = np.where(internet_service == 'Fiber optic', monthly_charges * 1.3, monthly_charges)
monthly_charges = np.where(internet_service == 'No', monthly_charges * 0.5, monthly_charges)
monthly_charges = np.clip(monthly_charges, 18.0, 120.0)
monthly_charges = np.round(monthly_charges, 2)

# Total charges — store as strings to mimic real-world export issues
total_charges = monthly_charges * tenure + np.random.normal(0, 50, n_customers)
total_charges = np.clip(total_charges, 0, monthly_charges * tenure * 1.2)
total_charges = np.round(total_charges, 2)
# Convert to string; for tenure=0 customers, set to empty string (blank)
total_charges_str = [str(tc) if tenure[i] > 0 else ' ' for i, tc in enumerate(total_charges)]

# Signup date — gives participants a date column to parse and derive features from
base_date = datetime(2026, 3, 1)
signup_dates = [(base_date - timedelta(days=int(t * 30.44))).strftime('%Y-%m-%d') if np.random.random() > 0.02
                else (base_date - timedelta(days=int(t * 30.44))).strftime('%m/%d/%Y')  # ~2% in US format
                for t in tenure]

# Number of support tickets — an extra numeric feature with some missing values
support_tickets = np.random.poisson(2, n_customers)
support_tickets = np.where(tenure < 3, support_tickets + np.random.poisson(1, n_customers), support_tickets)

# Churn (target variable)
# Higher probability for:
# - Month-to-month contracts
# - Electronic check payment
# - Higher monthly charges
# - Shorter tenure
# - More support tickets
churn_probability = 0.15  # base rate

churn_probs = np.full(n_customers, churn_probability)
churn_probs = np.where(contract == 'Month-to-month', churn_probs * 2.5, churn_probs)
churn_probs = np.where(contract == 'Two year', churn_probs * 0.3, churn_probs)
churn_probs = np.where(payment_method == 'Electronic check', churn_probs * 1.5, churn_probs)
churn_probs = np.where(tenure < 6, churn_probs * 2.0, churn_probs)
churn_probs = np.where(monthly_charges > 80, churn_probs * 1.3, churn_probs)
churn_probs = np.where(internet_service == 'Fiber optic', churn_probs * 1.2, churn_probs)
churn_probs = np.where(support_tickets > 4, churn_probs * 1.4, churn_probs)

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
    'TotalCharges': total_charges_str,  # string column with blanks
    'SupportTickets': support_tickets,
    'SignupDate': signup_dates,          # mixed date formats
    'Churn': churn
})

# Inject missing values into specific columns
# ~5% missing TotalCharges (on top of the blank-string ones)
missing_tc = np.random.choice(n_customers, size=int(n_customers * 0.05), replace=False)
for i in missing_tc:
    df.loc[i, 'TotalCharges'] = np.nan

# ~3% missing SupportTickets
missing_st = np.random.choice(n_customers, size=int(n_customers * 0.03), replace=False)
df.loc[missing_st, 'SupportTickets'] = np.nan

# ~2% missing tenure (set to NaN)
missing_tenure = np.random.choice(n_customers, size=int(n_customers * 0.02), replace=False)
df.loc[missing_tenure, 'tenure'] = np.nan

# Add 15 duplicate rows scattered throughout
dup_indices = np.random.choice(n_customers, size=15, replace=False)
duplicates = df.iloc[dup_indices].copy()
df = pd.concat([df, duplicates], ignore_index=True)

# Shuffle so duplicates aren't at the end
df = df.sample(frac=1, random_state=42).reset_index(drop=True)

# Save to CSV
df.to_csv('customer_churn.csv', index=False)

print(f"Generated {len(df)} customer records (including duplicates)")
print(f"Churn rate: {(df['Churn'] == 'Yes').sum() / len(df) * 100:.1f}%")
print(f"Missing values:\n{df.isnull().sum()}")
print(f"\nDataset saved to customer_churn.csv")
print(f"\nFirst few rows:")
print(df.head())
