const formContainer = document.querySelector(".formcontainer");
const fillBtn = document.querySelector(".fillbutton");
const closebtn = document.querySelector(".closebtn")

const fsidename = document.querySelector(".nameperson")

fillBtn.addEventListener("click", (e) => {
    e.preventDefault()

    formContainer.style.display = "block";
})


closebtn.addEventListener("click", (e) => {
    e.preventDefault()

    formContainer.style.display = "none";
})


const mainsidebar = document.querySelector(".sidebar2");
const myground = document.querySelector(".analytics");








//  form of ground detailsgetting form
const sellerdata = JSON.parse(localStorage.getItem("groundadmin_details"));
const sellerloggedDta = JSON.parse(localStorage.getItem("seller_logged_in"));

// console.log(sellerId);
const formButton = document.getElementById("formbtn");
const id_generator = Math.floor(Math.random() * 300);





let sellerId = sellerloggedDta[0].seller_Id


let groundRecords = JSON.parse(localStorage.getItem("ground_info"));


if(groundRecords==null){
// console.log("okokokokok");
}
else{

    for (let i = 0; i < groundRecords.length;i++) {
        // console.log("groundRecords[i]['seller_id']: ", groundRecords[i]['seller_id']);
        let groundsellerincludes = groundRecords[i]["seller_id"]
        if (sellerId == groundsellerincludes) {
            fillBtn.style.display = "none"
          
    
        }
        else {
            // fillBtn.style.display = "block"
        
        }
    }


}

// time l



let startTimeValue= null;
let endTimeValue=null;
const timePicker={
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K", 
    time_24hr: false,
  minuteIncrement: 60,
//   defaultDate: "12:00 AM",
  onChange: function(selectedDates, dateStr) {
    // Store selected start and end times in global variables
    if (this.input.id === "startTime") {
      startTime = dateStr;
    } else if (this.input.id === "endTime") {
      endTime = dateStr;
    }
    // localStorage.setItem("startTime", startTime);
    // localStorage.setItem("endTime", endTime);
  }

}
const startTimepicker = flatpickr("#startTime", timePicker);
const endTimepicker = flatpickr("#endTime", timePicker);

  


//ground filling

formButton.addEventListener("submit", e => {

    e.preventDefault();
    getSellerGround();



  
});
function getSellerGround() {
    const groundName = (document.getElementById("groname").value);
    const groundPlace = (document.getElementById("grolname").value);
    const Groundaddress = (document.getElementById("groaddress").value)
    const groundLocationLink = (document.getElementById("grolink").value);
    const groundImage1 = (document.getElementById("grimg1").value);
    const groundImage2 = (document.getElementById("grimg2").value);
    const groundImage3 = (document.getElementById("grimg3").value);
    const sportsAvail1 = (document.getElementById("sportsavail1").checked);
    const sportsAvail2 = (document.getElementById("sportsavail2").checked);
    const sportsAvail3 = (document.getElementById("sportsavail3").checked);
    // const groundTimingfrom = (document.getElementById("timingsfrom").value);
    // const groundTimingTo = (document.getElementById("timingsto").value);
    const groundRules = (document.getElementById("rules").value);
    const groundCity = (document.getElementById("sportsvalue").value);
    const groundPrice = (document.getElementById("amount").value);
    const groundincreasingPrice = (document.getElementById("increaseamount").value);
//    let  groundTimingFrom=starttimestring;
// let groundTimingTo=endTimestring
// console.log(starttimestring);
//   console.log(endTimestring);

const groundCourts=document.getElementById("sportscourts").value




    console.log(id_generator);
    let groundOwnerRecords = new Array();
    groundOwnerRecords = JSON.parse(localStorage.getItem("ground_info")) ?
        JSON.parse(localStorage.getItem("ground_info")) : []

    if (groundOwnerRecords.some((v) => {
        return v.seller_id === sellerId
    })) {
        alert("you have already submitted")
    }
    else {

        groundOwnerRecords.push({
            "seller_id": sellerId,
            "ground_id": id_generator,
            "ground_name": groundName,
            "ground_Place": groundPlace,
            "ground_Address": Groundaddress,
            "ground_locat_link": groundLocationLink,
            "groundimg1": groundImage1,
            "groundimg2": groundImage2,
            "groundimg3": groundImage3,
            "sport_avail_1": sportsAvail1,
            "sport_avail_2": sportsAvail2,
            "sport_avail_3": sportsAvail3,
            "ground_timing_from": startTime,
            "ground_timing_to": endTime,
            "ground_rules": groundRules,
            "ground_city": groundCity,
            "ground_price": groundPrice,
            "groundIncreasePrice":groundincreasingPrice,
            "groundCourt":groundCourts,
            "status": true
        });


    }

    localStorage.setItem("ground_info", JSON.stringify(groundOwnerRecords))
alert("Your GroundInfo is Submitted Successfully")
}







//admin proile edit//


const editbtn = document.getElementById("editbutton");
const sideBar2part = document.querySelector("div.sidebar2")
const containerprofile = document.querySelector("div.container2");



// editbtn.addEventListener("click", () => {

//     containerprofile.style.display = "block"


// })
const namebox = document.getElementById("name1")
const groundnamebox = document.getElementById("name2")
const user_email = document.getElementById("userEmail")
const user_phone = document.getElementById("phoneno1")
const user_password = document.getElementById("password");


for( let i=0;i<sellerdata.length;i++){

    if(sellerloggedDta[0]["seller_email"]==sellerdata[i]["seller_email"]){

        
fsidename.innerText=sellerdata[i]["seller_ground_name"];

namebox.value = sellerdata[i]["seller_name"];
groundnamebox.value = sellerdata[i]["seller_ground_name"];
user_email.value = sellerdata[i]["seller_email"];
user_phone.value = sellerdata[i]["seller_phoneno"];
user_password.value = sellerdata[i]["seller_password"];



    }
    
}


// edit update



// // edit
const editbutn = document.getElementById("formbox");
const editbutn1 = document.querySelector(".profile2");
editbutn.addEventListener("submit", (e) => {
    e.preventDefault()




    if (editbutn1.innerHTML == "Edit") {


        editbutn1.innerHTML = "Save"
        namebox.removeAttribute("disabled");
        groundnamebox.removeAttribute("disabled")
        user_phone.removeAttribute("disabled");
        user_password.removeAttribute("disabled")
       

    }

    else if (editbutn1.innerHTML == "Save") {
        editbutn1.innerHTML = "Edit";
        namebox.setAttribute("disabled", "");
        groundnamebox.setAttribute("disabled","")
        // user_email.setAttribute("disabled","")
        user_phone.setAttribute("disabled", "");
        user_password.setAttribute("disabled", "")
       

    sellerdata.find(e => {



        if (user_email.value == e["seller_email"]) {

         e["seller_ground_name"]=fsidename.innerText
            e["seller_name"] = namebox.value
            e["user_email"] = user_email.value
            e["seller_phoneno"] = user_phone.value
            e["seller_password"] = user_password.value
e["seller_ground_name"]=groundnamebox.value


            localStorage.setItem("groundadmin_details", JSON.stringify(sellerdata));



        }


    })  }



})






// password
let eye=document.querySelector(".eyesym i")
eye.addEventListener("click",()=>{
    // eye.setAttribute("class","fa-solid fa-eye")

    if(user_password.type=="password"){
       
        user_password.type="text"
     eye.classList.remove("fa-eye-slash");
     eye.classList.add("fa-eye")
    }
    else{
  
        user_password.type="password"
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash")
        
    }
    
})




// logout




const logOut = document.querySelector(".logout")
logOut.addEventListener("click", (e) => {

    const log_out = delete sellerloggedDta

    localStorage.setItem("seller_logged_in", log_out);
    window.location.href = "../../pages/admin/adminlogin.html"


})







// image ground




//profile image
const imageFileUpload = document.getElementById("input-file");
const imageShow = document.querySelector(".profileimg");
let ok = "../../assets/images/avatorprofile.jpg"
// const imageShow = document.querySelector(".profileimg");



imageFileUpload.addEventListener("change", (e) => {

    const file = e.target.files[0];

    // if (file != file.type.match("image.*")) {
    //     alert("please choose the image ");

    // };

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
        imageShow.src = e.target.result;

        const sellerdata = JSON.parse(localStorage.getItem("groundadmin_details"));
        const sellerloggedDta = JSON.parse(localStorage.getItem("seller_logged_in"));


        for (let i = 0; i < sellerdata.length; i++) {

            if (sellerloggedDta[0]["user_email"] == sellerdata[i]["user_email"]) {
                // let user_data;
                // user_data = {

                //     imagename: file.name,
                //     url: e.target.result
                // };
                // console.log(userRecords[i])
                // //4
                // console.log(userRecords[i]["imagename"])
                sellerdata[i]["imagename"] = file.name;
                sellerdata[i]["url"] = e.target.result;


                break;
            };


        }
        localStorage.setItem("groundadmin_details", JSON.stringify(sellerdata));
    };
    fileReader.readAsDataURL(file);




})


for (let i = 0; i < sellerdata.length; i++) {
    if (sellerloggedDta[0]["seller_email"] == sellerdata[i]["seller_email"]) {
        const savedImage = sellerdata[i];
        if (savedImage && savedImage.url) {
            imageShow.src = savedImage.url;
        }
        else {
            imageShow.src = "https://iili.io/HkW7U4S.jpg"
        }
        break;
    }
}


