from flask import Flask, jsonify
from bardapi import Bard
import os, json
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/request", methods=["GET"])
def result():
    os.environ['_BARD_API_KEY']=os.getenv("KEY")

    answer = Bard().get_answer('I want 3 questions on the topic of menstruation diseases, it should ask the question based on the symptoms and there should be four answer options, where one is correct. Answer in JSON format similar to this: { topic: "Menstrual-Cycle", question: "Question 1?", answerOptions: [ { answerText: "Answer 1", isCorrect: true, _id: "6497122d8b7852503441b051"}, { answerText: "Answer 2", isCorrect: false, _id: "6497122d8b7852503441b052"}, { answerText: "Answer 3", isCorrect: false, _id: "6497122d8b7852503441b053"}, { answerText: "Answer 1", isCorrect: false, _id: "6497122d8b7852503441b054"} ], _id: "6497122d8b7852503441b050", __v: 0 }];')['content']
    text = 'some string... this part will be removed.'
    head, sep, tail = answer.partition("json")
    head2, sep2, tail2 = tail.partition("```")

    json_object = json.loads(head2)

    return jsonify(json_object), 200


if __name__ == '__main__':
    app.run(debug=True)