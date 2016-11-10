
import request from 'request-promise';

const BASE_URL = 'http://localhost:3000/api';

describe('Some module', function () {

  it('tests something', async function () {
    this.timeout(5000);
    const res = await request(`${BASE_URL}/Locations`);
    console.log(res);
  });

});