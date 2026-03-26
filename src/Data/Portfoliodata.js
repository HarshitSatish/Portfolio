export const personalinfo = {
    name: "Harshit Satishkumar",
    title: "Graduate Student at Northeastern University",
    Course: "Master's in Data Science",
    Location: "Boston, Massachusetts",
    Role: [ "Data Analyst | Data Scientist | Machine Learning Engineer | ",
        "Business Analyst | Research Analyst | Business Development Consultant"
    ],
    About_Me: "I like to solve problems with data, whether I’m breaking down a messy dataset or turning insights into something people can actually use, I’m at my best when I’m connecting analytical thinking with real world impact. I first realised this during my time at Ipsos. I worked with large survey datasets, cleaning, validating and turning them into clear dashboards and research reports that helped clients make confident business decisions. That experience taught me how to take ambiguous questions, structure them analytically and communicate insights in a way people understand. In my M.S. program, I’ve been strengthening the technical side with tools like Python, SQL and machine learning workflows. I also built an interactive dashboard focused on public health insights, which helped me think more deeply about how to turn data into something intuitive and usable. At this stage, I’m looking to step into a role where I can apply my analytical foundation and turn insights into meaningful decisions. The opportunity to work on challenging problems and contribute to impactful work is something I’m genuinely excited about.",
    Personal_email: "harshitskumar02@gmail.com",
    Student_email: "Satishkumar.h@northeastern.edu",
    LinkedIn: "https://www.linkedin.com/in/harshit-satishkumar-1921631b2/",
    Github: "https://github.com/HarshitSatish",
}

export const skill_badge  = [
  "Python", "SQL", "R",
  "Pandas", "NumPy", "Scikit-learn",
  "TensorFlow", "PyTorch",
  "Tableau", "Power BI", "Excel",
  "AWS", "Git",
]
export const skills ={
    Programming_Languages: "Python, SQL, JavaScript, R, Java",
    Data_Visualization: "Tableau, Power BI, Matplotlib, Seaborn, plotpy, ggplot2",
    Machine_Learning_libraries: "Scikit-learn, TensorFlow, Keras, statsmodels",
    Webframe_and_Tools:"HTML/CSS/JavaScript, React, Nodejs, Flask, Streamlit, Selenium",
    Analysis_Techniques: "A/B testing, Hypothesis testing, Statistical modelling, Feature engineering, Market Analytics",
    AWS: "Lambda, S3, EC2, RDS",
    Data_Manipulation: "Pandas, NumPy, Excel",
    Databases: "MySQL, PostgreSQL, MongoDB",
    Tools: "Git, Jupyter Notebooks, VS Code"
}

export const school = [
    {
        School: "Northeastern University",
        Level: "Master's Degree",
        Major: "Data Science",
        year: "September 2025 - May 2027"
    },
    {
        School: "Vellore Institute of Technology",
        Level: "Bachelor's Degree",
        Major: "Computer Science and Engineering",
        year: "August 2020 - May 2024"
    },
]

export const experience_1 = [
    {
        Company: "Strategic Consulting Group, Ipsos",
        Position: "Research Analyst - S3",
        Duration: "December 2024 - August 2025",
        Responsibilities: [
            "Extracted and integrated large scale survey data, spreadsheets and syndicated data collection of 100,000+ data points using SQL joins and aggregations for data analysis of buyer behavior, revenue growth and market demand across B2B and B2B2C segments.",
            "Reduced analysis time by 30% by building data pipelines to store and retrieve cleaned datasets, streamlining the cleaning, validation and transformation of raw data using Python and advanced Excel functions, resulting in more reliable stakeholder segmentation, demand forecasting and performance measurement supported by documenting of data source and its transformation.",
            "Reduced reporting time by 15% by building dynamic Excel charts, reports and tableau dashboard for KPI trackers to monitor revenue performance, client acquisition trends and user engagement metrics, eliminating ad hoc analysis and enabling faster data driven decisions.",
            "Identified key market insights on competitive positioning and pricing dynamics by conducting primary and secondary market research across multi channel ecosystems which directly influenced product decisions and go-to-market planning",
            "Partnered with senior analysts to identify analytical opportunities and translate complex datasets into business intelligence reports and strategic recommendations, influencing senior leadership decisions on pricing, product positioning and channel growth strategies."
        ]
    },
    {
        Company: "SmartInternz",
        Position: "Project Intern - Data Science",
        Duration: "May 2023 - July 2023",
        Responsibilities: [
            "Conducted data cleaning, preprocessing and exploratory data analysis (EDA) on structured datasets to find correlation and feature relationships using statistical and feature engineering methods, applying analytical thinking to extract predictors to support model development.",
            "Designed and developed ensemble learning models achieving (Random Forest) 95% predictive accuracy on validation data by performing model training, hyperparameter tuning and performance evaluations through scikit learn libraries.",
            "Designed experimentation dashboards to analyze model predictions and support hypothesis testing, enabling stakeholders to evaluate predictive performance and guide data-driven decisions."
        ]
    }
]


export const recommendation = [
    {
        Name: "Pradeep Kumar",
        Position: "Engagement Manager at Ipsos",
        recommendation : "I had the pleasure of collaborating with Harshit as a key contributor on our team at Ipsos. His exceptional problem-solving skills and positive energy drove our team’s success, including streamlining workflows that improved efficiency.Harshit is a reliable team player with strong communication skills, always stepping up to deliver results under tight deadlines. I wholeheartedly recommend him for any analytical or collaborative role. He will be an asset to any organization."
    },
    {
    Name: "Jonathan Solomon N",
    Position: "Associate Consultant at Ipsos",
    recommendation : [
        "I had the opportunity to manage Harshit, and he was a valuable member of our team. He was highly supportive in conducting secondary research and demonstrated strong capability in managing large datasets with accuracy and efficiency.",
        "Harshit excelled in data cleaning and analysis, where he effectively leveraged tools such as Python to automate workflows, perform data analysis, create meaningful data visualizations, and contribute to clear, well-structured reports. His technical skills, combined with a methodical approach, consistently added value to our work.",
        "Beyond his technical abilities, Harshit stood out for his dedication, hard work, and genuine curiosity to learn and improve. He took ownership of his responsibilities and approached every task with commitment and professionalism.",
        "I wish Harshit all the very best in his future endeavours and am confident he will continue to do great work wherever he goes."
    ]
}
]

export const aboutSentences = [
  { label: "Problem solver", text: "I like to solve problems with data, whether I'm breaking down a messy dataset or turning insights into something people can actually use." },
  { label: "Real world impact", text: "Applied Python, SQL and Excel to break down ambiguous questions and messy real world data, driving data backed decisions that directly influenced product positioning and revenue growth strategies." },
{ label: "Past experience", text: "Managed 100,000+ data points across B2B and B2B2C segments, building data pipelines that reduced analysis time by 30% and reporting time by 15%." },
{ label: "Analytical communicator", text: "Structured ambiguous business questions into analytical frameworks using data storytelling techniques, translating complex datasets into clear insights that influenced senior leadership decisions." },
  { label: "MS program", text: "In my M.S. program, I've been strengthening the technical side with tools like Python, SQL and machine learning workflows." },
  { label: "Dashboard builder", text: "Built interactive Tableau and Excel dashboards to monitor KPIs across monitor revenue performance and market growth trends, reducing reporting time by 15% and enabling faster data driven decisions." },
  { label: "Next step", text: "I'm looking to step into a role where I can apply my analytical foundation and turn insights into meaningful decisions." }
]


export const projects = [
  {
    Title: "Flight Price Prediction",
    Description: "Built a machine learning regression model using Scikit-Learn and Pandas to predict flight prices based on user input, achieving R² of 0.857 and MAE of 670.77.",
    Tools: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Statsmodels"],
    Metrics: ["R² = 0.857", "MAE = 670.77"],
    Github: "https://github.com/HarshitSatish/Flight_Price_Prediction",
    Demo: null
  },
  {
    Title: "Hand Sign Detection for Video Chat",
    Description: "Developed a real-time hand sign detection system using OpenCV and Mediapipe to help speech-impaired users communicate through video chat, achieving 92% accuracy without needing a translator.",
    Tools: ["Python", "OpenCV", "Mediapipe"],
    Metrics: ["Accuracy = 92%"],
    Github: "https://github.com/HarshitSatish/Hand-Sign-Detection",
    Demo: null
  },
  {
    Title: "Redbus Data Engineering",
    Description: "Built an end-to-end data engineering pipeline using Selenium to scrape Redbus website data, stored results in MySQL and visualised the processed data through a Streamlit dashboard.",
    Tools: ["Python", "Selenium", "MySQL", "Streamlit"],
    Metrics: ["End-to-end pipeline", "SQL to Streamlit"],
    Github: "https://github.com/HarshitSatish/Redbus_data_engineering",
    Demo: null
  },
  {
    Title: "Illuminating Insights for Global Electronics",
    Description: "Wrote 12 SQL queries using joins, aggregations, subqueries and window functions on a global electronics dataset to uncover insights on sales performance, customer demographics and profit margins.",
    Tools: ["Excel", "SQL", "Tableau"],
    Metrics: ["12 business queries", "Top/bottom 10 products", "Total profit margin"],
    Github: "https://github.com/HarshitSatish/Illuminating-Insights-for-Global-Electronics",
    Demo: null
  },
  {
    Title: "Used Car Price Prediction",
    Description: "Built a Streamlit application using the CarDheko dataset to predict used car prices in real time, applying hypothesis testing, feature engineering, scaling and encoding to convert unstructured data into a full ML pipeline.",
    Tools: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "Hypothesis Testing", "Feature Engineering"],
    Metrics: ["Real-time predictions", "Full ML pipeline"],
    Github: "https://github.com/HarshitSatish/Car_price_prediction",
    Demo: null
  }
]

export const publications = [
  {
    Title: "Examination of Man-in-the-Middle Attacks and their impact on cybersecurity",
    Publisher: "Springer",
    Date: "February 16, 2025",
    Description: "International Conference on 6G Communications Networking and Signal Processing (SGCNSP)",
    Link: "https://link.springer.com/chapter/10.1007/978-981-97-7876-8_25"
  },
  {
    Title: "Checking the Truthfulness of News Channels using NLP Techniques",
    Publisher: "IEEE",
    Date: "February 21, 2024",
    Description: "Accumulated data from three news channels, performed data cleaning and EDA to unearth patterns. Applied sentiment analysis, topic modeling and visualization to provide insights on sentiment levels across various news sources.",
    Link: "https://ieeexplore.ieee.org/document/10435241"
  }
]