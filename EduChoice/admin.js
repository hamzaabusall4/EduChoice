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

    console.log(" Schools loaded:", REAL_SCHOOLS);

    loadReportSchools();   // عبّي Select التقارير
    updateDashboard();     // تحديث الإحصائيات بعد التحميل

  }catch(err){
    console.error(" Failed loading schools", err);
  }
}


/* ================= REPORT PAGE ================= */





/* ================= ELEMENTS ================= */
const dataTypeSelect = document.getElementById("dataType");

const schoolsSection = document.getElementById("schoolsSection");
const parentsSection = document.getElementById("parentsSection");

const schoolsTable = document.getElementById("schoolsTable");
const parentsTable = document.getElementById("parentsTable");

/* ================= SWITCH VIEW ================= */
dataTypeSelect.addEventListener("change", () => {
  const value = dataTypeSelect.value;

  // اخفاء الكل
  schoolsSection.classList.add("hide");
  parentsSection.classList.add("hide");

  if (value === "schools") {
    schoolsSection.classList.remove("hide");
    loadSchools();
  }

  if (value === "parents") {
    parentsSection.classList.remove("hide");
    loadParents();
  }
});





/* ================= LOAD SCHOOLS ================= */
async function loadSchools() {
  schoolsTable.innerHTML = `<tr><td colspan="6">Loading...</td></tr>`;

  try {
    const res = await fetch("/EduChoice3/admin_panel/backend_admin_panel/get_schools.php");

    const data = await res.json();

    schoolsTable.innerHTML = "";

    if (!data.length) {
      schoolsTable.innerHTML = `<tr><td colspan="6">No schools found</td></tr>`;
      return;
    }

    data.forEach(s => {
  schoolsTable.innerHTML += `
    <tr>
      <td>${s.name}</td>
      <td>${s.system || '-'}</td>
      <td>${s.city || '-'}</td>
      <td>${s.email || '-'}</td>
      <td><span class="badge success">Active</span></td>
      <td>
        <button class="btn small" onclick="editSchool(${s.id})">Edit</button>
        <button class="btn small danger" onclick="deleteSchool(${s.id})">Delete</button>
      </td>
    </tr>
  `;
});


  } catch (e) {
    console.error(e);
    schoolsTable.innerHTML =
      `<tr><td colspan="6">Error loading schools</td></tr>`;
  }
}







async function loadUsers() {
  parentsTable.innerHTML =
    `<tr><td colspan="5">Loading...</td></tr>`;

  try {
    const res = await fetch(
      "/EduChoice3/admin_panel/backend_admin_panel/get_users.php"
    );
    const data = await res.json();

    parentsTable.innerHTML = "";

    if (!data.length) {
      parentsTable.innerHTML =
        `<tr><td colspan="5">No users found</td></tr>`;
      return;
    }

   data.forEach(u => {
  parentsTable.innerHTML += `
    <tr>
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.role}</td>
      <td>${u.created_at}</td>
      <td>
        <button class="btn small" onclick="editUser(${u.id})">Edit</button>
        <button class="btn small danger" onclick="deleteUser(${u.id})">Delete</button>
      </td>
    </tr>
  `;
});


  } catch (e) {
    console.error(e);
    parentsTable.innerHTML =
      `<tr><td colspan="5">Error loading users</td></tr>`;
  }
}

function editSchool(id){ alert(id); }
function editUser(id){ alert(id); }



dataTypeSelect.addEventListener("change", () => {
  parentsSection.classList.add("hide");

  if (dataTypeSelect.value === "users") {
    parentsSection.classList.remove("hide");
    loadUsers();
  }
});


/////////////ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ



function deleteUser(id) {
  if (!confirm("Delete this user?")) return;

  fetch("/EduChoice3/admin_panel/backend_admin_panel/delete_user.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })
  .then(res => res.json())
  .then(r => {
    if (r.success) {
      loadUsers();
    } else {
      alert("Delete failed");
    }
  });
}


////////////////










/////////////////////////////
function deleteSchool(id) {
  if (!confirm("Delete this school?")) return;

  fetch("/EduChoice3/admin_panel/backend_admin_panel/delete_school.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })
  .then(res => res.text())   // 👈 مهم
  .then(t => {
    console.log("RESPONSE:", t);
    alert(t);
  });
}



/////////////ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ


function editUser(id, oldName, oldRole) {
  const name = prompt("Edit name:", oldName);
  if (name === null) return;

  const role = prompt("Edit role (admin / school / parent):", oldRole);
  if (role === null) return;

  fetch("/EduChoice3/admin_panel/backend_admin_panel/edit_user.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, role })
  })
  .then(res => res.json())
  .then(r => {
    if (r.success) loadUsers();
    else alert("Update failed");
  });
}

/////////////////





/* ======================================================
   ADMIN FINANCIAL REPORT - FULL MOCK JS
   ====================================================== */

/* ====== BASIC HELPERS ====== */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function calcGrowth(arr) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) out.push(0);
    else out.push((((arr[i] - arr[i - 1]) / arr[i - 1]) * 100).toFixed(1));
  }
  return out;
}

/* ====== MOCK LOGIC CONFIG ====== */
const BASE_YEAR = 2024;

const BASE_VALUES = {
  schools: 1800,
  camps: 900,
  ads: 500
};

const YEAR_GROWTH = {
  schools: 1.12,
  camps: 1.20,
  ads: 1.15
};

const MONTH_FACTORS = [
  0.75, 0.8, 0.9, 1.0, 1.1, 1.3,
  1.5, 1.45, 1.1, 1.0, 1.05, 1.2
];

const MONTH_NAMES = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

/* ====== BUSINESS EVENTS ====== */
const EVENTS = {
  2024: {
    3:  { ads: 1.4, note: "Spring Ads Campaign" },
    6:  { camps: 1.6, note: "Summer Camps Peak" }
  },
  2025: {
    2:  { schools: 1.2, note: "New School Partnerships" },
    7:  { camps: 1.8, note: "Record Summer Registrations" },
    11: { ads: 1.5, note: "Admissions Marketing Campaign" }
  },
  2026: {
    1:  { schools: 1.15, note: "Platform Expansion" },
    8:  { camps: 1.7, note: "Regional Camps Launch" }
  }
};

/* ====== GENERATE YEAR DATA ====== */
function generateYearData(year) {
  const diff = year - BASE_YEAR;

  const schoolBase =
    BASE_VALUES.schools * Math.pow(YEAR_GROWTH.schools, diff);
  const campBase =
    BASE_VALUES.camps * Math.pow(YEAR_GROWTH.camps, diff);
  const adsBase =
    BASE_VALUES.ads * Math.pow(YEAR_GROWTH.ads, diff);

  let months = [];

  for (let i = 0; i < 12; i++) {
    const factor = MONTH_FACTORS[i];
    const event = EVENTS[year]?.[i];

    let s = schoolBase * factor;
    let c = campBase * factor * (i >= 5 && i <= 8 ? 1.25 : 0.9);
    let a = adsBase * factor * (i >= 2 && i <= 4 ? 1.2 : 1);

    if (event?.schools) s *= event.schools;
    if (event?.camps)   c *= event.camps;
    if (event?.ads)     a *= event.ads;

    months.push({
      month: MONTH_NAMES[i],
      schools: Math.round(s),
      camps: Math.round(c),
      ads: Math.round(a),
      note: event?.note || ""
    });
  }

  return months;
}

/* ====== ALL REPORT DATA ====== */
const REPORT_DATA = {
  2024: generateYearData(2024),
  2025: generateYearData(2025),
  2026: generateYearData(2026)
};

/* ====== CHART INSTANCES ====== */
let chartMonthly, chartPie, chartYearly, chartGrowth;

/* ======================================================
   MAIN LOAD FUNCTION
   ====================================================== */
function loadFinancialReport() {

  const year  = document.getElementById("filterYear").value;
  const month = document.getElementById("filterMonth").value;

  let data = REPORT_DATA[year];

  if (month !== "all") {
    data = data.slice(month - 1, month);
  }

  updateKPIs(data);
  updateTable(data);
  renderCharts(data, year);
}

/* ====== KPIs ====== */
function updateKPIs(data) {
  let schools = 0, camps = 0, ads = 0;

  data.forEach(d => {
    schools += d.schools;
    camps   += d.camps;
    ads     += d.ads;
  });

  kpiSchools.textContent = schools + " JOD";
  kpiCamps.textContent   = camps + " JOD";
  kpiAds.textContent     = ads + " JOD";
  kpiTotal.textContent  = (schools + camps + ads) + " JOD";
}

/* ====== TABLE ====== */
function updateTable(data) {
  const tbody = document.getElementById("adminReportTable");
  tbody.innerHTML = "";

  let prevTotal = null;

  data.forEach(d => {
    const total = d.schools + d.camps + d.ads;
    let growth = "-";

    if (prevTotal !== null) {
      growth = (((total - prevTotal) / prevTotal) * 100).toFixed(1) + "%";
    }

    prevTotal = total;

    tbody.innerHTML += `
      <tr>
        <td>${d.month}</td>
        <td>${d.schools}</td>
        <td>${d.camps}</td>
        <td>${d.ads}</td>
        <td><b>${total}</b></td>
        <td>${growth}</td>
      </tr>
    `;
  });
}

/* ====== CHARTS ====== */
function renderCharts(data, year) {

  const labels  = data.map(d => d.month);
  const totals  = data.map(d => d.schools + d.camps + d.ads);
  const schools = data.map(d => d.schools);
  const camps   = data.map(d => d.camps);
  const ads     = data.map(d => d.ads);

  chartMonthly?.destroy();
  chartPie?.destroy();
  chartYearly?.destroy();
  chartGrowth?.destroy();

  chartMonthly = new Chart(chartMonthlyRevenue, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Total Revenue (JOD)",
        data: totals,
        borderWidth: 3,
        tension: 0.35
      }]
    }
  });

  chartPie = new Chart(chartRevenuePie, {
    type: "pie",
    data: {
      labels: ["Schools", "Camps", "Ads"],
      datasets: [{
        data: [sum(schools), sum(camps), sum(ads)]
      }]
    }
  });

  chartYearly = new Chart(chartYearlyRevenue, {
    type: "bar",
    data: {
      labels: ["2024", year],
      datasets: [{
        label: "Total Revenue",
        data: [
          sum(REPORT_DATA[2024].map(x => x.schools + x.camps + x.ads)),
          sum(totals)
        ]
      }]
    }
  });

  chartGrowth = new Chart(chartGrowthRate, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Growth %",
        data: calcGrowth(totals),
        borderDash: [6,6],
        borderWidth: 2
      }]
    }
  });
}


document.getElementById("generateReportBtn")
  ?.addEventListener("click", loadFinancialReport);





















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



function deleteSchool(id){
  if(!confirm(" Are you sure you want to delete this school?")) return;

  fetch("backend/admin/delete_school.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })
  .then(res => res.json())
  .then(data => {
    if(data.status === "success"){
      alert(" School deleted");
      location.reload();
    }else{
      alert(" " + data.message);
    }
  });
}


function deleteUser(id){
  if(!confirm("⚠️ This will delete the user permanently")) return;

  fetch("backend/admin/delete_user.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })
  .then(res => res.json())
  .then(data => {
    if(data.status === "success"){
      alert(" User deleted");
      location.reload();
    }else{
      alert(" " + data.message);
    }
  });
}
