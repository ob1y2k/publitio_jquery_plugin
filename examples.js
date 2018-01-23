$(document).ready(() => {

  // file => some JS File

  // Please update xxxx with your key and yyyy with your secret
  $.publitio.init('o1m9dNVvNmPT2HmAy97p', 'TVPSLpSwzAWVraSvNyXoRyaGbmczk9V7')


  /*_________________________*/
  /* File Class             */


  // list files
  $.publitio.call('/files/list', 'GET', { offset: '0', limit: '10' })
    .then((data) => { printSuccessMessage(data) })
    .catch((error) => { printErrorMessage(error) })

  // // create (upload) local file, simple
  // $.publitio.uploadFile(file, 'file')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // //create (upload) remote file
  // $.publitio.uploadRemoteFile('file', {
  //     file_url: 'https://i.ytimg.com/vi/OG0P8TapSN8/hqdefault.jpg'
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) }) 

  // // create (upload) local file, all options
  // $.publitio.uploadFile(file, 'file', {
  //   title: 'zzz',
  //   description: 'yyyyyy',
  //   tags: 'tag1 tag2',
  //   privacy: '1',
  //   option_download: '1',
  //   option_ad: '1'
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // show file with id czH29kgt
  // $.publitio.call('/files/show/czH29kgt', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // update file with id czH29kgt
  // $.publitio.call('/files/update/czH29kgt', 'PUT', {
  //   title: 'xxxx',
  //   description: 'wwww',
  //   tags: 'tag1 tag2',
  //   privacy: '1',
  //   option_download: '1',
  //   option_ad: '1'
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) }) 

  // // delete file with id czH29kgt
  // $.publitio.call('/files/delete/czH29kgt', 'DELETE')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // get player for file with id 0M08pwHk
  // $.publitio.call('/files/player/0M08pwHk', 'GET', {
  //   player: 'id',
  //   adtag: 'id'
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })


    // /*_________________________*/
    // /* Player Class             */


  // // list players
  // $.publitio.call('/players/list', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // create player
  // $.publitio.call('/players/create', 'POST', {
  //   name: 'player',
  //   adtag_id: 'myover', // adtag must already exist
  //   skin: 'blue'
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // show player with id myplayer
  // $.publitio.call('/players/show/myplayer', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // update player with id myplayer
  // $.publitio.call('/players/update/myplayer', 'PUT', {
  //   adtag_id: 'mypreroll',
  //   auto_play: '1',
  //   skin: ''
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // delete player with id myplayer
  // $.publitio.call('/players/delete/myplayer', 'DELETE')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })


    // /*_______________________________*/
    // /* Advertising (Ad Tags) Class   */

  // // list adtags
  // $.publitio.call('/players/adtags/list', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // create adtag
  // $.publitio.call('/players/adtags/create', 'POST', {
  //   name: 'myover',
  //   tag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // show adtag with id mytestad
  // $.publitio.call('/players/adtags/show/mytestad', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // update adtag with id mytestad
  // $.publitio.call('/players/adtags/update/mytestad', 'PUT', {
  //   tag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator='
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) }) 

  // // delete adtag with id mytestad
  // $.publitio.call('/players/adtags/delete/mytestad', 'DELETE')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })


    // /*_________________________*/
    // /* File Versions Class   */


  // // list versions for file with id 0M08pwHk
  // $.publitio.call('/files/versions/list/0M08pwHk', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // create new version from file with id 0M08pwHk, with options width=320, height=240, crop=fill
  // $.publitio.call('/files/versions/create/0M08pwHk', 'POST', {
  //   extension: 'mp4',
  //   options: 'w_320,h_240'
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) }) 

  // // show file version with id 69D3lwtm
  // $.publitio.call('/files/versions/show/69D3lwtm', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // update file version with id 69D3lwtm
  // $.publitio.call('/files/versions/update/69D3lwtm', 'PUT', {})
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // delete file version with id 69D3lwtm
  // $.publitio.call('/files/versions/delete/69D3lwtm', 'DELETE')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })
    

    // /*_____________________*/
    // /* Watermarks Class   */


  // // list watermarks
  // $.publitio.call('/watermarks/list', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // create (upload) watermark from local file
  // $.pubitio.uploadFile(file, 'watermark', {
  //   name: 'mytestwm',
  //   position: 'bottom-right',
  //   padding: '20'
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // show watermark with id mytestwm
  // $.publitio.call('/watermarks/show/mytestwm', 'GET')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // update watermark with id mytestwm
  // $.publitio.call('/watermarks/update/mytestwm', 'PUT', {
  //   position: 'top-right',
  //   padding: '10'
  // }).then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

  // // delete watermark with id mytestwm
  // $.publitio.call('/watermarks/delete/mytestwm', 'DELETE')
  //   .then((data) => { printSuccessMessage(data) })
  //   .catch((error) => { printErrorMessage(error) })

})



// /*_________________________*/



function printSuccessMessage(data) {
  console.log('All good... Do your stuff here (get id, html, etc. from the response)')
  console.log(data)
}

function printErrorMessage(error) {
  console.log(error.responseJSON.error.message)
}



