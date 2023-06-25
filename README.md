# Quterus - Interactive/AI Quiz about the Uteraus!
### Created for the TechTogether Hackathon by MLH
### Team Members: Kira Sidhu, Trang Tran
## Project Description:
Conversations about the uterus are hard and awkward, many women go unaware of the many health issues that can persist from the uterus. Although PCOS and Endometriosis affect over 30% of the population, it often takes years into adulthood for women to get checked out for symptoms, often bearing them because they believe it is their "normal", not to mention many of these health risks women face are underresearched and underfunded. That's why we decided to create this fun, itneractive website that help women learn more about their uterus, with our fun character called Utera! Utera asks you questions on different health issues specific to the uterus, she is even integrated with AI! We hope that to provide a safe and informative space where everyone across all ages can learn, explore, and raise awareness about this essential topic.

## The Tech: Languages, Framework, Libraries....
Frontend
- JSX
- React
- React Router
- Axios

Backend
- Javascript
- Nodejs
- MongoDB
- Expressjs
- Docker

Bard AI Script
- Python
- Flask
- Various Python libraries for Google Bard
- Multi-processing

Deployment
- Render
- Google Cloud
- Customed Domain with Github Pages

### Things we Learned and Challenges We Faced:
Kira: This was both of our first hackathon and our first project incorporating full-stack development. On the Frontend, I learned more on using react-router to load different pages from on file. I had issues with API asynchronous issues, but was able to use axios libaries to work around it. Creating the Qutera AI with the Bard AI Script was the hardest challenge for me, I originally intended to use ChatGPT's API that has a lot of integrations, but decided not to since it was expensive to use. Bard doesn't have any inbuilt API integrations, I found a python library that was able to return Bard's answers in the form of a large string, and then played around with prompts to populate an question/answer dict. I then had to hack my way through this huge string to turn it into a viable JSON library to eventually create my own Bard API from.

Trang: This is our first hackathon and full-stack development experience; needless to say we both faced a lot of challenges but the knowledge and new skills learned are invaluable. My main responsibility is building the API for the backend and deployment using Google Cloud Storage, Google Cloud Run, and a customed domain. I used Nodejs, Expressjs, and incorporating MongoDB, all of which are new skills to me. Figuring out the complex infrastructure of Google Cloud and how different services work are by far the most challenging tasks. I learned how to integrate a customed domain on Google Cloud Storage and using Google Cloud Run to deploy a shared MongoDB cluster with Docker, which has been very intellectually stimulating and I learned a lot from this. I have currently been able configured the customed domain to Google Cloud Storage and established Docker with gcloud CLI. My current challenges are to host a interactive react web page and push docker images to Google Cloud services.

### Future Features
Frontend
- Create more quizzes on more topics related to women's health, with more specific choices/parameters for users
- Show when quizzes are completed on some sort of dashboard, with scores from all quizzes
- Add more animation and interactions with Qutera
Qutera AI
- Create a more robust API from Google's Bard or create my own AI through machine learning, parsing wikepedia pages and building my own JSON dict's based on key words and NLP
- Create more robust integrations from the website, incorporating user questions into a chatbot functionality, learning from those questions to create more quiz data
Deployment
- Backend API: host as a serverless API on Google Cloud
- Host the React front end on Google Cloud Storage

## Usage and Credits
For the Bard script, if using please install the dependencies inside a virtual environment
