import os

from flask import Flask, render_template, flash, request, redirect
from werkzeug.utils import secure_filename
from helpers import apology
from csv import DictReader
from json import dumps

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'csv'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def make_json(file="uploads/working.csv"):
  print("in making json")
  with open(file, newline='\n') as csvfile:
    reader = DictReader(csvfile)
    keys = reader.fieldnames
    data_list = []
    # Iterate through each row and append in above list
    for row in reader:
        dic = {}
        for key in keys:
            dic[key] = row[key].replace(u'\xa0',u' ')
        data_list.append(dic)
  data_list = {'results': data_list} # Converting to required object
  j = dumps(data_list)

  # Write to file
  print("writing to json file")
  with open('static/marks.js', 'w') as f:
    f.write('data = ')
    f.write(j)

@app.route("/")
def home():
  return render_template("index.html")

@app.route("/marks", methods=["GET", "POST"])
def marks():
  """Takes the file and the Year details and uses a Year 3 or 5 template to create the results sheet for all kids in the file in order. """
  if request.method == "POST":
    print("form",request.form)
    print("files", request.files)
    # check if the post request has the file part
    if 'file' not in request.files:
      flash('No file part')
      return redirect(request.url)
    file = request.files['file']
    # if user does not select file, browser also
    # submit an empty part without filename
    if file.filename == '':
      flash('No selected file')
      return redirect(request.url)
    if file and allowed_file(file.filename):
      #this is really dumb because multiple people could use this at the same time and I would be overwriting
      filename = "working.csv"
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      make_json(file="uploads/working.csv")
      if request.form.get("year") == "Year3":
        return redirect("/year3")
      if request.form.get("year") == "Year5":
        return redirect("/year5")

  else:
    return apology("Server error")

@app.route("/year3")
def year3():
  return redirect("static/reportsYr3.html")
@app.route("/year5")
def year5():
  return redirect("static/reportsYr5.html")


if __name__ == "__main__":
  app.run(host='0.0.0.0', port=8080, debug=True)