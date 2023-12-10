# Toronto Healthcare Outbreak Tracker

This repository contains our work for the third project of the UofT SCS edX Data Bootcamp.

Team members: Fanny Sigouin, Ahmed Elpannann, Olufemi Olarewaju, Vinay Vattipally

## Project Goal

For this project, we were tasked with creating an interactive dashboard to represent a dataset of our choosing. Our team chose to build a tracker for healthcare outbreaks in the city of Toronto.

### Audience

This dashboard is geared towards the general public, with the goal of providing them with high-level insights into outbreaks in Toronto’s healthcare institutions over the last 7 years.

### Questions

We sought to answer the following questions with this interactive dashboard:
- Which type of institution had the most outbreaks over the time period?
- Can we identify any trends in outbreaks by season?
- Can we identify trends in outbreaks over the entire time period?
- Which institutions have the longest and shortest average outbreak duration?


## Data Collection

Data was retrieved from Toronto Open Data's [Outbreaks in Toronto Healthcare Institutions](https://open.toronto.ca/dataset/outbreaks-in-toronto-healthcare-institutions/) dataset. The [Address Autocomplete API](https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/#autocomplete) from Geoapify was also used to obtain the coordinates for each institution in the dataset.

## Data Cleaning and Database Creation

After retrieving the data from CSV files and from the Geoapify API, the data was cleaned using python and Pandas. With python and the psycopg2 module, a PostgreSQL database was created to house the clean data.

## Flask API

A Flask API was built with routes allowing us to retrieve the jsonified data from the database, as well as with routes allowing users to navigate between the Home, About, and Dashboard pages.

## Interactive Dashboard

The map and charts in the dashboard were created using Javascript, Plotly, and Leaflet. Users can interact with the dashboard by toggling layers in the map and by selecting years in a drop-down field, allowing them to view the data for their preferred time period.