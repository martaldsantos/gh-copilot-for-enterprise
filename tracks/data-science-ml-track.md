# Data Science & ML Track 🤖

**Duration:** 6-8 hours  
**Difficulty:** Intermediate  
**Focus:** Data analysis, machine learning, and AI development with GitHub Copilot

## 🎯 Track Overview

This track is designed for data scientists and machine learning engineers who want to leverage GitHub Copilot for data analysis, feature engineering, model development, and ML pipelines. You'll learn how Copilot can accelerate your data science workflow from exploration to production.

## 👥 Who Is This For?

- Data Scientists
- Machine Learning Engineers
- Data Analysts
- AI/ML Researchers
- Analytics Engineers

## 📋 Prerequisites

- Python programming experience
- Understanding of pandas and numpy
- Basic statistics and ML concepts
- Jupyter Notebook familiarity
- Experience with scikit-learn (helpful but not required)

## 🛠️ Technology Stack

You'll work with:
- **Python 3.11+**
- **Jupyter Notebooks**
- pandas, numpy for data manipulation
- scikit-learn for machine learning
- matplotlib, seaborn for visualization
- Optional: TensorFlow/PyTorch for deep learning

## ⚡ First Steps: Set Up Your Workspace

### ⚠️ IMPORTANT: Create a Fresh Repository First!

> **Do NOT work directly in the hackathon repository!** See the **[Setup Instructions](../README.md#%EF%B8%8F-important-create-your-own-repository)** for why and how to set up properly.

👉 **[Follow the Setup Instructions](../README.md#step-2-set-up-environment)** - use the interactive setup script to copy:
- `.devcontainer/` folder
- `challenges/challenge-2-ml-ai/` starter code and notebooks

Then create your own `.github/copilot-instructions.md` using the example below.

---

### 1. Create a `.github/copilot-instructions.md` File

This file tells Copilot about your data science context and preferences. **Your goal is to create your own custom instructions file.**

**What to include:**
- Python version and key libraries (pandas, scikit-learn, etc.)
- Coding standards (PEP 8, type hints, docstrings)
- Data science best practices (EDA, validation, pipelines)
- Notebook documentation standards

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for real-world examples of custom instruction files and best practices.

### 2. Create Custom Agents (`.github/agents/`)

Create specialized agents for different tasks. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**
- **Data Scientist Agent** - Expert in EDA, feature engineering, and model development
- **ML Engineer Agent** - Focused on model optimization, pipelines, and deployment
- **Visualization Expert Agent** - Specialized in creating insightful charts and dashboards

**What to include in each agent:**
- Clear description of the agent's data science expertise
- Specific instructions for analysis and modeling
- References to your preferred libraries and patterns

> 💡 **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates and ideas.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance!

---

## 🗺️ Track Structure

### Your Challenge: ML/AI - Data Analysis & Model Development
**Duration:** 4-6 hours  
**Focus:** Complete ML pipeline in Jupyter notebooks

> 🎯 **This is YOUR dedicated challenge.** Focus entirely on data science and ML. No web development or infrastructure knowledge required.

#### 🎯 Objective

Perform exploratory data analysis and build a machine learning model using GitHub Copilot's **Agent mode** in Jupyter Notebooks. Learn how Copilot's agentic capabilities can accelerate data science workflows, from data exploration to model deployment.

#### 📋 Requirements

Build a complete ML pipeline for customer churn prediction:

**Core Features**
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

#### 🚀 Getting Started

1. **Setup**: Navigate to `challenges/challenge-2-ml-ai/` and install requirements (`pip install -r requirements.txt`).
2. **Open Notebook**: Open `customer_churn_analysis.ipynb` in VS Code.
3. **Start Analysis**: Use Copilot to analyze the data and build models.

#### 💡 Copilot Tips

- **Use Agent Mode**: Open Chat View (`Ctrl+Alt+I`) and select **Agent** to analyze data and generate notebook cells.
- **Iterate**: Ask Copilot to "Analyze the customer_churn.csv dataset" and then refine the analysis.
- **Visualize**: Ask Copilot to "Create visualizations showing churn distribution".

**Copilot Skills You'll Learn:**
- Code generation in Jupyter notebooks
- `/explain` for complex algorithms and statistics
- `/new` for creating new projects and files
- Data visualization assistance
- Feature engineering suggestions
- Model selection guidance
- Natural language prompts for documenting your analysis

📖 [Start Challenge 2](../challenges/challenge-2-ml-ai/)

## ⏱️ Recommended Schedule

### Full Day (6 hours)

```
09:00 - 09:30   Setup & First Steps (agents, copilot-instructions)
09:30 - 10:30   Data Exploration & Visualization
10:30 - 10:45   Break
10:45 - 12:00   Feature Engineering
12:00 - 13:00   Lunch
13:00 - 14:30   Model Training & Evaluation
14:30 - 14:45   Break
14:45 - 16:00   Hyperparameter Tuning & Results
16:00 - 16:30   Review & Showcase
```

### Half Day (4 hours)

```
09:00 - 09:30   Setup & First Steps
09:30 - 10:30   Data Exploration & Visualization
10:30 - 10:45   Break
10:45 - 12:00   Feature Engineering & Model Training
12:00 - 12:30   Model Evaluation & Documentation
12:30 - 13:00   Review & Wrap-up
```

## 🎓 Learning Outcomes

By completing this track, you will:

### Technical Skills

- ✅ Perform comprehensive exploratory data analysis
- ✅ Handle missing data and outliers effectively
- ✅ Engineer meaningful features from raw data
- ✅ Train and evaluate multiple ML models
- ✅ Optimize model hyperparameters
- ✅ Interpret model results and generate insights

### Copilot Mastery
- ✅ Use Copilot effectively in Jupyter notebooks
- ✅ Generate data processing code with comments
- ✅ Create visualizations with minimal code
- ✅ Leverage `/explain` for understanding algorithms
- ✅ Generate comprehensive test datasets
- ✅ Document analysis and findings

## 💡 Track-Specific Tips

### 1. Data Exploration with Copilot

**Comment-driven analysis:**
```python
# Load the dataset, display first 5 rows, show column types and missing values
# Create a summary statistics table for all numerical columns
```

**Ask for insights:**
- "What patterns can we see in this data?"
- "Which features are most correlated with the target?"

### 2. Feature Engineering

**Describe what you want:**
```python
# Create age groups: 0-18, 19-35, 36-55, 56+
# Generate interaction features between income and credit_score
# One-hot encode categorical variables preserving column names
```

### 3. Visualization

**Let Copilot create complex plots:**
```python
# Create a 2x2 subplot showing:
# 1. Distribution of target variable
# 2. Correlation heatmap of top features
# 3. Box plots for each numerical feature by target
# 4. Count plot for categorical variables
```

### 4. Model Development

**Efficient model comparison:**
```python
# Train LogisticRegression, RandomForest, and GradientBoosting
# Evaluate each with cross-validation
# Display results in a comparison table with accuracy, precision, recall, F1
```

### 5. Using `/explain` for Learning

When Copilot suggests an algorithm:
1. Highlight the code
2. Use `/explain how does this algorithm work?`
3. Ask follow-up questions for deeper understanding

## 📊 Success Metrics

Track your progress:
- [ ] Completed full EDA with visualizations
- [ ] Handled missing values appropriately
- [ ] Created meaningful features
- [ ] Trained and compared multiple models
- [ ] Achieved good model performance (>80% accuracy or relevant metric)
- [ ] Generated actionable business insights
- [ ] Used `/explain` to understand algorithms
- [ ] Documented findings clearly

## 🎁 Bonus Challenges

If you finish early:

1. **Deep Learning**: Build a neural network with TensorFlow/PyTorch
2. **Advanced Feature Engineering**: Create polynomial features, PCA
3. **Model Explainability**: Implement SHAP values
4. **AutoML**: Experiment with auto-sklearn or H2O
5. **Time Series**: Add time series analysis if applicable
6. **Model Deployment**: Create a FastAPI endpoint for predictions

## 🚀 Getting Started

1. **Launch Jupyter**: Start your Codespace or local Jupyter server
2. **Verify Copilot**: Ensure Copilot works in notebooks
3. **Start Challenge 2**: Open the ML challenge notebook
4. **Use Comments**: Write descriptive comments before each cell
5. **Iterate**: Refine Copilot suggestions as needed

## 📚 Additional Resources

### Data Science with Copilot
- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Best Practices](../docs/best-practices.md)
- [Chat Modes Reference](../docs/chat-modes.md)

### ML/AI Resources
- Scikit-learn documentation
- Pandas user guide
- Matplotlib gallery

### For Facilitators
- See [Facilitator Guide](../FACILITATOR_GUIDE.md) for ML track guidance
- This track requires intermediate Python and ML knowledge

## 💻 Working in Jupyter Notebooks

### Copilot Tips for Notebooks

1. **Write comments first**: Describe your analysis goal
2. **Accept and modify**: Review all generated code
3. **Use chat panel**: Ask questions about the data
4. **Generate markdown**: Ask Copilot to document findings

**Example workflow:**
```python
# Cell 1: Comment describing what you want
# Load customer_churn.csv and show basic info

# Cell 2: Copilot generates the code
import pandas as pd
df = pd.read_csv('customer_churn.csv')
# ... Copilot completes the rest

# Cell 3: Ask Copilot to explain results
# Use /explain in chat about any unexpected patterns
```

## 🔬 Scientific Workflow

### Best Practices for Data Science with Copilot

1. **Exploratory Phase**
   - Let Copilot handle boilerplate (imports, loading)
   - Use it for quick visualizations
   - Ask for statistical tests

2. **Feature Engineering**
   - Describe transformations in comments
   - Generate multiple options and compare
   - Use Copilot for encoding schemes

3. **Modeling Phase**
   - Ask for model recommendations
   - Generate cross-validation code
   - Create evaluation metrics

4. **Documentation**
   - Ask Copilot to "add docstrings" to explain complex functions
   - Generate markdown summaries
   - Create reproducible notebooks

## 🤝 Need Help?

- **Data questions?** Ask Copilot to explain patterns
- **Algorithm confusion?** Use `/explain` on model code
- **Stuck?** Check [Troubleshooting Guide](../TROUBLESHOOTING.md)
- **Technical issues?** Consult your facilitator

## 🎯 Track Completion

You've successfully completed the Data Science & ML track when you:
- ✅ Built a complete ML pipeline
- ✅ Understood how Copilot accelerates data science
- ✅ Generated insights from data
- ✅ Created well-documented analysis
- ✅ Can explain your model's decisions

---

**Ready to analyze with Copilot?** Start with [Challenge 2: ML & Data Analysis](../challenges/challenge-2-ml-ai/README.md) 📊🤖
