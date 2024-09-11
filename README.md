# Data Ingestion, Visualization, and React Integration with Cube.js

## Overview

This project demonstrates the complete pipeline of ingesting data from a CSV source into a PostgreSQL database, using Cube.js for data modeling and visualization, and integrating Cube.js charts into a React frontend. The charts provide various insights based on the data ingested, including line charts, bar charts, and pie charts.

## Project Structure

The project is divided into three main components:

1. **PostgreSQL Database Setup**: A PostgreSQL database with a mock schema is created, and sample data is ingested.
2. **Cube.js Integration**: Cube.js is set up to model the data and generate charts.
3. **React Frontend**: A React app displays Cube.js-generated charts and includes additional features like navigation, filters, and a dashboard view.

## Features

- Data ingestion into PostgreSQL.
- Cube.js configuration for data modeling and visualization.
- React app to display different charts:
  - Line chart for value trends over time.
  - Bar chart for value distribution across names.
  - Pie chart for value percentage distribution.
- Filters for chart views (e.g., by date range or name).
- Dashboard with multiple chart views.
- Navigation between charts using React Router.
- Loading states and error handling for data fetching.

## Prerequisites

Make sure the following software is installed:

- **Node.js**: [Download here](https://nodejs.org/en/)
- **PostgreSQL**: [Download here](https://www.postgresql.org/download/)
- **Cube.js CLI**: [Documentation here](https://cube.dev/docs/)

## Setup Guide

### 1. Set Up PostgreSQL

1. Install PostgreSQL on your machine and start the service.
2. Create a new database for this project:
   ```bash
   createdb data_ingestion_db
   ```
3. Create a mock table schema:
   ```sql
   CREATE TABLE data_table (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255),
       value NUMERIC,
       timestamp TIMESTAMP
   );
   ```
4. Populate the table with sample data by either manually inserting rows or using a CSV ingestion script (provided in `scripts/`).

### 2. Set Up Cube.js

1. Install Cube.js CLI globally:
   ```bash
   npm install -g cubejs-cli
   ```
2. Create a new Cube.js project:
   ```bash
   cubejs create cubejs-server -d postgres
   ```
3. Configure Cube.js to connect to your PostgreSQL database:
   - Update the `.env` file with the PostgreSQL credentials:
     ```env
     CUBEJS_DB_TYPE=postgres
     CUBEJS_DB_NAME=data_ingestion_db
     CUBEJS_DB_HOST=localhost
     CUBEJS_DB_PORT=5432
     CUBEJS_DB_USER=your_username
     CUBEJS_DB_PASS=your_password
     ```
4. Define the data schema in Cube.js using the `cube.js` files to model the `data_table`:
   - Add a cube for the `data_table`, defining the dimensions and measures for each chart (line, bar, pie).
5. Start the Cube.js development server:
   ```bash
   npm run dev
   ```

### 3. Set Up React Application

1. Create a new React application:
   ```bash
   npx create-react-app react-charts-app
   ```
2. Install Cube.js client dependencies:
   ```bash
   npm install @cubejs-client/core @cubejs-client/react chart.js react-chartjs-2
   ```
3. Create components for each chart (Line, Bar, Pie), connecting them to Cube.js data:
   - Use the `@cubejs-client/react` hooks to fetch data and render charts.
4. Implement React Router for navigation between chart views.
5. Add a navbar for easy navigation between the different charts.
6. Optionally, add filter components for filtering data by date range or name.

### 4. Run the Application

1. Start the React development server:

   ```bash
   npm start
   ```

2. Access the application at `http://localhost:3000/` to view the charts and navigate between different views.
