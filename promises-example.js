// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Asuncion',function (err, temp) {
//   if(err){
//     console.log('error', err)
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function () {
//       if(location){
//         resolve(79);
//       } else {
//         reject('No city');
//       }
//     },1000);
//
//   });
// }
//
// getTempPromise('asfafa').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise fail', err);
// });

function addPromise(a,b){
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else{
      reject('wrong input');
    }
  })
}

addPromise(3,4).then(function (result) {
  console.log(result);
}, function (err) {
  console.log(err);
});
