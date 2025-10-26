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

## 🗺️ Track Structure

### Challenge 2: ML/AI - Data Analysis & Model Development (Required)
**Duration:** 1.5-2 hours  
**Focus:** Complete ML pipeline

Build an end-to-end machine learning solution:
- Exploratory data analysis
- Data cleaning and preprocessing
- Feature engineering
- Model training and evaluation
- Performance optimization

**Copilot Skills You'll Learn:**
- Code generation in Jupyter notebooks
- `/explain` for complex algorithms
- Data visualization assistance
- Feature engineering suggestions
- Model selection guidance

📖 [Start Challenge 2](../challenges/challenge-2-ml-ai/README.md)

---

### Challenge 5: Full Stack - MCP Server Integration (Advanced, Optional)
**Duration:** 2 hours  
**Focus:** ML model deployment

Learn to deploy and integrate ML models:
- Model serving with APIs
- MCP servers for ML context
- Integration with external services
- Production ML patterns

**Copilot Skills You'll Learn:**
- API development for ML models
- MCP server creation
- Advanced integration patterns
- Full-stack ML development

📖 [Start Challenge 5](../challenges/challenge-5-fullstack-mcp/README.md)

---

### Challenge 1: Web Development - REST API (Optional)
**Duration:** 1.5 hours  
**Focus:** ML API deployment

If you want to learn about deploying models as APIs:
- Build REST API for model serving
- Input validation for predictions
- Response formatting
- API testing

**Copilot Skills You'll Learn:**
- API development basics
- Testing frameworks
- Documentation generation

📖 [Start Challenge 1](../challenges/challenge-1-web-api/README.md)

## ⏱️ Recommended Schedule

### Full Day (8 hours)

```
09:00 - 09:30   Setup & Introduction to Copilot for Data Science
09:30 - 11:00   Challenge 2: Data Exploration & Visualization
11:00 - 11:15   Break
11:15 - 12:30   Challenge 2: Feature Engineering & Model Training
12:30 - 13:30   Lunch
13:30 - 15:00   Challenge 2: Model Evaluation & Optimization
15:00 - 15:15   Break
15:15 - 17:00   Challenge 5: ML Model Deployment (or bonus tasks)
17:00 - 17:30   Review & Showcase
```

### Half Day (4 hours)

```
09:00 - 09:15   Setup & Introduction
09:15 - 10:30   Data Exploration & Visualization
10:30 - 10:45   Break
10:45 - 12:00   Feature Engineering & Model Training
12:00 - 12:45   Model Evaluation & Documentation
12:45 - 13:00   Review & Wrap-up
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
- ✅ Deploy ML models as APIs (optional)

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
   - Use `/doc` to explain complex functions
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
