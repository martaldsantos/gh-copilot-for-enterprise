# Data Science & ML Track

**Duration:** 6-8 hours
**Difficulty:** Intermediate to Advanced (progressive stages)
**Focus:** Data analysis, machine learning, and AI development with GitHub Copilot

## Who Is This For

- Data Scientists and ML Engineers
- Data Analysts
- AI/ML Researchers
- Analytics Engineers

## Prerequisites

- Python programming experience
- Understanding of pandas and numpy
- Basic statistics and ML concepts
- Jupyter Notebook familiarity
- Experience with scikit-learn (helpful but not required)

## Technology Stack

- **Python 3.11+**
- **Jupyter Notebooks**
- pandas, numpy for data manipulation
- scikit-learn for machine learning
- matplotlib, seaborn for visualization
- Optional: TensorFlow/PyTorch for deep learning

## Getting Started

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your specific project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Write your own instructions following the guidance below.

> **Why?** If you don't do this, Copilot will think it's helping organize a hackathon instead of helping you write code!

### 2. Create Your Custom Instructions

This file tells Copilot about your data science context and preferences. **Your goal is to create your own custom instructions file.**

**What to include:**

- Python version and key libraries (pandas, scikit-learn, etc.)
- Coding standards (PEP 8, type hints, docstrings)
- Data science best practices (EDA, validation, pipelines)
- Notebook documentation standards

### 3. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**

- **Data Scientist Agent** -- Expert in EDA, feature engineering, and model development
- **ML Engineer Agent** -- Focused on model optimization, pipelines, and deployment
- **Visualization Expert Agent** -- Specialized in creating insightful charts and dashboards

**What to include in each agent:**

- Clear description of the agent's data science expertise
- Specific instructions for analysis and modeling
- References to your preferred libraries and patterns

> Check out [github/awesome-copilot](https://github.com/github/awesome-copilot) for real-world examples of custom instructions and agent templates.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance.

### 4. Open the Challenge

Navigate to `challenges/challenge-2-ml-ai/` and install requirements (`pip install -r requirements.txt`). Open `customer_churn_analysis.ipynb` in VS Code and work through the stages in order.

---

## Stages

| Stage | Name | Difficulty | Est. Time | Key Deliverable |
|-------|------|------------|-----------|----------------|
| 1 | Data Discovery and Cleaning | Intermediate | 60-75 min | Data quality report documenting all 7+ issues |
| 2 | Exploratory Analysis and Feature Engineering | Intermediate | 60-90 min | 8+ visualizations with interpretation, hypothesis tests, feature selection |
| 3 | Model Development and Rigorous Evaluation | Advanced | 60-90 min | 4+ models with pipelines, cross-validation, cost-sensitive scoring |
| 4 | Class Imbalance and Interpretability | Advanced | 60-90 min | Imbalance comparison table, SHAP analysis, business recommendations |
| 5 | Deployment Pipeline and Monitoring | Advanced | 60-90 min | Prediction API, drift detection, model card |

The dataset is intentionally messy. Copilot can generate pandas and scikit-learn code efficiently, but discovering subtle data quality issues, interpreting SHAP values for business decisions, and building drift detection require your analytical judgment.

> **Short on time?** Skip hypothesis testing in Stage 2, train 3 models instead of 4 in Stage 3, do only SHAP analysis in Stage 4, and skip the API + drift detection in Stage 5.

### Stage 1: Data Discovery and Cleaning

**Difficulty:** Intermediate | **Time:** 60-75 min

The dataset has 7+ distinct data quality problems. Your job is to find every one of them
without being told what to look for.

#### Tasks

1. Load the dataset and inspect shape, dtypes, and null counts.
2. Discover and document every data quality issue. The dataset contains problems with inconsistent casing, mixed date formats, type mismatches, blank strings vs. NaN, missing values, duplicate rows, and string-typed numeric columns -- but you must find them yourself.
3. Clean each issue and justify your approach (why not a different method?).
4. Write a **Data Quality Report** markdown cell listing every issue found, its impact on analysis, and the fix applied.

#### Verification

- Cleaned dataset has 0 duplicates
- All columns have consistent, correct dtypes
- No nulls in critical columns (or documented justification for remaining nulls)
- Data quality report lists all discovered issues

---

### Stage 2: Exploratory Analysis and Feature Engineering

**Difficulty:** Intermediate | **Time:** 60-90 min

Visualization without interpretation is decoration. Every plot needs to answer a question.

#### Tasks

1. Create at least 8 distinct visualizations. Each must include a written interpretation (a markdown cell or comment) explaining what the plot reveals about churn.
2. Statistical hypothesis testing: test at least 2 hypotheses (e.g., "fiber optic customers churn more than DSL customers"). Use chi-square, t-test, or equivalent. Report p-values and conclusions.
3. Engineer at least 5 new features with written business rationale for each.
4. Feature selection: compare at least 2 methods (e.g., correlation analysis, mutual information, recursive feature elimination). Justify your final feature set.

#### Verification

- 8+ visualizations with titles, labels, and written interpretation
- 2+ hypothesis tests with p-values and stated conclusions
- 5+ engineered features with business rationale documented
- Feature selection comparison shows results from 2+ methods

---

### Stage 3: Model Development and Rigorous Evaluation

**Difficulty:** Advanced | **Time:** 60-90 min

Reproducibility matters. Use sklearn Pipelines for all preprocessing and training.

#### Tasks

1. Train at least 4 models: Logistic Regression, Random Forest, Gradient Boosting, and one additional (SVM, Neural Net, or XGBoost).
2. Wrap preprocessing and model training in sklearn Pipeline objects.
3. Stratified k-fold cross-validation (k=5 minimum). Report mean and standard deviation for each metric.
4. Hyperparameter tuning with GridSearchCV or RandomizedSearchCV. Document the search space and best parameters found.
5. Define a custom scoring function where false negatives (missing a churner) cost 5x more than false positives. Use this scorer during tuning.

#### Verification

- 4+ models trained using Pipeline objects
- Cross-validation scores include mean and std dev
- Hyperparameter tuning documents search space and best params
- Custom cost-sensitive scorer is used in tuning (not just standard accuracy)

---

### Stage 4: Class Imbalance and Interpretability

**Difficulty:** Advanced | **Time:** 60-90 min

The dataset has class imbalance. Address it rigorously and explain your model to the business.

#### Tasks

1. Implement and compare at least 3 imbalance techniques: SMOTE, class weights, and random undersampling.
2. For each technique, report all metrics (accuracy, precision, recall, F1, AUC-ROC). Explain which metric matters most for the churn prediction business case and why.
3. SHAP analysis: generate a summary plot for global feature importance. Create dependence plots for the top 3 features. Create force plots for 3 individual predictions: 1 churner correctly predicted, 1 non-churner correctly predicted, and 1 misclassification.
4. Write a **Model Explainability Report** cell translating SHAP insights into actionable business recommendations. Be specific (e.g., "customers with contracts under 6 months and monthly charges above $70 should receive a retention offer within the first 3 months").

#### Verification

- Comparison table with all metrics across all 3 imbalance techniques
- Explanation of which metric matters most and why
- SHAP summary, dependence, and force plots rendered
- Business recommendations are specific and actionable (not generic)

#### What Copilot Helps With vs. What Requires Your Judgment

Copilot generates SMOTE code, SHAP plot boilerplate, and metric comparison tables efficiently. But deciding which metric matters most for the business, interpreting SHAP dependence plots to find actionable patterns, and writing recommendations that a product team could act on require domain understanding.

---

### Stage 5: Deployment Pipeline and Monitoring

**Difficulty:** Advanced | **Time:** 60-90 min

A model that exists only in a notebook is not deployed. Make it usable.

#### Tasks

1. Serialize the best model and its full preprocessing pipeline using joblib. Create a prediction function that takes raw (uncleaned) customer data and returns a churn probability. The function must handle the same data quality issues you found in Stage 1.
2. Create a prediction API endpoint in `serve_model.py` using FastAPI. The endpoint accepts customer data as JSON and returns churn probability.
3. Data drift detection: implement KS-test or PSI (Population Stability Index) on key features. Compare incoming data distributions against training data distributions and flag when drift exceeds a threshold.
4. Write a **Model Card** using the template in `model_card_template.md`. Cover: intended use, training data description, performance metrics across demographic groups (if applicable), limitations, and ethical considerations.
5. Create a monitoring cell that simulates 100 new customers with progressively drifted features and shows how predictions and drift scores change.

#### Verification

- Prediction function handles raw data (including quality issues) end-to-end
- API endpoint returns probability as JSON
- Drift detection correctly flags synthetic drifted data
- Model card covers all required sections with substantive content
- Monitoring simulation shows drift impact on predictions

---

## Tips for Using Copilot on This Track

**Comment-driven analysis in notebooks:**

```python
# Load the dataset, display first 5 rows, show column types and missing values
# Create a summary statistics table for all numerical columns
```

**Describe feature engineering in comments:**

```python
# Create age groups: 0-18, 19-35, 36-55, 56+
# Generate interaction features between income and credit_score
# One-hot encode categorical variables preserving column names
```

**Generate complex visualizations:**

```python
# Create a 2x2 subplot showing:
# 1. Distribution of target variable
# 2. Correlation heatmap of top features
# 3. Box plots for each numerical feature by target
# 4. Count plot for categorical variables
```

**Efficient model comparison:**

```python
# Train LogisticRegression, RandomForest, and GradientBoosting
# Evaluate each with cross-validation
# Display results in a comparison table with accuracy, precision, recall, F1
```

Use `/explain` on any algorithm Copilot suggests to understand how it works.

## Resources

- [Copilot Guide](../docs/copilot-guide.md)
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Troubleshooting Guide](../TROUBLESHOOTING.md)
- [Facilitator Guide](../FACILITATOR_GUIDE.md)
