export const projectsData = [
  {
    id: "sales-trend-analysis",
    featured: true,
    title: "Sales Trend Analysis Platform",
    subtitle: "End-to-End Analytics & Q-Learning Prediction System",
    category: "Data Analytics / Machine Learning",
    badge: "Featured Project + Research Paper",
    period: "2024",
    githubUrl: "https://github.com/Azhar0612/sales-trend-analysis",
    demoUrl: null,
    paperUrl: "/assets/research/Sales_Trend_Analysis_Research_Paper.pdf",
    paperLabel: "View Research Paper",
    isAuthor: true,
    shortDescription: "An end-to-end sales analytics platform analyzing sales revenue, profit margins, order velocity, regional breakdown, product performance, and sales trends using Superstore dataset with a Q-Learning predictive component and published research paper.",
    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "Pandas",
      "SQLite",
      "Flask",
      "Chart.js",
      "Q-Learning"
    ],
    overview: {
      problem: "Businesses often struggle to digest raw multi-regional transaction logs into clear profitability insights while simultaneously anticipating future sales trajectories.",
      objective: "Build an integrated data pipeline that cleans raw transaction data, stores structured metrics in SQLite, provides multi-dimensional analytical dashboards, and applies a Q-Learning reinforcement agent for trajectory prediction.",
      dataset: "Superstore Transactional Dataset containing order IDs, customer segments, product categories, sales figures, profit margins, and regional parameters.",
      architectureSteps: [
        { title: "CSV Data Ingestion", desc: "Automated parsing and ingestion of raw transactional CSV logs." },
        { title: "Data Cleaning & Prep", desc: "Handling missing values, data type casting, and feature extraction via Pandas." },
        { title: "SQLite Storage Layer", desc: "Structured relational tables optimized for aggregation and fast analytical SQL queries." },
        { title: "Exploratory & KPI Analysis", desc: "Computing revenue trends, regional profit margins, category share, and discount impacts." },
        { title: "Interactive Dashboards", desc: "Visual interactive charts powered by Chart.js and Power BI integration." },
        { title: "Q-Learning Model", desc: "Reinforcement learning policy estimating demand transitions based on historical state rewards." },
        { title: "Flask REST API", desc: "Serving calculated KPIs, forecast states, and summary endpoints to the frontend UI." }
      ],
      keyInsights: [
        "Identified top-performing product categories driving over 60% of total profit margins.",
        "Highlighted specific regional shipping modes that negatively impacted profitability due to excessive discounting.",
        "Engineered an automated data pipeline reducing manual Excel processing time from hours to seconds."
      ],
      methodology: "Built modular Python ETL scripts reading CSVs into pandas DataFrames, normalizing records, loading clean tables into SQLite database, and exposing endpoints using Flask to render real-time interactive charts.",
      challenges: "Reconciling inconsistent data types in raw transaction logs and formulating an appropriate discrete state-action matrix for the Q-Learning prediction algorithm.",
      whatILearned: "Enhanced expertise in SQL schema optimization, REST API architecture using Flask, and bridging analytical data pipelines directly with interactive frontend visualizations."
    }
  },
  {
    id: "alternative-credit-assessment",
    featured: false,
    title: "Alternative Credit Assessment for Financial Inclusion",
    subtitle: "Credit Risk Evaluation (Base Paper Study)",
    category: "Data Science / FinTech",
    badge: "FinTech (Base Paper Reference)",
    period: "2024",
    githubUrl: "https://github.com/Azhar0612",
    demoUrl: null,
    paperUrl: "/assets/research/Alternative_Credit_Assessment_Base_Paper.pdf",
    paperLabel: "View Base Paper",
    isBasePaper: true,
    shortDescription: "A project exploring alternative data sources (transaction patterns, behavioral metrics, digital footprint) to evaluate creditworthiness for unbanked populations based on foundational research in AI-powered credit scoring.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Feature Engineering",
      "Statistical Analysis"
    ],
    overview: {
      problem: "Traditional credit scoring systems rely heavily on formal credit bureau histories, excluding millions of unbanked individuals and micro-entrepreneurs from financial services.",
      objective: "Develop a transparent, data-driven framework that evaluates alternative data proxies to estimate credit risk fairly without traditional credit bureau reports.",
      dataset: "Anonymized non-traditional behavioral datasets incorporating transactional frequency, bill payment consistency, and utility interaction patterns.",
      architectureSteps: [
        { title: "Alternative Data Ingestion", desc: "Collecting non-traditional behavioral and utility interaction records." },
        { title: "Proxy Feature Engineering", desc: "Deriving consistency ratios, volatility indices, and liquidity proxies." },
        { title: "Exploratory Correlation", desc: "Analyzing statistical relationships between behavioral proxies and default likelihood." },
        { title: "Risk Stratification", desc: "Grouping applicants into transparent, interpretable risk bands." }
      ],
      keyInsights: [
        "Payment consistency across non-financial utilities showed strong correlation with low default risk.",
        "Feature engineering reduced reliance on static demographic variables, improving fairness metrics across diverse groups."
      ],
      methodology: "Conducted statistical exploratory data analysis, formulated novel proxy features, and evaluated risk classification models to maximize interpretability for financial inclusion.",
      challenges: "Addressing missing values in sparse non-traditional datasets while ensuring model predictions remain transparent and ethically unbiased.",
      whatILearned: "Gained deep appreciation for ethical AI in FinTech, statistical feature construction, and designing financial models aimed at societal impact."
    }
  },
  {
    id: "diabetes-prediction",
    featured: false,
    title: "Diabetes Risk Prediction Model",
    subtitle: "Classification Analysis on Healthcare Parameters",
    category: "Machine Learning",
    badge: "Machine Learning",
    period: "2024",
    githubUrl: "https://github.com/Azhar0612",
    demoUrl: null,
    shortDescription: "A machine learning predictive application analyzing structured medical diagnostic features to assess diabetes risk probabilities using binary classification algorithms.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn"
    ],
    overview: {
      problem: "Early detection of diabetes risk factors can significantly improve patient outcomes, but healthcare providers require clear feature importance explanations.",
      objective: "Train, evaluate, and compare binary classification models (Logistic Regression, Random Forest) on diagnostic records while highlighting key biological risk drivers.",
      dataset: "Structured PIMA Indian Diabetes diagnostic dataset comprising Glucose levels, Blood Pressure, BMI, Insulin, Age, and outcome labels.",
      architectureSteps: [
        { title: "Data Profiling", desc: "Identifying physiological anomalies, zero-value outliers, and feature distributions." },
        { title: "Pre-processing & Scaling", desc: "Imputing physiologically invalid zeros with median values and applying StandardScaler." },
        { title: "Model Comparison", desc: "Training baseline algorithms and evaluating Precision, Recall, ROC-AUC, and F1-score." },
        { title: "Feature Importance Analysis", desc: "Visualizing Glucose, BMI, and Age as dominant diagnostic indicators." }
      ],
      keyInsights: [
        "Glucose concentration and BMI emerged as the top two predictive features for diabetes risk probability.",
        "Demonstrated the importance of evaluating recall over raw accuracy in medical diagnostic classification scenarios."
      ],
      methodology: "Applied exploratory distribution plotting, imputed invalid zero measurements with median clinical estimates, and evaluated cross-validated classifier pipelines.",
      challenges: "Handling physiologically unrealistic zero values in medical metrics without introducing synthetic data bias.",
      whatILearned: "Understood the critical trade-offs between precision and recall in healthcare data science and mastered robust baseline modeling techniques."
    }
  },
  {
    id: "student-performance-analysis",
    featured: false,
    title: "Student Academic Performance Analysis",
    subtitle: "Statistical Exploratory & Factor Analysis in R",
    category: "Data Analysis",
    badge: "Statistical Study",
    period: "2023",
    githubUrl: "https://github.com/Azhar0612",
    demoUrl: null,
    shortDescription: "An analytical study utilizing R programming and statistical hypothesis testing to investigate factors influencing academic achievement, study habits, and demographic influences.",
    technologies: [
      "R",
      "ggplot2",
      "dplyr",
      "Descriptive Statistics",
      "Hypothesis Testing"
    ],
    overview: {
      problem: "Educational institutions require data-backed insights to identify at-risk students early and optimize academic support interventions.",
      objective: "Analyze academic performance metrics to discover significant correlations between attendance, parental education level, study hours, and exam scores.",
      dataset: "Structured student evaluation dataset containing demographic factors, study hours, attendance rates, and multi-subject test scores.",
      architectureSteps: [
        { title: "R Ingestion & Cleansing", desc: "Wrangling student records using dplyr and tidyr." },
        { title: "Descriptive Profiling", desc: "Calculating mean, median, interquartile ranges, and variance across cohorts." },
        { title: "Visual Correlation Plots", desc: "Generating boxplots, scatter matrices, and distribution overlays with ggplot2." },
        { title: "Statistical Testing", desc: "Performing T-tests and ANOVA to validate performance variation hypotheses." }
      ],
      keyInsights: [
        "Study attendance demonstrated a stronger positive correlation with overall GPA than total raw study hours.",
        "Identified key score thresholds where academic intervention yields maximum performance improvement."
      ],
      methodology: "Leveraged R dataframes, constructed ggplot2 visualizations, and executed parametric statistical hypothesis tests to extract actionable educational takeaways.",
      challenges: "Synthesizing categorical qualitative survey responses alongside quantitative numerical test scores.",
      whatILearned: "Gained hands-on proficiency in R programming syntax, ggplot2 visual customization, and formal statistical hypothesis testing."
    }
  },
  {
    id: "restaurant-table-booking",
    featured: false,
    title: "Restaurant Table Booking System",
    subtitle: "Interactive Web Application & Reservation Workflow",
    category: "Web Development",
    badge: "Web Application",
    period: "2023",
    githubUrl: "https://github.com/Azhar0612",
    demoUrl: null,
    shortDescription: "A modern web application built to streamline dining reservations, featuring real-time table availability selection, customer validation, and booking summary workflows.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "DOM Manipulation"
    ],
    overview: {
      problem: "Small dining establishments often rely on manual phone calls, leading to double bookings and inefficient seating management.",
      objective: "Design an intuitive, responsive web portal where customers can check table slots, select party sizes, and receive instant booking confirmations.",
      dataset: "Relational JSON schema managing dining slots, table capacity rules, customer contact payloads, and booking timestamps.",
      architectureSteps: [
        { title: "UI Workflow Design", desc: "Designing responsive reservation forms and visual seating layout components." },
        { title: "Form Validation", desc: "Client-side validation checking date eligibility, party constraints, and contact details." },
        { title: "Slot Reservation Logic", desc: "Preventing conflicting reservation times via state tracking." }
      ],
      keyInsights: [
        "Simplified the booking workflow to 3 intuitive steps, reducing user drop-off during table selection.",
        "Demonstrated solid front-end interactivity principles applicable to web-based data input tools."
      ],
      methodology: "Built responsive layouts using HTML5 & custom CSS flexbox, using modular JavaScript to handle interactive state changes and DOM updates.",
      challenges: "Creating dynamic UI updates for instant table status feedback without full page reloads.",
      whatILearned: "Strengthened core front-end software engineering skills, state management, and user-centric workflow design."
    }
  },
  {
    id: "car-price-predictor",
    featured: false,
    title: "Automobile Valuation Predictor",
    subtitle: "Regression Modeling for Used Car Pricing",
    category: "Machine Learning",
    badge: "Regression ML",
    period: "2024",
    githubUrl: "https://github.com/Azhar0612",
    demoUrl: null,
    shortDescription: "A machine learning predictive application designed to estimate secondary market vehicle valuation based on mileage, age, brand reputation, fuel type, and engine capacity.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Linear Regression",
      "Random Forest Regressor"
    ],
    overview: {
      problem: "Used vehicle buyers and sellers lack objective valuation metrics, often relying on arbitrary price negotiations.",
      objective: "Build an automated regression model that evaluates vehicle attributes to output accurate market price estimates.",
      dataset: "Secondary automobile sales records including vehicle age, mileage driven, fuel category, seller type, transmission, and original price.",
      architectureSteps: [
        { title: "Data Preprocessing", desc: "Encoding categorical variables (One-Hot Encoding) and handling missing values." },
        { title: "Feature Transformation", desc: "Deriving vehicle age from manufacturing year and scaling continuous parameters." },
        { title: "Regression Training", desc: "Comparing Ridge Regression and Random Forest Regressor models." },
        { title: "Model Evaluation", desc: "Measuring Mean Absolute Error (MAE), RMSE, and R-squared performance." }
      ],
      keyInsights: [
        "Vehicle age and mileage accounted for over 70% of price variance in second-hand market listings.",
        "Random Forest Regressor outperformed linear models by effectively capturing non-linear depreciation curves."
      ],
      methodology: "Cleaned vehicle tabular data, converted categorical features into numeric formats, applied feature scaling, and optimized ensemble regressors.",
      challenges: "Handling extreme high-end vehicle outliers that distorted linear regression coefficient estimates.",
      whatILearned: "Mastered tabular data regression evaluation metrics, feature encoding strategies, and ensemble model tuning."
    }
  }
];
