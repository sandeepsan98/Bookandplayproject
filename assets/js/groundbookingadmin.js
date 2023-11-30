// json
const user_record = JSON.parse(localStorage.getItem("user_details"));
const sellerdata = JSON.parse(localStorage.getItem("groundadmin_details"));
const sellerloggedDta = JSON.parse(localStorage.getItem("seller_logged_in"));
const requestBooking = JSON.parse(localStorage.getItem("bookingInfo"));
const sellerId = sellerloggedDta[0].seller_Id;


let filterGroundrequest;
if(requestBooking==null){

}

else{
 filterGroundrequest = requestBooking.filter(
  (data) => data.seller_id == sellerId
);

 


console.log(filterGroundrequest);

if(filterGroundrequest.length==0){
  let maincon=document.querySelector(".main2");
  let ptag=document.createElement("h4")
  ptag.setAttribute("class","h5tag");
  ptag.innerHTML=`Hi You dont have any booking`
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

for (const request of filterGroundrequest) {
  const { request_user_id } = request;
  const userDetails = user_record.find(
    (users) => request_user_id === users.user_id
  );
  request.userDetail = userDetails;
}

console.log(JSON.stringify(filterGroundrequest, null, 2));

let childdiv;
let columndiv1;
let h4name;
let h4date;
let h4timing;
let h4sports;
let h4duration;
let h4players;
let h4courts;
let h4price;
let columndiv2;
let divbox1;
let divbox2;
let div_box4;
let div_box5;
let div_box6;
let div_box7;
let div_box8;
let btndecline;



for (let i = 0; i < filterGroundrequest.length; i++) {
  console.log(childdiv);
  childdiv = document.createElement("div");
  childdiv.setAttribute("class", "child");

  // columndiv1 = document.createElement("div");
  // columndiv1.setAttribute("class", "column1");
  // childdiv.append(columndiv1);

  // h4name = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4name.innerText = "User Name";
  // columndiv1.append(h4name);

  // h4date = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4date.innerText = "Date";
  // columndiv1.append(h4date);

  // h4timing = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4timing.innerText = "Timing";
  // columndiv1.append(h4timing);

  // h4sports = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4sports.innerText = "Sports";
  // columndiv1.append(h4sports);

  // h4duration = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4duration.innerText = "Duration";
  // columndiv1.append(h4duration);

  // h4players = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4players.innerText = "Players";
  // columndiv1.append(h4players);

  // h4courts = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4courts.innerText = "Court";
  // columndiv1.append(h4courts);

  // h4price = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4price.innerText = "Price";
  // columndiv1.append(h4price);

  // h4pay = document.createElement("h4");
  // // h4name.setAttribute("");
  // h4pay.innerText = "Payment";
  // columndiv1.append(h4pay);

  columndiv2 = document.createElement("div");
  columndiv2.setAttribute("class", "column2");
  childdiv.append(columndiv2);

  divbox1 = document.createElement("div");
  divbox1.setAttribute("class", "box1");
  divbox1.innerHTML = `<h4>User Name</h4>${filterGroundrequest[i].userDetail.user_email}`;
  columndiv2.append(divbox1);

  divbox2 = document.createElement("div");
  divbox2.setAttribute("class", "box2");
  divbox2.innerHTML =`<h4>Date</h4>${ filterGroundrequest[i].booking_Date}`;
  columndiv2.append(divbox2);

  divbox3 = document.createElement("div");
  divbox3.setAttribute("class", "box3");
  divbox3.innerHTML = ` <h4>Timing</h4>${filterGroundrequest[i].booking_time}`;
  columndiv2.append(divbox3);

  divbox4 = document.createElement("div");
  divbox4.setAttribute("class", "box4");
  divbox4.innerHTML = `<h4>Sports</h4>${filterGroundrequest[i].booking_sports}`;
  columndiv2.append(divbox4);

  if(filterGroundrequest[i].booking_duration=="Select an Option"){
    divbox5 = document.createElement("div");
    divbox5.setAttribute("class", "box5");
    divbox5.innerHTML = `<h4>Duration</h4> None`;
    columndiv2.append(divbox5);
  }
  else{
  divbox5 = document.createElement("div");
  divbox5.setAttribute("class", "box5");
  divbox5.innerHTML= `  <h4>Duration</h4> Extra ${filterGroundrequest[i].booking_duration} Hours`;
  columndiv2.append(divbox5);
  }

  divbox6 = document.createElement("div");
  divbox6.setAttribute("class", "box6");
  divbox6.innerHTML = ` <h4>Players</h4> ${filterGroundrequest[i].selected_players}`;
  columndiv2.append(divbox6);

  divbox7 = document.createElement("div");
  divbox7.setAttribute("class", "box7");
  divbox7.innerHTML = `<h4>Courts</h4>${filterGroundrequest[i].selectedCourts}`;
  columndiv2.append(divbox7);

  divbox8 = document.createElement("div");
  divbox8.setAttribute("class", "box8");
  divbox8.innerHTML =`<h4>Price</h4>${ filterGroundrequest[i].groundPrice}`;
  columndiv2.append(divbox8);


  divbox9 = document.createElement("div");
  divbox9.setAttribute("class", "box9");
  divbox9.innerHTML =`<h4>Payment</h4>${ filterGroundrequest[i].ground_payment}`;
  columndiv2.append(divbox9);

  // btnaccept=document.createElement("button");
  // btnaccept.setAttribute("class","acceptbtn");
  // btnaccept.setAttribute("value",filterGroundrequest[i]["ordered_id"]);
  // btnaccept.innerText="Accept"
  // childdiv.append(btnaccept)

  btndecline = document.createElement("button");
  btndecline.setAttribute("class", "declinebtn");
  btndecline.setAttribute("value", filterGroundrequest[i].ordered_id);
  btndecline.innerText = "Decline";
  childdiv.append(btndecline);

  // for displyingnone cancel nbtn after 20 minutes

  const bookingTime = filterGroundrequest[i].created_at;
  const currentdate = new Date().getTime();
  const diffinmills = Math.abs(bookingTime - currentdate);
  console.log(diffinmills);
  const diffmins = Math.floor(diffinmills / 60000);
  console.log(diffmins);
  // let cancelbook=document.querySelectorAll(".cancelbt")

  if (diffmins > 20) {
    btndecline.style.display = "none";
  } else {
    btndecline.style.display = "block";
  }

  document.querySelector(".parent").append(childdiv);
}
}
}
// const acceptbtn= document.querySelectorAll(".acceptbtn")

// acceptbtn.forEach((button)=>{
//     button.addEventListener("click",()=>{
//      let orderedId=button.value
//      console.log(orderedId);
//     //  let filterGroundrequest=JSON.parse(localStorage.getItem("bookingInfo")).filter((data)=>{
//     //    return data.seller_id==sellerId

//     //  })
//      let bookingindex=requestBooking.findIndex((booking)=>{
//       return  booking.ordered_id==orderedId
//      });
//      console.log(filterGroundrequest)
//      console.log(bookingindex)
//      console.log(requestBooking)

//      if(bookingindex
//         >-1){
//         requestBooking[bookingindex].booking_status="accepted";
//         console.log(requestBooking[bookingindex])
//         console.log(requestBooking)
//         localStorage.setItem("bookingInfo",JSON.stringify(requestBooking));
//         alert("booking accepted")
//      }
//   else{
//     alert(`${orderedId} not found`)
//   }
//     //  let filterRequest=JSON.parse(localStorage.getItem("bookingInfo"))

// // button.style.display="none"

// })

// })

const declinebtn = document.querySelectorAll(".declinebtn");
declinebtn.forEach((button) => {
  button.addEventListener("click", () => {
    const orderedId = button.value;
    console.log(orderedId);
    //  let filterGroundrequest=JSON.parse(localStorage.getItem("bookingInfo")).filter((data)=>{
    //    return data.seller_id==sellerId

    //  })
    const bookingindex = requestBooking.findIndex(
      (booking) => booking.ordered_id == orderedId
    );
    console.log(filterGroundrequest);
    console.log(bookingindex);
    console.log(requestBooking);

    if (bookingindex > -1) {
      if (confirm("Are you sure want to decline the booking")) {
        requestBooking[bookingindex].booking_status = "declined";
        requestBooking[bookingindex].booking_time = "";
        requestBooking[bookingindex].seller_id = "";

        console.log(requestBooking[bookingindex]);
        console.log(requestBooking);
        localStorage.setItem("bookingInfo", JSON.stringify(requestBooking));


        
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "bookandplay@gmail.com",
          Password: "6EC1D4698F820B43605EF4F4AAEC706EFA99",
          To: requestBooking[bookingindex].request_user_email,
          From: "sandeep909600@gmail.com",
          Subject: "Your Booking Confirmation code is here",
          Body: `Hi  Your ground is booked on this ${ requestBooking[bookingindex].booking_time
          } on ${requestBooking[bookingindex].booking_Date
          } is cancelled by the   seller the order id is${requestBooking[bookingindex].ordered_id
          } `,
        }).then((success) => {
          alert(
            "Your ground Booking is cancelled"
          );
        });

      } else {
      }
    } 
    //  let filterRequest=JSON.parse(localStorage.getItem("bookingInfo"))
  });
});

// console.log(filterGroundrequest);

// let usersid=filterGroundrequest["request_user_id"];
// console.log(usersid);

// function acceptRequest(){

// //  for(let i=0;i<requestBooking.length;i++){
// //     if(requestBooking[i]["ordered_id"]===orderedId){
// //   console.log(requestBooking[i]["ordered_id"]);
// //         requestBooking[i]["booking_status"]="accepted";
// //         console.log(requestBooking[i]["booking_status"]);

// // localStorage.setItem("bookingInfo",JSON.stringify(requestBooking))
// //         console.log("sandeep");
// //         break
// //     }
// //  }

// }
