/* ================= LOGIN ================= */
function login(){
  if(adminEmail.value === "admin@admin.com" && adminPass.value === "123"){
    loginPage.classList.add("hide");
    adminHeader.classList.remove("hide");

    loadRealSchools();       // تحميل المدارس الحقيقية
    openPage("dashboard");

  } else {
    alert("Wrong admin credentials");
  }
}
function logout(){
  location.reload();
}
/* ================= NAVIGATION ================= */
function openPage(page){
  document.querySelectorAll(".page").forEach(p => p.classList.add("hide"));

  const el = document.getElementById(page);
  if(el) el.classList.remove("hide");

  if(page === "dashboard") updateDashboard();
}


/* ================= REAL DATA ================= */
let REAL_SCHOOLS = [];

/* تحميل المدارس من نفس داتا الموقع */
async function loadRealSchools(){
  try{
    const res = await fetch("backend_admin_panel/get_schools.php");
    REAL_SCHOOLS = await res.json();

    console.log("✅ Schools loaded:", REAL_SCHOOLS);

    loadReportSchools();   // عبّي Select التقارير
    updateDashboard();     // تحديث الإحصائيات بعد التحميل

  }catch(err){
    console.error("❌ Failed loading schools", err);
  }
}


/* ================= REPORT PAGE ================= */




function fillReportSelects(){
  const schoolSel = document.getElementById("reportSchoolSelect");
  const campSel   = document.getElementById("reportCampSelect");

  // Schools (real)
  REAL_SCHOOLS.forEach(s=>{
    const op = document.createElement("option");
    op.value = s.id;
    op.textContent = s.name;
    schoolSel.appendChild(op);
  });

  // Camps (fake for now)
  ["STEM Camp","Summer Tech Camp","Leadership Camp"].forEach((c,i)=>{
    const op = document.createElement("option");
    op.value = "camp-"+i;
    op.textContent = c;
    campSel.appendChild(op);
  });
}

/* Call after loading schools */
async function loadRealSchools(){
  try{
    const res = await fetch("backend_admin_panel/get_schools.php");
    REAL_SCHOOLS = await res.json();

    console.log("Schools loaded:", REAL_SCHOOLS);

    // 👇 هون بس، بعد ما الداتا توصل
    fillReportSelects();

  }catch(e){
    console.error("Failed loading schools", e);
  }
}
/* ================= REPORT LOGIC ================= */

function fillReportSchools(){
  const sel = reportSchoolSelect;
  sel.innerHTML = `<option value="">-- Select School --</option>`;

  REAL_SCHOOLS.forEach(s=>{
    const op = document.createElement("option");
    op.value = s.id;
    op.textContent = s.name + " (" + s.city + ")";
    sel.appendChild(op);
  });
}

/* نادِها بعد تحميل المدارس */
fillReportSchools();




/* ================= SMART DATA GENERATOR ================= */

// deterministic pseudo-random
function seededRandom(seed){
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateSchoolAnalytics(school){

  const seed = parseInt(school.id) * 97;

  // Base traffic by city size (logic بسيط)
  const cityFactor =
    school.city?.toLowerCase().includes("amman") ? 1.2 :
    school.city?.toLowerCase().includes("zarqa") ? 0.9 :
    0.75;

  const visits =
    Math.floor((4000 + seededRandom(seed) * 6000) * cityFactor);

  const conversionRate =
    0.04 + seededRandom(seed + 1) * 0.06; // 4% – 10%

  const applications =
    Math.floor(visits * conversionRate);

  const acceptanceRate =
    0.6 + seededRandom(seed + 2) * 0.25; // 60% – 85%

  const accepted =
    Math.floor(applications * acceptanceRate);

  const revenuePerStudent =
    700 + seededRandom(seed + 3) * 1800; // JOD

  const revenue =
    Math.floor(accepted * revenuePerStudent);

  const bounce =
    Math.floor(35 + seededRandom(seed + 4) * 30); // %

  const avgSession =
    Math.floor(45 + seededRandom(seed + 5) * 80); // sec

  const pagesPerVisit =
    (1.8 + seededRandom(seed + 6) * 2.5).toFixed(1);

  // Overall status
  let status = "good";
  if(conversionRate < 0.06 || bounce > 60) status = "warn";
  if(conversionRate < 0.05 || bounce > 70) status = "bad";

  return {
    visits,
    applications,
    accepted,
    revenue,
    bounce,
    avgSession,
    pagesPerVisit,
    conversion: (conversionRate * 100).toFixed(1),
    status
  };
}

/* ================= GENERATE REPORT ================= */

function generateSchoolReport(){
  const id = reportSchoolSelect.value;
  if(!id) return alert("Select a school");

  const school = REAL_SCHOOLS.find(s=>String(s.id)===String(id));
  if(!school) return;

  // 🔹 توليد البيانات الذكية
const data = generateSchoolAnalytics(school);

// 🔹 فك البيانات (Destructuring)
const visits        = data.visits;
const applications  = data.applications;
const accepted      = data.accepted;
const revenue       = data.revenue;

const bounce        = data.bounce;
const avgSession    = data.avgSession;
const pagesPerVisit = data.pagesPerVisit;
const conversion    = data.conversion;

// 🔹 حالة المدرسة العامة
const overallStatus =
  data.status === "good" ? "good" :
  data.status === "warn" ? "warn" : "bad";

const overallLabel =
  data.status === "good" ? "On Track" :
  data.status === "warn" ? "In Progress" :
  "At Risk";


  // const seed = parseInt(id) * 17;

  // const visits = 5000 + seed;
  // const applications = 300 + seed % 400;
  // const accepted = Math.floor(applications * (0.55 + (seed%10)/100));
  // const revenue = accepted * (900 + seed%300);

  fullReport.classList.remove("hide");
  generateBtn.classList.add("hide");
  resetBtn.classList.remove("hide");
  reportSchoolSelect.disabled = true;

  fullReport.innerHTML = `
    <div class="report-header">
          <p style="margin-top:20px; font-size:28px;">
      <b>${school.name}</b><br>
      ${school.city} • ${school.system}
    </p>
    </div>



    <div class="kpi-grid">
      <div class="kpi"><h2>${visits}</h2><small>Visits</small></div>
      <div class="kpi"><h2>${applications}</h2><small>Applications</small></div>
      <div class="kpi"><h2>${accepted}</h2><small>Accepted</small></div>
      <div class="kpi"><h2>${revenue}</h2><small>Revenue (JOD)</small></div>
    </div>

    <table class="health-table">
      <tr><th>Area</th><th>Status</th><th>Notes</th></tr>
      <tr><td>Enrollment</td><td class="ok">On Track</td><td>Strong interest</td></tr>
      <tr><td>Budget</td><td class="ok">On Track</td><td>Revenue stable</td></tr>
      <tr><td>Conversion</td><td class="warn">In Progress</td><td>Needs improvement</td></tr>
      <tr><td>Reputation</td><td class="ok">On Track</td><td>Positive feedback</td></tr>
    </table>

    <div class="section-box">
      <h3>Executive Summary</h3>
      <p>
        ${school.name} shows consistent weekly performance on EduChoice.
        Demand remains strong within ${school.city}, with revenue driven
        primarily by confirmed enrollments.
      </p>
    </div>

    <table class="schedule-table">
      <tr><th>Phase</th><th>Description</th><th>Status</th></tr>
      <tr><td>Admissions</td><td>Main intake period</td><td class="ok">Completed</td></tr>
      <tr><td>Marketing</td><td>Seasonal campaigns</td><td class="warn">In Progress</td></tr>
      <tr><td>Retention</td><td>Parent follow-ups</td><td>Planned</td></tr>
    </table>
    

    <div class="section-box">
      <h3>Recommendations</h3>
      <ul>
        <li>Increase visibility during enrollment peaks</li>
        <li>Improve conversion funnel efficiency</li>
        <li>Highlight premium academic programs</li>
      </ul>
    </div>

    <!-- ===== KPI DASHBOARD ===== -->
<div class="kpi-dashboard">

  <!-- KPI ROW -->
  <div class="kpi-row">
    <div class="kpi-box">
      <span>Total Visits</span>
      <h2 id="kpiVisits">203,687</h2>
    </div>

    <div class="kpi-box">
      <span>Avg Session</span>
      <h2 id="kpiSession">69 sec</h2>
    </div>

    <div class="kpi-box">
      <span>Pages / Visit</span>
      <h2 id="kpiPages">2.2</h2>
    </div>

    <div class="kpi-box">
      <span>Bounce Rate</span>
      <h2 id="kpiBounce">58%</h2>
    </div>

    <div class="kpi-box highlight">
      <span>Conversion</span>
      <h2 id="kpiConversion">13%</h2>
    </div>
  </div>
</div>

  `;
}

/* ================= RESET ================= */

function resetReport(){
  fullReport.innerHTML = "";
  fullReport.classList.add("hide");

  reportSchoolSelect.disabled = false;
  reportSchoolSelect.value = "";

  generateBtn.classList.remove("hide");
  resetBtn.classList.add("hide");
}

function exportReportPDF(){

  const report = document.getElementById("fullReport");
  if(!report){
    alert("Report not found");
    return;
  }

  const schoolName =
    document.querySelector(".report-header h1")?.innerText
    || "EduChoice_Report";

  const opt = {
    margin:       0.5,
    filename:     schoolName.replace(/\s+/g,"_") + "_Report.pdf",
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  {
      scale: 2,
      useCORS: true,
      scrollY: 0
    },
    jsPDF:        {
      unit: "in",
      format: "a4",
      orientation: "portrait"
    }
  };

  html2pdf().set(opt).from(report).save();
}

function exportPDF(){
  const report = document.getElementById("fullReport");

  if(!report){
    alert("Report not found");
    return;
  }

  html2pdf()
    .from(report)
    .set({
      margin: 0.5,
      filename: "EduChoice_Report.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    })
    .save();
}



document.addEventListener("DOMContentLoaded", loadAdminSchools);

function loadAdminSchools(){
  fetch("backend/admin/get_schools.php")
    .then(res=>{
      if(!res.ok) throw "Access denied";
      return res.json();
    })
    .then(renderAdminSchools)
    .catch(()=>{
      alert("Admin only");
      location.hash = "#login";
    });
}

function renderAdminSchools(list){
  const tbody = document.getElementById("schoolsTable");
  tbody.innerHTML = "";

  list.forEach(s=>{
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <strong>${s.name}</strong>
        <div class="muted">${s.email}</div>
      </td>
      <td>${s.system}</td>
      <td>${s.city}</td>
      <td>${stars(s.rating)}</td>
      <td>${s.applications}</td>
      <td>${s.plan}</td>
      <td>${s.status}</td>
      <td>
        <button onclick="viewSchool(${s.id})">👁</button>
        <button onclick="toggleSchool(${s.id})">⛔</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function stars(r){
  let out = "";
  for(let i=1;i<=5;i++){
    out += i <= r ? "★" : "☆";
  }
  return out;
}

function viewSchool(id){
  alert("View school ID: " + id);
}

function toggleSchool(id){
  alert("Suspend / Activate later – backend ready");
}
