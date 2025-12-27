<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>EduChoice Admin</title>
<link rel="stylesheet" href="assets/css/admin.css">
</head>

<body>

<!-- ================= LOGIN ================= -->
<section id="loginPage" class="center-card">
  <h2>Admin Login</h2>

  <div class="input-group">
    <label>Email</label>
    <input type="email" id="adminEmail">
  </div>

  <div class="input-group">
    <label>Password</label>
    <input type="password" id="adminPass">
  </div>

  <button class="btn primary" onclick="login()">Login</button>
</section>

<!-- ================= HEADER ================= -->
<header id="adminHeader" class="hide">
  <h1>EduChoice Admin</h1>
  <nav>
    <a onclick="openPage('dashboard')">Dashboard</a>
    <a onclick="openPage('schools')">Schools</a>
    <a onclick="openPage('addSchool')">Add School</a>
    <a onclick="openPage('camps')">Camps</a>
    <a onclick="openPage('addCamp')">Add Camp</a>
    <a onclick="openPage('reports')">Reports</a>
    <a onclick="logout()">Logout</a>
  </nav>
</header>

<div class="container">

<!-- ================= DASHBOARD ================= -->







<section id="dashboard" class="page hide card">

  <h2>Dashboard Overview</h2>
 <!-- ===== HEADER ===== -->
  <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:20px">
    <div>
      <h2 style="margin-bottom:6px">Admin Dashboard</h2>
      <p class="muted">
        Full administrative overview of all registered schools on EduChoice.
      </p>
    </div>
    <button class="btn primary">+ Add New School</button>
  </div>

  <!-- ===== STATS ===== -->
  <div class="stats-grid" style="margin-bottom:30px">
    <div class="stat-card">
      <div class="stat-number">7</div>
      <div class="stat-label">Total Schools</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">5</div>
      <div class="stat-label">Active Schools</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">18</div>
      <div class="stat-label">Applications</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">3</div>
      <div class="stat-label">Premium Plans</div>
    </div>
  </div>

  <!-- ===== SCHOOLS TABLE ===== -->
  <div class="card" style="padding:20px">

    <h3 style="margin-bottom:12px">Schools Directory</h3>

    <!-- Filters -->
    <div class="row" style="margin-bottom:14px">
      <select class="pill">
        <option>All Systems</option>
        <option>IB</option>
        <option>IGCSE</option>
        <option>SAT / AP</option>
        <option>National</option>
        <option>Montessori</option>
      </select>

      <select class="pill">
        <option>All Cities</option>
        <option>Amman</option>
        <option>Zarqa</option>
        <option>Irbid</option>
        <option>Madaba</option>
        <option>Aqaba</option>
      </select>

      <input class="pill" type="text" placeholder="Search school name…" />
    </div>

    <!-- Table -->
    <div style="overflow-x:auto">
      <table width="100%" cellspacing="0" cellpadding="12" style="border-collapse:collapse">
        <thead style="background:#f8fafc">
          <tr>
            <th align="left">School</th>
            <th align="left">System</th>
            <th align="left">City</th>
            <th align="center">Rating</th>
            <th align="center">Applications</th>
            <th align="center">Plan</th>
            <th align="center">Status</th>
            <th align="center">Actions</th>
          </tr>
        </thead>

        <tbody>

          <!-- ROW -->
          <tr style="border-bottom:1px solid #e5e7eb">
            <td>
              <strong>International Academy – Amman</strong>
              <div class="muted">admissions@iaa.edu.jo</div>
            </td>
            <td>IB</td>
            <td>Amman</td>
            <td align="center">★★★★★</td>
            <td align="center">6</td>
            <td align="center">
              <span class="tag">Premium</span>
            </td>
            <td align="center">
              <span class="tag" style="background:#dcfce7;color:#166534">Active</span>
            </td>
            <td align="center">
              <button class="btn icon">👁</button>
              <button class="btn icon">✏️</button>
              <button class="btn icon">⛔</button>
            </td>
          </tr>

          <!-- ROW -->
          <tr style="border-bottom:1px solid #e5e7eb">
            <td>
              <strong>Cambridge International School</strong>
              <div class="muted">contact@cambridge.jo</div>
            </td>
            <td>IGCSE</td>
            <td>Zarqa</td>
            <td align="center">★★★★☆</td>
            <td align="center">4</td>
            <td align="center">
              <span class="tag">Free</span>
            </td>
            <td align="center">
              <span class="tag" style="background:#dcfce7;color:#166534">Active</span>
            </td>
            <td align="center">
              <button class="btn icon">👁</button>
              <button class="btn icon">✏️</button>
              <button class="btn icon">⛔</button>
            </td>
          </tr>

          <!-- ROW -->
          <tr style="border-bottom:1px solid #e5e7eb">
            <td>
              <strong>Royal National School</strong>
              <div class="muted">info@rns.jo</div>
            </td>
            <td>National</td>
            <td>Irbid</td>
            <td align="center">★★★☆☆</td>
            <td align="center">2</td>
            <td align="center">
              <span class="tag">Pro</span>
            </td>
            <td align="center">
              <span class="tag" style="background:#fef3c7;color:#92400e">Pending</span>
            </td>
            <td align="center">
              <button class="btn icon">👁</button>
              <button class="btn icon">✏️</button>
              <button class="btn icon">⛔</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>

  <!-- ===== RECENT ACTIVITY ===== -->
  <div class="card" style="padding:20px;margin-top:30px">
    <h3 style="margin-bottom:10px">Recent Activity</h3>
    <ul style="line-height:1.9">
      <li>✔ Amman American Academy updated profile</li>
      <li>✔ Madaba Montessori received 3 new applications</li>
      <li>✔ Aqaba American School upgraded to Pro plan</li>
      <li>✔ New school registered: Irbid Grammar School</li>
    </ul>
  </div>

</section>







<!-- ================= SCHOOLS ================= -->
<section id="schools" class="page hide card">
  <h2>Schools</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>System</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="schoolsTable"></tbody>
  </table>
</section>

<!-- ================= ADD SCHOOL ================= -->
<section id="addSchool" class="page hide card">
  <h2>Add School</h2>

  <div class="input-group"><label>Name</label><input id="sName"></div>
  <div class="input-group"><label>Email</label><input id="sEmail"></div>

  <div class="input-group">
    <label>System</label>
    <select id="sSystem">
      <option>IB</option>
      <option>IGCSE</option>
      <option>SAT/AP</option>
      <option>National</option>
      <option>Montessori</option>
    </select>
  </div>

  <div class="input-group">
    <label>Description</label>
    <textarea id="sDesc"></textarea>
  </div>

  <button class="btn primary" onclick="saveNewSchool()">Save School</button>
</section>

<!-- ================= CAMPS ================= -->
<section id="camps" class="page hide card">
  <h2>Camps</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="campsTable"></tbody>
  </table>
</section>

<!-- ================= ADD CAMP ================= -->
<section id="addCamp" class="page hide card">
  <h2>Add Camp</h2>

  <div class="input-group"><label>Name</label><input id="cName"></div>
  <div class="input-group"><label>City</label><input id="cCity"></div>
  <div class="input-group"><label>Phone</label><input id="cPhone"></div>
  <div class="input-group"><label>Description</label><textarea id="cDesc"></textarea></div>

  <button class="btn primary" onclick="saveNewCamp()">Save Camp</button>
</section>

<!-- ================= REPORTS ================= -->






<!-- ================= REPORTS ================= -->











<!-- ================= REPORTS ================= -->
<section id="reports" class="page hide card">
  <h2>Reports</h2>




  
  <!-- ===== SELECT SCHOOL ===== -->
  <div class="input-group">
    <label>Select School</label>
    <select id="reportSchoolSelect">
      <option value="">-- Select School --</option>
    </select>
  </div>

  

  <!-- ===== ACTION BUTTONS ===== -->
  <div style="display:flex; gap:12px; margin-top:10px;">
    <button class="btn primary" id="generateBtn" onclick="generateSchoolReport()">
      Generate Report
    </button>

    <button class="btn danger hide" id="resetBtn" onclick="resetReport()">
      Reset
    </button>
  </div>



  <!-- ===== REPORT OUTPUT ===== -->
  <div id="fullReport" class="hide"></div>

  <div style="margin-top:40px;text-align:right">
  <button class="btn primary" onclick="exportPDF()">
    Export Clear PDF
  </button>
</div>

</section>











</div>

<!-- Scripts -->

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script src="assets/js/admin.js"></script>

</body>
</html>
