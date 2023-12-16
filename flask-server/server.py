from flask import Flask, request, jsonify
from flask_cors import CORS
import autokeras as ak
import tensorflow
from tensorflow import keras
import numpy as np
import pandas as pd

app=Flask(__name__)
CORS(app)


# маршрут API для предсказания
@app.route('/predictions', methods=['POST','GET'])
def predictions():
 data = request.get_json()
#  print('питон', (data))
 X_data=np.array(data['data'])

 pr_data = pd.DataFrame(X_data.reshape(1,14))

 model_loaded = keras.models.load_model('model')

 predicted_y = model_loaded.predict(pr_data)
#  print(jsonify({'answer':int(np.argmax(predicted_y)) }))
 return {'answer':pred[np.argmax(predicted_y)] }

pred =['0', 'Дурвалумаб с уверенностью 100%.  ',
       'Наблюдение с уверенностью 75%. \n Дурвалумаб.</i>\n ',
       'Дурвалумаб с уверенностью 75%. \n ',
       'Наблюдение с уверенностью 100%. \n ',
       'Осимертиниб с уверенностью 75%. \n Наблюдение.\n ',
       'Осимертиниб с уверенностью 50%. \n Наблюдение.\n ',
       'Наблюдение с уверенностью 50%. \n Осимертиниб.\n ',
       'Наблюдение с уверенностью 75%. \n Осимертиниб.\n ',
       'Алектиниб с уверенностью 50%. \n Дурвалумаб.\n ',
       'Дурвалумаб с уверенностью 75%. \n Наблюдение.\n ',
       'Наблюдение с уверенностью 75%. \n ',
       'Алектиниб с уверенностью 50%. \n Наблюдение.\n ',
       'Наблюдение с уверенностью 50%. \n Дурвалумаб.\n ',
       'Дурвалумаб с уверенностью 50%. \n Алектиниб.\n ',
       'Дурвалумаб с уверенностью 50%. \n Наблюдение.\n ',
       'Наблюдение с уверенностью 75%. \n Алектиниб.\n ']


if __name__=="__main__":
    app.run(debug=True, port=8080)