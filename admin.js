/* ========= LOGIN ========= */
function login(){
  if(adminEmail.value === "admin@admin.com" && adminPass.value === "123"){
    loginPage.classList.add("hide");
    adminHeader.classList.remove("hide");
    openPage("dashboard");
  } else {
    alert("Wrong admin credentials");
  }
}

function logout(){
  location.reload();
}

/* ========= NAVIGATION ========= */
function openPage(page){
  document.querySelectorAll(".page").forEach(p => p.classList.add("hide"));
  document.getElementById(page).classList.remove("hide");
}



/* ========= SCHOOL DATA ========= */
let schools = [];

/* Add School */
function saveNewSchool(){
  const s = {
    name: sName.value,
    email: sEmail.value,
    system: sSystem.value,
    desc: sDesc.value
  };

  schools.push(s);
  renderSchools();
  alert("School Added");
  openPage("schools");
}

/* Render Schools */
function renderSchools(){
  schoolsTable.innerHTML = "";
  schools.forEach((s, i) => {
    schoolsTable.innerHTML += `
      <tr>
        <td onclick="openSchoolDetails(${i})" style="cursor:pointer;color:#1e3a8a;font-weight:600">${s.name}</td>
        <td>${s.email}</td>
        <td>${s.system}</td>
        <td>
          <button class="btn primary" onclick="openSchoolDetails(${i})">Details</button>
        </td>
      </tr>
    `;
  });

  statSchools.textContent = schools.length;
}

/* School Details */
let currentSchoolIndex = null;

function openSchoolDetails(i){
  currentSchoolIndex = i;
  const s = schools[i];

  dSchoolName.textContent = s.name;
  dSchoolEmail.textContent = s.email;
  dSchoolSystem.textContent = s.system;
  dSchoolDesc.textContent = s.desc;

  openPage("schoolDetails");
}

/* Edit School */
function editSchool(){
  const s = schools[currentSchoolIndex];

  const newName = prompt("Edit school name:", s.name);
  if(newName) s.name = newName;

  const newEmail = prompt("Edit email:", s.email);
  if(newEmail) s.email = newEmail;

  const newDesc = prompt("Edit description:", s.desc);
  if(newDesc) s.desc = newDesc;

  renderSchools();
  openSchoolDetails(currentSchoolIndex);
}

/* Delete School */
function deleteSchool(){
  if(confirm("Delete this school?")){
    schools.splice(currentSchoolIndex, 1);
    renderSchools();
    openPage("schools");
  }
}



/* ========= CAMP DATA ========= */
let camps = [];

/* Add Camp */
function saveNewCamp(){
  const c = {
    name: cName.value,
    city: cCity.value,
    phone: cPhone.value,
    desc: cDesc.value
  };

  camps.push(c);
  renderCamps();
  alert("Camp Added");
  openPage("camps");
}

/* Render Camps */
function renderCamps(){
  campsTable.innerHTML = "";
  camps.forEach((c, i) => {
    campsTable.innerHTML += `
      <tr>
        <td onclick="openCampDetails(${i})" style="cursor:pointer;color:#1e3a8a;font-weight:600">${c.name}</td>
        <td>${c.city}</td>
        <td>${c.phone}</td>
        <td><button class="btn primary" onclick="openCampDetails(${i})">Details</button></td>
      </tr>
    `;
  });

  statCamps.textContent = camps.length;
}

/* Camp Details */
let currentCampIndex = null;

function openCampDetails(i){
  currentCampIndex = i;
  const c = camps[i];

  dCampName.textContent = c.name;
  dCampCity.textContent = c.city;
  dCampPhone.textContent = c.phone;
  dCampDesc.textContent = c.desc;

  openPage("campDetails");
}

/* Edit Camp */
function editCamp(){
  const c = camps[currentCampIndex];

  const newName = prompt("Edit name:", c.name);
  if(newName) c.name = newName;

  const newCity = prompt("Edit city:", c.city);
  if(newCity) c.city = newCity;

  const newPhone = prompt("Edit phone:", c.phone);
  if(newPhone) c.phone = newPhone;

  renderCamps();
  openCampDetails(currentCampIndex);
}

/* Delete Camp */
function deleteCamp(){
  if(confirm("Delete this camp?")){
    camps.splice(currentCampIndex,1);
    renderCamps();
    openPage("camps");
  }
}


/* ========= DASHBOARD CHART ========= */
/* ===================== COUNTERS ====================== */
function animateCounter(id, value) {
  let start = 0;
  const speed = 20;
  const obj = document.getElementById(id);

  const counter = setInterval(() => {
    if(start >= value) clearInterval(counter);
    obj.textContent = start++;
  }, speed);
}

/* call counters when dashboard opens */
function updateDashboard(){
  animateCounter("statSchools", 120, schools.length);
  animateCounter("statCamps",89, camps.length);
  animateCounter("statParents", 203, camps.length);   // demo
  animateCounter("statApps", 5, camps.length);     // demo

  updateActivity("Dashboard refreshed.");
  renderLineChart();
}



/* ===================== ACTIVITY LOG ====================== */
function updateActivity(text){
  activityList.innerHTML += `<li>${text}</li>`;
}



/* ===================== LINE CHART ====================== */
let lineChart;

function renderLineChart(){
  const ctx = document.getElementById("lineChart");

  if(lineChart) lineChart.destroy();

  lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Schools",
          data: [2, 4, 7, 11, schools.length, schools.length],
          borderColor: "#1e3a8a",
          borderWidth: 3,
          fill: false,
          tension: 0.2
        },
        {
          label: "Camps",
          data: [1, 2, 5, 8, camps.length, camps.length],
          borderColor: "#2563eb",
          borderWidth: 3,
          fill: false,
          tension: 0.2
        }
      ]
    }
  });
}





/* ===================== OPEN PAGE ACTION ====================== */
const originalOpenPage = openPage;
openPage = function(page){
  originalOpenPage(page);

  if(page === "dashboard"){
    updateDashboard();
  }
};


/* ========== REPORTS PAGE LOGIC ========== */

function loadReports() {
  // Summary counters
  
  rSchools.textContent = schools.length;
  rCamps.textContent = camps.length;
  rParents.textContent = 32; // demo
  rApps.textContent = 142; // demo

  loadTopSchools();
  loadTopCamps();
  renderGrowthChart();
  renderPieChart();

  reportActivity.innerHTML += `<li>Reports Loaded</li>`;
}


/* ===== TOP SCHOOLS ===== */
function loadTopSchools(){
  topSchoolsList.innerHTML = "";

  schools.slice(0,5).forEach(s => {
    topSchoolsList.innerHTML += `<li>${s.name} — (${s.system})</li>`;
  });
}

/* ===== TOP CAMPS ===== */
function loadTopCamps(){
  topCampsList.innerHTML = "";

  camps.slice(0,5).forEach(c => {
    topCampsList.innerHTML += `<li>${c.name} — ${c.city}</li>`;
  });
}


/* ===== LINE CHART (Growth) ===== */
let gChart;

function renderGrowthChart(){
  const ctx = document.getElementById("growthChart");

  if(gChart) gChart.destroy();

  gChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan","Feb","Mar","Apr","May","Jun"],
      datasets: [{
        label: "Schools",
        data: [1,3,5,8,schools.length,schools.length],
        borderColor: "#1e3a8a",
        borderWidth: 3,
        fill: false,
        tension: 0.2
      },
      {
        label: "Camps",
        data: [1,2,4,6,camps.length,camps.length],
        borderColor: "#2563eb",
        borderWidth: 3,
        fill: false,
        tension: 0.2
      }]
    }
  });
}


/* ===== PIE CHART (Systems) ===== */
let sysPie;

function renderPieChart(){
  const ctx = document.getElementById("systemPie");

  if(sysPie) sysPie.destroy();

  const systems = schools.map(s => s.system);
  const counts = {
    IB: systems.filter(x=>x==="IB").length,
    IGCSE: systems.filter(x=>x==="IGCSE").length,
    SAT: systems.filter(x=>x==="SAT/AP").length,
    National: systems.filter(x=>x==="National").length,
    Montessori: systems.filter(x=>x==="Montessori").length,
  };

  sysPie = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: Object.keys(counts),
      datasets: [{
        data: Object.values(counts),
        backgroundColor: [
          "#1e3a8a","#2563eb","#4ade80","#f59e0b","#ec4899"
        ]
      }]
    }
  });
}


/* ===== EXPORT CSV ===== */
function exportCSV(){
  let csv = "Type,Name,Data\n";

  schools.forEach(s => csv += `School,${s.name},${s.system}\n`);
  camps.forEach(c => csv += `Camp,${c.name},${c.city}\n`);

  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "report.csv";
  a.click();
}


/* ===== EXPORT PDF (Browser Print) ===== */
function exportPDF(){
  window.print();
}


/* ===== RUN REPORTS WHEN OPENED ===== */
const openPageOriginal = openPage;
openPage = function(page){
  openPageOriginal(page);

  if(page === "reports"){
    loadReports();
  }
};

