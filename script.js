 const videoPreview = document.querySelector(".video-preview");
 const videos = [
    {
      thumbnail: "./images/thumbnails/og glimpse.webp",
      channelPicture:"images/channel pictures/sony music south.jpg" ,
      title:"Hungry Cheetah - OG Glimpse | Pawan Kalyan | Sujeeth | Thaman S | DVV Danayya",
      channel: "Sony Music South",
      stats:"8.5M views &#183; 1 year ago",
      length: "1:35"
   },
   {
      thumbnail: "./images/thumbnails/kantara trailer.webp",
      channelPicture:"images/channel pictures/hombale films.jpg" ,
      title:"Kantara - Official Trailer (Telugu) | Rishab Shetty, Sapthami G | Hombale Films | Vijay Kiragandur",
      channel: "Hombale Films",
      stats:"3.2M views &#183; 2 years ago",
      length: "2:45"
   },
   {
      thumbnail: "./images/thumbnails/jai hunaman.webp",
      channelPicture:"images/channel pictures/jai hanuman.jpg" ,
      title:"Jai Hanuman (Theme Song) | Rishab Shetty | Prasanth Varma | PVCU | Ojas | Mythri Movie Makers",
      channel: "T-Series",
      stats:"1.4M views &#183; 7 days ago",
      length: "1:35"
   },
   {
      thumbnail: "images/thumbnails/real story of harshad mehta.webp",
      channelPicture:"images/channel pictures/day trader telugu.jpg" ,
      title:"REAL STORY of Harshad Mehta 1992 SCAM (తెలుగు) - Stock Market SCAM",
      channel: "DAY TRADER తెలుగు",
      stats:"1M views &#183; 4 years ago",
      length: "17:01"
   },
   {
      thumbnail: "images/thumbnails/job vs business.webp",
      channelPicture:"images/channel pictures/day trader telugu.jpg" ,
      title:"JOB చేస్తూ BUSINESS ఎలా START చేయాలి? Job Vs Business",
      channel: "DAY TRADER తెలుగు",
      stats:"793K views &#183; 1 year ago",
      length: "26:56"
   },
   {
      thumbnail: "images/thumbnails/4 universal powers.webp",
      channelPicture:"images/channel pictures/telugu badi.jpg" ,
      title:"The 4 Fundamental Forces of The Universe Explained in Telugu Space Videos in Telugu Badi",
      channel: "Telugu badi (తెలుగుబడి)",
      stats:"128K views &#183; 1 month ago",
      length: "10:39"
   },
   {
      thumbnail: "images/thumbnails/50 youtubers fight.webp",
      channelPicture:"images/channel pictures/mrbeast.jpg" ,
      title:"50 YouTubers Fight For $1,000,000",
      channel: "MrBeast",
      stats:"269M views &#183; 3 months ago",
      length: "41:27"
   },
   {
      thumbnail: "images/thumbnails/Tech News 1853.webp",
      channelPicture:"images/channel pictures/prasad tech in telugu.jpg" ,
      title:"Tech News 1853 || Samsung S25 Slim, iQOO 13 Launch, Apple Glasses, BSNL Live TV, Prime Recap Etc.",
      channel: "Prasadtechintelugu",
      stats:"202K views &#183; 1 day ago",
      length: "9:10"
   },
   {
      thumbnail: "images/thumbnails/TRUMP IS BACK.webp",
      channelPicture:"images/channel pictures/aye jude.jpg" ,
      title:"TRUMP IS BACK🚨| CANADA GAME OVER🎯 | Aye Jude✊",
      channel: "Aye Jude",
      stats:"274K views &#183; 1 day ago",
      length: "14:02"
   },
   {
      thumbnail: "images/thumbnails/ind vs aus.webp",
      channelPicture:"images/channel pictures/cricket com au.jpg" ,
      title:"India hold their nerve to win ODI epic in Canberra | Dettol ODI Series 2020",
      channel: "cricket.com.au",
      stats:"43M views &#183; 3 years ago",
      length: "8:29"
   },
   {
      thumbnail: "images/thumbnails/raw talks vishwaksen.webp",
      channelPicture:"images/channel pictures/raw talks with vk.jpg" ,
      title:"Hero Vishwak Sen | Don’t Enter Into Movie Industry| on Tollywood Movie Industry| Raw Talks Podcast39",
      channel: "Raw Talks With VK",
      stats:"808K views &#183; 9 months ago",
      length: "1:11:26"
   },
   {
      thumbnail: "images/thumbnails/ind vs pak.webp",
      channelPicture:"images/channel pictures/asian cricket council.jpg" ,
      title:"India 'A' vs Pakistan 'A' | Men's T20 Emerging Teams Asia Cup | Match 4",
      channel: "Asian Cricket Council",
      stats:"10M views &#183; 2 weeks ago",
      length: "10:41"
   },
   {
      thumbnail: "images/thumbnails/telugu titans overpowers.webp",
      channelPicture:"images/channel pictures/star sports.jpg" ,
      title:"Telugu Titans overpowers #TamilThalaivas | #ProKabaddiOnStar",
      channel: "Star Sports",
      stats:"606K views &#183; 1 day ago",
      length: "10:14"
   },
   {
      thumbnail: "images/thumbnails/bahubali producer podcast.webp",
      channelPicture:"images/channel pictures/raw talks with vk.jpg" ,
      title:"Day 1 was a Flop anta 🤯| Telugu Movie Podcast |Tollywood, Bahubali & more| Raw Talks With VK Ep -66",
      channel: "Raw Talks With VK",
      stats:"663K views &#183; 13 days ago ",
      length: "1:57:50"
   },
   {
      thumbnail: "images/thumbnails/you need to watch this.webp",
      channelPicture:"images/channel pictures/vamsi bhavani.jpg" ,
      title:"You Need To Watch This | Vamsi Bhavani",
      channel: "Vamsi Bhavani",
      stats:"11K views &#183; 3 weeks ago",
      length: "8:22"
   },
   {
      thumbnail: "images/thumbnails/mechanic rocky trailer.webp",
      channelPicture:"images/channel pictures/sony music south.jpg" ,
      title:"Mechanic Rocky Trailer 1.0 | Vishwaksen | Meenakshi | Shraddha | Ravi Teja M | Jakes Bejoy |Rajani T",
      channel: "Sony Music South",
      stats:"6.2M views &#183; 2 weeks ago",
      length: "2:12"
   },
   {
      thumbnail: "images/thumbnails/mr beast parody.webp",
      channelPicture:"images/channel pictures/carry minati.jpg" ,
      title:"MR BEAST PARODY 🤑 Ft. INDIAN CREATORS | CARRYMINATI",
      channel: "CarryMinati",
      stats:"63M views &#183; 2 weeks ago",
      length: "22:01"
   },
   {
      thumbnail: "images/thumbnails/$1 vs $500,000.webp",
      channelPicture:"images/channel pictures/mrbeast.jpg" ,
      title:"$1 vs $500,000 Experiences!",
      channel: "MrBeast",
      stats:"71M views &#183; 5 days ago",
      length: "17:40"
   },
   {
      thumbnail: "images/thumbnails/what is DevOps.webp",
      channelPicture:"images/channel pictures/apna college.jpg" ,
      title:"What is DevOps? DevOps Explained | Simplest Explanation in Hindi",
      channel: "Apna College",
      stats:"888K views &#183; 1 year ago",
      length: "6:37"
   },
   {
      thumbnail: "images/thumbnails/easiest business.webp",
      channelPicture:"images/channel pictures/ishan sharma.jpg" ,
      title:"THIS Business is SO EASY to Start, It Feels ILLEGAL.",
      channel: "Ishan Sharma",
      stats:"49K views &#183; 2 days ago",
      length: "2:48:50"
   },
   {
      thumbnail: "images/thumbnails/RATAN TATA.webp",
      channelPicture:"images/channel pictures/aye jude.jpg" ,
      title:"🚨RATAN TATA- Every Indian's BEST FRIEND👬📢| A Tribute | Aye Jude",
      channel: "Aye Jude",
      stats:"877K views &#183; 4 weeks ago",
      length: "12:50"
   },
   {
      thumbnail: "images/thumbnails/iQOO Z9s Series Unboxing.webp",
      channelPicture:"images/channel pictures/prasad tech in telugu.jpg" ,
      title:"iQOO Z9s Series Unboxing & initial impressions in Telugu || Ft. iQOO Z9s Pro & iQOO Z9s",
      channel: "Prasadtechintelugu",
      stats:"577K views &#183; 2 months ago",
      length: "14:31"
   },
   {
      thumbnail: "images/thumbnails/fashion verge podcast.webp",
      channelPicture:"images/channel pictures/telugu connects.jpg" ,
      title:"🚨Dark Side of Content Creation Ft. @Fashionverge Telugu Connects Podcast",
      channel: "Telugu Connects - Growth Podcast ",
      stats:"36K views &#183; 6 days ago",
      length: "1:34:03"
   },
   {
      thumbnail: "images/thumbnails/Thandel.webp",
      channelPicture:"images/channel pictures/geetha arts.jpg" ,
      title:"Essence of #Thandel | Naga Chaitanya | Sai Pallavi | Chandoo Mondeti | DSP | Bunny Vas | Geetha Arts",
      channel: "Geetha Arts",
      stats:"8.1M views &#183; 10 months ago",
      length: "2:12"
   },
   {
      thumbnail: "images/thumbnails/ANIMAL Teaser.webp",
      channelPicture:"images/channel pictures/tseries telugu.jpg" ,
      title:"ANIMAL Teaser (Telugu): Ranbir Kapoor| Sandeep Reddy Vanga| Bhushan Kumar",
      channel: "T-Series Telugu",
      stats:"8.8M views &#183; 1 year ago",
      length: "2:26"
   },
   {
      thumbnail: "images/thumbnails/KGF Chapter2 TEASER.webp",
      channelPicture:"images/channel pictures/hombale films.jpg" ,
      title:"KGF Chapter2 TEASER |Yash|Sanjay Dutt|Raveena Tandon|Srinidhi Shetty|Prashanth Neel|Vijay Kiragandur",
      channel: "Hombale Films",
      stats:"276M views &#183; 3 years ago",
      length: "2:17"
   },
   {
      thumbnail: "images/thumbnails/VIKRAM - Official Trailer.webp",
      channelPicture:"images/channel pictures/sony music south.jpg" ,
      title:"VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh",
      channel: "Sony Music South",
      stats:"49M views &#183; 2 years ago ",
      length: "2:39"
   },
   {
      thumbnail: "images/thumbnails/Lucky Baskhar (Telugu) Trailer.webp",
      channelPicture:"images/channel pictures/aditya music.jpg" ,
      title:"Lucky Baskhar (Telugu) Trailer | Dulquer Salmaan, MeenakshiChaudhary |Venky Atluri |GV Prakash Kumar",
      channel: "Aditya Music",
      stats:"652K views &#183; 12 days ago",
      length: "2:51"
   },
   {
      thumbnail: "images/thumbnails/Kalki 2898 AD Trailer.webp",
      channelPicture:"images/channel pictures/vyjayanthi network.jpg" ,
      title:"Kalki 2898 AD Trailer - Telugu | Prabhas | Amitabh Bachchan | Kamal Haasan | Deepika | Nag Ashwin",
      channel: "Vyjayanthi Network",
      stats:"30M views &#183; 4 months ago",
      length: "3:03"
   },
   {
      thumbnail: "images/thumbnails/Devara Part -1 Trailer.webp",
      channelPicture:"images/channel pictures/ntr arts.jpg" ,
      title:"Devara Part -1 Trailer (Telugu) | NTR | Saif Ali Khan | Janhvi | Koratala Siva | Anirudh | Sep 27",
      channel: "NTR Arts",
      stats:"48M views &#183; 1 month ago",
      length: "2:40"
   },
   {
      thumbnail: "images/thumbnails/pushpa 2 teaser.webp",
      channelPicture:"images/channel pictures/Mythri Movie Makers.jpg" ,
      title:"Pushpa 2 The Rule Teaser | Allu Arjun | Sukumar | Rashmika Mandanna | Fahadh Faasil | DSP",
      channel: "Mythri Movie Makers",
      stats:"119M views &#183; 7 months ago",
      length: "1:08"
   },
   {
      thumbnail: "images/thumbnails/amaran trailer.webp",
      channelPicture:"images/channel pictures/Saregama Telugu.jpg" ,
      title:"Amaran - Telugu Trailer | Sivakarthikeyan, Sai Pallavi | Rajkumar | GV Prakash | Kamal Haasan",
      channel: "Saregama Telugu",
      stats:"3.6M views &#183; 2 weeks ago",
      length: "2:21"
   },
   {
      thumbnail: "images/thumbnails/ka trailer.webp",
      channelPicture:"images/channel pictures/Saregama Telugu.jpg" ,
      title:"KA - Official Trailer | Kiran Abbavaraam | Sujith & Sandeep | Sam CS",
      channel: "Saregama Telugu",
      stats:"8.8M views &#183; 2 weeks ago",
      length: "2:46"
   },
   {
      thumbnail: "images/thumbnails/GHAATI Glimpse.webp",
      channelPicture:"images/channel pictures/UV Creations.jpg" ,
      title:"GHAATI Glimpse | 'The Queen' Anushka Shetty | Krish Jagarlamudi | UV Creations | First Frame Ents",
      channel: "UV Creations",
      stats:"6.8M views &#183; 19 hours ago ",
      length: "0:48"
   },
 ]
 var videoCount = document.querySelectorAll(".video-preview").length;
 const uniqueIndices = new Set();
 while (uniqueIndices.size < videoCount) {
    uniqueIndices.add(Math.floor(Math.random() * videoCount));
 }
 const uniqueVideos = [...uniqueIndices];
 for (var i = 0; i < videoCount; i++) {
    document.querySelectorAll(".thumbnail")[i].setAttribute("src", videos[uniqueVideos[i]].thumbnail);
    document.querySelectorAll(".profile-pic")[i].setAttribute("src", videos[uniqueVideos[i]].channelPicture);
    document.querySelectorAll(".video-title")[i].textContent = videos[uniqueVideos[i]].title;
    document.querySelectorAll(".video-author")[i].textContent = videos[uniqueVideos[i]].channel;
    document.querySelectorAll(".video-stats")[i].innerHTML = videos[uniqueVideos[i]].stats;
    document.querySelectorAll(".video-length")[i].innerHTML = videos[uniqueVideos[i]].length;
 }
 