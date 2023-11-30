// URL
const player = [
  {
    sportsicon0: "../../assets/images/cricketicon.png",
    sportsicon1: "../../assets/images/footballicon.png",
    sportsicon2: "../../assets/images/tennisicon.png",
  },
];

// own profile
const imageShow = document.querySelector(".userlogo");
const userRecords = JSON.parse(localStorage.getItem("user_details"));
const user_logged = JSON.parse(localStorage.getItem("user_logged_in"));
for (let i = 0; i < userRecords.length; i++) {
  if (user_logged[0].user_email == userRecords[i].user_email) {
    const savedImage = userRecords[i];
    console.log(savedImage);
    if (savedImage && savedImage.url) {
      imageShow.src = savedImage.url;
    } else {
      imageShow.src = "https://iili.io/HkW7U4S.jpg";
    }
    break;
  }
}

const user_record = JSON.parse(localStorage.getItem("user_details"));

// let filterPlayer=[];

let filterPlayer;
filterPlayer = user_record.filter((item) => item.player == true);

// console.log(filterPlayer);

const url2 = window.location.search; // ?userid=97;
console.log(url2);
const urlParameter2 = new URLSearchParams(url2);
// console.log(urlParameter)   // "userid":"97"
const playerSearch = urlParameter2.get("player_id");
// console.log(groundSearch2); // get value of name

let show2;
filterPlayer.find((e) => {
  if (e.user_id == playerSearch) {
    return (show2 = e);
  }
  return (show2 = 0);
});

//
const MessageofUser = JSON.parse(localStorage.getItem("user_Messages"));
const playerIdmessage = show2.user_id;
const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
const loginUserID = loginUser[0].user_id;
// for usersendedmessage


if (MessageofUser == null) {
} else {
  const messageUser = MessageofUser.find(
    (message) =>
      playerIdmessage === message.receiver_id &&
      loginUserID == message.sender_id
  );
  show2.user_messages = messageUser;
  console.log(show2);
}
// for userreceivedmessage


if (MessageofUser == null) {
} else {
  const messageUser2 = MessageofUser.find(
    (message) =>
      loginUserID === message.receiver_id &&
      playerIdmessage === message.sender_id
  );
  show2.received_messages = messageUser2;
}

// JSON

let div_parent1;
let div_sidebar_1;
let div_profile_box;
let player_image;
let button_connect;
let p_playerName;
let p_playerAbout;
let div_rating_box;
let i_star;
let span_no;
let div_box2;
let div_sports_known;
let p_sportsplay_tag;
let symbolimage1;
let symbolimage2;
let symbolimage3;
let div_gameplayed;
let p_score_tagName;
let p_score_no;
let div_sidebar_2;
let div_container_sidebar2;
let div_top;
let h2_web;
let div_chat_main;
let  p_mess_noti;
let div_chat_bottom;
let form_box;
let input_mess_box;
let send_btn;
let i_send_symbol;
let text;
let div_box3;



div_parent1 = document.createElement("div");
div_parent1.setAttribute("class", "bar");
// console.log(div_parent1);

// side bar one kula box 1
div_sidebar_1 = document.createElement("div");
div_sidebar_1.setAttribute("class", "sidebar1");
div_parent1.append(div_sidebar_1);
// box1 start

div_profile_box = document.createElement("div");
div_profile_box.setAttribute("class", "profilebox");
div_sidebar_1.append(div_profile_box);

player_image = document.createElement("img");
if (show2.url == "") {
  player_image.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
} else {
  player_image.setAttribute("src", show2.url);
}
player_image.setAttribute("class", "profilephoto");
div_profile_box.append(player_image);

button_connect = document.createElement("button");
button_connect.setAttribute("class", "connectbtn");
button_connect.setAttribute("value", show2.user_id);
button_connect.innerText = "Connect";
div_profile_box.append(button_connect);

p_playerName = document.createElement("p");
p_playerName.setAttribute("class", "namerow");
p_playerName.innerText = show2.user_name;
div_profile_box.append(p_playerName);



div_box3 = document.createElement("div");
div_box3.setAttribute("class", "box3");
div_profile_box.append(div_box3);

p_playerAbout = document.createElement("p");
p_playerAbout.setAttribute("class", "aboutrow");
p_playerAbout.innerText = show2.aboutplayers;
div_box3.append(p_playerAbout);

div_rating_box = document.createElement("div");
div_rating_box.setAttribute("class", "ratingsrow");
div_profile_box.append(div_rating_box);

i_star = document.createElement("i");
i_star.setAttribute("class", "fa-solid fa-star");
div_rating_box.append(i_star);

span_no = document.createElement("span");
span_no.setAttribute("class", "norating");
span_no.innerText = "5.0";
div_rating_box.append(span_no);

div_box2 = document.createElement("div");
div_box2.setAttribute("class", "box2");
div_sidebar_1.append(div_box2);

div_sports_known = document.createElement("div");
div_sports_known.setAttribute("class", "sportsknown");
div_box2.append(div_sports_known);

p_sportsplay_tag = document.createElement("p");
p_sportsplay_tag.setAttribute("class", "sportsplay");
p_sportsplay_tag.innerText = "Sports i will play";
div_sports_known.append(p_sportsplay_tag);

if (show2.sports_choosed_cricket == true) {
  symbolimage1 = document.createElement("img");
  symbolimage1.setAttribute("class", "sportsicon");
  symbolimage1.setAttribute("src", player[0].sportsicon0);
  // symbolimage1.setAttribute("src",showimage[0]["cricketicon"])
  // symbolimage.setAttribute("alt",)
  div_sports_known.append(symbolimage1);
}

if (show2.sports_choosed_football == true) {
  symbolimage2 = document.createElement("img");
  symbolimage2.setAttribute("class", "sportsicon");
  symbolimage2.setAttribute("src", player[0].sportsicon1);
  // symbolimage.setAttribute("alt",)
  // symbolimage2.setAttribute("src",showimage[0]["cricketicon"])
  // symbolimage.setAttribute("alt",)
  div_sports_known.append(symbolimage2);
}

if (show2.sports_choosed_tennis == true) {
  symbolimage3 = document.createElement("img");
  symbolimage3.setAttribute("class", "sportsicon");
  symbolimage3.setAttribute("src", player[0].sportsicon2);
  // // symbolimage.setAttribute("alt",)
  div_sports_known.append(symbolimage3);
}

div_gameplayed = document.createElement("div");
div_gameplayed.setAttribute("class", "gamesplaybox");
div_box2.append(div_gameplayed);

p_score_tagName = document.createElement("p");
p_score_tagName.setAttribute("class", "scorehead");
p_score_tagName.innerText="Timing Iam available to play"
// p_playerName
div_gameplayed.append(p_score_tagName);

p_score_no = document.createElement("p");
p_score_no.setAttribute("class", "scoreno");
p_score_no.innerText=`${show2.timingsfrom}-${show2.timingsto}`
div_gameplayed.append(p_score_no);

// div_box3 = document.createElement("div");
// div_box3.setAttribute("class", "box3");
// div_sidebar_1.append(div_box3);

// div_statistics = document.createElement("div");
// div_statistics.setAttribute("class", "statistics1");
// div_box3.append(div_statistics);

// canvas_chart = document.createElement("canvas");
// canvas_chart.setAttribute("id", "myChart");
// div_statistics.append(canvas_chart);

// sidebar2

div_sidebar_2 = document.createElement("div");
div_sidebar_2.setAttribute("class", "sidebar2");
div_parent1.append(div_sidebar_2);

div_container_sidebar2 = document.createElement("div");
div_container_sidebar2.setAttribute("class", "container");
div_sidebar_2.append(div_container_sidebar2);

div_top = document.createElement("div");
div_top.setAttribute("class", "top");
div_container_sidebar2.append(div_top);

h2_web = document.createElement("h2");
h2_web.setAttribute("class", "h2head");
h2_web.innerText = "Web Connect";
div_top.append(h2_web);

div_chat_main = document.createElement("div");
div_chat_main.setAttribute("class", "main");
div_container_sidebar2.append(div_chat_main);

if (show2.received_messages == undefined && show2.user_messages == undefined) {
  // Display a notification that the conversation is not started
  p_mess_noti = document.createElement("p");
  p_mess_noti.setAttribute("class", "noti");
  p_mess_noti.innerText =
    "* Your conversation has not started. Say hello to get started.";
  div_chat_main.append(p_mess_noti);
} else {
  const allmess = [];

  // all received mesages
  if (show2.received_messages != undefined) {
    for (let i = 0; i < show2.received_messages.messages.length; i++) {
      const receivedMess = show2.received_messages.messages[i];
      receivedMess.type = "received";
      allmess.push(receivedMess);
    }
  }

  if (
    show2.user_messages !== undefined &&
    show2.user_messages.messages != null
  ) {
    // all usrr message
    for (let i = 0; i < show2.user_messages.messages.length; i++) {
      const userMess = show2.user_messages.messages[i];
      userMess.type = "sent";
      allmess.push(userMess);
    }
  }
  // sorting message based on time
  allmess.sort((a, b) => a.timestamp - b.timestamp);

  for (let i = 0; i < allmess.length; i++) {
    const particularmessage = allmess[i];
    const messageofchat = document.createElement("p");
    if (particularmessage.type == "received") {
      messageofchat.setAttribute("class", "messagefrom");
    } else {
      messageofchat.setAttribute("class", "messageto");
    }
    messageofchat.innerHTML = `${
      particularmessage.text
    }<span class="timeside">${timestampconvert(
      particularmessage.timestamp
    )} </span>`;
    div_chat_main.append(messageofchat);
    console.log(messageofchat);

    // delete btn
    const delbtn = document.createElement("button");
    delbtn.setAttribute("class", "delbtn");
    delbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    if (particularmessage.type == "received") {
      delbtn.style.display = "none";
    }

    delbtn.addEventListener("click", () => {
      console.log(particularmessage)
      deletemess(particularmessage);
     
      messageofchat.remove(particularmessage);
    });
    messageofchat.append(delbtn);
  }
}

// for (let i = 0; i < show2.received_messages.messages.length; i++) {
//   let receivedMessage = show2.received_messages.messages[i];
//   let p_mess_from = document.createElement("p");
//   p_mess_from.setAttribute("class", "messagefrom");
//   p_mess_from.innerText = receivedMessage.text;
//   div_chat_main.append(p_mess_from);
// }

// if (show2.user_messages == null) {
//   // Display a notification that the conversation hasn't started yet
//   p_mess_noti = document.createElement("p");
//   p_mess_noti.setAttribute("class", "noti");
//   p_mess_noti.innerText = "* Your conversation has not started. Say hello to get started.";
//   div_chat_main.append(p_mess_noti);
// } else {
//   for (let i = 0; i < show2.user_messages.messages.length; i++) {
//     let userMessage = show2.user_messages.messages[i];
//     let p_mess_to = document.createElement("p");
//     p_mess_to.setAttribute("class", "messageto");
//     p_mess_to.innerText = userMessage.text;
//     div_chat_main.append(p_mess_to);
//   }
// }

// console.log(show2.user_messages["messages"][2]);

// p_mess_noti=document.createElement("p");
// p_mess_noti.setAttribute("class","noti");
// p_mess_noti.innerText="* Your conversation is not started Say hello to get started"
// div_chat_main.append(p_mess_noti);

div_chat_bottom = document.createElement("div");
div_chat_bottom.setAttribute("class", "bottom");
div_container_sidebar2.append(div_chat_bottom);

form_box = document.createElement("form");
form_box.setAttribute("id", "sendbtn");
div_chat_bottom.append(form_box);

input_mess_box = document.createElement("input");
input_mess_box.setAttribute("type", "text");
input_mess_box.setAttribute("placeholder", "Send message");
input_mess_box.setAttribute("id", "message");
input_mess_box.setAttribute("required", "");
input_mess_box.disabled = true;
form_box.append(input_mess_box);

send_btn = document.createElement("button");
send_btn.setAttribute("id", "send_button");
send_btn.setAttribute("type", "submit");
send_btn.disabled=true;
form_box.append(send_btn);

i_send_symbol = document.createElement("i");
i_send_symbol.setAttribute("class", "bx bx-send");
send_btn.append(i_send_symbol);

text = document.createElement("p");
text.textContent =
  `* You cannot chat with them please connect with them and make them in your friendlist`;
text.setAttribute("class", "chatalerttext");
div_sidebar_2.append(text);

document.querySelector("div.main2").append(div_parent1);

// const ctx = canvas_chart;
// new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     labels: ["Win", "Loss", "Draw"],
//     datasets: [
//       {
//         label: " of Matches",
//         data: [12, 19, 3],
//         hoverOffset: 4,
//         borderWidth: 1,
//       },
//     ],
//   },
// });

let sidebar2;
if (loginUserID === show2.user_id) {
  sidebar2 = document.querySelector(".sidebar2");
  sidebar2.style.display = "none";
} else {
  // sidebar2.style.display="block"
}

// mouserightclick
// const messto = document.querySelectorAll(".messageto");
// messto.forEach((data) => {
//   data.addEventListener("click", () => {
//    let del=document.querySelectorAll(".delbtn")

//    del.forEach((deldata)=>{
//     deldata.style.display="block"
//    })
//   });
// });
//  request

// request to other user
const connectBtn = document.querySelectorAll(".connectbtn");
let playerId;

// console.log(loginUser);

console.log(loginUserID);
//  findplayersbtn.addEventListener("click",(e)=>{
//   if( !loginUser || loginUser[0]["player_status"]==true){
//     alert("Please join as a player or login to find players  ")
//     e.preventDefault();
//   }
//   else{
//     window.location.href="./pages/player/findplayers.html";
//   }

// })

// for giving reqest to other players
const requestrecords = JSON.parse(localStorage.getItem("request_details"));
connectBtn.forEach((conBtn) => {
  playerId = Number(conBtn.value);
  console.log(playerId);
  if (playerId === loginUserID) {
    // alert("this your profile")
    // conBtn.style.display = "";
    conBtn.setAttribute("disabled","");
    conBtn.innerText="Your Profile"
  }

  conBtn.addEventListener("click", () => {
    if (conBtn.innerHTML == "Connect") {
      // alert(playerId)
      // local storage
      let request_records = new Array();
      request_records = JSON.parse(localStorage.getItem("request_details"))
        ? JSON.parse(localStorage.getItem("request_details"))
        : [];

      // if (playerId == loginUserID) {
      //   alert("this your profile")
      //   connectBtn.style.display = "none"
      // }
      //  if (request_records.some((v) => {
      //   v.requested_user === loginUserID && v.receiving_user === playerId

      // })) {
      // alert("You can't request multiple timwes")
      // }

      // else {
      request_records.push({
        requested_user: loginUserID,
        receiving_user: playerId,
        request_status: "pending",
      });

      localStorage.setItem("request_details", JSON.stringify(request_records));
      alert("you requested");
      conBtn.innerHTML = "Requested"
      // location.reload()

      // }
    }


    else{
      

console.log(requestrecords);
// const connectBtn2 = document.querySelector(".connectbtn");

if (requestrecords == null) {
} 
else if (
  requestrecords.some(
    (v) => v.requested_user === loginUserID && Number(v.receiving_user) === playerId
  )
) {
  {
      conBtn.innerText = "Requested";
    // console.log("ok");
  }
}
    }
    
  });
});

// const requestrecords = JSON.parse(localStorage.getItem("request_details"));
// console.log(requestrecords);
const connectBtn2 = document.querySelector(".connectbtn");

if (requestrecords == null) {
} 
else if (
  requestrecords.some(
    (v) => v.requested_user === loginUserID && Number(v.receiving_user) === playerId
  )
) {
  {
    connectBtn2.innerText = "Requested";
    // console.log("ok");
  }
}

// chat blur remove if the request was accepted mutually
if (requestrecords == null) {
console.log("vada");
} else  {


 let reqaccept= requestrecords.some(
    (v) =>
     v.requested_user === loginUserID &&
     Number( v.receiving_user) === playerId &&
      v.request_status === "accepted"
 
  )  

 let receiveaccept= requestrecords.some(
    (v) =>
   v.requested_user ===playerId &&
   Number( v.receiving_user) === loginUserID &&
    v.request_status === "accepted"
)



  console.log("sandeep");

  if(reqaccept&& receiveaccept){
    console.log("dssnkd");

  connectBtn2.innerText = "Friend";
  connectBtn2.disabled=true;
  const chatbox = document.querySelector(".container");
  //  let side_bar2=document.querySelector(".sidebar2");
  const textalert = document.querySelector(".chatalerttext");
  let inputform=document.getElementById("message");
  let sendButton=document.getElementById("send_button")
  console.log(textalert);
  chatbox.style.filter = "none";
  textalert.style.display = "none";
  chatbox.style.left = "30px";
  inputform.disabled=false;
  sendButton.disabled=false;

  }


  // chatbox.innerText="You cannot chat with before they accept your request"

  // console.log("ok");

}

// chat feature
const sendBtn = document.getElementById("send_button");
const formbtn = document.getElementById("sendbtn");
formbtn.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
  // location.reload();
});

let messagebox;

function sendMessage() {
  messagebox = document.getElementById("message").value;

  const receiver = show2.user_id;
  let usersMessage = new Array();
  usersMessage = JSON.parse(localStorage.getItem("user_Messages"))
    ? JSON.parse(localStorage.getItem("user_Messages"))
    : [];

  const existingmessagedUser = usersMessage.findIndex(
    (mess) => mess.sender_id === loginUserID && mess.receiver_id === receiver
  );

  const existingmessage = {
    text: messagebox,
    sender: "user",
    timestamp: new Date().getTime(),
  };

  if (existingmessagedUser !== -1) {
    usersMessage[existingmessagedUser].messages.push(existingmessage);
  } else {
    usersMessage.push({
      sender_id: loginUserID,
      receiver_id: receiver,
      messages: [
        {
          text: messagebox,
          sender: "user",
          timestamp: new Date().getTime(),
        },
      ],
    });
  }

  localStorage.setItem("user_Messages", JSON.stringify(usersMessage));
  // location.reload();

  // let div_chat_main = document.querySelector(".main");
  //   let p_mess_from = document.createElement("p");
  //   p_mess_from.setAttribute("class", "messageto");
  //   p_mess_from.innerText = messagebox;
  //   div_chat_main.append(p_mess_from);

  //   document.getElementById("message").value = "";

  const mainChat = document.querySelector(".main");
  const messageto = document.createElement("p");
  messageto.setAttribute("class", "messageto");

  messageto.innerHTML = `${messagebox} <span class="timeside"> ${timestampconvert(
    existingmessage.timestamp
  )}</span>`;
  mainChat.append(messageto);

  console.log(messageto);

  const del_btn = document.createElement("button");
  del_btn.setAttribute("class", "delbtn");
  del_btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  del_btn.addEventListener("click", () => {

    // let delmess={
    //   text:messagebox,
    //   sender: "user",
    //   timestamp:existingmessage.timestamp,
    // };
   
    deletemess(existingmessage);

    // console.log(delmess);

    // console.log("okok");
    messageto.remove(existingmessage);
  });
  messageto.append(del_btn);



  document.getElementById("message").value = "";
  // mess_from=document.createElement("p");
  // mess_from.setAttribute("class","messagefrom");
  // mess_from.innerText=messagebox;
  // div_chat_main.append(mess_from);
  mainChat.scrollTop = mainChat.scrollHeight;
}

// function formatTime(timestamp) {
//   let date = new Date(timestamp);
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12;
//   hours = hours ? hours : 12;
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
// }

//timebased
function timestampconvert(timestamp) {
  const date = new Date(timestamp);
  let day=date.getDate();
  let month =date.getMonth()+1;
  let year=date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampmformat = hours >= 12 ? `PM` : `AM`;
  hours %= 12;
  hours = hours || 12;
  const format_date=`${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year.toString()
      .padStart(4, "0")}`;

 const formattime= `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

    return `${format_date} ${formattime} ${ampmformat}`
}

// delete messages

function deletemess(message) {
  const messageofUser = JSON.parse(localStorage.getItem("user_Messages"));
  const existingmessageuser = messageofUser.findIndex(
    (mess) =>
      mess.sender_id === loginUserID && mess.receiver_id === show2.user_id
  );

  if (existingmessageuser !== -1) {
    const exitingmesss = messageofUser[existingmessageuser].messages.findIndex(
      (messs) =>
        messs.text === message.text && message.timestamp === messs.timestamp
    );
    if (exitingmesss !== -1) {
      messageofUser[existingmessageuser].messages.splice(exitingmesss, 1);
      localStorage.setItem("user_Messages", JSON.stringify(messageofUser));
    }
  }
}




