# Project-3

![Logo](Images/Cost.jpeg)

https://kass173.github.io/project-3/

## Project Group: Cheila, Kassem, Amar, Lionel, Safo  

## Team Workloads

Cheila - Data cleaning - Python, Database.  
Amar - Data Clean & Front End Dev  
Kass - Front End Dev, Readme & Proposal  
Lionel - Database Dev, (SQL, Mongo DB)  
Safo - 

### Dataset

[Cost Of Living data 2022](Resources/Cost_of_Living_2022.csv)  
[Cost Of Living data 2021](Resources/Cost_of_Living_2021.csv).  
[Cost Of Living data 2020](Resources/Cost_of_Living_2020.csv).  

## Intro

Our topic is to analyse the cost of living trends in 2022. The rationale behind this is as we are all currently living in the difficult times 
bought on by the cost of living crisis which is effecting all of us in the group.
So we all had a personal motivation to look at this subject, but wanted to see the effects on a more grander scale. 
We will create a webpage dashboard that allows you to look at 4 levels of data related to heat map looking at the cost of living data, 2 visuals
looking at the cheapest and most expensive places to live and lastly, a visual looking at house prices and rent for our selected locations.


## Database

This project uses the [Cost of Living Index](https://www.kaggle.com/datasets/ankanhore545/cost-of-living-index-2022) database, which brings key information about the cost of living indices by major cities in the world.

These indices are relative to New York City (NYC). Which means that for New York City, each index should be 100(%). If another city has, for example, rent index of 120, it means that on an average in that city rents are 20% more expensive than in New York City. If a city has rent index of 70, that means on average rent in that city is 30% less expensive than in New York City.

Out of several infomation available in this database, the following key information were used as part of this project:
 * `Country`: Country name for a given cost of living information.
 * `Cost of Living Index`: a relative indicator of consumer goods prices, including groceries, restaurants, transportation and utilities. Cost of Living Index does not include accommodation expenses such as rent or mortgage. If a city has a Cost of Living Index of 120, it means Numbeo has estimated it is 20% more expensive than New York (excluding rent).
 * `Rent Index`: estimation of prices of renting apartments in the city compared to New York City. If Rent index is 80, Numbeo has estimated that price of rents in that city is on average 20% less than the price in New York.
 * `Cost of Living Plus Rent Index`: estimation of consumer goods prices including rent comparing to New York City.
 * `Local Purchasing Power Index`: shows relative purchasing power in buying goods and services in a given city for the average net salary in that city. If domestic purchasing power is 40, this means that the inhabitants of that city with an average salary can afford to buy on an average 60%  less goods and services than New York City residents with an average salary.

This project considered the use of 3 different databases (CSV files), covering the data from the year of **2020**, **2021** and **2022**. The details about these databases are available below:
 * [Cost of Living database 2020](https://www.kaggle.com/datasets/andradaolteanu/2020-cost-of-living)
 * [Cost of Living database 2021](https://www.kaggle.com/datasets/ryanbbrown/cost-of-living-index-by-country-numbeo-2021)
 * [Cost of Living database 2022](https://www.kaggle.com/datasets/ankanhore545/cost-of-living-index-2022)


## ETL - Extract, Transform and Load Process

Considering the complexity of different databases, and in order to bring only the relevant data to be analysed, this project implements an **ETL process**, which was implemented using Jypyter notepad and **Pandas DataFrame**. These processes are described below:
![ETL: Extract - Transform - Load](/Images/ETL.png)

### Extract

Firstly, this process extracst the data from the CSV files using Pandas DataFrame. In the extraction phase, the unwanted columns were removed.

### Transformation

In the Transformation Phase, some columns were added to the DataFrame:
 * `Year`: This information brings the reference to the year of the correspondent database.
 * `lat`: Latitude of a given Country Name
 * `lng`: Longitude of a given Country Name

The columns `lat` and `lng` were populated using API calls to the GoogleMaps API service, and bring important information for the visualisation in a map.

The figure below brings the the view of the Pandas DataFrame and the clean data ready to be loaded into the database.
![Pandas DataFrame](/Images/Pandas_DataFrame.png)


### Load

The last phase of the ETL process to save the data in a proper database, so it can be easily loaded by another application to proceed with further analysis on the data.

This process has prepared CSV files wih clean data, which are available in the `/Resources/Clean_Data/` folder of this repository.

Finally, and very important, a **SQLite database** was created (`/Resources/cost_of_living.sqlite`), and the consolidated data loaded into the table `cost_of_living`.


## Front End

![Front](/Images/front end.png)

For the front end we based our web based dashboard on our final wire frame. 

https://github.com/kass173/project-3/blob/main/Wireframes/Final%20Wireframe%20of%20Project%203.png

### 1. HTML Pages
Firstly, we built the html webpage that our visual dashboard would sit on the main piece of work here was to create our drop down list as opposed to the 
easier route of creating seperate pages for our visuals to sit on.  
As well as the course links for our visualisations.

### 2. SQL Database & app.py
Secondly, we create our script to connect our databased to the html and defined the routes for the data by creating and "app.route". And defined the data
we wanted to select from our database table and connect and injected into our webpage. Now that this was done we could focus on creating our visuals.

### 3. Java Script
Lastly, we used Javascript to produce our visualisations for our webpage dashboard. We were required to create a minimum of 3 unique views to present our
data we met this by creating 4 visuals in 3 differant unique ways. We created a heatmap to show the cost of living index across the world, we then
created 2 bar charts for the top 10 most expensive and cheapest places to live based on cost of living and then we looked just at the rent index and
focused on the most expensive places to live just based on rent.   

The dashboard is multiple user-driven interactions (such as by using dropdowns menu, a hover function to show intrinsic data and a x feature) which is
included all on a single webpage dashbaord.  
The final page displays visualizations in a clear, digestable manner and is clearly displayed with no to many data lables to focus on and the data story
is easy to interpret for users of all levels.

## Back End

Data and Delivery (20 points)
1.Data components used in the project are clearly documented. (5 points).  
2.The dataset contains at least 100 unique records. (5 points).  
3. A database is used to house the data (SQL, MongoDB, SQLite, etc.). (5 points).  
4. The project is powered by a Python Flask API and includes HTML/CSS, JavaScript, and the chosen database. (5 points).  

Back End (20 points)
1. The page created to showcase data visualizations runs without error. (5 points).  
2. A JavaScript library not shown in class is used in the project. (5 points).  
3. The project conforms to one of the following designs: (10 points)
A Leaflet or Plotly chart built from data gathered through web scraping.
A dashboard page with multiple charts that all reference the same data.




