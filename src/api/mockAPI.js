import mockResponse from './event_data';

export default () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(mockResponse)
    }, Math.random() * 1000)
  });
};