var videoSearch = document.querySelector(".youtube");
var searchInput = document.querySelector("#search-text"); 
var  searchSubmit = document.querySelector("#search-submit");
var youTubeKey ="AIzaSyBSdv8yJFcPRx4-NrqPkTNNlIWHp4tZFjQ";
 
 //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=rome&key=AIzaSyBSdv8yJFcPRx4-NrqPkTNNlIWHp4tZFjQ


function youTubeAPI(){
    var request=
    "https://youtube.googleapis.com/youtube/v3/search?key=" +
    youTubeKey +
    "&type=video&part=snippet&maxResults=1" +
    "&q=" +
    "10 best things to do" + searchInput.value;
    console.log(request)

    fetch(request)   
    .then(function(respose) {
            return respose.json();  
        })
    .then(function(data){
            
        let video =data.items[0].id.videoId;
        console.log(data);
            
        //show youTube video in html:
        videoSearch.innerHTML +=`<iframe width="420" height="315" src="https://www.youtube.com/embed/${video}"></iframe>`
        })
   
    }
// when user provided input & search button is clicked, user input is include to the API request and youTubeAPI function is call, showing 1
// video result in html. 
  
searchSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    var searchText = searchInput.value;
        // If user don't provide input, but still click search button none youTube video will be display.
        if (searchText === "") {
            return;
       }   

        youTubeAPI();
    });

    //searchSubmit.addEventListener("click", youTubeAPI())
    

//API call results     
// 20221222200231
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=rome&key=AIzaSyBSdv8yJFcPRx4-NrqPkTNNlIWHp4tZFjQ

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "u9khrfwyaqpIS0sT0hOSryFxOiI",
//     "nextPageToken": "CAEQAA",
//     "regionCode": "AU",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 1
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "ArCHRTmy9GJdhZNVAjFsmlqz9oo",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "5DcA4BePBdA"
//         },
//         "snippet": {
//           "publishedAt": "2022-02-16T17:00:06Z",
//           "channelId": "UCl_7TcFxC6XNZOVmJClCUEg",
//           "title": "TOP 10 Things to do in ROME - [2022 Travel Guide]",
//           "description": "Top 10 things to do in Rome ⭐ Sponsored by BEEYOND packing cubes, a revolutionary new way to pack your luggage ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/5DcA4BePBdA/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/5DcA4BePBdA/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/5DcA4BePBdA/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hungry Passport",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-02-16T17:00:06Z"
//         }
//       }
//     ]
//   }
    
        // }) .then((data)=>{
        //     // console.log(data)
        //     // let videos =data.items
        //     // for(video of videos) {
        //     //     document.write(video.snippet.title)

        //     }

        // })



  