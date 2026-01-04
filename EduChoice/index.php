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
    <a onclick="openPage('dashboard')">Managing</a>
<a onclick="openPage('adminReport')">Report Admin</a>

    <a onclick="openPage('reports')">Report schools</a>
    <a onclick="logout()">Logout</a>
  </nav>
</header>

<div class="container">

<!-- ================= DASHBOARD ================= -->




<section id="dashboard" class="page hide card">

  <!-- ===== HEADER ===== -->
  <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:24px">
    <div>
      <h2>Datat site</h2>
      <p class="muted">
        Manage schools and parents registered on EduChoice
      </p>
    </div>
  </div>

  <!-- ===== SELECT TYPE ===== -->
  <div class="card" style="margin-bottom:20px">
    <label for="dataType" class="label">Select Data Type</label>
    <select id="dataType" class="input">
      <option value="">-- Choose --</option>
      <option value="schools">Schools</option>
      <option value="users">Users</option>
    </select>
  </div>




  <!-- ================== SCHOOLS TABLE ================== -->
  <div id="schoolsSection" class="card hide">
    <h3 style="margin-bottom:14px">Schools List</h3>

    <table class="table">
      <thead>
        <tr>
          <th>School Name</th>
          <th>System</th>
          <th>City</th>
          <th>Email</th>
          <th>Status</th>
          <th style="width:140px">Actions</th>
        </tr>
      </thead>
      <tbody id="schoolsTable">
        <!-- dynamic schools -->
        <tr>
          <td>International Academy – Amman</td>
          <td>IB</td>
          <td>Amman</td>
          <td>info@ia.edu</td>
          <td><span class="badge success">Active</span></td>
          <td>

          
<button class="btn small"
        onclick="editSchool(<?= $school['id'] ?>)">
  Edit
</button>



          <button class="btn small danger" onclick="deleteSchool(3)">
            Delete
          </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


<!-- ================== USERS TABLE ================== -->
<div id="parentsSection" class="card hide">
  <h3 style="margin-bottom:14px">Users List</h3>

  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Created At</th>
        <th style="width:140px">Actions</th>
      </tr>
    </thead>

    <tbody id="parentsTable">
      <!-- JS WILL FILL DATA HERE -->
    </tbody>
  </table>
</div>


</section>

<!-- ================== ADMIN REPORT PAGE ================== -->





















<!-- ================== ADMIN REPORT PAGE ================== -->


<!-- ================= ADMIN FINANCIAL REPORT PAGE ================= -->
<section id="adminReport" class="page hide">

  <!-- ===== PAGE HEADER ===== -->
  <div class="report-header">
    <h2>Financial Reports & Analytics</h2>
    <p>
      Complete financial overview of EduChoice platform including
      monthly and yearly revenue performance, growth analysis, and trends.
    </p>
  </div>

  <!-- ===== FILTER BAR ===== -->
  <div class="report-filters">
    <select id="filterYear">
      <option value="2024">2024</option>
      <option value="2025" selected>2025</option>
      <option value="2026">2026</option>
    </select>

    <select id="filterMonth">
      <option value="all">Full Year</option>
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>

    <button class="btn primary" id="generateReportBtn">
  Generate Report
</button>

  </div>

  <!-- ===== KPI DASHBOARD ===== -->
  <div class="kpi-grid">

    <div class="kpi-card">
      <span class="kpi-title">Schools Revenue</span>
      <span class="kpi-value" id="kpiSchools">0 JOD</span>
      <span class="kpi-note">Subscriptions & listings</span>
    </div>

    <div class="kpi-card">
      <span class="kpi-title">Camps Revenue</span>
      <span class="kpi-value" id="kpiCamps">0 JOD</span>
      <span class="kpi-note">Seasonal programs</span>
    </div>

    <div class="kpi-card">
      <span class="kpi-title">Ads Revenue</span>
      <span class="kpi-value" id="kpiAds">0 JOD</span>
      <span class="kpi-note">Promotions & banners</span>
    </div>

    <div class="kpi-card total">
      <span class="kpi-title">Total Revenue</span>
      <span class="kpi-value" id="kpiTotal">0 JOD</span>
      <span class="kpi-note">Overall platform income</span>
    </div>

  </div>

  <!-- ===== ANALYTICS CHARTS ===== -->
  <div class="charts-section">

    <!-- Monthly Line Chart -->
    <div class="chart-box">
      <h4>Monthly Revenue Trend</h4>
      <p>Shows revenue growth across months</p>
      <canvas id="chartMonthlyRevenue"></canvas>
    </div>

    <!-- Revenue Distribution -->
    <div class="chart-box">
      <h4>Revenue Distribution</h4>
      <p>Comparison between revenue sources</p>
      <canvas id="chartRevenuePie"></canvas>
    </div>

    <!-- Yearly Comparison -->
    <div class="chart-box wide">
      <h4>Yearly Performance Comparison</h4>
      <p>Year-to-year revenue growth</p>
      <canvas id="chartYearlyRevenue"></canvas>
    </div>

    <!-- Growth / KPI Chart -->
    <div class="chart-box">
      <h4>Growth Rate Analysis</h4>
      <p>Monthly growth percentage</p>
      <canvas id="chartGrowthRate"></canvas>
    </div>

  </div>

  <!-- ===== DETAILED MONTHLY TABLE ===== -->
  <div class="report-table-section">
    <h3>Monthly Revenue Breakdown</h3>

    <table class="report-table">
      <thead>
        <tr>
          <th>Month</th>
          <th>Schools (JOD)</th>
          <th>Camps (JOD)</th>
          <th>Ads (JOD)</th>
          <th>Total (JOD)</th>
          <th>Growth %</th>
        </tr>
      </thead>

      <tbody id="adminReportTable">
        <!-- Filled dynamically by JS -->
      </tbody>
    </table>
  </div>

  <!-- ===== INSIGHTS / SUMMARY ===== -->
  <div class="report-insights">

    <h3>Key Financial Insights</h3>

    <ul>
      <li>
        Strong growth observed during summer months due to increased camp registrations.
      </li>
      <li>
        School subscriptions provide the most stable revenue stream throughout the year.
      </li>
      <li>
        Advertisement revenue peaks during admission seasons.
      </li>
      <li>
        Overall platform revenue shows a positive upward trend year-over-year.
      </li>
    </ul>

  </div>

</section>
<!-- ================= END ADMIN FINANCIAL REPORT PAGE ================= -->

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

    <button class="btn primary" id="resetBtn" onclick="resetReport()">
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
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="admin-report.js"></script>

 <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script src="assets/js/admin.js"></script>

</body>
</html>
