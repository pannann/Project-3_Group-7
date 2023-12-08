from flask import Flask, render_template, redirect, jsonify
import requests, psycopg2
from flask_cors import CORS


# Save reference to the table
app = Flask(__name__, static_url_path='/static', static_folder='static')
CORS(app)

# database connection 

def connect_to_database():
    try:
        conn = psycopg2.connect(host= 'localhost',
    user =  'postgres',
    password=  'postgres',
    dbname = "outbreaks_db",
    port =  5432
    )
        return conn
    except Exception as error:
        print(f"Error: Unable to connect to the dataBase - {str(error)}")
        raise ConnectionError(f"Error: Unable to connect to the Database - {str(error)}")

@app.route('/api/outbreaks', methods=['GET'])
def get_data():
    connection = connect_to_database()

    if connection:
        try:
            query = "SELECT * FROM outbreaks;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()

    return jsonify({'error': 'Unable to connect to the DataBase'})

@app.route('/api/cleaned_outbreaks_with_coords', methods=['GET'])
def get_data_cleaned_outbreaks_with_coords():
    connection = connect_to_database()

    if connection:
        try:
            query = "SELECT * FROM cleaned_outbreaks_with_coords;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()

    return jsonify({'error': 'Unable to connect to the DataBase'})

@app.route('/api/outbreaks_by_year_season', methods=['GET'])

def get_data_outbreaks_by_year_season():
    connection = connect_to_database()

    if connection:
        try:
            query = "SELECT * FROM outbreaks_by_year_season;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()

    return jsonify({'error': 'Unable to connect to the DataBase'})

@app.route('/api/outbreak_setting_by_year', methods=['GET'])
def get_data_outbreak_setting_by_year():
    connection = connect_to_database()

    if connection:
        try:
        
            query = "SELECT * FROM outbreak_setting_by_year;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()

    return jsonify({'error': 'Unable to connect to the DataBase'})

@app.route('/api/outbreak_setting_all_years', methods=['GET'])
def get_data_outbreak_setting_all_years():
    connection = connect_to_database()

    if connection:
        try:
            query = "SELECT * FROM outbreak_setting_all_years;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()

    return jsonify({'error': 'Unable to connect to the DataBase'})

@app.route('/api/top_10_outbreak_duration', methods=['GET'])
def get_data_top_10_outbreak_duration():
    connection = connect_to_database()

    if connection:
        try:
            query = "SELECT * FROM top_10_outbreak_duration;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()

    return jsonify({'error': 'Unable to connect to the DataBase'})

@app.route('/api/bottom_10_outbreak_duration', methods=['GET'])
def get_data_bottom_10_outbreak_duration():
    connection = connect_to_database()

    if connection:
        try:
            query = "SELECT * FROM bottom_10_outbreak_duration;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()

    return jsonify({'error': 'Unable to connect to the DataBase'})

@app.route('/api/outbreaks_by_year', methods=['GET'])
def get_data_outbreaks_by_year():
    connection = connect_to_database()

    if connection:
        try:
            query = "SELECT * FROM outbreaks_by_year;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()

    return jsonify({'error': 'Unable to connect to the DataBase'})

@app.route('/api/outbreaks_by_year_type', methods=['GET'])

def get_data_outbreaks_by_year_type():
    connection = connect_to_database()

    if connection:
        try:
            query = "SELECT * FROM outbreaks_by_year_type;"
            cursor = connection.cursor()
            cursor.execute(query)

            # Fetch all rows
            data = cursor.fetchall()

            return jsonify(data)

        except Exception as error:
            print(f"Error: Unable to fetch data from the database - {str(error)}")
            raise 
        finally:
            
            connection.close()
    return jsonify({'error': 'Unable to connect to the DataBase'})

    

# Create home, about, dashboard routes
@app.route('/')
def home():
    return render_template('home.html')

# About page
@app.route('/about')
def about():
    return render_template('about.html')

# Dashboard page
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')
    
    
    

# Analysis page
@app.route('/analysis')
def analysis():
    return render_template('analysis.html')
if __name__ == '__main__':
    app.run(debug=True)

