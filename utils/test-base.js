const base = require('@playwright/test');
exports.customtest = base.test.extend(
{
LoginDataset1 :    {
    HRMUsername:"Admin",
    HRMPassword:"admin123"

    }
})


// import base from '@playwright/test'
// exports.customtest=base.test.extend(
// {
//      //JS object
// testbase1: 
// {
//     HRMUsername:"Admin",
//     HRMPassword:"admin123"
// }

// })