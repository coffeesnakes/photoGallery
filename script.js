// import http from 'k6/http';
// import { sleep } from 'k6';

// export const options = {
//   stages: [
//     { duration: '1m', target: 100 }, // below normal load
//     { duration: '2m', target: 100 },
//     { duration: '1m', target: 200 }, // normal load
//     { duration: '4m', target: 200 },
//     { duration: '2m', target: 300 }, // around the breaking point
//     { duration: '2m', target: 300 },
//     { duration: '2m', target: 400 }, // beyond the breaking point
//     { duration: '5m', target: 400 },
//     { duration: '1m', target: 0 }, // scale down. Recovery stage.
//   ],
// };

// export default function () {
//   let BASE_URL = `http://localhost:3003/api/homes/${
//     Math.floor(Math.random() * 999999) + 1
//   }`; // make sure this is not production

//   let responses = http.batch([
//     [
//       'GET",
//       BASE_URL,
//       null,
//       { tags: { name: "getHOMESURL" } },
//     ],

//   ]);

//   sleep(1);
// }

import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export const options = {
  stages: [
    { duration: '60s', target: 100 }, //below normal
    { duration: '20s', target: 400 },
    { duration: '1m', target: 600 },  //normal load
    { duration: '2m', target: 1200 }, //apporaching breaking point?
    { duration: '2m', target: 1500 },
    { duration: '1m', target: 1500 }, // should explode here..
    { duration: '40s', target: 1400 },
    { duration: '40s', target: 1300 },
    { duration: '40s', target: 500 },  //down scale and recover
    { duration: '20s', target: 100 },
  ],
};

export const errorRate = new Rate('errors');

export default function () {
  const BASE_URL = 'http://localhost:3003';     //gitignore this for prod
  const homeid = Math.floor(Math.random() * 400000) + 1;
  const responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/homes${homeid}`,
      null,
      { tags: { name: 'getHomesURL' } },
    ],
  ]);
   check(http.get(BASE_URL), {
     'status is 200': (r) => r.status == 200,
   }) || errorRate.add(1);
  sleep(1);
}
