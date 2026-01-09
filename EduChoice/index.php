<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>EduChoice — Schools Finder (Jordan)</title>
   <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
 <header class="app">
  <div class="container nav" role="navigation" aria-label="Main">
    <div class="brand">
      <div class="logo" aria-hidden="true">
<img src="assets/images/schools/Add a heading (2).png" alt="School Logo">
      </div>
      <!-- <h1 id="brand-title">EduChoice</h1> -->
    </div>
    <!-- القائمة الأساسية (للديسكتوب) -->
    <nav class="menu" id="menu">
      <a href="#home" data-i18n="nav_home" class="active">Home</a>
      <a href="#systems" data-i18n="nav_systems">Systems</a>
      <a href="#schools" data-i18n="nav_schools">Schools</a>
      <a href="#community" data-i18n="nav_community">Community</a>
      <a href="#compare" data-i18n="nav_compare">Compare</a>
      <a href="#about" data-i18n="nav_about">About</a>
      <a href="#payment" data-i18n="nav_payment">Payment</a>
      <a href="#profile" data-i18n="nav_profile">Profile</a>
      <a href="#login" class="btn"  data-i18n="nav_login" style="color: #0000ff; color:#0000ff;">Login</a>
    </nav>

    <div class="right">
      <div class="lang">
        <span class="muted" style="margin-right:8px">EN</span>
        <button id="toggleLang" class="switch" role="switch" aria-checked="false" aria-label="Toggle language">
          <span class="knob" aria-hidden="true"></span>
        </button>
        <span class="muted" style="margin-left:8px">AR</span>
      </div>
      <!-- زر الثلاث شحطات بجانب اللغة -->
      <div class="menu-btn" id="menuBtn">☰</div>
    </div>
  </div>
</header>

<!-- المنيو الجانبية -->
<nav class="sidebar" id="sidebar">
   <div class="logo" aria-hidden="true">
        <img src="photos/cab761e4-4b79-4bf6-a7e9-9c5837ff1729 (1).png" style="width: 100%; height: 100%;">
      </div>
  <a href="#home" data-i18n="nav_home" class="active">Home</a>
  <a href="#systems" data-i18n="nav_systems">Systems</a>
  <a href="#schools" data-i18n="nav_schools">Schools</a>
  <a href="#community" data-i18n="nav_community">Community</a>
  <a href="#compare" data-i18n="nav_compare">Compare</a>
  <a href="#about" data-i18n="nav_about">About</a>
  <a href="#payment" data-i18n="nav_payment">Payment</a>
  <a href="#Profile" data-i18n="nav_profile">Profile</a>
  <a href="#login" data-i18n="nav_login" style="color: rgb(0, 0, 157); font-size:larger;">Login</a>
</nav>
<!-- خلفية عند الفتح -->
<div id="overlay"></div>
<div class="spacer"></div>
  <!-- ===== Community Modal ===== -->
<div id="campModal" class="modal-overlay" aria-hidden="true" >
  <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="campModalTitle">
    <button class="modal-close" id="campModalClose" aria-label="Close">✖</button>
    <div id="campModalBody"></div>
  </div>
</div>
  <main>
















<section id="home" class="body">
  <div class="home-hero-image">  
    <img src="assets/images/schools/hero.jpg"   
    class="hero-img" alt="Schools in Jordan"> 
    <div class="overlay">
    </div>
  </div>

  <div class="content">
    <h2 data-i18n="home_head">Find the right school for your child in Jordan</h2>
    <div class="search-box">
      <div class="search-left">
        <input id="searchInput" type="text" placeholder="Search school name…" data-i18n-ph="ph_search"/>
        <button class="btn primary" id="btnSearch" data-i18n="btn_search">Search</button>
      </div>
      <div class="search-right">
        <button class="btn white" id="btnSystems" data-i18n="btn_systems">By System</button>
        <button class="btn white" id="btnCamps" data-i18n="btn_camps">Summer Camps</button>
      </div>
    </div>
  </div>

  <!-- حط النظام أسفل الهيرو -->
  <div class="systems-box">
    <div class="chip" data-system="IB">IB</div>
    <div class="chip" data-system="IGCSE">IGCSE</div>
    <div class="chip" data-system="SAT/AP">SAT/AP</div>
    <div class="chip" data-system="National">National</div>
    <div class="chip" data-system="Montessori">Montessori</div>
  </div>

<!-- Summer Camps Slider -->
<div class="camps-slider card">
  <h3 class="slider-title"  data-i18n="camp_ads">Summer Camps Ads</h3>
  <div class="slider-container" >
    <div class="slider-track" id="sliderTrack" >

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpkFWum2G7g8GCZwto703ufHeo7vDXWtgXdZsmQpv0Q&s"
           alt="Kids Summer Camp">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8_G1rWCDHtWiK5rd2UJn1coPKOO09_68k4bjl8-n0A&s"
           alt="STEM Robotics Camp">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENGFGC5n3N8oIOVQtzOZlQDKBFYKlYbhTIQqv3JO-Qg&s"
           alt="Adventure Camp">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01Gj2pG1zY0ci9tlNJPPtovaZbQO5cjnjuw&s"
           alt="Sports Camp">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExFmv6O6pWLsYsGvtfgrR3GSD6vh5HLAPUlKvw7Yufw&s">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxi_w0XDy2KGe6PVSrFH9BPPbmmgShBBHA1OZlg090sQ&s">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7gbNX4gA03K4MSvMLXkKVgmgyTsSh47SMA&s">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSx5y8JkRzoi2HXN11Ago0ArSee09WyVEM-HyF4xT7og&s">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLT09oTSM1bmacWfjMR0YtMLBEV3GAmJiK8Q&s">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwygTGwhDw7J9xtKwVVBrNcc5cMdjLSTJgg&s">
    </div>
  </div>
</div>


      <div class="text card" style="padding:50px;border-radius:20px;box-shadow:0 10px 30px rgba(31, 37, 99, 0.966); background-color: rgba(255, 255, 255, 1)" >
      <p style="font-size:28px;font-weight:800;margin-bottom:10px; color: rgb(44, 64, 138); text-align: center;"
   data-i18n="hero_title">
  EduChoice — The Smart Way to Find the Right School in Jordan
</p>
<p style="font-size:28px;font-weight:800;margin-bottom:10px; color: rgb(0, 0, 0); text-align: center;"
   data-i18n="hero_subtitle">
  We help parents compare schools by system, city, and rating, and apply in minutes.
</p>  

      </div>      
    </section>





    



    <!-- ===== COUNTERS (Home Only) ===== -->
<div id="homeCounters" class="home-counters">
  <div class="counter-box" >
    <div class="counter" data-target="57">0</div>
    <p class="label">Schools</p>
  </div>
  <div class="counter-box">
    <div class="counter" data-target="20">0</div>
    <p class="label">Camps</p>
  </div>
  <div class="counter-box">
    <div class="counter" data-target="139">0</div>
    <p class="label">Registered Users</p>
  </div>
</div>

    
    





    
<!-- SYSTEMS -->
<section id="systems" class="container">
  <h3 class="title" data-i18n="sys_title" style="text-align: center">
    Educational Systems
  </h3>

  <p class="subtitle" data-i18n="sys_sub" style="text-align: center;">
    Tap a system to see schools that teach it.
  </p>

  <div class="grid">

    <div class="sys card" data-system="IB">
      <div class="row" style="align-items:center">
        <div class="icon big" aria-hidden="true"></div>
        <h3 data-i18n="sys_ib_title">IB – International Baccalaureate</h3>
      </div>
      <p class="muted" data-i18n="sys_ib_desc">
        Inquiry-based global program for K–12.
      </p>
      <button class="btn black go" data-i18n="sys_ib_btn">
        See IB Schools →
      </button>
    </div>

    <div class="sys card" data-system="IGCSE">
      <div class="row" style="align-items:center">
        <div class="icon big"></div>
        <h3 data-i18n="sys_igcse_title">IGCSE / A-Level</h3>
      </div>
      <p class="muted" data-i18n="sys_igcse_desc">
        British curriculum with subject depth.
      </p>
      <button class="btn black go" data-i18n="sys_igcse_btn">
        See IGCSE Schools →
      </button>
    </div>

    <div class="sys card" data-system="SAT/AP">
      <div class="row" style="align-items:center">
        <div class="icon big"></div>
        <h3 data-i18n="sys_us_title">American (SAT / AP)</h3>
      </div>
      <p class="muted" data-i18n="sys_us_desc">
        Standards-based American track.
      </p>
      <button class="btn black go" data-i18n="sys_us_btn">
        See American Schools →
      </button>
    </div>

    <div class="sys card" data-system="National">
      <div class="row" style="align-items:center">
        <div class="icon big"></div>
        <h3 data-i18n="sys_nat_title">Jordanian National</h3>
      </div>
      <p class="muted" data-i18n="sys_nat_desc">
        Ministry of Education curriculum.
      </p>
      <button class="btn black go" data-i18n="sys_nat_btn">
        See National Schools →
      </button>
    </div>

    <div class="sys card" data-system="Montessori">
      <div class="row" style="align-items:center">
        <div class="icon big"></div>
        <h3 data-i18n="sys_mont_title">Montessori (Early Years)</h3>
      </div>
      <p class="muted" data-i18n="sys_mont_desc">
        Child-led learning environments.
      </p>
      <button class="btn black go" data-i18n="sys_mont_btn">
        See Montessori →
      </button>
    </div>

  </div>
</section>



    <!-- SCHOOLS (RESULTS) -->
    <section id="schools" class="container">
      <h3 class="title" data-i18n="sch_title" style="text-align: center;" >Schools</h3>
      <p class="subtitle" data-i18n="sch_sub" style="text-align: center;">Review and compare the best schools in Jordan by educational system, city, and rating.</p>
      

      <div class="card" style="padding:14px">
        <div class="filters">
          <div>
            <label data-i18n="f_system">System</label>
            <select id="fSystem">
  <option value="">All</option>
  <option value="IB">IB</option>
  <option value="IGCSE">IGCSE</option>
  <option value="SAT/AP">SAT/AP</option>
  <option value="National">National</option>
  <option value="Montessori">Montessori</option>
</select>

          </div>
          <div>
            <label data-i18n="f_city">City</label>
            <select id="fCity">
              <option value="">All</option>
<option value="Khalda" data-i18n="district-khalda">Khalda</option>
<option value="Tabarbour" data-i18n="district-tabarbour">Tabarbour</option>
<option value="Jabal Amman" data-i18n="district-jabal-amman">Jabal Amman</option>
<option value="Jabal Al-Hussein" data-i18n="district-jabal-al-hussein">Jabal Al-Hussein</option>
<option value="Al-Jubaiha" data-i18n="district-al-jubaiha">Al-Jubaiha</option>
<option value="Deir Ghbar" data-i18n="district-deir-ghbar">Deir Ghbar</option>
<option value="Dabouq" data-i18n="district-dabouq">Dabouq</option>
<option value="Mecca Street" data-i18n="district-mecca-street">Mecca Street</option>
<option value="Airport Road" data-i18n="district-airport-road">Airport Road</option>
<option value="Naour / West Amman" data-i18n="district-naour-west-amman">Naour / West Amman</option>
<option value="Shmeisani" data-i18n="district-shmeisani">Shmeisani</option>
<option value="Wadi Essir" data-i18n="district-wadi-essir">Wadi Essir</option>
<option value="Jabal Al-Weibdeh" data-i18n="district-jabal-al-weibdeh">Jabal Al-Weibdeh</option>
<option value="Tla’ Al Ali" data-i18n="district-tlaa-al-ali">Tla’ Al Ali</option>
<option value="Gardens / Al-Bustan" data-i18n="district-gardens-al-bustan">Gardens / Al-Bustan</option>
            </select>
          </div>
          <div>
            <label data-i18n="f_min">Min. Rating</label>
            <select id="fMin">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label data-i18n="f_sort">Sort</label>
            <select id="fSort">
              <option value="name">Name (A–Z)</option>
              <option value="rating">Top Rated</option>
              <option value="city">City</option>
            </select>
          </div>
          <div style="display:flex;align-items:flex-end;gap:8px">
            <button class="btn" id="btnClear">Clear</button>
            <button class="btn primary" id="btnApply">Filter</button>
          </div>
        </div>
      </div>
          <div id="results" class="grid"  style="margin-top:12px;grid-template-columns:1fr" aria-live="polite" >
            
      </div>

    </section>

    <!-- SCHOOL DETAIL -->
    <section id="school" class="container hide">
      <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:6px">
        <h3 class="title"  id="schoolName">School</h3>
        <div class="row">
            <!-- SCHOOL DETAIL -->
<button type="button" class="btn back-btn" id="backToSchools">
  ← <span >Back</span>
</button>
          <button class="btn accent" id="applyNow" data-i18n="apply_now">Contact School</button>
        </div>
      </div>

      <div class="top">
        <div class="card" style="padding:16px">
          <div class="row" style="align-items:center;gap:12px;margin-bottom:10px">
            <div id="schoolRating" class="rating"></div>
            <span class="muted" id="schoolMeta"></span>
          </div>

          <div class="gallery" id="schoolGallery">
            <img src="photos/download (1).jpeg">
            <img src="photos/download (2).jpeg">
            <img src="photos/download (3).jpeg">
          </div>

          <p id="schoolDesc" style="margin-top:10px"></p>
        </div>














        <!--  خريطة المدرسة -->
<div class="card school">

  <div id="schoolMap" style="height:350px; width: 335px; border-radius:12px;"></div>
</div>

<!-- تحميل مكتبة Leaflet (يفضّل وضعها مرة واحدة فقط داخل <head> بالصفحة) -->
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- تفعيل الخريطة -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("schoolMap").setView([31.9539, 35.9106], 14); // 📍 موقع عمان

  // خلفية الخريطة من OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // مؤشر موقع المدرسة
  L.marker([31.9539, 35.9106])
    .addTo(map)
    .bindPopup("<b>school location Center</b><br>Amman, Jordan")
    .openPopup();
});
</script>














      <div class="columns">
        <div class="card" style="padding:16px;flex:1">
          <h4 style="margin-bottom:8px" data-i18n="programs">Programs & Highlights</h4>
          <h5>

          </h5>
          <ul id="schoolPrograms" style="margin-left:16px;line-height:1.7"></ul>
        </div>

         <div class="card" style="padding:16px;flex:1">
          <h4 style="margin-bottom:8px" data-i18n="fees"> fees</h4>
          <h5></h5>
          <ul id="schoolfees" style="margin-left:16px;line-height:1.7"></ul>
        </div>
        <div class="card" style="padding:16px;min-width:320px">
          <h4 style="margin-bottom:8px" data-i18n="contact">Contact</h4>
          <div id="schoolContact"></div>
        </div>  
      </div>
    </section>

    <!-- summer camps   -->
     
    <section id="community" class="container hide"  >
      <h3 class="title"  data-i18n="camp_title" style="text-align: center;">Community & Summer Camps</h3>
      <p class="subtitle" data-i18n="camp_sub"style="text-align: center;">Centers and schools offering seasonal camps and activities.</p>
      
      
      <div class="card" style="padding:16px">
        <div id="campList" class="grid" style="grid-template-columns:1fr"></div>
        

        <!-- Camp Application Page -->
<section id="campApplay" class="container" style="display:none">
  <div class="card">
    <h2>Apply for Camp</h2>
    <p id="campName" class="muted" style="margin-bottom:10px"></p>
    <form id="campAppForm">
      <input type="text" placeholder="Child Name" required />
      <input type="number" placeholder="Age" required />
      <input type="text" placeholder="Parent Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <textarea placeholder="Notes..." rows="4"></textarea>
      <button type="submit" class="btn blue">Submit</button>
    </form>
  </div>
</section>
      </div>
    </section>
<!-- compare -->
<section id="compare" class="container hide">

  <h3 class="title" style="text-align:center;" data-i18n="cmp_title">
    Compare
  </h3>
  <p class="subtitle" style="text-align:center;" data-i18n="cmp_sub">
    Choose what you want to compare
  </p>

  <!-- اختيار نوع المقارنة -->
  <div class="row" style="justify-content:center; margin-top:100px; gap:45px;">
    <button class="btn primary" id="showCompareSchools" data-i18n="cmp_btn_schools">
      Compare Schools
    </button>
    <button class="btn black" id="showCompareCamps" data-i18n="cmp_btn_camps">
      Compare Camps
    </button>
    <div id="spasss" style="margin-top:105px;"></div>
  </div>

  <!-- واجهة مقارنة المدارس -->
  <div id="schoolCompareBox" class="card hide" style="padding:20px; margin-top:25px;">
    <div class="row" style="margin-top:20px;">
      <select id="schoolA" class="btn">
        <option value="" data-i18n="cmp_select_school1">Select School 1</option>
      </select>

      <select id="schoolB" class="btn">
        <option value="" data-i18n="cmp_select_school2">Select School 2</option>
      </select>

      <button class="btn primary" id="btnCompareSchools" style="margin-left:10px;"
              data-i18n="cmp_compare">
        Compare
      </button>
      <button class="btn primary" id="compareResetBtn" style="color:#ffffff;"
              data-i18n="cmp_reset">
        Reset Compare
      </button>
    </div>

    <div id="schoolCompareResult" style="margin-top:25px;"></div>
  </div>

  <!-- واجهة مقارنة الكامبات -->
  <div id="campCompareBox" class="card hide" style="padding:20px; margin-top:25px;">
    <div class="row" style="margin-top:20px;">
      <select id="campA" class="btn">
        <option value="" data-i18n="cmp_select_camp1">Select Camp 1</option>
      </select>

      <select id="campB" class="btn" style="margin-left:10px;">
        <option value="" data-i18n="cmp_select_camp2">Select Camp 2</option>
      </select>

      <button class="btn primary" id="btnCompareCamps" style="margin-left:10px;"
              data-i18n="cmp_compare">
        Compare
      </button>
      <button class="btn primary" id="compareResetBtn1" style="color:#ffffff;"
              data-i18n="cmp_reset">
        Reset Compare
      </button>
    </div>

    <div id="campCompareResult" style="margin-top:25px;"></div>
  </div>

</section>



<!-- APPLY -->

<section id="apply" class="container hide">
  <h3 class="title" data-i18n="apply_title">Enrollment Request</h3>
  <p class="subtitle" data-i18n="apply_sub">
    Fill in the form and the school will receive your request by email.
  </p>

  <form id="applySchoolForm"
        class="card"
        style="padding:16px"
        method="POST"
        action="apply.php">

    <!-- ✅ هذا السطر الجديد الوحيد المهم -->
    <input type="hidden" name="school_id" id="applySchoolId">

    <div class="grid2">
      <div>
        <label data-i18n="af_child">Child Full Name</label>
        <input type="text" name="child" required />
      </div>

      <div>
        <label data-i18n="af_age">Age</label>
        <input type="text" name="age" required />
      </div>

      <div>
        <label data-i18n="af_gender">Gender</label>
        <select name="gender" required>
          <option value="Male" data-i18n="gender_male">Male</option>
          <option value="Female" data-i18n="gender_female">Female</option>
        </select>
      </div>

      <div>
        <label data-i18n="af_grade">Desired Grade</label>
        <select name="grade">
          <option>KG1</option><option>KG2</option>
          <option>G1</option><option>G2</option><option>G3</option>
          <option>G4</option><option>G5</option><option>G6</option>
          <option>G7</option><option>G8</option><option>G9</option>
          <option>G10</option><option>G11</option><option>G12</option>
        </select>
      </div>

      <div>
        <label data-i18n="af_parent">Parent Full Name</label>
        <input type="text" name="parent" required />
      </div>

      <div>
        <label data-i18n="af_email">Email</label>
        <input type="email" name="email" required />
      </div>

      <div>
        <label data-i18n="af_phone">Phone</label>
        <input type="tel" name="phone" required />
      </div>

      <div>
        <label data-i18n="af_school">Target School</label>
        <input type="text" name="school" id="applySchool" />
      </div>

      <div style="grid-column:1/-1">
        <label data-i18n="af_note">Notes</label>
        <textarea
          name="notes"
          data-i18n-ph="af_note_ph"
          placeholder="Any additional info…"></textarea>
      </div>
    </div>

    <div class="row" style="margin-top:12px;justify-content:flex-end">
      <button type="button" class="btn" onclick="go('#schools')">
        ← <span data-i18n="back">Back</span>
      </button>
      <button class="btn primary" type="submit" data-i18n="af_submit">
        Submit
      </button>
    </div>
  </form>
</section>

<!-- CAMP APPLY -->
<section id="applycamp" class="container hide">
  <h3 class="title" data-i18n="apply_title">Enrollment Request</h3>
  <p class="subtitle" data-i18n="apply_sub">
    Fill in the form and the school will receive your request by email.
  </p>

<form id="applyCampForm" class="card" style="padding:16px">
    <div class="grid2">
      <div>
        <label data-i18n="af_child">Child Full Name</label>
        <input type="text" name="child" required />
      </div>

      <div>
        <label data-i18n="af_age">Age</label>
        <input type="text" name="age" required />
      </div>

      <div>
        <label data-i18n="af_gender">Gender</label>
        <select name="gender" required>
          <option value="Male" data-i18n="gender_male">Male</option>
          <option value="Female" data-i18n="gender_female">Female</option>
        </select>
      </div>

      <div>
        <label data-i18n="af_grade">Desired Grade</label>
        <select name="grade">
          <option>KG1</option><option>KG2</option>
          <option>G1</option><option>G2</option><option>G3</option>
          <option>G4</option><option>G5</option><option>G6</option>
          <option>G7</option><option>G8</option><option>G9</option>
          <option>G10</option><option>G11</option><option>G12</option>
        </select>
      </div>

      <div>
        <label data-i18n="af_parent">Parent Full Name</label>
        <input type="text" name="parent" required />
      </div>

      <div>
        <label data-i18n="af_email">Email</label>
        <input type="email" name="email" required />
      </div>

      <div>
        <label data-i18n="af_phone">Phone</label>
        <input type="tel" name="phone" required />
      </div>

      <div>
        <label data-i18n="af_camp">Target Camp</label>
        <input type="text" name="school" id="applycamp" />
      </div>

      <div style="grid-column:1/-1">
        <label data-i18n="af_note">Notes</label>
        <textarea name="notes" data-i18n-ph="af_note_ph"
          placeholder="Any additional info…"></textarea>
      </div>
    </div>

    <div class="row" style="margin-top:12px;justify-content:flex-end">
      <button type="button" class="btn" onclick="go('#community')">
        ← <span data-i18n="back">Back</span>
      </button>
      <button class="btn primary" type="submit" data-i18n="af_submit_login">
        Submit & Continue to Login
      </button>
    </div>
  </form>
</section>




   <!--ABOUT -->


    <section id="about" class="container hide">
      <h3 class="title" data-i18n="about_title">About EduChoice</h3>
       <p class="subtitle" data-i18n="about_sub">A Web Science project serving families across Jordan.</p> 
      <p>
  <h2 style="color:#2b4375; font-size:28px; margin-bottom:16px; text-align:center;"data-i18n="about_99"
>🎓 EduChoice — The Smart Way to Find the Right School in Jordan</h2>
  <p data-i18n="about_88">
    In today’s fast-paced digital world, parents face a growing challenge in finding the right school that truly fits their children’s needs —
    whether it’s based on educational systems, location, or budget.
    <strong >EduChoice</strong> was created to solve that challenge by becoming Jordan’s first smart, bilingual (Arabic–English) school-finding platform,
    connecting parents, schools, and educational communities in one place.
  </p>

  <p data-i18n="about_77">
    <strong >EduChoice</strong> is a modern web platform that helps parents discover, compare, and apply to private and international schools across Jordan.
    Through an intuitive interface and advanced filtering tools, users can explore schools by education system (IB, IGCSE, SAT, National, Montessori, etc.),
    city or area, rating, tuition, and facilities.
    The platform also includes summer camps, community features, and school profiles that showcase each institution’s strengths, photos, programs, and location on an interactive map.
  </p>

  <h3 style="color:#000000; margin-top:30px;" data-i18n="about_55">💻 Key Features</h3>



  <ul style="margin-left:20px;">
    <li data-i18n="about_11"><strong data-i18n="about_1">Bilingual Design:</strong> Seamless switch between Arabic and English for full accessibility.</li>
    <li data-i18n="about_12"><strong data-i18n="about_2">Smart Filtering:</strong> Search schools by name, system, location, or rating.</li>
    <li data-i18n="about_13"><strong data-i18n="about_3">Interactive Map:</strong> View schools’ real locations on a map powered by Leaflet or Google Maps.</li>
    <li data-i18n="about_14"><strong data-i18n="about_4">School Profiles:</strong> Each school has its own detailed profile page with academic programs, photos, and contact info.</li>
    <li data-i18n="about_15"><strong data-i18n="about_5">Parent & School Login:</strong> Parents can apply and track, while schools manage their data and subscriptions.</li>
    <li data-i18n="about_16"><strong about_6>Secure Payment System:</strong> Transparent payment process for school listings and promotions.</li>
  </ul>




  <h3 style="color:#000000; margin-top:30px;" data-i18n="about_21"> Why EduChoice Matters</h3>
  <p data-i18n="about_22">
    Jordan’s private education sector is growing rapidly, but information is scattered and often outdated across hundreds of sources.
    EduChoice centralizes all this data into one trusted platform — empowering parents with better choices and helping schools reach the right audience.
    It increases transparency, simplifies admission, and encourages digital transformation in education.
  </p>

  <h3 style="color:#000000; margin-top:30px;" data-i18n="about_33"> Future Vision</h3>
  <p data-i18n="about44">
    EduChoice aims to expand with AI-based school recommendations, parent dashboards, and a dedicated mobile app.
    The long-term vision includes partnerships with educational authorities to enhance transparency and data accuracy.
  </p>

  <h3 style="color:#000000; margin-top:30px;" data-i18n="about_55"> Conclusion</h3>
  <p data-i18n="about_66">
    <strong>EduChoice</strong> is more than just a website — it’s a movement toward smarter, data-driven education choices in Jordan.
    By combining technology, user experience, and educational insight, EduChoice bridges families and schools to build a brighter, more connected educational future.
  </p>

      </p>

       
      <div class="row" style="align-items:flex-start">
        <div class="card" style="padding:16px;flex:2">
          <h4 data-i18n="about_h1">Mission</h4>
          <p2 style="margin:8px 0" data-i18n="about_p1">We help parents compare schools by system, city, and rating, and apply in minutes.</p2>
          <h4 style="margin-top:12px" data-i18n="about_h2">Scope</h4>
          <ul style="margin-left:18px;line-height:1.8">
            <li data-i18n="about_l1">Public and private schools in Jordan</li>
            <li data-i18n="about_l2">Systems: IB, IGCSE/A-Level, SAT/AP, National, Montessori</li>
            <li data-i18n="about_l3">Parents & Schools dual login</li>
            <li data-i18n="about_l4">Owner payment to boost listing</li>
            <li data-i18n="about_l5">Community: activity & camp finder</li>
          </ul>
        </div>


        <div class="card" style="padding:16px;flex:1">
          <h4 data-i18n="about_stats">the mis department </h4>
          <div class="row" style="margin-top:8px">
            <div class="stat"><strong id="statSchools">0</strong><span class="muted" data-i18n="st_sch">developers</span></div>
            <div class="stat"><strong id="statCities">0</strong><span class="muted" data-i18n="st_cit">Cities</span></div>
            <div class="stat"><strong id="statCamps">0</strong><span class="muted" data-i18n="st_cam">Camps</span></div>

            
          </div>
        </div>
      </div>
    </section>
    </section> 



<!-- login and signup -->
<!-- ============== LOGIN / SIGNUP PAGE ============== -->
<section id="login" class="container">
  <div class="auth-box">
    <div class="brand">
      <h1 data-i18n="brand_name">EduChoice</h1>
      <p class="muted" data-i18n="auth_subtitle">
        Login or create an account to continue.
      </p>
    </div>

    <div class="tabs">
      <button class="tab active" data-tab="login" data-i18n="tab_login">Login</button>
      <button class="tab" data-tab="signup" data-i18n="tab_signup">Signup</button>
    </div>

    <!-- LOGIN PANEL -->
    <div class="auth-panel" data-panel="login">
      <form id="loginForm" class="form">
        <div class="field">
          <label data-i18n="label_email">Email</label>
          <input id="loginEmail" type="email" required
                 placeholder="example@mail.com"
                 data-i18n-ph="ph_email" />
        </div>

        <div class="field">
          <label data-i18n="label_password">Password</label>
          <input id="loginPass" type="password" required
                 placeholder="******"
                 data-i18n-ph="ph_password" />
        </div>

        <div class="field">
          <label data-i18n="label_login_as">Login as</label>
          <select id="loginRole" required>
            <option value="parent" data-i18n="role_parent">Parent</option>
            <option value="school" data-i18n="role_school">School</option>
            <option value="admin" data-i18n="role_admin">Admin</option>
          </select>
          <p class="hint muted" data-i18n="login_hint">
            Role here is for UI; real role comes from DB session.
          </p>
        </div>

        <button class="btn primary" type="submit" data-i18n="btn_login">
          Login
        </button>
        <div id="loginMsg" class="msg"></div>
      </form>
    </div>

    <!-- SIGNUP PANEL -->
    <div class="auth-panel hide" data-panel="signup">
      <form id="signupForm" class="form">
        <div class="field">
          <label data-i18n="label_fullname">Full Name</label>
          <input id="signupName" type="text" required
                 placeholder="Your Name"
                 data-i18n-ph="ph_name" />
        </div>

        <div class="field">
          <label data-i18n="label_email">Email</label>
          <input id="signupEmail" type="email" required
                 placeholder="example@mail.com"
                 data-i18n-ph="ph_email" />
        </div>

        <div class="field">
          <label data-i18n="label_password">Password</label>
          <input id="signupPass" type="password" required
                 placeholder="min 6 chars"
                 data-i18n-ph="ph_password_min" />
        </div>

        <div class="field">
          <label data-i18n="label_signup_as">Signup as</label>
          <select id="signupRole" required>
            <option value="parent" data-i18n="role_parent">Parent</option>
            <option value="school" data-i18n="role_school">School</option>
            <option value="admin" data-i18n="role_admin">Admin</option>
          </select>
        </div>

        <button class="btn primary" type="submit" data-i18n="btn_signup">
          Create Account
        </button>
        <div id="signupMsg" class="msg"></div>
      </form>
    </div>

  </div>
</section>



























<!--dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd-->





<section id="profile" class="container hide">





<!-- Parent Profile --> 
<div id="profile_parent" class="hide"> 


  <aside class="pp-sidebar">

      <h2 data-i18n="pp_title">profile_parent</h2>

    <button class="active" data-tab="overview" data-i18n="pp_overview">Overview</button>
    <button data-tab="children" data-i18n="pp_children">Children</button>
    <button data-tab="applications" data-i18n="pp_applications">Applications</button>
    <button data-tab="account" data-i18n="pp_account">Account</button>
    <button data-tab="settings" data-i18n="pp_settings">Settings</button>
    <button data-tab="privacy" data-i18n="pp_privacy">Privacy</button>
    <button class="logout-btn" onclick="logout()" data-i18n="pp_logout">Logout</button>
  </aside>

  <!-- Main Content --> 
  <main class="pp-content"> 

    <!-- Overview Section --> 
    <div class="pp-section active" id="overview">
      <div class="pp-card">
        <h3 data-i18n="pp_your_info">Your Information</h3> 

        <div class="pp-grid">
          <div>
            <label data-i18n="pp_full_name">Full Name</label> 
            <input type="text" id="pName" placeholder="Your Name" data-i18n-ph="pp_ph_name"> 
          </div>

          <div>
            <label data-i18n="pp_email">Email</label>
            <input type="email" id="pEmail" placeholder="example@mail.com" data-i18n-ph="pp_ph_email">
          </div>

          <div>
            <label data-i18n="pp_phone">Phone</label> 
            <input type="text" id="pPhone" placeholder="+962-79-0000000" data-i18n-ph="pp_ph_phone">
          </div>
        </div>

        <button class="save-btn" onclick="saveParentOverview()" data-i18n="pp_save">Save</button>
      </div> 
    </div> 

    <!-- Children Section -->
    <div class="pp-section" id="children">
      <div class="pp-card">
        <h3 data-i18n="pp_children_title">Your Children</h3>

        <div class="pp-grid" style="margin-bottom:20px">
          <div>
            <label data-i18n="pp_city">City of Residence</label>
            <select id="parentCity">
              <option value="" data-i18n="select">Select...</option>
              <option value="" data-i18n="all">All</option>

              <!-- districts already translated -->
              <option value="Khalda" data-i18n="district-khalda">Khalda</option>
              <option value="Tabarbour" data-i18n="district-tabarbour">Tabarbour</option>
              <option value="Jabal Amman" data-i18n="district-jabal-amman">Jabal Amman</option>
              <option value="Jabal Al-Hussein" data-i18n="district-jabal-al-hussein">Jabal Al-Hussein</option>
              <option value="Al-Jubaiha" data-i18n="district-al-jubaiha">Al-Jubaiha</option>
              <option value="Deir Ghbar" data-i18n="district-deir-ghbar">Deir Ghbar</option>
              <option value="Dabouq" data-i18n="district-dabouq">Dabouq</option>
              <option value="Mecca Street" data-i18n="district-mecca-street">Mecca Street</option>
              <option value="Airport Road" data-i18n="district-airport-road">Airport Road</option>
              <option value="Naour / West Amman" data-i18n="district-naour-west-amman">Naour / West Amman</option>
              <option value="Shmeisani" data-i18n="district-shmeisani">Shmeisani</option>
              <option value="Wadi Essir" data-i18n="district-wadi-essir">Wadi Essir</option>
              <option value="Jabal Al-Weibdeh" data-i18n="district-jabal-al-weibdeh">Jabal Al-Weibdeh</option>
              <option value="Tla’ Al Ali" data-i18n="district-tlaa-al-ali">Tla’ Al Ali</option>
              <option value="Gardens / Al-Bustan" data-i18n="district-gardens-al-bustan">Gardens / Al-Bustan</option>
            </select>
          </div>
        </div>

        <div class="pp-grid" style="margin-bottom:20px">
          <div>
            <label data-i18n="pp_children_count">Number of Children</label>
            <select id="childrenCount">
              <option value="" data-i18n="select">Select...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div id="childrenForms"></div>

        <button class="save-btn" onclick="saveChildren()" data-i18n="pp_save_children">Save Children</button>
      </div>
    </div>

    <!-- Applications Section -->
    <div class="pp-section" id="applications">
      <div class="pp-card">
        <h3 data-i18n="pp_applications">Applications</h3>
        <div id="parentApplications"></div>
      </div>
    </div>

    <!-- Account Section --> 
    <div class="pp-section" id="account">
      <div class="pp-card">
        <h3 data-i18n="pp_account_settings">Account Settings</h3>

        <label data-i18n="pp_new_password">New Password</label>
        <input type="password" placeholder="Enter new password" data-i18n-ph="pp_ph_new_password">

        <label data-i18n="pp_confirm_password">Confirm Password</label>
        <input type="password" placeholder="Confirm password" data-i18n-ph="pp_ph_confirm_password">

        <button class="save-btn" data-i18n="pp_update_password">Update Password</button>
      </div>
    </div>

    <!-- Settings Section -->
    <div class="pp-section" id="settings">
      <div class="pp-card">
        <h3 data-i18n="pp_general_settings">General Settings</h3>

        <label data-i18n="pp_language">Language</label>
        <select>
          <option data-i18n="lang_en">English</option>
          <option data-i18n="lang_ar">Arabic</option>
        </select>

        <label data-i18n="pp_notifications">Notifications</label>
        <select>
          <option data-i18n="pp_notify_all">All notifications</option>
          <option data-i18n="pp_notify_email">Email only</option>
          <option data-i18n="pp_notify_off">Off</option>
        </select>

        <button class="save-btn" data-i18n="pp_save_settings">Save Settings</button>
      </div>
    </div>

    <!-- Privacy Section --> 
    <div class="pp-section" id="privacy">
      <div class="pp-card danger-zone">
        <h3 style="color:red;" data-i18n="pp_danger">Danger Zone</h3>
        <p class="muted" data-i18n="pp_delete_warning">
          Once you delete your account, all data will be removed forever.
        </p>
        <button class="delete-btn" data-i18n="pp_delete_account">Delete Account</button>
      </div>
    </div>

  </main>
</div>
















   <!-- =============================================== profile_school=============================================== -->





<!-- School Profile -->
<div id="profile_school" class="hide">

  <!-- Sidebar -->
  <aside class="sp-sidebar">


    <h2 data-i18n="sp_dashboard">Profile School</h2>



    <button class="active" data-tab="overview" data-i18n="sp_overview">Overview</button>
    <button data-tab="info" data-i18n="sp_info">School Info</button>
    <button data-tab="programs" data-i18n="sp_programs">Programs</button>
    <button data-tab="fees" data-i18n="sp_fees">Tuition Fees</button>
    <button data-tab="gallery" data-i18n="sp_gallery">Gallery</button>
    <button data-tab="location" data-i18n="sp_location">Location</button>
    <button data-tab="admissions" data-i18n="sp_admissions">Admissions</button>
    <button data-tab="settings" data-i18n="sp_settings">Settings</button>

    <button class="logout-btn" onclick="logout()" data-i18n="sp_logout">Logout</button>
  </aside>

  <!-- Main Content -->
  <main class="sp-content">

    <!-- Overview -->
    <div class="sp-section active" id="overview">
      <div class="sp-card">
        <h3 data-i18n="sp_welcome">Welcome to Your School Profile</h3>
        <p class="muted" data-i18n="sp_overview_desc">
          Review and manage your school's public information.
        </p>

        <div class="sp-grid">

          <div class="sp-stat">
            <h4>0</h4>
            <p class="muted" data-i18n="sp_applications_received">
              Profile Visits
            </p>
          </div>
          <div class="sp-stat">
            <h4>0</h4>
            <p class="muted" data-i18n="sp_applications_received">
              Applications Received
            </p>
          </div>

          <div class="sp-stat">
            <h4>0</h4>
            <p class="muted" data-i18n="sp_acceptance">Acceptance</p>
          </div>
        </div>
      </div>
    </div>

    <!-- School Info -->
    <div class="sp-section" id="info">
      <div class="sp-card">
        <h3 data-i18n="sp_school_info">School Information</h3>

        

        <label data-i18n="sp_school_name">School Name</label>
        <input type="text" id="name_en" placeholder="Enter school name" data-i18n-ph="sp_ph_school_name">

        <label data-i18n="sp_school_desc">General Description</label>
        <textarea id="description_en" rows="5" placeholder="Write a general introduction..." data-i18n-ph="sp_ph_school_desc"></textarea>

        <label data-i18n="sp_email">Email</label>
        <input type="email" id="email" placeholder="info@school.jo" data-i18n-ph="sp_ph_email">

        <label data-i18n="sp_phone">Phone</label>
        <input type="text" id="phone" placeholder="+962-6-000000" data-i18n-ph="sp_ph_phone">

        <label data-i18n="sp_website">Website</label>
        <input type="text" id="website" placeholder="www.school.jo" data-i18n-ph="sp_ph_website">

        <button class="save-btn" id="saveSchoolInfo" type="button" data-i18n="sp_save">
          Save
        </button>
      </div>
    </div>

    <!-- Programs -->
    <div class="sp-section" id="programs">
      <div class="sp-card">
        <h3 data-i18n="sp_programs_title">Programs Offered</h3>

        <label data-i18n="sp_select_programs">Select Programs</label>
        <select id="programs_select" multiple>
          <option value="IB">IB</option>
          <option value="IGCSE">IGCSE</option>
          <option value="SAT">SAT</option>
          <option value="National">National</option>
          <option value="Montessori">Montessori</option>
          <option value="STEM">STEM</option>
        </select>

        <button class="save-btn" id="savePrograms" type="button" data-i18n="sp_save">
          Save
        </button>
      </div>
    </div>

    <!-- Fees -->
    <div class="sp-section" id="fees">
      <div class="sp-card">
        <h3 data-i18n="sp_fees_title">Tuition Fees</h3>

        <label data-i18n="sp_fees_by_grade">Fees by Grade</label>
        <textarea id="fees_text" rows="6" data-i18n-ph="sp_ph_fees"></textarea>

        <div id="feesDisplay"></div>

        <button class="save-btn" id="saveFees" type="button" data-i18n="sp_save">
          Save
        </button>
      </div>
    </div>

    <!-- Gallery -->
    <div class="sp-section" id="gallery">
      <div class="sp-card">
        <h3 data-i18n="sp_gallery_title">Upload Gallery Photos</h3>

        <input type="file" id="galleryInput" multiple accept="image/*">

        <div id="schoolGallery"></div>

        <button class="save-btn" id="saveGallery" type="button" data-i18n="sp_upload">
          Upload
        </button>
      </div>
    </div>

    <!-- Location -->
    <div class="sp-section" id="location">
      <div class="sp-card">
        <h3 data-i18n="sp_location_title">School Location</h3>

        <label data-i18n="sp_address">Address</label>
        <input type="text" id="address" placeholder="Amman - Khalda - Beside ..." data-i18n-ph="sp_ph_address">

        <label data-i18n="sp_lat">Latitude</label>
        <input type="text" id="lat">

        <label data-i18n="sp_lng">Longitude</label>
        <input type="text" id="lng">

        <div class="map-box"></div>

        <button class="save-btn" id="saveLocation" type="button" data-i18n="sp_save_location">
          Save Location
        </button>
      </div>
    </div>




    <div class="sp-section" id="admissions">

      <div class="sp-card">
        <h3>Received Applications</h3>
        <div id="applicationsList"></div>
        
      </div>
    </div>







     <!-- Privacy Section --> 
      <div class="sp-section" id="settings">
      
    <!-- <div class="pp-section" id="privacy"> -->
      <div class="pp-card danger-zone">
        <h3 style="color:red;" data-i18n="pp_danger">Danger Zone</h3>
        <p class="muted" data-i18n="pp_delete_warning">
          Once you delete your account, all data will be removed forever.
        </p>
<button class="delete-btn" id="deleteSchoolAccount" data-i18n="pp_delete_account">
  Delete Account
</button>
      </div>
    </div>




    <!-- Settings -->
    <!-- <div class="sp-section" id="settings">
      
      <div class="sp-card">
        <h3 data-i18n="sp_settings_title">Settings</h3>

        <label data-i18n="sp_visibility">Profile Visibility</label>
        <select>
          <option data-i18n="sp_public">Public</option>
          <option data-i18n="sp_private">Private</option>
        </select>

        <label data-i18n="sp_notifications">Notifications</label>
        <select>
          <option data-i18n="sp_notify_all">All</option>
          <option data-i18n="sp_notify_email">Email Only</option>
          <option data-i18n="sp_notify_off">Off</option>
        </select>

        <button class="save-btn" data-i18n="sp_save_settings">
          Save Settings
        </button>
      </div>
    </div> -->







  </main>
</div>























   <!-- =============================================== profile_admin=============================================== -->
<!-- Admin Profile -->
<div id="profile_admin" class="hide">


  <aside>
      <h2 data-i18n="ap_title">Admin Panel</h2>

    <button class="active" data-tab="overview" data-i18n="ap_overview">Overview</button>
    <button data-tab="schools" data-i18n="ap_schools">Manage Schools</button>
    <button data-tab="parents" data-i18n="ap_parents">Manage Parents</button>
    <button data-tab="applications" data-i18n="ap_applications">Applications</button>
    <button data-tab="reports" data-i18n="ap_reports">Reports</button>
    <button data-tab="settings" data-i18n="ap_settings">Settings</button>

    <button class="logout-btn" onclick="logout()" data-i18n="ap_logout">Logout</button>
  </aside>

  <!-- Main Content -->
  <main class="ap-content">

    <!-- Overview -->
    <div class="ap-section active" id="overview">
      <div class="ap-card">
        <h3 data-i18n="ap_platform_overview">Platform Overview</h3>

        <div class="ap-grid3">
          <div class="ap-stat">
            <h4>132</h4>
            <p class="muted" data-i18n="ap_registered_schools">Registered Schools</p>
          </div>
          <div class="ap-stat">
            <h4>418</h4>
            <p class="muted" data-i18n="ap_parent_accounts">Parents Accounts</p>
          </div>
          <div class="ap-stat">
            <h4>164</h4>
            <p class="muted" data-i18n="ap_total_applications">Total Applications</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Manage Schools -->
    <div class="ap-section" id="schools">
      <div class="ap-card">
        <h3 data-i18n="ap_schools_list">Schools List</h3>

        <div class="list-item">
          <div>
            <strong>International Academy Amman</strong>
            <p class="muted">IB • Amman</p>
          </div>
          <button class="list-btn" data-i18n="ap_edit">Edit</button>
        </div>

        <div class="list-item">
          <div>
            <strong>Amman Academy</strong>
            <p class="muted">IB • Amman</p>
          </div>
          <button class="list-btn" data-i18n="ap_edit">Edit</button>
        </div>
      </div>
    </div>

    <!-- Manage Parents -->
    <div class="ap-section" id="parents">
      <div class="ap-card">
        <h3 data-i18n="ap_parents_accounts">Parents Accounts</h3>

        <div class="list-item">
          <div>
            <strong>Mohammad Khaled</strong>
            <p class="muted" data-i18n="ap_children_2">2 Children</p>
          </div>
          <button class="list-btn" data-i18n="ap_view">View</button>
        </div>

        <div class="list-item">
          <div>
            <strong>Sara Ahmad</strong>
            <p class="muted" data-i18n="ap_children_1">1 Child</p>
          </div>
          <button class="list-btn" data-i18n="ap_view">View</button>
        </div>
      </div>
    </div>

    <!-- Applications -->
    <div class="ap-section" id="applications">
      <div class="ap-card">
        <h3 data-i18n="ap_applications">Applications</h3>

        <div class="list-item">
          <div>
            <strong>International Academy</strong>
            <p class="muted" data-i18n="ap_app_from_1">
              From: Ali Hassan — Grade 1
            </p>
          </div>
          <span class="status pending" data-i18n="status_pending">Pending</span>
        </div>

        <div class="list-item">
          <div>
            <strong>Amman Academy</strong>
            <p class="muted" data-i18n="ap_app_from_2">
              From: Lara Shaheen — KG2
            </p>
          </div>
          <span class="status accepted" data-i18n="status_accepted">Accepted</span>
        </div>
      </div>
    </div>

    <!-- Reports -->
    <div class="ap-section" id="reports">
      <div class="ap-card">
        <h3 data-i18n="ap_reports">Reports</h3>
        <p class="muted" data-i18n="ap_reports_desc">
          Performance, insights, and overall system analytics.
        </p>

        <textarea rows="6" placeholder="Write admin notes here..." data-i18n-ph="ap_ph_notes"></textarea>

        <button class="save-btn" data-i18n="ap_save_notes">Save Notes</button>
      </div>
    </div>

    <!-- Settings -->
    <div class="ap-section" id="settings">
      <div class="ap-card">
        <h3 data-i18n="ap_platform_settings">Platform Settings</h3>

        <label data-i18n="ap_system_mode">System Mode</label>
        <select>
          <option data-i18n="ap_mode_normal">Normal</option>
          <option data-i18n="ap_mode_maintenance">Maintenance Mode</option>
        </select>

        <label data-i18n="ap_admin_email">Admin Email</label>
        <input type="email" placeholder="admin@educhoice.jo" data-i18n-ph="ap_ph_admin_email">

        <button class="save-btn" data-i18n="ap_save_settings">Save Settings</button>
      </div>
    </div>

  </main>
</div>

</section>


  
 <!-- =============================================== Profiles=============================================== -->






























 


    <!-- PAYMENT -->
<!-- PAYMENT -->
<section id="payment" class="container hide">
  <h3 class="title" data-i18n="pay_title">Payment & Plans (Schools)</h3>
  <p class="subtitle" data-i18n="pay_sub">
    Boost your visibility. Secure checkout placeholder (integrate later).
  </p>

  <div class="pricing">

    <div class="card plan">
      <h4 data-i18n="plan_basic">Basic</h4>
      <p class="muted" style="margin:6px 0" data-i18n="plan_basic_price">
        JOD 100 / yearly
      </p>
      <ul style="margin-left:18px;line-height:1.8">
        <li data-i18n="plan_basic_f1">verified badge</li>
        <li data-i18n="plan_basic_f2">search listing</li>
        <li data-i18n="plan_basic_f3">basic info</li>
      </ul>
      <button id="btnFreePlan" class="btn primary" style="margin-top:10px"
              data-i18n="plan_current">
        Current
      </button>
    </div>

    <div class="card plan">
      <h4 data-i18n="plan_pro">Pro</h4>
      <p class="muted" style="margin:6px 0" data-i18n="plan_pro_price">
        JOD 200 / yearly
      </p>
      <ul style="margin-left:18px;line-height:1.8">
        <li data-i18n="plan_pro_f1">
          Basic + posts (news/events/open days), higher in search
        </li>
        <li data-i18n="plan_pro_f2">Priority in results</li>
        <li data-i18n="plan_pro_f3">Applications export</li>
      </ul>
      <button class="btn primary" style="margin-top:10px"
              data-i18n="plan_choose_pro"
              onclick="alertMsg('Mock payment flow')">
        Choose Pro
      </button>
    </div>

    <div class="card plan">
      <h4 data-i18n="plan_premium">Premium</h4>
      <p class="muted" style="margin:6px 0" data-i18n="plan_premium_price">
        JOD 250 / yearly
      </p>
      <ul style="margin-left:18px;line-height:1.8">
        <li data-i18n="plan_premium_f1">Standard + homepage featured</li>
        <li data-i18n="plan_premium_f2">priority search</li>
        <li data-i18n="plan_premium_f3">banners</li>
        <li data-i18n="plan_premium_f4">comparison boost</li>
        <li data-i18n="plan_premium_f5">priority support</li>
      </ul>
      <button class="btn primary" style="margin-top:10px ; color: #eeeef4;"
              data-i18n="plan_choose_premium"
              onclick="alertMsg('Mock payment flow')">
        Choose Premium
      </button>
    </div>

  </div>
</section>



<!--auuuuuuuuuuuuuuuu-->

<footer class="site-footer">
  <div class="footer-container">

    <!-- BRAND -->
    <div class="footer-brand">
      <img src="assets/images/schools/Add a heading (2).png"
           style="width:130px;height:130px;border-radius:29px;;place-items:center;font-weight:2100"
           alt="EduChoice Logo">
      <p data-i18n="footer_brand_desc">
        Your smart guide to finding the best schools & educational communities in Jordan.
      </p>
    </div>

    <!-- QUICK LINKS -->
    <div class="footer-col">
      <h4 data-i18n="footer_quick_links">Quick Links</h4>
      <ul>
        <li><a href="#home" data-i18n="nav_home">Home</a></li>
        <li><a href="#systems" data-i18n="nav_systems">Educational Systems</a></li>
        <li><a href="#schools" data-i18n="nav_schools">Schools</a></li>
        <li><a href="#community" data-i18n="nav_camps">Summer Camps</a></li>
        <li><a href="#compare" data-i18n="nav_compare">Compare</a></li>
        <li><a href="#about" data-i18n="nav_about">About EduChoice</a></li>
      </ul>
    </div>

    <!-- FOR PARENTS -->
    <div class="footer-col">
      <h4 data-i18n="footer_for_parents">For Parents</h4>
      <ul>
        <li data-i18n="fp_1">✔ Compare schools by system</li>
        <li data-i18n="fp_2">✔ Search by city & rating</li>
        <li data-i18n="fp_3">✔ Apply directly online</li>
        <li data-i18n="fp_4">✔ Discover summer camps</li>
        <li data-i18n="fp_5">✔ Bilingual experience (AR / EN)</li>
      </ul>
    </div>

    <!-- CONTACT -->
    <div class="footer-col">
      <h4 data-i18n="footer_contact">Contact Us</h4>
      <p data-i18n="contact_city">Amman, Jordan</p>
      <p>+962 77 643 6116</p>
      <p>educhoice@gmail.edu.jo</p>

      <div class="socials">
        <a href="#"><span class="chip">Facebook</span></a>
        <a href="https://www.instagram.com/educhoice1" target="_blank"><span class="chip">Instagram</span></a>
        <a href="#"><span class="chip">LinkedIn</span></a>
        <a href="#"><span class="chip">X</span></a>
      </div>
    </div>

  </div>

  <!-- BOTTOM -->
  <div class="footer-bottom">
    © <span id="year"></span>
    <span data-i18n="footer_rights">EduChoice — All Rights Reserved</span>
    <span class="muted" data-i18n="footer_project">
      | Web Science Project · MIS
    </span>
  </div>
</footer>

 <script src="assets/js/script.js"></script>
</body>
</html>
