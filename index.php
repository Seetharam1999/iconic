<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./CSS/style.css">
  <link rel="stylesheet" href="./CSS/all.css">
  <link rel="stylesheet" href="./CSS/aos.css">

  <style id="clock-animate"></style>
  <script src="https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert"></script>
  <title>ICONIC DREAM FOCUS</title>
   <link rel = "icon" href = "./assets/idf2.PNG" 
        type = "image/x-icon"> 
</head>
<body onload="load()">
<div id="loading"></div>
  <!-- Header -->
  <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero"><h1><span>I</span>conic <span>D</span>ream <span>F</span>ocus </h1></a>
        </div>
        <div class="nav-list">
          <div class="hamburger"><div class="bar"></div></div>
          <ul>
            <li><a href="#hero" data-after="Home"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="services.php" data-after="Services"><i class="fas fa-tools"></i> Services</a></li>
            <li><a href="aboutus.php" data-after="About"> <i class="fas fa-id-card"></i> About</a></li>
            <li><a href="blog.php" data-after="Blog"> <i class="fas fa-blog"></i> Blog</a></li>
            <li><a href="contact.php" data-after="Contact"><i class="fas fa-phone-alt"></i> Contact</a></li>
            <li><a href="payment.php" data-after="Payment"><i class="fas fa-credit-card"></i> Payment</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End Header -->


  <!-- Hero Section  -->
    <section id="hero">
      <div class="hero container">
        <div>
          <h1>We're the Tiny Creators <span></span></h1>
          <h1>Who save your time <span></span></h1>
          <h1>Through our Huge Ideas!! <span></span></h1>
        </div>
        <div class="clock">
          <div class="center-nut">
    </div>
    <div class="center-nut2">
    </div>
    <div class="indicator">
            <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    </div>
    <div class="sec-hand">
    </div>
    <div class="min-hand">
    </div>
    <div class="hr-hand">
    </div>
    </div>
        <div id="wrapper">
           <canvas id="canvas" width="1950px" height="800px"></canvas>
           <canvas id="canvasbg" width="1950px" height="800px"></canvas>
       </div>
    </section>
  <!-- End Hero Section  -->
  


  
  <script src="./JS/aos.js"></script>
  <script src="./JS/all.js"></script>
  <script src="./JS/main.js"></script>
  <script src="./JS/Jquery3.5.1.min.js"></script>
  <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script>

$(()=>{

$(".btn-2").click(()=>{
  
 $.ajax({
    type: "post",
    url: "include/sendemail.php",
    data: {
       email:$(".email").val(),
       subscribe:true
    },
    success: function(response) {
      swal("Thanks for joining us. You'll receive latest updates from us.").then(()=>{
        window.location.reload();
      })
    }
});
})
  
 
})
function load(){
setTimeout(()=>{
$("#loading").hide();
$("section").css("display","block");
},5600);


}
</script>

</body>
</html>
