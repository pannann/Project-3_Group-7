# Project Proposal

Outbreaks in Toronto Healthcare Institutions

Dataset: https://open.toronto.ca/dataset/outbreaks-in-toronto-healthcare-institutions/ 

API: https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/#autocomplete 

## Audience

This project is geared towards the general public to provide them with high-level insights into healthcare institutions in Toronto.

## Questions we want to answer

1. Which type of institution had the most outbreaks over the time period?
2. Can we identify any trends in outbreaks by season?
3. Can we identify trends in outbreaks over the entire time period?
4. Which institutions have the longest and shortest average outbreak duration?

## Visualizations
1. Map of currently active outbreaks and past outbreaks - Fanny/Olufemi/Ahmed whoever is done with their other one first
- "Heatmap" markers (different colours for total number of outbreaks over the period or for type of outbreaks)
- Marker size based on length of outbreak?
- Show for all years by default but include a drop-down for the user to select one or many year(s)
- Clicking on the marker would show info about the outbreak including: Institution name and address, type of outbreak, date it started and duration (for past outbreaks)

2. Graphing time series by season *not predictive*
- Line chart or bar chart plotting total outbreaks by season
- Drop-down to select years

3. Outbreaks by outbreak setting (institution type: LTCH, hospital, retirement home, etc.)
- Get the sum of outbreaks by institution type and plot in a bar chart
- Show for all years by default but include a drop-down OR the ability to filter (not sure how) for the user to select one or many year(s)
- Hovering over a bar could show the institution type, total outbreaks, and most common causative agent

4. Average outbreak length by institution
- Show which institutions have the shortest/longest outbreak length

5. Outbreaks by year
- Line chart plotting the sum of outbreaks by year
- Drop-down to select years and to select type of outbreak (respiratory vs enteric)

## Tasks

ETL + database
Flask API
CSS
Visualizations

