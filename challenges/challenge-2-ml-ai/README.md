# Challenge 2: ML/AI - Data Analysis & Model Development 🤖

**Difficulty**: Intermediate  
**Duration**: 4-6 hours  
**Team**: Data Scientists, ML Engineers

## 🎯 Objective

Perform exploratory data analysis and build a machine learning model using GitHub Copilot's **Agent mode** in Jupyter Notebooks. Learn how Copilot's agentic capabilities can accelerate data science workflows, from data exploration to model deployment.

## 📚 What You'll Learn

- Using **Agent mode** in Jupyter Notebooks
- Creating **custom agents** for data science workflows
- Using **prompt files** for reusable analysis patterns
- Leveraging `#` context mentions for precise guidance
- Iterative model development with Agent mode
- Generating visualizations and documentation

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

Open `customer_churn_analysis.ipynb` in Jupyter or VS Code

### Step 3: Configure Copilot for Notebooks

Agent mode works seamlessly in Jupyter notebooks within VS Code!

## 💡 Copilot Agentic Tips for This Challenge

### 1. Use Agent Mode for Data Analysis

Open Chat View (`Ctrl+Alt+I`), select **Agent**, and ask:

```
Analyze the customer_churn.csv dataset:
1. Load the data and display basic statistics
2. Check for missing values and data types
3. Create visualizations showing churn distribution
4. Generate a summary report of data quality issues
```

Agent mode will create and run notebook cells automatically!

### 2. Create a Data Science Custom Agent

Create `.github/agents/data-scientist.agent.md`:

```markdown
---
name: Data Scientist
description: Expert in data analysis and ML
tools: ['codebase', 'editFiles', 'runTerminal']
---

You are an expert data scientist. When analyzing data:
- Always check data quality first
- Use appropriate visualizations
- Explain statistical findings
- Follow scikit-learn best practices
- Document assumptions and decisions
- Suggest next steps after each analysis

Reference existing notebooks in #codebase for patterns.
```

### 3. Use Context Mentions for Guidance

```
Using the data in #file:customer_churn.csv, create a 
comprehensive exploratory data analysis with visualizations 
for each feature's relationship to churn.

Reference #codebase for existing visualization styles.
```

### 4. Create Reusable Prompt Files

Create `.github/prompts/create-model.prompt.md`:

```markdown
---
name: create-model
description: Train and evaluate an ML model
agent: agent
---

Train a ${input:modelType} model for ${input:target}:
1. Prepare features and target
2. Split data (80/20, stratified)
3. Train the model
4. Evaluate with metrics (accuracy, precision, recall, F1)
5. Create confusion matrix visualization
6. Show feature importance
7. Suggest improvements
```

Use with: `/create-model`

### 5. Iterative Model Development

Have a conversation with Copilot:

```
You: Load and explore the customer churn dataset

[Agent creates cells, runs them]

You: Handle the missing values appropriately

[Agent adds data cleaning cells]

You: Create a correlation heatmap for numerical features

[Agent generates visualization]

You: Train a Random Forest classifier and show results

[Agent trains model, displays metrics]

You: The accuracy is low - try hyperparameter tuning

[Agent performs GridSearchCV, shows improved results]
```

## 📝 Step-by-Step Guide

### Phase 1: Data Exploration (20 min)

Use Agent mode with a comprehensive prompt:

```
Perform exploratory data analysis on customer_churn.csv:

1. Load the dataset and display:
   - First 10 rows
   - Data types and shape
   - Statistical summary
   - Missing value counts

2. Data Quality:
   - Identify and handle missing values
   - Check for duplicates
   - Detect outliers in numerical columns
   - Validate categorical values

3. Initial Insights:
   - Churn rate overall
   - Churn by contract type
   - Churn by tenure groups
   - Summary of key findings

Create markdown cells explaining each finding.
```

### Phase 2: Data Visualization (20 min)

Continue with Agent mode:

```
Create comprehensive visualizations for the churn dataset:

1. Distribution Plots:
   - Histogram of tenure with KDE overlay
   - Distribution of monthly charges by churn
   - Box plots of total charges by contract type

2. Correlation Analysis:
   - Heatmap of numerical feature correlations
   - Annotate correlation values
   - Highlight features correlated with churn

3. Categorical Analysis:
   - Bar charts of churn by:
     - Contract type
     - Payment method
     - Internet service type
   - Include percentages

4. Class Balance:
   - Pie chart of churn distribution
   - Calculate imbalance ratio

Use seaborn styling and add titles/labels to all plots.
```

### Phase 3: Feature Engineering (25 min)

```
Create features for the churn prediction model:

1. New Features:
   - tenure_group: categorize (0-12, 13-24, 25-48, 49+)
   - avg_monthly_charges: total_charges / tenure
   - service_count: count of services subscribed
   - has_premium_support: binary flag

2. Encoding:
   - One-hot encode: payment_method, internet_service
   - Label encode: binary features (yes/no)
   
3. Scaling:
   - StandardScaler for numerical features
   - Preserve feature names

4. Feature Selection:
   - Use SelectKBest with chi2
   - Display top 15 features with scores
   - Visualize feature importance

Create a clean feature matrix ready for modeling.
```

### Phase 4: Model Development (30 min)

```
Build and compare ML models for churn prediction:

1. Data Split:
   - 80/20 train/test split
   - Stratify by target
   - Set random_state=42

2. Train Models:
   - Logistic Regression (baseline)
   - Decision Tree
   - Random Forest
   - Gradient Boosting

3. For each model, display:
   - Accuracy, Precision, Recall, F1-score
   - Confusion matrix visualization
   - Training time

4. Cross-Validation:
   - 5-fold CV on best model
   - Show mean and std of scores

5. Hyperparameter Tuning:
   - GridSearchCV on Random Forest
   - Parameters: n_estimators, max_depth, min_samples_split
   - Use F1-score as metric
   - Show best parameters and score
```

### Phase 5: Evaluation & Insights (15 min)

```
Evaluate the final model and generate insights:

1. Final Evaluation:
   - Classification report on test set
   - ROC curve with AUC score
   - Precision-Recall curve

2. Feature Importance:
   - Bar chart of top 10 features
   - Explain what each feature means

3. Model Interpretation:
   - Identify customer profiles likely to churn
   - Find patterns in false positives/negatives

4. Business Recommendations:
   - 5 actionable recommendations to reduce churn
   - Prioritize by potential impact
   - Include target customer segments

5. Create a summary markdown cell with key findings.
```

## 🛠️ Optional: MCP Tools for Data Science

Configure MCP servers for enhanced capabilities:

**`.vscode/mcp.json`**:
```json
{
  "servers": {
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

Use it:
```
Use #fetch to get the latest scikit-learn documentation 
for GridSearchCV, then optimize my Random Forest with 
best practices.
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

If you finish early, try these with Agent mode:

1. **Advanced Models**: "Train XGBoost and compare with Random Forest"
2. **Deep Learning**: "Build a neural network with TensorFlow for comparison"
3. **SHAP Values**: "Use SHAP for model explainability"
4. **AutoML**: "Try auto-sklearn to find optimal model"
5. **API Deployment**: "Create FastAPI endpoint to serve predictions"

## 📊 Success Metrics

Track your Copilot usage:
- Notebook cells generated by Agent: ____%
- Number of iterations for model tuning: _____
- Most helpful agent workflow: _______________
- Time saved (estimated): _____ minutes

## 🎓 Key Learnings

Document your experience:
1. How did Agent mode handle notebook workflows?
2. Were visualization suggestions accurate?
3. How well did Copilot handle ML algorithms?
4. What required the most manual refinement?

## 📚 Resources

- [Pandas Documentation](https://pandas.pydata.org/docs/)
- [Scikit-learn Guide](https://scikit-learn.org/stable/user_guide.html)
- [Copilot Agents Guide](../docs/chat-modes.md)

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
- Use Agent mode: "Analyze #problems and fix errors in this notebook"
- Check the `/docs` folder for guides

Happy Analyzing! 📊🤖
