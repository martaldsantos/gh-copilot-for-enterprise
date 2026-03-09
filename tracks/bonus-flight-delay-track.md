# Bonus Track: Full-Stack Flight Delay Predictor

**Duration:** 8-12 hours
**Difficulty:** Advanced
**Focus:** Full-stack application development -- data science, API engineering, and frontend -- with GitHub Copilot

## Track Overview

This is the **bonus track** -- a significantly harder, end-to-end challenge that combines data science, backend API development, and frontend engineering into a single cohesive application. You will build a flight delay prediction tool: a web application that lets a user select a day of the week and a destination airport, then shows the probability that their flight will be delayed by more than 15 minutes.

Unlike the other tracks, this one is not scoped to a single domain. You'll work across the entire stack -- from raw data exploration in a Jupyter notebook, to training and exporting a machine learning model, to building a REST API that serves predictions, to crafting a user-facing frontend that ties it all together.

## Who Is This For?

- Full-stack developers looking for a comprehensive challenge
- Teams that finished their primary track early
- Experienced engineers who want to push Copilot's capabilities across multiple domains
- Anyone who wants to combine ML, API, and UI skills in a single project

## Prerequisites

- Python programming experience
- Basic understanding of machine learning concepts (classification, train/test split)
- Familiarity with REST APIs (Flask, FastAPI, or Express.js)
- Frontend development basics (HTML/CSS/JS or a framework like React, Svelte, Vue)
- Comfort working in Jupyter Notebooks

## Technology Stack

You'll work with:

- **Python 3.11+** -- data analysis and API
- **Jupyter Notebooks** -- data exploration and model building
- pandas, numpy, scikit-learn, matplotlib, seaborn -- data science
- **Flask or FastAPI** -- backend API serving the model and airport data
- **TypeScript / JavaScript** -- frontend application
- Framework of your choice (React, Svelte, Vue, or vanilla)
- **Vite** -- frontend build tooling (provided)

## First Steps: Set Up Your Workspace

### 1. Configure Copilot Context (CRITICAL)

The file `.github/copilot-instructions.md` currently contains instructions for the hackathon organizers. **You must overwrite this file** with instructions relevant to your specific project.

1. Open `.github/copilot-instructions.md`.
2. **Delete its entire contents.**
3. Use the example below as a starting point for your new instructions.

> **Why?** If you don't do this, Copilot will think it's helping organize a hackathon instead of helping you write code!

### 2. Navigate to Your Challenge

Open the folder `challenges/challenge-7-flight-delay/` in your workspace. This is where you will be working.

### DevContainer

A dedicated devcontainer is provided at `.devcontainer/challenge-7-flight-delay/`. It includes Python 3.11, Jupyter, scikit-learn, Flask, FastAPI, and Node.js LTS -- everything you need for all four phases.

To use it, open the command palette (`F1` → **Dev Containers: Reopen in Container**) and select **challenge-7-flight-delay** when prompted.

---

### 3. Create Your Custom Instructions

This file tells Copilot about your full-stack project context and preferences. **Your goal is to create your own custom instructions file.**

**What to include:**

- Python version, key data science libraries (pandas, scikit-learn)
- Backend framework choice (Flask or FastAPI) and API design conventions
- Frontend framework choice and component patterns
- Code quality standards (PEP 8 for Python, ESLint for JS/TS)
- Testing expectations
- The project's overall goal: flight delay prediction from FAA data

> **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for real-world examples of custom instruction files and best practices.

### 4. Create Custom Agents (`.github/agents/`)

Create specialized agents for different phases of this challenge. **Your goal is to create agents that match your workflow.**

**Agents to consider creating:**

- **Data Scientist Agent** -- Expert in EDA, feature engineering, and model training
- **API Engineer Agent** -- Focused on REST API design, Flask/FastAPI, and data serialization
- **Frontend Developer Agent** -- Specialized in building UIs with your chosen framework
- **Full-Stack Integrator Agent** -- Understands the entire pipeline from model to UI

**What to include in each agent:**

- Clear description of the agent's domain expertise
- Specific instructions for their phase of the project
- References to your preferred libraries, patterns, and conventions

> **Looking for examples?** Check out the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository for custom agent templates and ideas.
>
> **Tip**: Reference your agents in chat using `@agent-name` to get specialized assistance!

---

## Track Structure

This challenge is broken into **four phases**. Each phase builds on the previous one.

---

### Phase 1: Data Exploration & Model Building

**Duration:** 3-4 hours
**Focus:** Jupyter Notebook, data science, machine learning

#### Objective

Explore the FAA flights dataset, clean it, perform exploratory data analysis, and train a classification model that predicts whether a flight arriving at a given airport on a given day of the week will be delayed by more than 15 minutes.

#### Dataset

The dataset (`data/flights.csv`) contains **~272,000 records** of US flights from 2013, sourced from the FAA. It includes:

| Column | Description |
|--------|-------------|
| Year, Month, DayofMonth, DayOfWeek | Date information |
| Carrier | Airline carrier code (e.g., DL, WN, AA) |
| OriginAirportID, OriginAirportName, OriginCity, OriginState | Origin airport details |
| DestAirportID, DestAirportName, DestCity, DestState | Destination airport details |
| CRSDepTime, DepDelay, DepDel15 | Scheduled departure and delay info |
| CRSArrTime, ArrDelay, ArrDel15 | Scheduled arrival and delay info |
| Cancelled | Whether the flight was cancelled |

#### Requirements

1. **Load & Inspect** -- Load `data/flights.csv`, display shape, column types, first rows, summary statistics.
2. **Clean** -- Identify null/missing values and handle them (e.g., replace with 0 or drop).
3. **Explore** -- Create visualizations:
 - Delay rates by day of week
 - Delay rates by destination airport (top 20 busiest)
 - Delay distribution by carrier
 - Correlation heatmap for numerical features
4. **Feature Engineering** -- Select features for the model. At minimum use `DayOfWeek` and `DestAirportID`. Optionally add `Carrier`, `Month`, `CRSDepTime`, or engineered features.
5. **Train Model** -- Train a classification model (e.g., Logistic Regression, Random Forest, Gradient Boosting) to predict `ArrDel15`.
6. **Evaluate** -- Report accuracy, precision, recall, F1-score, and display a confusion matrix.
7. **Export** -- Save the trained model to `model.pkl` using pickle or joblib. Extract unique destination airports (ID + name) and save to `airports.csv`.

#### Getting Started

1. Navigate to `challenges/challenge-7-flight-delay/`.
2. Install requirements: `pip install -r requirements.txt`.
3. Open `flight_delay_analysis.ipynb` and follow the guided cells.
4. Use Copilot Agent Mode to help you write each cell.

#### Copilot Tips for This Phase

- Start each notebook cell with a descriptive comment -- Copilot uses this as context.
- Use `/explain` to understand ML concepts like precision vs. recall.
- Ask Copilot: *"What's the best model for binary classification on imbalanced data?"*
- Use Agent Mode (`Ctrl+Alt+I`) to generate entire analysis blocks from natural language.

#### Phase 1 Success Criteria

- [ ] Dataset loaded and inspected
- [ ] Missing values identified and handled
- [ ] At least 4 visualizations created
- [ ] Model trained and evaluated (report metrics)
- [ ] `model.pkl` saved to disk
- [ ] `airports.csv` created with airport IDs and names

---

### Phase 2: Build the Prediction API

**Duration:** 2-3 hours
**Focus:** REST API, Flask or FastAPI, model serving

#### Objective

Create a REST API that serves the trained model and the list of airports so the frontend can consume them.

#### Requirements

1. **`GET /predict`** -- Accepts `day_of_week` (int, 1-7) and `airport_id` (int) as query parameters. Loads the trained model, runs `predict_proba`, and returns:

   ```json
   {
     "delay_probability": 0.23,
     "confidence": 0.77
   }

   ```

 Where `delay_probability` is the chance the flight is delayed >15 min, and `confidence` is the model's certainty.

2. **`GET /airports`** -- Returns the list of airports from `airports.csv`, sorted alphabetically by name:

   ```json
   [
     { "id": 10397, "name": "Atlanta Hartsfield-Jackson International" },
     { "id": 12478, "name": "John F. Kennedy International" }
   ]

   ```

3. **CORS** -- Enable cross-origin requests so the frontend can call this API.

4. **Input validation** -- Validate that `day_of_week` is between 1 and 7, and that `airport_id` exists in the dataset.

5. **Error handling** -- Return meaningful error messages with appropriate HTTP status codes.

#### Getting Started

1. Navigate to `challenges/challenge-7-flight-delay/server/`.
2. Open `app.py` -- it contains a description of what to build.
3. Copy your `model.pkl` and `airports.csv` (from Phase 1) into the `server/` folder.
4. Install dependencies: `pip install -r requirements.txt`.
5. Use Copilot to implement the endpoints.

#### Copilot Tips for This Phase

- Start the file with a multi-line comment describing your API -- Copilot uses this to generate endpoint code.
- Ask Copilot: *"Create a Flask API that loads a scikit-learn model and serves predictions"*.
- Use Agent Mode for scaffolding, then refine individual endpoints.
- Ask Copilot to add Swagger/OpenAPI documentation if using FastAPI.

#### Phase 2 Success Criteria

- [ ] `/predict` endpoint works and returns delay probability
- [ ] `/airports` endpoint returns sorted list of airports
- [ ] CORS is enabled
- [ ] Input validation is implemented
- [ ] Error handling with proper HTTP status codes
- [ ] API tested manually (e.g., via browser or curl)

---

### Phase 3: Build the Frontend

**Duration:** 2-3 hours
**Focus:** Frontend, UI/UX, API integration

#### Objective

Create a user-facing web application that allows someone to select a day of the week and a destination airport, and then see the predicted probability of their flight being delayed.

#### Requirements

1. **Airport Dropdown** -- Fetch the list of airports from `GET /airports` and display them in a searchable dropdown, sorted alphabetically.
2. **Day of Week Selector** -- Display the 7 days of the week for selection (e.g., dropdown or button group).
3. **Predict Button** -- On click, call `GET /predict?day_of_week=X&airport_id=Y` and display the result.
4. **Result Display** -- Show the delay probability in a clear, user-friendly way (e.g., percentage, progress bar, color-coded indicator).
5. **Loading & Error States** -- Show a loading indicator while the API is called. Display meaningful error messages if the API fails.
6. **Responsive Design** -- The UI should work on both desktop and mobile screens.

#### Getting Started

1. Navigate to `challenges/challenge-7-flight-delay/client/`.
2. Review the starter files: `index.html`, `package.json`, `src/main.ts`.
3. Choose your framework:
 - **Vanilla TypeScript** -- build directly in `src/main.ts`.
 - **React/Svelte/Vue** -- install your framework and set up the project.
4. Install dependencies: `npm install`.
5. Start dev server: `npm run dev`.

#### Copilot Tips for This Phase

- Describe your UI in comments before writing code -- Copilot will generate component structures.
- Ask Copilot: *"Create a form with a dropdown for airports and days, with a submit button"*.
- Use `/fix` if you run into CORS or fetch issues.
- Ask Copilot to add styling -- describe what you want in natural language.

#### Phase 3 Success Criteria

- [ ] Airport dropdown is populated from the API
- [ ] Day of week selection works
- [ ] Prediction API is called on submit
- [ ] Result is displayed clearly to the user
- [ ] Loading and error states are handled
- [ ] UI is reasonably styled and responsive

---

### Phase 4: Polish & Advanced Features *(Bonus)*

**Duration:** 1-2 hours
**Focus:** Production readiness, advanced features

#### Objective

Elevate the application beyond the basics. These are optional challenges for teams who finish early or want to push further.

#### Advanced Challenges

1. **Compare Multiple Models** -- Go back to the notebook, train 3+ models (e.g., Logistic Regression, Random Forest, Gradient Boosting, XGBoost), compare them side-by-side with cross-validation, and export the best one.
2. **Feature Expansion** -- Add more features to the model (Carrier, Month, CRSDepTime). Retrain and compare performance.
3. **Swagger / OpenAPI** -- Add interactive API documentation (automatic with FastAPI, manual with Flask).
4. **Client-Side Caching** -- Cache the airports list so it's not re-fetched on every interaction.
5. **Data Visualization in the Frontend** -- Display a chart or graph showing delay trends (e.g., by day of week or by airport) using Chart.js, D3, or a similar library.
6. **Unit & Integration Tests** -- Write tests for the API endpoints and the frontend components.
7. **Dockerize** -- Create a `Dockerfile` for the server and optionally the client. Write a `docker-compose.yml` to run both together.
8. **CI/CD Pipeline** -- Create a GitHub Actions workflow that lints, tests, and builds the project on every push.
9. **Deploy to Azure** -- Deploy the API to Azure App Service or Azure Container Apps, and the frontend to Azure Static Web Apps.
10. **Model Interpretability** -- Use SHAP to explain the model's predictions; display feature importance in the frontend.

---

## Recommended Schedule

### Full Day (10 hours)

```text
09:00 - 09:30   Setup & First Steps (agents, copilot-instructions)
09:30 - 10:30   Phase 1: Data Loading, Cleaning & EDA
10:30 - 10:45   Break
10:45 - 12:00   Phase 1: Feature Engineering & Model Training
12:00 - 12:30   Phase 1: Model Evaluation & Export
12:30 - 13:30   Lunch
13:30 - 14:30   Phase 2: API Endpoints (/predict, /airports)
14:30 - 15:00   Phase 2: Validation, CORS & Testing
15:00 - 15:15   Break
15:15 - 16:30   Phase 3: Frontend Build & API Integration
16:30 - 17:30   Phase 4: Advanced Features & Polish
17:30 - 18:00   Review & Showcase

```

### Compressed Day (8 hours)

```text
09:00 - 09:30   Setup & First Steps
09:30 - 11:00   Phase 1: Full Data Science Pipeline
11:00 - 11:15   Break
11:15 - 12:30   Phase 2: Build the API
12:30 - 13:30   Lunch
13:30 - 15:00   Phase 3: Build the Frontend
15:00 - 15:15   Break
15:15 - 16:30   Phase 4: Polish & Advanced Features
16:30 - 17:00   Review & Showcase

```

## Learning Outcomes

By completing this track, you will:

### Technical Skills

- Perform exploratory data analysis on real-world FAA flight data
- Train and evaluate a machine learning classification model
- Export and serve an ML model via a REST API
- Build a responsive frontend that consumes API endpoints
- Handle CORS, input validation, error handling, and loading states
- Integrate a full-stack application end-to-end

### Copilot Mastery

- Use Copilot effectively in Jupyter notebooks for data analysis
- Generate API endpoint boilerplate from descriptive comments
- Scaffold frontend components via natural language prompts
- Leverage `/explain` to understand ML algorithms and patterns
- Use Agent Mode for multi-file, multi-step code generation
- Create custom agents specialized to different development phases
- Debug cross-domain issues (CORS, serialization) with Copilot Chat

## Track-Specific Tips

### 1. Data Science Phase

**Comment-driven analysis:**

```python

# Load the flights dataset from data/flights.csv

# Display shape, first 5 rows, and count of null values per column

```

**Ask for insights:**

- *"Which day of the week has the highest delay rate?"*
- *"What are the top 10 airports with the most delays?"*

### 2. API Development

**Start with a blueprint:**

```python

# Flask API for flight delay prediction

# Endpoints:

# - GET /predict?day_of_week=<int>&airport_id=<int> → returns delay probability

# - GET /airports → returns list of airports sorted by name

# Load model from model.pkl, airports from airports.csv

```

### 3. Frontend Development

**Describe your UI:**

```typescript
// Create a form with:
// - A dropdown populated from GET /airports
// - A day-of-week selector (Monday through Sunday)
// - A submit button that calls GET /predict and displays the result
// - A results section showing delay probability as a percentage

```

### 4. Debugging with Copilot

- **CORS errors?** Ask Copilot: *"How do I enable CORS in Flask?"*
- **Model not loading?** Use `/fix` on the error traceback.
- **Frontend not rendering?** Ask Copilot to review your component structure.

## Success Metrics

Track your progress:

### Core (Must Complete)

- [ ] Dataset loaded, cleaned, and explored with visualizations
- [ ] ML model trained, evaluated, and exported to `model.pkl`
- [ ] Airports extracted and saved to `airports.csv`
- [ ] API serves predictions via `/predict` endpoint
- [ ] API serves airport list via `/airports` endpoint
- [ ] Frontend displays airport and day selectors
- [ ] Frontend calls the API and shows the delay probability
- [ ] Full application works end-to-end

### Advanced (Stretch Goals)

- [ ] Multiple models compared and best one selected
- [ ] API has input validation and error handling
- [ ] Swagger/OpenAPI documentation
- [ ] Frontend has loading/error states and responsive design
- [ ] Tests written for API and/or frontend
- [ ] Application containerized with Docker
- [ ] CI/CD pipeline created
- [ ] Deployed to Azure

## Additional Resources

### Data Science

- [Prompt Engineering Guide](../docs/prompt-engineering.md)
- [Best Practices](../docs/best-practices.md)
- [Chat Modes Reference](../docs/chat-modes.md)
- Scikit-learn documentation
- Pandas user guide

### API Development

- Flask documentation
- FastAPI documentation

### Frontend

- Vite documentation
- TypeScript handbook

### For Facilitators

- See [Facilitator Guide](../FACILITATOR_GUIDE.md) for bonus track guidance
- This track requires broad full-stack experience and is significantly harder than the other tracks
- Expect participants to spend 8-12 hours; it is normal to not complete all phases
- Phase 4 is entirely optional -- completing Phases 1-3 is a strong result

## Need Help?

- **Data questions?** Ask Copilot to explain patterns in the dataset
- **Model confusion?** Use `/explain` on the model training code
- **API issues?** Ask Copilot about CORS, serialization, or Flask/FastAPI patterns
- **Frontend stuck?** Describe what you want in chat -- Copilot can generate components
- **General help?** Check [Troubleshooting Guide](../TROUBLESHOOTING.md) or ask your facilitator

## Track Completion

You've successfully completed the Bonus Track when you:

- Built a complete ML model from real flight data
- Created an API that serves predictions and airport data
- Built a frontend that lets users interact with the model
- Understood how Copilot accelerates full-stack development
- Can explain your end-to-end architecture and design decisions

---

Start with [Challenge 7: Flight Delay Predictor](../challenges/challenge-7-flight-delay/)
