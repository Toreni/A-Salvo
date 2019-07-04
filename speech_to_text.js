const fs = require('fs');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');

const speechToText = new SpeechToTextV1({
  iam_apikey: '3B7mnO73hvN1SaiOlT4lOZ8pZw0Y0RQmE40fQOrvckK5',
});


const recognizeParams = {
  audio: fs.createReadStream('C:\\Users\\Usuario\\Desktop\\Hackathon\\Bien.mp3'),
  content_type: 'audio/mp3',
  word_alternatives_threshold: 0.9,
  keywords: ['estoy','bien'],
  keywords_threshold: 0.5,
  model: "es-ES_BroadbandModel"
};

speechToText.recognize(recognizeParams)

  .then(speechRecognitionResults => {
    console.log(JSON.stringify(speechRecognitionResults, null, 2));

  })
  .catch(err => {
    console.log('error:', err);
  });
  
