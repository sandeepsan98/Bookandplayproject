const player_list = [
  {
    image: "../../assets/images/userlogo.png",
    playersName: "Ramesh",
    ratingsnumber: "5.0",
    anchorlocataion: "../../pages/player/playerprofile.html",
  },
  {
    image: "../../assets/images/userlogo.png",
    playersName: "Ramesh",
    ratingsnumber: "5.0",
    anchorlocataion: "../../pages/player/playerprofile.html",
  },
];

const user_record = JSON.parse(localStorage.getItem("user_details"));
const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
const loginuserid = loginUser[0].user_id;
const requestrecords = JSON.parse(localStorage.getItem("request_details"));
// player filter

let filterPlayer = [];

if(requestrecords==null){

}
else{
  filterPlayer = requestrecords.filter(
    (item) =>
      item.receiving_user == loginuserid && item.request_status == "pending"
  );
}

if(filterPlayer.length==0){
  let maincon=document.querySelector(".main2");
  let ptag=document.createElement("h4")
  ptag.setAttribute("class","h5tag");
  ptag.innerHTML=`Hi You dont have any friend request`
  maincon.append(ptag)
  

  document.body.style.overflow="hidden"
  
  let btn=document.createElement("button")
  btn.setAttribute("class","btnok");
  btn.innerText="OK"
  ptag.append(btn)
  btn.addEventListener("click",()=>{
    window.location.href="../../pages/player/newprofile.html"
  })
}
else{
for (const userrequested of filterPlayer) {
  const { requested_user } = userrequested;
  const userDetails = user_record.find(
    (usersdata) => requested_user == usersdata.user_id
  );
  userrequested.requested_userDetails = userDetails;
}

console.log(filterPlayer);

let div_child;
let div_group;
let br_tag;
let img_card;
let p_player;
let anchor;
let button_visit;
let div_ratings;
let i_star;
let span_ratingsno;
let button_decline;


playerData(filterPlayer);

function playerData(array = []) {
  const parentHtmlDiv = document.querySelector(".parent");
  parentHtmlDiv.innerHTML = "";

  array.forEach((item) => {
    div_child = document.createElement("div");
    div_child.setAttribute("class", "child");
    div_child.setAttribute("value", item.requested_userDetails.user_id);
    console.log(div_child);

    div_group = document.createElement("div");
    div_group.setAttribute("class", "group");
    div_child.append(div_group);

    br_tag = document.createElement("br");
    div_group.append(br_tag);

    //  <img src="" class="groimg" alt=""/>
    img_card = document.createElement("img");
    if (item.requested_userDetails.url == "") {
      img_card.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
    } else {
      img_card.setAttribute("src", item.requested_userDetails.url);
    }
    img_card.setAttribute("alt", "playerProfile");
    img_card.setAttribute("class", "userlogo");
    div_group.append(img_card);

    p_player = document.createElement("p");
    p_player.setAttribute("class", "nameplayer");
    p_player.innerText = item.requested_userDetails.user_name;
    div_group.append(p_player);

    anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      `../../pages/player/playerprofile.html?player_id=${ 
        item.requested_userDetails.user_id}`
    );
    // anchor.setAttribute("href", player_list[i]["anchorlocataion"])
    div_group.append(anchor);

    // <button class="book"></button>
    button_visit = document.createElement("button");
    button_visit.setAttribute("class", "visit");
    button_visit.setAttribute("value", item.requested_userDetails.user_id);
    button_visit.innerText = "Visit";
    anchor.append(button_visit);

    button_accept = document.createElement("button");
    button_accept.setAttribute("class", "accept");
    button_accept.setAttribute("value", item.requested_userDetails.user_id);
    button_accept.innerText = "Accept";
    div_group.append(button_accept);

    button_decline = document.createElement("button");
    button_decline.setAttribute("class", "decline");
    button_decline.setAttribute("value", item.requested_userDetails.user_id);
    button_decline.innerText = "Decline";
    div_group.append(button_decline);

    div_ratings = document.createElement("div");
    div_ratings.setAttribute("class", "ratings");
    div_group.append(div_ratings);

    i_star = document.createElement("i");
    i_star.setAttribute("class", "fa-solid fa-star");
    // h3_card_title.innerText = names[i];
    div_ratings.append(i_star);

    span_ratingsno = document.createElement("span");
    span_ratingsno.setAttribute("class", "ratingno");
    span_ratingsno.innerText = player_list[0].ratingsnumber;
    div_ratings.append(span_ratingsno);

    document.querySelector("div.parent").append(div_child);
  });
}

// accept request
const acceptbtn = document.querySelectorAll(".accept");

acceptbtn.forEach((button) => {
  button.addEventListener("click", () => {
    const req_userId = button.value;

    const reqIndex = requestrecords.findIndex((request) => request.requested_user == req_userId  && request.receiving_user==loginuserid)
   

  // console.log(reqIndex);

  if (reqIndex > -1) {
    if (confirm("Are you sure want to accept the request")) {
      requestrecords[reqIndex].request_status = "accepted";

      localStorage.setItem("request_details", JSON.stringify(requestrecords));
    } else {
    }
  }
});
});

// declined

const declinebtn = document.querySelectorAll(".decline");
declinebtn.forEach((button) => {
  button.addEventListener("click", () => {
    const req_userId = button.value;

    const reqIndex2 = requestrecords.findIndex((request2) => request2.requested_user == req_userId && request2.receiving_user==loginuserid)

    console.log(reqIndex2);

    if (reqIndex2 > -1) {
      if (confirm("Are you sure want to decline the request")) {
        requestrecords[reqIndex2].request_status = "declined";

        localStorage.setItem("request_details", JSON.stringify(requestrecords));
      } else {
      }
    }
  });
});
}