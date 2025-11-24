
// Mock data
    const SCHOOLS = [
    
      { id:"s1", name:"International Academy – Amman", system:"IB", city:"Amman", rating:5.0,
        email:"admissions@iaa.edu.jo", phone:"+962-6-000-0002", website:"https://www.iaa.edu.jo",
      
        images:["photos/download.png","",""],
        desc:"IB PYP/MYP/DP with strong community ethos.", programs:["PYP","MYP","DP","Arts","Athletics"], address:"Amman, Jordan"
      },



      { id:"s3", name:"Amman American Academy", system:"SAT/AP", city:"Amman", rating:5.2,
        email:"hello@aaa.jo", phone:"+962-6-000-0004", website:"https://aaa.jo",
        images:["photos/download (1).png","https://images.unsplash.com/photo-1510936111840-65e151ad71bb","https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"],
        desc:"American curriculum with AP options and college counseling.", programs:["Common Core","AP","Sports","Counseling"], address:"Amman, Jordan"
      },

      { id:"s2", name:"Cambridge International School", system:"IGCSE", city:"Zarqa", rating:4.4,
        email:"contact@cambridge.jo", phone:"+962-5-000-0003", website:"https://cambridge.jo",
        images:["download (2).png","",""],
        desc:"British curriculum focusing on IGCSE and A-Level.", programs:["IGCSE","AS","A-Level","Robotics Club"], address:"Zarqa, Jordan"
      },


      { id:"s4", name:"Royal National School", system:"National", city:"Irbid", rating:3.2,
        email:"info@rns.jo", phone:"+962-2-000-0005", website:"https://rns.jo",
        images:["photos/download (4).jpeg","https://images.unsplash.com/photo-1503676260728-1c00da094a0b","https://images.unsplash.com/photo-1523050854058-8df90110c9f1"],
        desc:"Jordanian national curriculum with modern facilities.", programs:["National Curriculum","STEM","Languages"], address:"Irbid, Jordan"
      },

      



      { id:"s5", name:"Madaba Montessori", system:"Montessori", city:"Madaba", rating:4.5,
        email:"contact@madabamontessori.jo", phone:"+962-5-000-0006", website:"https://madabamontessori.jo",
        images:["photos/cab761e4-4b79-4bf6-a7e9-9c5837ff1729.png","https://images.unsplash.com/photo-1529070538774-1843cb3265df","https://images.unsplash.com/photo-1510936111840-65e151ad71bb"],
        desc:"Playful early years program inspired by Montessori.", programs:["Practical Life","Sensorial","Language","Math"], address:"Madaba, Jordan"
      },

    


      { id:"s6", name:"Aqaba American School", system:"SAT/AP", city:"Aqaba", rating:4.1,
        email:"apply@aqabaas.jo", phone:"+962-3-000-0007", website:"https://aqabaas.jo",
        images:["photos/download (5).jpeg","https://images.unsplash.com/photo-1523050854058-8df90110c9f1","https://images.unsplash.com/photo-1509062522246-3755977927d7"],
        desc:"American program by the Red Sea with AP electives.", programs:["AP","Arts","Marine Activities"], address:"Aqaba, Jordan"
      },

      
     

      
      { id:"s", name:"Irbid Grammar School", system:"IGCSE", city:"Irbid", rating:4.0,
        email:"office@irbidgrammar.jo", phone:"+962-2-000-0008", website:"https://irbidgrammar.jo",
        images:["photos/download (2).png","https://images.unsplash.com/photo-1524995997946-a1c2e315a42f","https://images.unsplash.com/photo-1558021212-51b6ecfa0db9"],
        desc:"IGCSE with strong math & science focus.", programs:["IGCSE","A-Level","Math Olympiad"], address:"Irbid, Jordan"
      }
    ];

    const CAMPS = [


         {id:"c1", name:"Irbid Kids Club", city:"Irbid", phone:"+962-79-333-3333", img:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c", desc:"Outdoor adventures and coding bootcamps."},


      {id:"c2", name:"Amman Activity Center", city:"Amman", phone:"+962-79-111-1111", img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", desc:"STEM, arts, and sports camps for ages 6–14."},


      {id:"c4", name:"Zarqa Learning Hub", city:"Zarqa", phone:"+962-79-222-2222", img:"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846", desc:"Robotics and language immersion programs."},

    ];


    // تفعيل المنيو الجانبية
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('show');
});

// إغلاق عند الضغط خارج المنيو
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('show');
});


    // Helpers
    const $ = sel => document.querySelector(sel);
    const $$ = sel => document.querySelectorAll(sel);
    const go = hash => { location.hash = hash; };
    // ===== Dynamic Back System =====
let backTarget = "#home";

function setBackTarget(page){
  backTarget = page;
}

function goBack(){
  go(backTarget);
}

    const byId = id => document.getElementById(id);

    function setActiveNav(hash){
      $$('#menu a').forEach(a=>a.classList.toggle('active', a.getAttribute('href')===hash));
    }

    function starSVG(filled){
      const c = filled ? '#111827' : 'none';
      const s = '#111827';
      return `<svg class="star" viewBox="0 0 24 24" fill="${c}" stroke="${s}" stroke-width="1.5" aria-hidden="true"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    }
    function ratingStars(r){
      const full = Math.floor(r);
      const half = r - full >= 0.5 ? 1 : 0;
      let html=''; for(let i=0;i<full;i++) html+=starSVG(true);
      if(half) html+=starSVG(true);
      for(let i=full+half;i<5;i++) html+=starSVG(false);
      return html;
    }
    

    /* =========================
       i18n STATIC + DYNAMIC
       ========================= */
    const CITY_LABEL = {
      Amman:{en:"Amman", ar:"عمّان"},
      Zarqa:{en:"Zarqa", ar:"الزرقاء"},
      Irbid:{en:"Irbid", ar:"إربد"},
      Madaba:{en:"Madaba", ar:"مأدبا"},
      Aqaba:{en:"Aqaba", ar:"العقبة"}
    };
    const SYS_LABEL = {
      "IB":{en:"IB", ar:"البكالوريا الدولية"},
      "IGCSE":{en:"IGCSE / A-Level", ar:"IGCSE / A-Level"},
      "SAT/AP":{en:"American (SAT / AP)", ar:"الأمريكي (SAT/AP)"},
      "National":{en:"Jordanian National", ar:"المنهاج الأردني"},
      "Montessori":{en:"Montessori", ar:"مونتيسوري"}
    };
    const SCHOOL_TR = {
      s1:{name_ar:"مدرسة البكالوريا – عمّان",desc_ar:"مدرسة IB كاملة المسارات: PYP وMYP وDP.",address_ar:"عمّان، الأردن"},
      s2:{name_ar:"الأكاديمية الدولية – عمّان",desc_ar:"مسارات IB مع بيئة مجتمعية قوية.",address_ar:"عمّان، الأردن"},
      s3:{name_ar:"مدرسة كامبريدج الدولية",desc_ar:"منهج بريطاني لــ IGCSE وA-Level.",address_ar:"الزرقاء، الأردن"},
      s4:{name_ar:"أكاديمية عمّان الأمريكية",desc_ar:"منهج أمريكي مع مواد AP وإرشاد جامعي.",address_ar:"عمّان، الأردن"},
      s5:{name_ar:"المدرسة الوطنية الملكية",desc_ar:"منهاج وطني مع مرافق حديثة.",address_ar:"إربد، الأردن"},
      s6:{name_ar:"مونتيسوري مأدبا",desc_ar:"طفولة مبكرة بأسلوب مونتيسوري.",address_ar:"مأدبا، الأردن"},
      s7:{name_ar:"مدرسة العقبة الأمريكية",desc_ar:"برنامج أمريكي على البحر الأحمر مع مواد AP.",address_ar:"العقبة، الأردن"},
      s8:{name_ar:"مدرسة إربد جرامر",desc_ar:"IGCSE مع تركيز قوي على الرياضيات والعلوم.",address_ar:"إربد، الأردن"}
    };
    const CAMP_TR = {
      c1:{name_ar:"مركز عمّان للأنشطة",desc_ar:"معسكرات STEM وفنون ورياضة للأعمار 6–14."},
      c2:{name_ar:"ملتقى الزرقاء التعليمي",desc_ar:"روبوتات وانغماس لغوي."},
      c3:{name_ar:"نادي أطفال إربد",desc_ar:"مغامرات خارجية وبرامج برمجة."}
    };

    // enrich data (non-destructive)
    SCHOOLS.forEach(s=>{
      const tr = SCHOOL_TR[s.id]||{};
      s.name_ar = tr.name_ar || s.name;
      s.desc_ar = tr.desc_ar || s.desc;
      s.address_ar = tr.address_ar || s.address;
      s.city_ar = CITY_LABEL[s.city]?.ar || s.city;
    });
    CAMPS.forEach(c=>{
      const tr = CAMP_TR[c.id]||{};
      c.name_ar = tr.name_ar || c.name;
      c.desc_ar = tr.desc_ar || c.desc;
    });

    const I18N = {
      en:{
        nav_home:"Home", nav_systems:"Systems", nav_schools:"Schools", nav_community:"Summer Camps", nav_about:"About", nav_login:"Login", nav_payment:"Payment",nav_profile:"profile",
        home_head:"Find the right school for your child in Jordan",
        home_sub:"Search by name, explore by educational system, or discover summer camps.",
        ph_search:"Search school name…", btn_search:"Search", btn_systems:"By System", btn_camps:"Summer Camps",
        sys_title:"Educational Systems", sys_sub:"Tap a system to see schools that teach it.",
        sch_title:"Schools", sch_sub:"Results are organized vertically with image, name, five-star rating, and info button.",
        f_system:"System", f_city:"City", f_min:"Min. Rating", f_sort:"Sort", back:"Back",
        map_hint:"Map preview (static). Replace with real map later.", programs:"Programs & Highlights", contact:"Contact",
        apply_title:"Enrollment Request", apply_sub:"Fill in the form and the school will receive your request by email.",
        af_child:"Child Full Name", af_age:"Age", af_gender:"Gender", af_grade:"Desired Grade", af_parent:"Parent Full Name", af_phone:"Phone", af_school:"Target School", af_note:"Notes", af_submit:"Submit & Continue to Login",
        camp_title:"Community & Summer Camps", camp_sub:"Centers and schools offering seasonal camps and activities.",
        about_title:"About EduChoice",  about_sub:"A Web Science project serving families across Jordan.",


        about_99:"EduChoice — The Smart Way to Find the Right School in Jordan",
        about_88:"In today’s fast-paced digital world, parents face a growing challenge in finding the right school that truly fits their children’s needs - whether it’s based on educational systems, location, or budget. was created to solve that challenge by becoming Jordan’s first smart, bilingual (Arabic–English) school-finding platform, connecting parents, schools, and educational communities in one place  ",


        about_77:"is a modern web platform that helps parents discover, compare, and apply to private and international schools across Jordan.Through an intuitive interface and advanced filtering tools, users can explore schools by education system (IB, IGCSE, SAT, National, Montessori, etc.),city or area, rating, tuition, and facilities.The platform also includes summer camps, community features, and school profiles that showcase each institution’s strengths, photos, programs, and location on an interactive map.",

        about_55:"Key Features",

        about_1:"Bilingual Design:",
        about_11:"Seamless switch between Arabic and English for full accessibility.",
        about_2:"Smart Filtering",
        about_12:"Search schools by name, system, location, or rating.",
        about_3:"Interactive Map:",
        about_13:"View schools’ real locations on a map powered by Leaflet or Google Maps.",
        about_4:"School Profiles:",
        about_14:" Each school has its own detailed profile page with academic programs, photos, and contact info.",
        about_5:"Parent & School Login:",
        about_15:"Parents can apply and track, while schools manage their data and subscriptions.",
        about_6:"Secure Payment System:",
        about_16:"Transparent payment process for school listings and promotions.",

        about_21:"🌐 Why EduChoice Matters",
        about_22:"Jordan’s private education sector is growing rapidly, but information is scattered and often outdated across hundreds of sources.EduChoice centralizes all this data into one trusted platform — empowering parents with better choices and helping schools reach the right audience. It increases transparency, simplifies admission, and encourages digital transformation in education.",

        about_33:"🚀 Future Vision",
        about_44:"EduChoice aims to expand with AI-based school recommendations, parent dashboards, and a dedicated mobile app. The long-term vision includes partnerships with educational authorities to enhance transparency and data accura",
        
        about_55:"💬 Conclusion",
        about_66:"is more than just a website — it’s a movement toward smarter, data-driven education choices in Jordan. By combining technology, user experience, and educational insight, EduChoice bridges families and schools to build a brighter, more connected educational future",




        about_h1:"Mission", about_p1:"We help parents compare schools by system, city, and rating, and apply in minutes.",
        about_h2:"Scope", about_l1:"Public and private schools in Jordan", about_l2:"Systems: IB, IGCSE/A-Level, SAT/AP, National, Montessori", about_l3:"Parents & Schools dual login", about_l4:"Owner payment to boost listing", about_l5:"Community: activity & camp finder", about_stats:"At a glance",
        st_sch:"Schools", st_cit:"Cities", st_cam:"Camps",
        login_title:"Login / Register", login_sub:"Choose your portal.", tab_parent:"Parents", tab_school:"Schools", lf_pass:"Password", lf_forgot:"Forgot?", lf_sign:"Sign In",
        sf_school:"School Name", sf_phone:"Phone", sf_system:"System", sf_register:"Register", sf_upgrade:"Upgrade Listing →",
        pay_title:"Payment & Plans (Schools)", pay_sub:"Boost your visibility. Secure checkout placeholder (integrate later).",btn_map:"Map"   ,       // داخل I18N.en

        f_about:"Unified directory of Jordan schools & camps. Built as a Web Science project.",
        opt_all:"All", opt_top:"Top Rated", opt_name:"Name (A–Z)", opt_city:"City",
        btn_info:"Info", btn_apply:"Apply", btn_view:"View Details", apply_now:"Apply Now",
        camp_ads:" Summer Camps Ads" 
        
      },
      ar:{
        nav_home:"الرئيسية", nav_systems:"الأنظمة التعليمية", nav_schools:"المدارس", nav_community:" المعسكرات", nav_about:"من نحن", nav_login:"تسجيل الدخول", nav_payment:"الدفع", nav_profile:"الصفحة الشخصية" ,btn_map:"الخريطة"  ,    // داخل I18N.ar

        home_head:"ابحث عن المدرسة المناسبة لطفلك في الأردن",
        home_sub:"ابحث بالاسم، أو استكشف حسب النظام التعليمي، أو اكتشف المعسكرات الصيفية.",
        ph_search:"ابحث باسم المدرسة…", btn_search:"بحث", btn_systems:"حسب النظام", btn_camps:"المعسكرات",
        sys_title:"الأنظمة التعليمية", sys_sub:"اختر نظامًا لعرض المدارس التي تُدرِّسه.",
        sch_title:"المدارس", sch_sub:"يتم عرض النتائج عموديًا مع صورة واسم وتقييم بخمس نجوم وزر معلومات.",
        f_system:"النظام", f_city:"المدينة", f_min:"أدنى تقييم", f_sort:"ترتيب", back:"رجوع",
        map_hint:"معاينة خريطة (ثابتة). استبدل بخريطة فعلية لاحقًا.", programs:"البرامج والمميزات", contact:"التواصل",
        apply_title:"طلب الالتحاق", apply_sub:"املأ النموذج وسيصل طلبك إلى المدرسة عبر البريد الإلكتروني.",
        af_child:"اسم الطفل الكامل", af_age:"العمر", af_gender:"الجنس", af_grade:"الصف المطلوب", af_parent:"اسم ولي الأمر", af_phone:"الهاتف", af_school:"المدرسة المستهدفة", af_note:"ملاحظات", af_submit:"إرسال والمتابعة للدخول",
        camp_title:"المجتمع والمعسكرات", camp_sub:"مراكز ومدارس تقدم أنشطة ومعسكرات موسمية.",



        about_title:"عن EduChoice", about_h3:"مشروع علوم الويب يخدم العائلات في جميع أنحاء الأردن.", about_sub:"مشروع ويب ساينس يخدم العائلات في الأردن.",

        about_99:"EduChoice - الطريقة الذكية للعثور على المدرسة المناسبة في الأردن",


        about_88: "في عالمنا الرقمي المتسارع، يواجه الآباء تحديًا متزايدًا في العثور على المدرسة المناسبة التي تناسب احتياجات أطفالهم - سواءً من حيث النظام التعليمي أو الموقع أو الميزانية.تم إنشاء لحل هذا التحدي من خلال أن تصبح أول منصة ذكية ثنائية اللغة (العربية والإنجليزية) في الأردن للعثور على المدارس، حيث تربط أولياء الأمور والمدارس والمجتمعات التعليمية في مكان واحد. ",

        about_77:"منصة إلكترونية حديثة تُساعد أولياء الأمور على اكتشاف المدارس الخاصة والدولية في جميع أنحاء الأردن، ومقارنتها، والتقديم إليها.من خلال واجهة سهلة الاستخدام وأدوات تصفية متقدمة، يُمكن للمستخدمين استكشاف المدارس حسب النظام التعليمي (IB، IGCSE، SAT، الوطني، مونتيسوري، إلخ)، والمدينة أو المنطقة، والتقييم، والرسوم الدراسية، والمرافق. كما تتضمن المنصة مخيمات صيفية، وميزات مجتمعية، وملفات تعريفية بالمدارس تُبرز نقاط قوة كل مؤسسة، وصورها، وبرامجها، وموقعها على خريطة تفاعلية.",


        about_55:"الميزات الرئيسية",



        about_1:"التصميم ثنائي اللغة:",
        about_11:"التبديل السلس بين اللغتين العربية والإنجليزية للوصول الكامل.",
        about_2:"التصفية الذكية",
        about_12:"ابحث عن المدارس حسب الاسم أو النظام أو الموقع أو التقييم.",
        about_3:"الخريطة التفاعلية:",
        about_13:"شاهد مواقع المدارس الحقيقية على الخريطة المدعومة من Leaflet أو خرائط Google.",
        about_4:"ملفات تعريف المدرسة:",
        about_14:"تتمتع كل مدرسة بصفحة تعريفية مفصلة خاصة بها تتضمن البرامج الأكاديمية والصور ومعلومات الاتصال.",
        about_5:"تسجيل الدخول للوالدين والمدرسة:",
        about_15:"يمكن للوالدين التقديم والمتابعة، بينما تقوم المدارس بإدارة بياناتهم واشتراكاتهم.",
        about_6:"نظام الدفع الآمن:",
        about_16:"عملية دفع شفافة لإدراجات المدارس والعروض الترويجية.",

        about_21:"🌐 لماذا يُعدّ EduChoice مهمًا؟",
        about_22:"يشهد قطاع التعليم الخاص في الأردن نموًا متسارعًا، إلا أن المعلومات متناثرة، وغالبًا ما تكون قديمة، عبر مئات المصادر.ع EduChoice جميع هذه البيانات في منصة واحدة موثوقة، مما يُمكّن أولياء الأمور من خيارات أفضل، ويساعد المدارس على الوصول  المناسب.ز EduChoice الشفافية، ويُبسط عملية القبول، ويُشجع على التحول الرقمي في التعليم.",

        about_33:"🚀 الرؤية المستقبلية",
        about_44:"تهدف EduChoice إلى التوسع من خلال توصيات مدرسية قائمة على الذكاء الاصطناعي، ولوحات معلومات لأولياء الأمور، وتطبيق جوال مخصص. تتضمن الرؤية طويلة المدى شراكات مع الجهات التعليمية لتعزيز الشفافية ودقة البيانات.",

        about_55:"💬 الخاتمة",

        about_66:"هو أكثر من مجرد موقع إلكتروني، إنه مبادرة نحو خيارات تعليمية أذكى قائمة على البيانات في الأردن. من خلال الجمع بين التكنولوجيا وتجربة المستخدم والرؤى التعليمية، يربط EduChoice بين العائلات والمدارس لبناء مستقبل تعليمي أكثر إشراقًا وتواصلًا.",






        about_h1:"الرسالة",  about_p1:"نساعد الأهالي على مقارنة المدارس حسب النظام والمدينة والتقييم والتقديم خلال دقائق.",

        about_h2:"النطاق", about_l1:"مدارس حكومية وخاصة في الأردن", about_l2:"الأنظمة: IB وIGCSE/A-Level وSAT/AP والمنهاج الوطني ومونتيسوري", about_l3:"بوابتان للأهالي والمدارس", about_l4:"دفع للمدارس لزيادة الظهور", about_l5:"المجتمع: البحث عن الأنشطة والمعسكرات", about_stats:"لمحة سريعة",


        st_sch:"مدرسة", st_cit:"مدينة", st_cam:"معسكر",



        login_title:"تسجيل الدخول / إنشاء حساب", login_sub:"اختر البوابة.", tab_parent:"أهالي", tab_school:"مدارس", lf_pass:"كلمة المرور", lf_forgot:"نسيت؟", lf_sign:"تسجيل الدخول",
        sf_school:"اسم المدرسة", sf_phone:"الهاتف", sf_system:"النظام", sf_register:"تسجيل", sf_upgrade:"ترقية الظهور →",
        pay_title:"الدفع والباقات (للمدارس)", pay_sub:"عزّز ظهورك. نموذج دفع تجريبي (يُدمج لاحقًا).",
        f_about:"دليل موحد لمدارس ومعسكرات الأردن. مبني كمشروع ويب ساينس.",
        opt_all:"الكل", opt_top:"الأعلى تقييمًا", opt_name:"الاسم (أ-ي)", opt_city:"المدينة",
        btn_info:"معلومات", btn_apply:"قدّم", btn_view:"عرض التفاصيل", apply_now:"قدّم الآن",
        camp_ads:" إعلانات المعسكرات الصيفية"
      }
    };

    let currentLang = 'en';

    const tDyn = (obj, enKey, arKey) => (currentLang==='ar' ? (obj[arKey]||obj[enKey]) : obj[enKey]);
    const sysLabel = sys => (currentLang==='ar' ? (SYS_LABEL[sys]?.ar||sys) : (SYS_LABEL[sys]?.en||sys));
    const cityLabel = city => (currentLang==='ar' ? (CITY_LABEL[city]?.ar||city) : (CITY_LABEL[city]?.en||city));

    function renderResults(list){
      const root = byId('results');
      root.innerHTML = '';
      if(!list.length){
        root.innerHTML = `<div class="card" style="padding:16px">${currentLang==='ar'?'لا توجد نتائج.':'No results.'}</div>`;
        return;
      }


      
      list.forEach(s=>{
        const card = document.createElement('div');
        card.className = 'card school';
        card.innerHTML = `
          <img src="${s.images[0]}" alt="${tDyn(s,'name','name_ar')}">

          <div>
            <div class="row" style="justify-content:space-between">
              <div>
                <strong>${tDyn(s,'name','name_ar')}</strong>
                <div class="muted">${cityLabel(s.city)} • ${sysLabel(s.system)}</div>
              </div>
              <div class="rating" title="${s.rating.toFixed(1)} / 5">${ratingStars(s.rating)}</div>
            </div>
            <p class="muted" style="margin-top:8px">${tDyn(s,'desc','desc_ar')}</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end;justify-content:center">
            <button class="btn" aria-label="Info" data-id="${s.id}"> ${I18N[currentLang].btn_info}</button>
            <a class="btn black" href="#apply" data-apply="${tDyn(s,'name','name_ar')}">${I18N[currentLang].btn_apply}</a>
          </div>
        `;
        card.querySelector('[aria-label="Info"]').addEventListener('click',()=>openSchool(s.id));
        card.querySelector('[data-apply]').addEventListener('click',e=>{
          byId('applySchool').value = e.currentTarget.getAttribute('data-apply');
          
        });
        root.appendChild(card);
      });
    }

    function openSchool(id){
      setBackTarget('#schools');

      const s = SCHOOLS.find(x=>x.id===id);
      if(!s) return;
      byId('schoolName').textContent = tDyn(s,'name','name_ar');
      byId('schoolRating').innerHTML = ratingStars(s.rating);
      byId('schoolMeta').textContent = `${cityLabel(s.city)} • ${sysLabel(s.system)}`;
      byId('schoolGallery').innerHTML = s.images.map(u=>`<img src="${u}&auto=format&fit=crop&w=800&q=60" alt="${tDyn(s,'name','name_ar')}">`).join('');
      byId('schoolDesc').textContent = tDyn(s,'desc','desc_ar');
      byId('schoolPrograms').innerHTML = (s.programs||[]).map(p=>`<li>${p}</li>`).join('');
      byId('schoolContact').innerHTML = `
        <div class="row" style="gap:8px;align-items:center"><span class="icon"></span> ${currentLang==='ar' ? (s.address_ar||s.address) : s.address}</div>
        <div class="row" style="gap:8px;align-items:center"><span class="icon"></span> ${s.phone}</div>
        <div class="row" style="gap:8px;align-items:center"><span class="icon"></span> ${s.email}</div>
        <div class="row" style="gap:8px;align-items:center"><span class="icon"></span> <a href="${s.website}" target="_blank" rel="noopener">${s.website}</a></div>
      `;
      show('#school');
      setActiveNav('#schools');
      
    }









    // camps logo info apply map
   function renderCamps(){
  const root = byId('campList');
  if(!root) return;
  root.innerHTML = '';


  CAMPS.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'card camp';
    el.innerHTML = `
      <img src="${c.img}&auto=format&fit=crop&w=800&q=60" alt="${tDyn(c,'name','name_ar')}">
      <div>
        <strong>${tDyn(c,'name','name_ar')}</strong>
        <div class="muted">${cityLabel(c.city)}</div>
        <p class="muted" style="margin-top:6px">${tDyn(c,'desc','desc_ar')}</p>
      </div>
      <div class="side-actions">
        <button class="btn" data-info="${c.id}">  ${I18N[currentLang].btn_info}</button>

        <button class="btn accent" data-map="${c.id}">  ${I18N[currentLang].btn_map}</button>

        <button class="btn primary" data-apply="${c.id}">  ${I18N[currentLang].btn_apply}</button>


      </div>
    `;

    
    root.appendChild(el);

    
  });

  // ربط الأزرار
  CAMPS.forEach(c=>{
    const infoBtn  = document.querySelector(`[data-info="${c.id}"]`);
    const applyBtn = document.querySelector(`[data-apply="${c.id}"]`);
    const mapBtn   = document.querySelector(`[data-map="${c.id}"]`);

    // Info → يفتح المودال بمعلومات
    infoBtn?.addEventListener('click', ()=>{
      openCampModal(`
        <div class="modal-title" id="campModalTitle">${tDyn(c,'name','name_ar')}</div>
        <div class="muted">${cityLabel(c.city)}</div>
        <p style="margin-top:8px">${tDyn(c,'desc','desc_ar')}</p>
        <div class="chip" style="margin-top:10px">${c.phone}</div>
        <div class="modal-actions">
          <button class="btn" id="modalCloseBtn">${I18N[currentLang].back}</button>
          <button class="btn primary" id="modalApplyBtn">${I18N[currentLang].btn_apply}</button>
        </div>
      `, ()=>{
        byId('modalCloseBtn')?.addEventListener('click', closeCampModal);
        byId('modalApplyBtn')?.addEventListener('click', ()=>{
          byId('applySchool').value = tDyn(c,'name','name_ar');
          closeCampModal(); go('#apply');
        });
      });
    });

    // Apply → ينتقل لصفحة التقديم ويعبّي الاسم
   applyBtn?.addEventListener('click', ()=>{
  setBackTarget('#community');
  byId('applySchool').value = tDyn(c,'name','name_ar');
  go('#apply');
});

    document.getElementById("campAppForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Application submitted!");
  this.reset();
  location.hash = "#schools";
});

// زر الرجوع إلى صفحة المعسكرات
document.getElementById('backToList')?.addEventListener('click', () => {
  location.hash = '#community'; // عدلها إذا سكشنك اسمه مختلف
});


    // Map → مودال مع خريطة
    mapBtn?.addEventListener('click', ()=>{
      openCampModal(`
        <div class="modal-title" id="campModalTitle">${tDyn(c,'name','name_ar')}</div>
        <div class="muted" style="margin-bottom:8px">${cityLabel(c.city)}</div>
        <div id="campMap"></div>
      `, ()=> mountLeaflet(tDyn(c,'name','name_ar'), c.city));
    });
  });
}




    function show(hash){
      $$('main section').forEach(s=>s.classList.add('hide'));
      const el = document.querySelector(hash);
      if(el) el.classList.remove('hide');
      setActiveNav(hash);
    }

    function applyFilters(){
      const sys = byId('fSystem').value;
      const city = byId('fCity').value;
      const min = parseFloat(byId('fMin').value || '0');
      const sort = byId('fSort').value;
      let list = SCHOOLS.filter(s=> ((!sys || s.system===sys) && (!city || s.city===city) && s.rating>=min));
      if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);
      if(sort==='name') list.sort((a,b)=>a.name.localeCompare(b.name));
      if(sort==='city') list.sort((a,b)=>a.city.localeCompare(b.city));
      renderResults(list);
    }
    function clearFilters(){
      ['fSystem','fCity','fMin','fSort'].forEach(id=>byId(id).selectedIndex=0);
      renderResults(SCHOOLS.slice().sort((a,b)=>b.rating-a.rating));
    }
    function searchByName(q){
      const v = q.trim().toLowerCase();
      if(!v){ renderResults(SCHOOLS); return; }
      renderResults(SCHOOLS.filter(s=>s.name.toLowerCase().includes(v) || s.name_ar.toLowerCase().includes(v)));
      go('#schools');
    }
    function seedStats(){
      byId('statSchools').textContent = SCHOOLS.length;
      byId('statCities').textContent = new Set(SCHOOLS.map(s=>s.city)).size;
      byId('statCamps').textContent = CAMPS.length;
      byId('year').textContent = new Date().getFullYear();
    }
    function alertMsg(msg){ window.alert(msg); }

    function applyI18n(){
      const dict = I18N[currentLang];
      $$('[data-i18n]').forEach(el=>{
        const k = el.getAttribute('data-i18n');
        if(dict[k]) el.textContent = dict[k];
      });
      $$('[data-i18n-ph]').forEach(el=>{
        const k = el.getAttribute('data-i18n-ph');
        if(dict[k]) el.setAttribute('placeholder', dict[k]);
      });
      document.documentElement.dir = currentLang==='ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = currentLang;

      // update systems chips
      document.querySelectorAll('.systems-box .chip').forEach(ch=>{
        const sys = ch.getAttribute('data-system');
        ch.textContent = sysLabel(sys);
      });

      // update filter option labels
      const fSystem = byId('fSystem');
      if(fSystem){
        [...fSystem.options].forEach(opt=>{
          if(opt.value==="") opt.textContent = dict.opt_all;
          else opt.textContent = sysLabel(opt.value||opt.textContent);
        });
      }
      const fSort = byId('fSort');
      if(fSort){
        const map = {rating:'opt_top', name:'opt_name', city:'opt_city'};
        [...fSort.options].forEach(opt=>{
          const key = map[opt.value]; if(key && dict[key]) opt.textContent = dict[key];
        });
      }
      const fCity = byId('fCity');
      if(fCity){
        [...fCity.options].forEach(opt=>{
          if(opt.value==="") opt.textContent = dict.opt_all;
          else opt.textContent = cityLabel(opt.value||opt.textContent);
        });
      }

      // re-render lists
      const sys = (fSystem && fSystem.value) || '';
      const city= (fCity && fCity.value) || '';
      const min = parseFloat((byId('fMin')?.value)||'0');
      const sort= (fSort && fSort.value) || 'rating';
      let list = SCHOOLS.filter(s=>(!sys || s.system===sys) && (!city || s.city===city) && s.rating>=min);
      if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);
      if(sort==='name')   list.sort((a,b)=>a.name.localeCompare(b.name));
      if(sort==='city')   list.sort((a,b)=>a.city.localeCompare(b.city));
      renderResults(list);
      renderCamps();
    }

    

    // Router & events
    window.addEventListener('hashchange', ()=>{
      const h = location.hash || '#home';
      if(['#home','#systems','#schools','#school','#apply','#community','#about','#login','#payment'].includes(h)) show(h);
      setActiveNav(h);
    });

    byId('btnSearch').addEventListener('click',()=>searchByName(byId('searchInput').value));
    byId('searchInput').addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); searchByName(e.target.value); }});
    byId('btnSystems').addEventListener('click',()=>go('#systems'));
    
    byId('btnCamps').addEventListener('click',()=>go('#community'));

    $$('#systems .go').forEach(btn=>btn.addEventListener('click',e=>{
      const sys = e.currentTarget.closest('.sys').dataset.system;
      byId('fSystem').value = sys;
      go('#schools'); applyFilters();
    }));

    byId('btnApply').addEventListener('click',applyFilters);
    byId('btnClear').addEventListener('click',clearFilters);
    byId('backToList').addEventListener('click',()=>go('#schools'));
   byId('applyNow').addEventListener('click',()=>{
  setBackTarget('#school');
  go('#apply');
});


    // Login tabs
    $$('.tab').forEach(t=>t.addEventListener('click',e=>{
      $$('.tab').forEach(x=>x.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const tab = e.currentTarget.dataset.tab;
      byId('parentForm').classList.toggle('hide', tab!=='parent');
      byId('schoolForm').classList.toggle('hide', tab!=='school');
    }));

    // Apply form
    byId('applyForm').addEventListener('submit',e=>{
      e.preventDefault();
      alertMsg(currentLang==='ar' ? 'تم إرسال الطلب (تجريبي). المتابعة لتسجيل الدخول.' : 'Request sent (demo). Continue to login.');
      go('#login');
    });

    // Language switch
    byId('toggleLang').addEventListener('click',()=>{
      const sw = byId('toggleLang');
      const v = sw.getAttribute('aria-checked')==='true';
      sw.setAttribute('aria-checked', String(!v));
      currentLang = v ? 'ar' : 'en';
      applyI18n();
    });

// === HOME PAGE COUNTERS ===
document.addEventListener("DOMContentLoaded", () => {
  const countersSection = document.querySelector("#homeCounters");
  const counters = document.querySelectorAll("#homeCounters .counter");
  let started = false;

  if (!countersSection) return;

  // يبدأ العدّ عند الظهور
  const startCount = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      const step = Math.ceil(target / 200);
      const update = () => {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = current + step;
          setTimeout(update, 10);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
  };

  // مراقبة الظهور فقط لما تكون الصفحة Home
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const onHome = location.hash === "" || location.hash === "#home";
      if (entry.isIntersecting && onHome && !started) {
        startCount();
        started = true;
      }
    });
  }, { threshold: 0.5 });

  observer.observe(countersSection);

  // يخفي العدادات لما تنتقل لصفحة ثانية
  const toggleCounters = () => {
    const isHome = location.hash === "" || location.hash === "#home";
    countersSection.style.display = isHome ? "flex" : "none";
    if (isHome) started = false; // يرجع العداد يشتغل من جديد لو رجعت للصفحة
  };

  //////////

  /* =======================================================
   PARENT REAL PROFILE (LocalStorage)
   =======================================================*/

function loadParentProfile() {
  const data = JSON.parse(localStorage.getItem("parentProfile")) || {
    name: "John Doe",
    phone: "+962-79-1234567",
    children: 2,
    ages: "6, 10"
  };

  // Update UI
  document.getElementById("pName").innerHTML = `<strong>Name:</strong> ${data.name}`;
  document.getElementById("pPhone").innerHTML = `<strong>Phone:</strong> ${data.phone}`;
  document.getElementById("pChildren").innerHTML = `<strong>Children:</strong> ${data.children} (Ages: ${data.ages})`;

  // Pre-fill edit form
  document.getElementById("parentName").value = data.name;
  document.getElementById("parentPhone").value = data.phone;
  document.getElementById("childCount").value = data.children;
  document.getElementById("childAges").value = data.ages;
}

// Save profile
document.getElementById("editProfileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("parentName").value,
    phone: document.getElementById("parentPhone").value,
    children: document.getElementById("childCount").value,
    ages: document.getElementById("childAges").value
  };

  // Save to localStorage
  localStorage.setItem("parentProfile", JSON.stringify(data));

  // Success message
  alert("Profile updated successfully!");

  // Return to parent page
  go("#parant");
  loadParentProfile();
});

// Logout
function logout() {
  localStorage.removeItem("parentProfile");
  alert("You have been logged out.");
  go("#login");
}

// Load profile whenever page opens
window.addEventListener("hashchange", () => {
  if (location.hash === "#parant") loadParentProfile();
});


  // const observer1 = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     const onAbout = location.hash === "" || location.hash === "#about";
  //     if (entry.isIntersecting && onAbout && !started) {
  //       startCount();
  //       started = true;
  //     }
  //   });
  // }, { threshold: 0.5 });

  // observer.observe(countersSection);

  // // يخفي العدادات لما تنتقل لصفحة ثانية
  // const toggleCounters1 = () => {
  //   const isAbout = location.hash === "" || location.hash === "#about";
  //   countersSection.style.display = isHome ? "flex" : "none";
  //   if (isAbout) started = false; // يرجع العداد يشتغل من جديد لو رجعت للصفحة
  // };


  ////////////

  // أول تحميل
  toggleCounters();

  // كل ما تغيّر الهاش (تنقل بين الصفحات)
  window.addEventListener("hashchange", toggleCounters);
});



    
    

    /* ===== Community Modal helpers ===== */
const campModal     = byId('campModal');
const campModalBody = byId('campModalBody');
const campModalClose= byId('campModalClose');

function openCampModal(html, afterOpen){
  campModalBody.innerHTML = html || '';
  campModal.classList.add('modal-show');
  campModal.setAttribute('aria-hidden','false');
  if(typeof afterOpen === 'function') setTimeout(afterOpen, 50);
}
function closeCampModal(){
  campModal.classList.remove('modal-show');
  campModal.setAttribute('aria-hidden','true');
  // تنظيف الخريطة إذا لزم
  const mapEl = byId('campMap'); if(mapEl){ mapEl._leaflet_id = null; mapEl.innerHTML=''; }
}
campModalClose.addEventListener('click', closeCampModal);
campModal.addEventListener('click', e=>{ if(e.target===campModal) closeCampModal(); });

function cityToCoords(city){
  const MAP = {
    Amman:[31.963158,35.930359],
    Zarqa:[32.0728,36.0870],
    Irbid:[32.5569,35.8469],
    Madaba:[31.7167,35.8],
    Aqaba:[29.532,35.006]
  };
  return MAP[city] || [31.963158,35.930359];
}
function mountLeaflet(name, city){
  const [lat,lng] = cityToCoords(city);
  const map = L.map('campMap').setView([lat,lng], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap'
  }).addTo(map);
  L.marker([lat,lng]).addTo(map).bindPopup(name).openPopup();
}

    // Camps slider: duplicate items for endless loop + click to open community
    const slider = byId('sliderTrack');
    slider.innerHTML += slider.innerHTML;
    slider.querySelectorAll('img').forEach(img=>{
      img.addEventListener('click', ()=>{
        location.hash = '#community';
        window.scrollTo({top:0,behavior:'smooth'});
      });
    });

    // Init
    seedStats();
    clearFilters();
    applyI18n();

























show(location.hash || '#home');


// ✅ عند تحميل الصفحة، فعّل وظائف التنقل والأزرار كلها مرة واحدة
document.addEventListener('DOMContentLoaded', () => {

  // ---- 1) تفعيل التنقل بين الأنظمة ----
  enableSystemNavigation();

  // ---- 2) زر "Current" في الدفع ينقل إلى صفحة البروفايل ----
  const freePlanBtn = document.getElementById('btnFreePlan');
  if (freePlanBtn) {
    freePlanBtn.addEventListener('click', () => {
      go('#profile');
      setActiveNav('#profile');
      const schoolInput = document.querySelector('#schoolForm input[type="text"]');
      const schoolName = schoolInput ? schoolInput.value.trim() : 'Your School';
      document.getElementById('profileSchoolName').textContent = schoolName || 'Your School';
    });
  }

  // ---- 3) أزرار البروفايل (رجوع + تسجيل خروج) ----
  const backBtn = document.getElementById('btnBackToPayment');
  const logoutBtn = document.getElementById('btnLogout');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      go('#payment');
      setActiveNav('#payment');
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      alert('Logged out successfully (demo).');
      go('#login');
      setActiveNav('#login');
    });
  }
});




////////////////////////////////////////////////////////////////





function enableSystemNavigation() {
  // استهداف جميع العناصر التي تملك data-system
  document.querySelectorAll('[data-system]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const system = el.dataset.system?.trim();
      if (!system) return;

      // الانتقال لصفحة المدارس
      location.hash = '#schools';

      // تطبيق الفلتر بعد الانتقال
      setTimeout(() => {
        const systemSelect = document.getElementById('fSystem');
        if (systemSelect) {
          systemSelect.value = system;
          applyFilters(); // تأكد أن هذه الدالة موجودة وتفلتر المدارس بناءً على القيم
        }
      }, 250);
    });
  });
}



// فعّل الوظيفة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  enableSystemNavigation();
});


////////////////////////////////////////////////////////////////



