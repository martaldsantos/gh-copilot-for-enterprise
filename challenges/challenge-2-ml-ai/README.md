# Challenge 2: ML/AI - Data Analysis & Model Development 🤖

**Difficulty**: Intermediate  
**Duration**: 1-1.5 hours  
**Team**: Data Scientists, ML Engineers

## 🎯 Objective

Perform exploratory data analysis and build a machine learning model using GitHub Copilot to accelerate data science workflows. Learn how Copilot can assist with data processing, visualization, feature engineering, and model development.

## 📚 What You'll Learn

- Using Copilot in Jupyter Notebooks
- Leveraging `/explain` for complex algorithms
- Data visualization with Copilot assistance
- Feature engineering with AI suggestions
- Model selection and hyperparameter tuning
- Generating data science documentation

## 🛠️ Technology Stack

- **Python 3.11+**
- **Jupyter Notebooks**
- **pandas** - Data manipulation
- **numpy** - Numerical computing
- **scikit-learn** - Machine learning
- **matplotlib/seaborn** - Visualization

## 📋 Requirements

Build a complete ML pipeline for customer churn prediction:

### Core Features
1. **Data Exploration**
   - Load and inspect dataset
   - Handle missing values
   - Statistical analysis
   - Data quality checks

2. **Data Visualization**
   - Distribution plots
   - Correlation analysis
   - Feature relationships
   - Class balance visualization

3. **Feature Engineering**
   - Create new features
   - Encode categorical variables
   - Scale numerical features
   - Feature selection

4. **Model Development**
   - Train/test split
   - Multiple model comparison
   - Hyperparameter tuning
   - Cross-validation

5. **Evaluation & Insights**
   - Performance metrics
   - Feature importance
   - Model interpretation
   - Business recommendations

## 🚀 Getting Started

### Step 1: Set Up Environment

```bash
cd challenges/challenge-2-ml-ai/
pip install -r requirements.txt
jupyter notebook
```

### Step 2: Open the Starter Notebook

Open `customer_churn_analysis.ipynb` in Jupyter

### Step 3: Use Copilot in Notebooks

Copilot works seamlessly in Jupyter notebooks!

## 💡 Copilot Tips for This Challenge

### 1. Comment-Driven Data Analysis

Write descriptive comments and let Copilot generate the code:

```python
# Load the customer churn dataset and display the first 5 rows with info about columns
```

Copilot will suggest:
```python
import pandas as pd
df = pd.read_csv('customer_churn.csv')
print(df.head())
print(df.info())
```

### 2. Use `/explain` for Algorithms

Highlight any complex code and ask:
- `/explain how does this feature scaling work?`
- `/explain what algorithm is best for this classification problem?`

### 3. Visualization Assistance

```python
# Create a correlation heatmap showing relationships between all numerical features
```

### 4. Feature Engineering Magic

```python
# Create interaction features between contract_type and monthly_charges
# Then encode categorical variables using one-hot encoding
```

## 📝 Step-by-Step Guide

### Phase 1: Data Exploration (20 min)

1. **Load and Inspect Data**
   
   💡 **Try this in Copilot Chat:**
   ```
   "Load the customer_churn.csv file, display basic statistics, 
   check for missing values, and show data types for all columns"
   ```

2. **Handle Missing Values**
   ```python
   # Identify columns with missing values and calculate percentage
   # For numerical columns, fill with median; for categorical, use mode
   ```

3. **Statistical Summary**
   ```
   Ask Copilot: "Generate comprehensive statistical summary including 
   distribution of churn rate by different customer segments"
   ```

### Phase 2: Data Visualization (20 min)

1. **Distribution Analysis**
   ```python
   # Create subplots showing distribution of tenure, monthly_charges, and total_charges
   # Use histograms with KDE overlay
   ```

2. **Correlation Analysis**
   ```python
   # Generate correlation matrix for numerical features
   # Create heatmap with annotations
   # Identify features most correlated with churn
   ```

3. **Feature Relationships**
   ```
   Prompt: "Create visualizations showing how churn rate varies by 
   contract type, payment method, and internet service type"
   ```

4. **Class Balance Check**
   ```python
   # Visualize the distribution of churn (target variable)
   # Calculate and display class imbalance ratio
   ```

### Phase 3: Feature Engineering (25 min)

1. **Create New Features**
   ```
   Ask Copilot: "Create these new features:
   - tenure_group: categorize tenure into bins (0-12, 13-24, 25-48, 49+)
   - avg_monthly_charges: total_charges / tenure
   - service_count: count of services customer has
   - is_senior: binary flag for senior citizens"
   ```

2. **Encode Categorical Variables**
   ```python
   # Use one-hot encoding for nominal variables (payment_method, internet_service)
   # Use label encoding for binary variables (gender, partner, dependents)
   ```

3. **Feature Scaling**
   ```python
   # Apply StandardScaler to numerical features
   # Keep feature names for interpretability
   ```

4. **Feature Selection**
   ```
   "Use SelectKBest with chi2 to identify top 15 most important features
   Display feature scores and create a visualization"
   ```

### Phase 4: Model Development (30 min)

1. **Train/Test Split**
   ```python
   # Split data into train/test sets (80/20)
   # Stratify by target variable to maintain class balance
   ```

2. **Baseline Models**
   ```
   Ask Copilot: "Train and compare these models on the training set:
   - Logistic Regression
   - Decision Tree
   - Random Forest
   - Gradient Boosting
   
   Display accuracy, precision, recall, F1-score for each"
   ```

3. **Cross-Validation**
   ```python
   # Perform 5-fold cross-validation on the best performing model
   # Calculate mean and std of CV scores
   ```

4. **Hyperparameter Tuning**
   ```
   "Use GridSearchCV to tune hyperparameters for Random Forest:
   - n_estimators: [100, 200, 300]
   - max_depth: [10, 20, 30, None]
   - min_samples_split: [2, 5, 10]
   
   Use F1-score as the metric"
   ```

### Phase 5: Evaluation & Insights (15 min)

1. **Final Model Evaluation**
   ```python
   # Evaluate best model on test set
   # Generate classification report
   # Create confusion matrix visualization
   # Calculate ROC-AUC score and plot ROC curve
   ```

2. **Feature Importance**
   ```
   "Extract and visualize feature importance from the best model
   Show top 10 most important features in a horizontal bar chart"
   ```

3. **Model Interpretation**
   ```
   Ask Copilot: "Analyze the model results and explain:
   - Which features most predict churn?
   - What patterns exist in churned customers?
   - What are potential false positives/negatives?"
   ```

4. **Business Recommendations**
   ```
   "Based on the model insights, generate 5 actionable 
   recommendations to reduce customer churn"
   ```

## ✅ Completion Checklist

- [ ] Dataset loaded and explored
- [ ] Missing values handled appropriately
- [ ] Comprehensive visualizations created
- [ ] Statistical analysis completed
- [ ] New features engineered
- [ ] Categorical variables encoded
- [ ] Features scaled/normalized
- [ ] Multiple models trained and compared
- [ ] Best model selected and tuned
- [ ] Cross-validation performed
- [ ] Test set evaluation completed
- [ ] Feature importance analyzed
- [ ] Business insights documented
- [ ] Recommendations provided

## 🎁 Bonus Challenges

If you finish early, try these:

1. **Advanced Models**: Try XGBoost, LightGBM, or CatBoost
2. **Deep Learning**: Build a neural network with TensorFlow/PyTorch
3. **Ensemble Methods**: Create a stacked ensemble model
4. **SHAP Values**: Use SHAP for model explainability
5. **AutoML**: Experiment with auto-sklearn or H2O AutoML
6. **API Deployment**: Create FastAPI endpoint to serve predictions

## 🧪 Testing Your Work

After completing the notebook, verify that:
- All cells execute without errors
- Model achieves reasonable performance metrics
- Visualizations are clear and informative

## 📊 Success Metrics

Track your Copilot usage:
- Lines of code generated by Copilot: ____%
- Number of `/explain` uses: _____
- Most helpful suggestion: _______________
- Time saved: _____ minutes

## 🎓 Key Learnings

Document your experience:
1. How did Copilot help with data exploration?
2. Were visualization suggestions accurate?
3. How well did Copilot handle ML algorithms?
4. What needed the most manual refinement?

## 📚 Resources

- [Pandas Documentation](https://pandas.pydata.org/docs/)
- [Scikit-learn Guide](https://scikit-learn.org/stable/user_guide.html)
- [Copilot Best Practices](../docs/best-practices.md)

## 📈 Dataset Information

**customer_churn.csv** contains:
- **customerID**: Unique identifier
- **gender**: Male/Female
- **SeniorCitizen**: 0 or 1
- **Partner**: Yes/No
- **Dependents**: Yes/No
- **tenure**: Months as customer
- **PhoneService**: Yes/No
- **InternetService**: DSL/Fiber optic/No
- **Contract**: Month-to-month/One year/Two year
- **MonthlyCharges**: Monthly bill amount
- **TotalCharges**: Total amount charged
- **Churn**: Yes/No (TARGET)

---

**Need Help?**
- Use Copilot Chat to debug issues
- Check the `/docs` folder for guides

Happy Analyzing! 📊🤖
