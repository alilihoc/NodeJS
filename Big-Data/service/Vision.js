const request = require('request');

class Vision {
  test(imageUrl, callback) {
    // Replace <Subscription Key> with your valid subscription key.
    const subscriptionKey = '9f1b86ccb7ed459bb2a101031b4219cf';

    // You must use the same location in your REST call as you used to get your
    // subscription keys. For example, if you got your subscription keys from
    // westus, replace "westcentralus" in the URL below with "westus".
    const uriBase =
        'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';


    // Request parameters.
    const params = {
        'visualFeatures': 'Categories,Description,Color',
        'details': '',
        'language': 'en'
    };

    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
        }
    };

    request.post(options, (error, response, body) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
      console.log('JSON Response\n');
      console.log(jsonResponse);
      callback(jsonResponse)
    });
  }
}

module.exports = new Vision();
