<!DOCTYPE html>
<?php 
require __DIR__.'/include/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./CSS/style.css">
  <link rel="stylesheet" href="./CSS/all.css">
  <style id="clock-animate"></style>
  
  <title>ICONIC DREAM FOCUS</title>
   <link rel = "icon" href = "./assets/idf2.PNG" 
        type = "image/x-icon"> 
</head>
<body>
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
            <li><a href="#services" data-after="Services"><i class="fas fa-tools"></i> Services</a></li>
            <li><a href="#projects" data-after="Projects"><i class="fas fa-tasks"></i> Projects</a></li>
            <li><a href="#about" data-after="About"> <i class="fas fa-id-card"></i> About</a></li>
            <li><a href="#contact" data-after="Contact"><i class="fas fa-phone-alt"></i> Contact</a></li>
            <li><a href="#footer" data-after="Subscribe"><i class="fas fa-hands-helping"></i> Join Us</a></li>
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

  <!-- Service Section -->
  <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title"><span>S</span>ervices</h1>
      </div>
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="./assets/website.png"/></div>
          <h2>Website Development</h2>
          <p>Ideally, your website should bring in qualified customers that contact and purchase from you.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="./assets/web.png"/></div>
          <h2>Web App</h2>
          <p>We are an elite web development company that truly understands the client's vision. A user-friendly one.</p>
        </div>  
        <div class="service-item">
          <div class="icon"><img src="./assets/mob.png"/></div>
          <h2>Mobile App</h2>
          <p>A premium company with a team of dedicated mobile app developers who love creating apps.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="./assets/analy.png"/></div>
          <h2>Product Analysis</h2>
          <p>Examining product features, costs, availability, quality, appearance and other aspects.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="./assets/SAAS.png"/></div>
          <h2>SaaS</h2>
          <p>We develop saas application services for the companies for easy accessibility for the clients and customers.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="./assets/UI.PNG"/></div>
          <h2>UI/UX Designing</h2>
          <p>We Provide creative designs to your applications which are easily functionable with easy user interface.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="./assets/dig.png"/></div>
          <h2>Digital Marketing</h2>
          <p>The promotion of brands to connect with customers using the internet and other forms of digital communication.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- End Service Section -->

  <!-- Projects Section -->
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title"><span>P</span>rojects</h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>PARAMBARIYAM</h1>
            <h2>A Family App</h2>
            <p>Paarambariyam is India’s first Application for family and generation. Paarambariyam provides a platform where we can connect with all our family members and form a community where we can contact each and every one in our family, unlike other social media platforms where we share our activities everyday. Paarmabariyam is an initiative by our team to bring back the past life of communication with all our family members.</p>
          </div>
          <div class="project-img">
            <img src="./assets/PARAM.jpg" alt="img">
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>ZILLION DREAMZ</h1>
            <h2>Upcoming Social Media App</h2>
            <p>Zillion Dreamz, an amazing way to create and build upon better habits. It allows you to measure your progress so you know how to improve upon it, set targets and reminders, celebrate milestones, and view your journey across the weeks and months. It helps you get organized when it comes to tracking your goals and habits, assisting you in building the perfect routine to be successful in life.</p>
          </div>
          <div class="project-img">
            <img src="./assets/zd.png" alt="img">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Projects Section -->

  <!-- About Section -->
  <section id="about">
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <img src="./assets/profile.jpg" alt="img">
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title"><span>A</span>bout Us</h1>
        <h2>JOHN KIRAN E</h2>
        <h3>Founder/CEO - ICONIC DREAM FOCUS PVT LTD</h3>
        <p>Alumnus of Loyola-ICAM College of Engineering and Technology, Chennai. He is a very enthusiastic and outgoing person. He gives main importance to sports and fine arts. He has played many division level cricket tournaments, directed 3 short films and also acted in films. He is an active volunteer of Chennai Turns Pink and Chennai runners. He has also self-imposed himself in a few marathon and also participated in a program where they started to create awareness regarding breast cancer. After completing his Bachelor's degree, he worked in Hong Kong and Shanghai Banking Corporation for 3+ years as an Assistant Manager where the idea of connecting families together thourgh an application emerged and it turned out to be our first product, Paarambariyam.</p>
        <button onclick="document.location='team.php'">OUR IDF CREATORS</button>
     </div>
    </div>
  </section>
  <!-----------------end about section-------------->
  
  <!-- Contact Section -->
  <section id="contact">
    <div class="contact container">
      <div><h1 class="section-title"><span>C</span>ontact</h1></div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png"/></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+91 9176080075</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>ejohnkiran07@gmail.com</h2>
            <h2>icondf@gmail.com</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>New no. 28, Old no. 1005, Krishna Villa, 21st Main Road, Anna Nagar, Chennai</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->

  <!-- Footer -->
  <section id="footer">
    <div class="footer container">
      <div class="social-menu"> 
        <h4>Follow us on</h4> 
        <a href="http://facebook.com/IDFiconic" target="blank"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/ejohnkira/?hl=en" target="blank"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com/IconicIdf" target="blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/idf-iconic-b9bba8208/" target="blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.youtube.com/" target="blank"><i class="fab fa-youtube"></i></a>
    </div>
       <p>Copyright ©2021 All rights reserved | made by</p>
      <div class="logo">
       <img src="./assets/logo.PNG" alt="logo">
      </div> 
      <div class="move-up">
        <a href="#hero" ><i class="fas fa-arrow-circle-up fa-2x"></i></a>
      </div>
      <div class="content">
       <header>Become a Subscriber. Join Us!!</header>
     </div>
          <form action="#footer" method="POST">
             <?php 
             
               $userEmail = ""; 

$client=new Client();

$headers = [ 'authorization' => 'Bearer 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',
       'content-type'     => 'application/json'];
$body='';
$request='';
if(isset($_POST['subscribe'])){ 
        $subject = "ICONIC DREAM FOCUS PVT LTD - Thanks for subscribing us";
        $message = "Thank You for joining your hands with us. You'll always receive updates from us. And we won't share and sell your information.";
        $body = '{"personalizations":[{"to":[{"email":"'.$_POST['email'].'","name":"ICONIC DREAM FOCUS"}],"subject":"'.$subject.'"}],"content": [{"type": "text/plain", "value":"'.$message.'"}],"from":{"email":"idficonic@gmail.com","name":"Iconic Dream Focus"}}';
        
        $request = new Request('POST', 'https://api.sendgrid.com/v3/mail/send', $headers, $body);
             
                  
              try{
                $promise = $client->send($request);
             ?>
                 <!-- show success message once email send successfully -->
           
                <div class="alert success-alert">
                 <?php echo "Thanks for subscribing us. Kindly, check your mail!" ?>
                </div>
              <?php
                    $userEmail = "";
             }catch (RequestException $e){
              ?> 
              <!-- show error message if somehow mail can't be sent -->
             <div class="alert error-alert">
               <?php echo "Enter the valid Email Address/Failed while sending your mail. Check your Internet Connection!" ?>
             </div>
             <?php
                 }
             }
              ?>
             <div class="field">
               <input type="text" class="email" name="email" placeholder="Email Address" required value="<?php echo $userEmail ?>">
             </div>
              <div class="field btn">
                <div class="layer"></div>
                <button type="submit" name="subscribe">Subscribe</button>
             </div>
           </form>
    <div class="text">We do not share your information.</div>
  </div>
    
</section>
  <!-- End Footer -->
  
  <script src="./JS/all.js"></script>
  <script src="./JS/main.js"></script>
  <script src="./JS/Jquery3.5.1.min.js"></script>
  

</body>
</html>