

fetch("../backend/auth/check_session.php",{credentials:"include"})
.then(r=>r.json())

// ================= LOAD SCHOOLS FROM DATABASE =================
let DB_SCHOOLS = [];

fetch('../backend/schools/get.php')
  .then(res => res.json())
  .then(data => {

    if (!Array.isArray(data) || data.length === 0) {
      console.warn("DB empty or invalid, using mock data");
      return;
    }

 DB_SCHOOLS = data.map(s => ({
  id: String(s.id),            // مهم: نخليه string ثابت
  name: s.name_en,
  name_ar: s.name_ar,
  system: s.type,
  city: (s.city || '').trim(),
  rating: parseFloat(s.rating || 0), // بدل رقم ثابت
  email: s.email,
  phone: s.phone,
  website: s.website,
  desc: s.description_en,
  desc_ar: s.description_ar,
  address: s.address,

  // صورة الكرت / اللوجو
  images: s.images
    ? [`assets/images/schools/${s.images}`]
    : ['assets/images/schools/default-school.jpg'],

  // ✅ صور التفاصيل (كنص، نحللها لاحقًا في openSchool)
  gallery: s.gallery || '',
  programs: s.programs || '',
  fees: s.fees || ''
}));

// 👇 هذا مهم جدًا
window.SCHOOLS = DB_SCHOOLS;

    // 🔁 استبدال مصدر البيانات
    SCHOOLS = DB_SCHOOLS;
window.SCHOOLS = DB_SCHOOLS;
clearFilters();


    // إعادة الرسم
    clearFilters();
    seedStats();

    console.log("Schools loaded from DB:", DB_SCHOOLS.length);
  })
  .catch(err => {
    console.error("DB fetch failed, using mock data", err);
  });



  

// Mock data
    window.USE_DB = false;
     let SCHOOLS = [
];
    const CAMPS = [
         {id:"c1", name:"Irbid Kids Club", city:"Irbid", phone:"+962-79-333-3333", img:"https://images.unsplash.com/photo-1743383126589-dacdc73c13ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyJTIwY2FtcHMlMjBsb2dvfGVufDB8fDB8fHww", desc:"A fun and safe camp designed for young children to explore the world around them. Activities include simple science experiments, storytelling, outdoor play, and creative games that encourage curiosity and confidence."
         ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},

      {id:"c2", name:"Amman Activity Center", city:"Amman", phone:"+962-79-111-1111", img:"https://images.unsplash.com/photo-1539629213911-66eac000dd0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bW1lciUyMGNhbXBzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D", desc:"This camp focuses on creativity and imagination through drawing, painting, crafts, and hands-on art projects. Children express themselves freely while developing fine motor skills and artistic confidence." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},

         
      {id:"c3", name:"Zarqa Learning Hub", city:"Zarqa", phone:"+962-79-222-2222", img:"https://images.unsplash.com/photo-1535069499309-04ad66587934?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHN1bW1lciUyMGNhbXBzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D", desc:"A playful science camp where children discover basic scientific concepts through safe experiments, colorful reactions, and interactive demonstrations that make learning exciting and enjoyable." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},


       {id:"c4", name:"home show ", city:"aqaba", phone:"+962-78-331-2442", img:"https://images.unsplash.com/photo-1665823253628-53910cb3be40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXBzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D", desc:"A high-energy camp that promotes physical activity and healthy habits. Children participate in fun sports, obstacle courses, group games, and movement activities that improve coordination and teamwork." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},


        {id:"c5", name:"jabal camps Club", city:"amman", phone:"+962-79-9654-8822", img:"https://images.unsplash.com/photo-1576723666300-97539040cfdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbXBzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D", desc:"An engaging English language camp designed for young learners. Through songs, games, stories, and role-playing, children improve their listening, speaking, and basic vocabulary skills." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},


        {id:"c6", name:"jabal camps Center", city:"amman", phone:"+962-79-9654-8822", img:"https://media.istockphoto.com/id/483954743/photo/3d-explore-camping.jpg?s=612x612&w=0&k=20&c=u9gp2CED1E5VO5b00mqyPzV4zrjRLYqFwhz33NKxkxk=", desc:"A hands-on construction camp where children build models using LEGO and building blocks. Activities enhance creativity, problem-solving skills, and basic engineering thinking in a fun environment." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},
        {id:"c7", name:"dalal camps Club", city:"amman", phone:"+962-79-9654-8822", img:"https://media.istockphoto.com/id/1746036188/photo/hand-lettering-kids-summer-camp-3d-realistic-stylish-isolated-on-white.jpg?s=612x612&w=0&k=20&c=y-RkpT6VF-CDm4AyQlNg5Uxqy9p6AfGSh0ZMfpO-aEU=", desc:"Robotics and language immersion programs." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},
        {id:"c8", name:"play camps Center ", city:"amman", phone:"+962-79-9654-8822", img:"https://media.istockphoto.com/id/1389504230/photo/summer-camp-community-education.webp?a=1&b=1&s=612x612&w=0&k=20&c=RoqUje7fFL1erd9GpaxSpeKLvJwtYXpsep1rVnGgADc=", desc:"Robotics and language immersion programs." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},
        {id:"c9", name:"kids camps Club", city:"amman", phone:"+962-79-9654-8822", img:"https://media.istockphoto.com/id/170041943/photo/large-group-of-enthusiatic-young-campers.webp?a=1&b=1&s=612x612&w=0&k=20&c=gGc1OlCSIqj32jrGMy57SVH3_SjMPre9qQPcW3OfscI=", desc:"Robotics and language immersion programs." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},
        {id:"c10", name:"layale camps Center", city:"amman", phone:"+962-79-9654-8822", img:"https://media.istockphoto.com/id/475284932/photo/summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=a4a-LAba3CMTFOciWUjcaHdgY3ptjxIMM81cfOCvqd0=", desc:"Robotics and language immersion programs." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},
        {id:"c11", name:"amman camps hub ", city:"amman", phone:"+962-79-9654-8822", img:"https://media.istockphoto.com/id/626061024/photo/summer-camp-poster-in-flat-design-inspirational-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD40rPxLd9WzhWPoPGvA0yEeLeH4w3b8qlF-UrPbWIo=", desc:"Robotics and language immersion programs." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},
        {id:"c12", name:"madelar camps ", city:"amman", phone:"+962-79-9654-8822", img:"https://media.istockphoto.com/id/2205699240/photo/3d-summer-camp-wood-sign-board-with-green-leaves-render-forest-wooden-signboard-banner-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=r7Rd9J8FY79hyw1G3CU1xhJfYez5cErMpWanKJL7Nc8=", desc:"Robotics and language immersion programs." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},
        {id:"c13", name:"jata camps hub ", city:"amman", phone:"+962-79-9654-8822", img:"https://images.unsplash.com/photo-1728555864830-499254793e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbXBzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D", desc:"Robotics and language immersion programs." ,images1: ["https://plus.unsplash.com/premium_photo-1687757690681-30eaf2cb50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",] 
         ,images2: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images3: ["https://plus.unsplash.com/premium_photo-1687354990511-daf367ffa5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images4: ["https://images.unsplash.com/photo-1551398766-791b80fde370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcHMlMjBraWRzfGVufDB8fDB8fHww",]
         ,images5: ["https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images6: ["https://plus.unsplash.com/premium_photo-1687757692697-1b1afaf77a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBzJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",]
         ,images7: ["https://media.istockphoto.com/id/505936299/photo/children-smiling-in-teepee-at-campsite.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lE8UEwb3BZSxCw2DiIAglS2JSpy49EAzV-fg5HLHGQ=",]
         ,images8: ["https://media.istockphoto.com/id/1326030834/photo/shot-of-a-group-of-teenagers-walking-across-a-bridge-in-nature-at-summer-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsQB2W3XcFqqn83TGAiq_Va9EL8N5dLgPffsk-dOYn8=",]},
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
    
    /* =========================i18n STATIC + DYNAMIC ========================= */
    const CITY_LABEL = {
      Amman:{en:"Amman", ar:"عمّان"},
      Zarqa:{en:"Zarqa", ar:"الزرقاء"},
      Irbid:{en:"Irbid", ar:"إربد"},
      Madaba:{en:"Madaba", ar:"مأدبا"},
      Aqaba:{en:"Aqaba", ar:"العقبة"}
    };
    const SYS_LABEL = {
      "IB":{en:"IB", ar:"البكالوريا الدولية"},
      "IGCSE":{en:"IGCSE", ar:"IGCSE / A-Level"},
      "SAT/AP":{en:"SAT/AP", ar:"الأمريكي (SAT/AP)"},
      "National":{en:"National", ar:"المنهاج الأردني"},
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
        nav_home:"Home", nav_systems:"Systems", nav_schools:"Schools", nav_community:"Summer Camps", nav_compare:"Compare",nav_about:"About us",nav_profile:"Profile" , nav_login:"Login", nav_payment:"Payment",
        home_head:"Find the right school for your child in Jordan",
        home_sub:"Search by name, explore by educational system, or discover summer camps.",
        ph_search:"Search school name…", btn_search:"Search", btn_systems:"By System", btn_camps:"Summer Camps",
        sys_title:"Educational Systems", sys_sub:"Tap a system to see schools that teach it.",
        sch_title:"Schools", sch_sub:"Review and research of the best schools in Jordan according to the educational system, city, and rating.",
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
        about_21:" Why EduChoice Matters",
        about_22:"Jordan’s private education sector is growing rapidly, but information is scattered and often outdated across hundreds of sources.EduChoice centralizes all this data into one trusted platform — empowering parents with better choices and helping schools reach the right audience. It increases transparency, simplifies admission, and encourages digital transformation in education.",
        about_33:" Future Vision",
        about_44:"EduChoice aims to expand with AI-based school recommendations, parent dashboards, and a dedicated mobile app. The long-term vision includes partnerships with educational authorities to enhance transparency and data accura",
        about_55:" Conclusion",
        about_66:"is more than just a website — it’s a movement toward smarter, data-driven education choices in Jordan. By combining technology, user experience, and educational insight, EduChoice bridges families and schools to build a brighter, more connected educational future",
        about_h1:"Mission", about_p1:"We help parents compare schools by system, city, and rating, and apply in minutes.",
        about_h2:"Scope", about_l1:"Public and private schools in Jordan", about_l2:"Systems: IB, IGCSE/A-Level, SAT/AP, National, Montessori", about_l3:"Parents & Schools dual login", about_l4:"Owner payment to boost listing", about_l5:"Community: activity & camp finder", about_stats:"the MIS department",
        st_sch:"developers", st_cit:"designer", st_cam:"softwares",
        login_title:"Login / Register", login_sub:"Choose your portal.", tab_parent:"Parents", tab_school:"Schools", lf_pass:"Password", lf_forgot:"Forgot?", lf_sign:"Sign In",
        sf_school:"School Name", sf_phone:"Phone", sf_system:"System", sf_register:"Register", sf_upgrade:"Upgrade Listing →",
        pay_title:"Payment & Plans (Schools)", pay_sub:"Boost your visibility. Secure checkout placeholder (integrate later).",btn_map:"Map"   ,       // داخل I18N.en
        f_about:"Unified directory of Jordan schools & camps. Built as a Web Science project.",
        opt_all:"All", opt_top:"Top Rated", opt_name:"Name (A–Z)", opt_city:"City",
        btn_info:"Info", btn_apply:"Apply", btn_view:"View Details", apply_now:"Apply Now",
        camp_ads:" Summer Camps Ads" 
      },
      ar:{
        nav_home:"الرئيسية", nav_systems:"الأنظمة التعليمية", nav_schools:"المدارس", nav_community:" المعسكرات",nav_compare:"المقارنة" ,nav_about:"من نحن", nav_login:"تسجيل الدخول", nav_payment:"الدفع", nav_profile:"الصفحة الشخصية" ,btn_map:"الخريطة"  ,    // داخل I18N.ar
        home_head:"ابحث عن المدرسة المناسبة لطفلك في الأردن",
        home_sub:"ابحث بالاسم، أو استكشف حسب النظام التعليمي، أو اكتشف المعسكرات الصيفية.",
        ph_search:"ابحث باسم المدرسة…", btn_search:"بحث", btn_systems:"حسب النظام", btn_camps:"المعسكرات",
        sys_title:"الأنظمة التعليمية", sys_sub:"اختر نظامًا لعرض المدارس التي تُدرِّسه.",
        sch_title:"المدارس", sch_sub:"مراجعة  و بحث عن أفضل المدارس في الأردن حسب النظام التعليمي، المدينة، والتقييم.",
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
        about_21:" لماذا يُعدّ EduChoice مهمًا؟",
        about_22:"يشهد قطاع التعليم الخاص في الأردن نموًا متسارعًا، إلا أن المعلومات متناثرة، وغالبًا ما تكون قديمة، عبر مئات المصادر.ع EduChoice جميع هذه البيانات في منصة واحدة موثوقة، مما يُمكّن أولياء الأمور من خيارات أفضل، ويساعد المدارس على الوصول  المناسب.ز EduChoice الشفافية، ويُبسط عملية القبول، ويُشجع على التحول الرقمي في التعليم.",
        about_33:" الرؤية المستقبلية",
        about_44:"تهدف EduChoice إلى التوسع من خلال توصيات مدرسية قائمة على الذكاء الاصطناعي، ولوحات معلومات لأولياء الأمور، وتطبيق جوال مخصص. تتضمن الرؤية طويلة المدى شراكات مع الجهات التعليمية لتعزيز الشفافية ودقة البيانات.",
        about_55:" الخاتمة",
        about_66:"هو أكثر من مجرد موقع إلكتروني، إنه مبادرة نحو خيارات تعليمية أذكى قائمة على البيانات في الأردن. من خلال الجمع بين التكنولوجيا وتجربة المستخدم والرؤى التعليمية، يربط EduChoice بين العائلات والمدارس لبناء مستقبل تعليمي أكثر إشراقًا وتواصلًا.",
        about_h1:"الرسالة",  about_p1:"نساعد الأهالي على مقارنة المدارس حسب النظام والمدينة والتقييم والتقديم خلال دقائق.",
        about_h2:"النطاق", about_l1:"مدارس حكومية وخاصة في الأردن", about_l2:"الأنظمة: IB وIGCSE/A-Level وSAT/AP والمنهاج الوطني ومونتيسوري", about_l3:"بوابتان للأهالي والمدارس", about_l4:"دفع للمدارس لزيادة الظهور", about_l5:"المجتمع: البحث عن الأنشطة والمعسكرات", about_stats:"قسم نظم المعلومات الادارية",
        st_sch:"مطورين", st_cit:"مصممين", st_cam:"برمجية",
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
            </div>
            <p class="muted" style="margin-top:8px">${tDyn(s,'desc','desc_ar')}</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end;justify-content:center">
<button class="btn require-login" aria-label="Info" data-id="${s.id}">
  ${I18N[currentLang].btn_info}
</button>
            <a class="btn primary" href="#apply" data-apply="${tDyn(s,'name','name_ar')}">${I18N[currentLang].btn_apply}</a>
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
  // ================== SET BACK ==================
  // زر Back موحّد (يرجع للمدارس)
  // setBackTarget && setBackTarget('#schools');

  // ================== GET SCHOOL ==================
  const s = SCHOOLS.find(x => String(x.id) === String(id));
  if (!s) {
    console.error('School not found:', id);
    return;
  }
  



  
  // ================== HEADER ==================
  byId('schoolName').textContent = tDyn(s,'name','name_ar');
  byId('schoolRating').innerHTML = ratingStars(s.rating || 0);
  byId('schoolMeta').textContent =
    `${cityLabel((s.city||'').trim())} • ${sysLabel(s.system)}`;

  // ================== GALLERY ==================
  let gallery = [];

  if (s.gallery) {
    if (Array.isArray(s.gallery)) {
      gallery = s.gallery;
    } else if (typeof s.gallery === 'string') {
      gallery = s.gallery
        .split(',')
        .map(x => x.trim())
        .filter(Boolean);
    }
  }


  

let schoolMap; // متغير عام
function initSchoolMap(lat = 31.9539, lng = 35.9106, name = "School Location") {
  // 🛑 إذا الخريطة موجودة من قبل، احذفها
  if (schoolMap) {
    schoolMap.remove();
  }
  // ⏳ انتظر شوي لحد ما الصفحة تظهر
  setTimeout(() => {
    schoolMap = L.map("schoolMap").setView([lat, lng], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(schoolMap);
    L.marker([lat, lng])
      .addTo(schoolMap)
      .bindPopup(name)
      .openPopup();
    // 🪄 أهم سطر
    schoolMap.invalidateSize();
  }, 200);
}



  const galleryBox = byId('schoolGallery');
  if (galleryBox) {
    galleryBox.innerHTML = gallery.length
      ? gallery.map(img => `
          <img
            src="assets/images/schools/${img}"
            alt="${tDyn(s,'name','name_ar')}"
            class="gallery-img"
          >
        `).join('')
      : `<p class="muted">No images available</p>`;
  }



  // ================== DESCRIPTION ==================
  byId('schoolDesc').textContent = tDyn(s,'desc','desc_ar') || '';








  // ================== PROGRAMS ==================



let programs = [];

if (s.programs) {
  if (Array.isArray(s.programs)) {
    programs = s.programs;
  } else if (typeof s.programs === 'string') {
    programs = s.programs
      .split(',')
      .map(x => x.trim())
      .filter(Boolean);
  }
}

byId('schoolPrograms').innerHTML = programs.length
  ? programs.map(p => `<li>${p}</li>`).join('')
  : `<div class="empty">No programs available</div>`;



    // ================== schoolfees ==================
let fees = [];

if (s.fees) {
  if (Array.isArray(s.fees)) {
    fees = s.fees;
  } else if (typeof s.fees === 'string') {
    fees = s.fees
      .split(',')
      .map(x => x.trim())
      .filter(Boolean);
  }
}

byId('schoolfees').innerHTML = fees.length
  ? fees.map(f => `<li>${f}</li>`).join('')
  : `<div class="empty">Fees will be announced soon</div>`;











  // ================== CONTACT ==================
  byId('schoolContact').innerHTML = `
    <div class="row"><span class="icon"></span> ${s.address || ''}</div>
    <div class="row"><span class="icon"></span> ${s.phone || ''}</div>
    <div class="row"><span class="icon"></span> ${s.email || ''}</div>
    <div class="row"><span class="icon"></span>
      ${s.website
        ? `<a href="${s.website}" target="_blank" rel="noopener">${s.website}</a>`
        : ''}
    </div>
  `;


  // ================== SHOW PAGE ==================
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
<button class="btn require-login" data-info="${c.id}"> ${I18N[currentLang].btn_info}</button>
        <button class="btn require-login" data-map="${c.id}">  ${I18N[currentLang].btn_map}</button>
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
    if (CURRENT_ROLE === 'visitor') {
    location.hash = '#login';
    return;
  }
  openCampModal(`
   <div class="camp-modal clean">
  <!-- TOP AVATAR -->
  <div class="camp-avatar-wrap">
    <img class="camp-avatar" src="${c.img}" alt="Camp Logo">
  </div>
  <!-- TITLE -->
  <div class="camp-title">
    <h2>${tDyn(c,'name','name_ar')}</h2>
    <p class="muted"> ${cityLabel(c.city)}</p>
  </div>
  <!-- INFO STRIP -->
  <div class="camp-info-strip">
    <div><strong>Age</strong><span>6 – 14</span></div>
    <div><strong>Duration</strong><span>2–4 Weeks</span></div>
    <div><strong>Type</strong><span>Summer Camp</span></div>
    <div><strong>Phone</strong><span>${c.phone}</span></div>
  </div>
  <!-- DESCRIPTION -->
  <div class="camp-desc">
    <h4>About the Camp</h4>
    <p>${tDyn(c,'desc','desc_ar')}</p>
  </div>
  <!-- GALLERY -->
  <div class="camp-gallery-wrap">
    <h4>Camp Activities</h4>
    <div class="camp-gallery">
      <img src="${c.images1}&w=420">
      <img src="${c.images2}&w=421">
      <img src="${c.images3}&w=422">
      <img src="${c.images4}&w=423">
      <img src="${c.images5}&w=424">
      <img src="${c.images6}&w=425">
      <img src="${c.images7}&w=426">
      <img src="${c.images8}&w=427">
    </div>
  </div>
  <!-- ACTIONS -->
  <div class="modal-actions">


    <button class="btn" id="modalCloseBtn">${I18N[currentLang].back}</button>


    <button class="btn primary" id="modalApplyBtn">${I18N[currentLang].btn_apply}</button>
  </div>
</div>
  `, ()=>{
    byId('modalCloseBtn')?.addEventListener('click', closeCampModal);
    byId('modalApplyBtn')?.addEventListener('click', ()=>{
      byId('applySchool').value = tDyn(c,'name','name_ar');
      closeCampModal();
      go('#apply');
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
  location.hash = "#community";
});



// زر الرجوع إلى صفحة المعسكرات
document.getElementById('backToList')?.addEventListener('click', () => {
  location.hash = '#school'; // عدلها إذا سكشنك اسمه مختلف
});









    // Map → مودال مع خريطة
    mapBtn?.addEventListener('click', ()=>{
       if (CURRENT_ROLE === 'visitor') {
    location.hash = '#login';
    return;
  }
      openCampModal(`
        <div class="modal-title" id="campModalTitle">${tDyn(c,'name','name_ar')}</div>
        <div class="muted" style="margin-bottom:8px">${cityLabel(c.city)}</div>
        <div id="campMap"></div>
      `, ()=> mountLeaflet(tDyn(c,'name','name_ar'), c.city));
    });
  });
}

  const SYSTEM_MAP = {
  "IB": ["IB"],
  "IGCSE": ["British", "Cambridge"],
  "SAT/AP": ["SAT/AP", "American"],
  "National": ["National"],
  "Montessori": ["Montessori"]
};



   function show(hash){
  $$('main section').forEach(s=>s.classList.add('hide'));

  const el = document.querySelector(hash);
  if (el) el.classList.remove('hide');

  setActiveNav(hash);

  // ✅ الحل هنا
  if (hash === "#profile") {
    const role = sessionStorage.getItem("currentRole");
    if (role) showProfileByRole(role);
  }
}

    function applyFilters(){
  const sys = byId('fSystem').value;
  const city = byId('fCity').value;
  const sort = byId('fSort').value;

  let list = SCHOOLS.filter(s =>
    (!sys || SYSTEM_MAP[sys]?.some(k => s.system.includes(k))) &&
    (!city || s.city?.trim() === city)

  );
// SORT
if (sort === 'name') {
  list.sort((a, b) =>
    (a.name || '').localeCompare(b.name || '', 'en', { sensitivity: 'base' })
  );
}

if (sort === 'city') {
  list.sort((a, b) =>
    (a.city || '').trim().localeCompare((b.city || '').trim())
  );
}

if (sort === 'rating') {
  list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
}

  renderResults(list);
}


function clearFilters(){
  ['fSystem','fCity','fMin','fSort'].forEach(id => byId(id).selectedIndex = 0);
  renderResults(SCHOOLS.slice());
}

    ///////////
   function searchByName(q) {
  const v = q.trim().toLowerCase();

  if (!v) return;

  /* ===== Schools ===== */
  const schoolResults = SCHOOLS.filter(s =>
    (s.name && s.name.toLowerCase().includes(v)) ||
    (s.name_ar && s.name_ar.toLowerCase().includes(v)) ||
    (s.city && s.city.toLowerCase().includes(v)) ||
    (s.system && s.system.toLowerCase().includes(v)) ||
    (s.programs && s.programs.join(' ').toLowerCase().includes(v))
  );

  /* ===== Camps ===== */
  const campResults = CAMPS.filter(c =>
    (c.name && c.name.toLowerCase().includes(v)) ||
    (c.city && c.city.toLowerCase().includes(v)) ||
    (c.type && c.type.toLowerCase().includes(v)) ||
    (c.description && c.description.toLowerCase().includes(v))
  );

  /* ===== Priority Logic ===== */

  // إذا لقى مدرسة وحدة → افتح صفحة معلومات المدرسة
  if (schoolResults.length === 1) {
    openSchool(schoolResults[0].id);   // دالة فتح تفاصيل المدرسة
    go('#school');
    return;
  }

  // إذا في أكثر من نتيجة → اعرض ليست
  if (schoolResults.length) {
    renderResults(schoolResults);
    go('#schools');
    return;
  }



    // إذا ما لقى مدارس ولقي كامب واحد → افتح معلومات الكامب
  if (schoolResults.length === 0 && campResults.length === 1) {
    openCamp(campResults[0].id);       // دالة فتح تفاصيل الكامب
    go('#camp'); // أو #community حسب مشروعك
    return;
  }
    // إذا في أكثر من نتيجة → اعرض ليست
  if (campResults.length) {
    renderCamps(campResults);
    go('#community');
    return;
  }

  // إذا ما في ولا نتيجة
  alert("No results found");
}

  ////////

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
      if(['#home','#systems','#schools','#profile','#school','#apply','#compare','#community','#about','#login','#payment'



      ].includes(h)) show(h);
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




byId("compareResetBtn")?.addEventListener("click", () => {
  location.reload();
});
byId("compareResetBtn1")?.addEventListener("click", () => {
  location.reload();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// =================== HELPERS ===================
const qs = (s, root=document) => root.querySelector(s);
const qsa = (s, root=document) => [...root.querySelectorAll(s)];

function showSection(id) {
  // id: "login" | "profile"
  ["login","profile"].forEach(x => qs("#"+x)?.classList.add("hide"));
  qs("#"+id)?.classList.remove("hide");
}

// =================== AUTH TABS (LOGIN/SIGNUP) ===================
function initAuthTabs(){
  const tabs = qsa("#login .tab");
  const panels = qsa("#login .auth-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      panels.forEach(p => {
        p.classList.add("hide");
        if (p.dataset.panel === target) p.classList.remove("hide");
      });
    });
  });
}







////////////////////////////////////////////////////////////////////////////////////////








document.getElementById("saveSchoolInfo")?.addEventListener("click", async () => {

  const data = {
    name_en: document.getElementById("name_en").value,
    name_ar: document.getElementById("name_en").value, // مؤقت
    system: "National",   // ⭐ مهم
    city: "Amman",        // ⭐ مهم
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    website: document.getElementById("website").value,
    description_en: document.getElementById("description_en").value,
    description_ar: document.getElementById("description_en").value
  };

  const res = await fetch("../backend/schools/save.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

 const txt = await res.text();
alert(txt);

});










// =================== PROFILE TABS (PARENT/SCHOOL/ADMIN) ===================

function setupProfileTabs(profileRoot){
  const buttons = qsa("aside button[data-tab]", profileRoot);
  const sections = qsa(".pp-section, .sp-section, .ap-section", profileRoot);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      sections.forEach(sec => sec.classList.remove("active"));
      const target = qs("#" + tab, profileRoot);
      if (target) target.classList.add("active");
    });
  });
}



































// =================== API CALLS ===================
async function checkSession(){
  const res = await fetch("../backend/auth/check_session.php", {
    method: "GET",
    credentials: "include"
  });
  return await res.json();
}

async function doLogin(email, password, roleUI){
  const fd = new FormData();
  fd.append("email", email);
  fd.append("password", password);
  fd.append("role", roleUI); // للواجهة فقط

  const res = await fetch("../backend/auth/login.php", {
    method: "POST",
    body: fd,
    credentials: "include"
  });
  const text = await res.text();
  return text.trim();
}

async function doSignup(name, email, password, role){
  const fd = new FormData();
  fd.append("name", name);
  fd.append("email", email);
  fd.append("password", password);
  fd.append("role", role);

  const res = await fetch("../backend/auth/signup.php", {
    method: "POST",
    body: fd,
    credentials: "include"
  });
  const text = await res.text();
  return text.trim();
}


// =================== LOGOUT ===================
async function logout() {
  await fetch("../backend/auth/logout.php", { method: "POST" });

  // 🔹 1) رجّع الدور Visitor
  CURRENT_ROLE = 'visitor';
  localStorage.removeItem('logged_role');
  sessionStorage.removeItem('currentRole');

  // 🔹 2) اخفي المينو (صح)
  // document.querySelector(".menu").classList.remove("hide");

  // 🔹 3) روح على Home صراحة
  location.hash = '#home';
  show('#home');            // ⬅️ هذا السطر المهم
  setActiveNav('#home');    // ⬅️ وهذا

  // 🔹 4) شغّل الحارس
  // guardVisitorRoutes();
}


// =================== INIT ===================



document.addEventListener("DOMContentLoaded", async () => {
  initAuthTabs();

  
  // Elements
  const loginForm = qs("#loginForm");
  const signupForm = qs("#signupForm");
  const loginMsg = qs("#loginMsg");
  const signupMsg = qs("#signupMsg");
  const logoutBtn = qs("#logoutBtn");

  logoutBtn?.addEventListener("click", logout);

  // 1) قرار واحد عند فتح الموقع
  try{
    const s = await checkSession();
  if (s.logged) {
  // 🔑 هذا هو الحل
  CURRENT_ROLE = s.role;

  showSection("profile");
  showProfileByRole(s.role);
} else {
  CURRENT_ROLE = 'visitor';
  showSection("login");
}

  }catch(e){
    showSection("login");
  }



 // 2) Login submit
loginForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = qs("#loginEmail").value.trim();
  const pass  = qs("#loginPass").value;
  const roleUI = qs("#loginRole").value;

  const text = await doLogin(email, pass, roleUI);

  if (!text.startsWith("OK")) {
    alert(text);
    return;
  }

  const s = await checkSession();

  console.log("LOGIN SESSION:", s);

  if (s.logged) {
    CURRENT_ROLE = s.role;

    showSection("profile");
    showProfileByRole(s.role);

    alert("PROFILE SHOWN — لا تعمل أي شي، بس اضغط OK");
  }
});



  // 3) Signup submit
signupForm.addEventListener("submit", async e => {
  e.preventDefault();

  const fd = new FormData();
  fd.append("name", signupName.value);
  fd.append("email", signupEmail.value);
  fd.append("password", signupPass.value);
  fd.append("role", signupRole.value);

  const res = await fetch("../backend/auth/signup.php", {
    method: "POST",
    body: fd
  });

  const text = await res.text();

  if (text.trim() === "OK") {
    alert("Account created successfully. Please login.");

    // ارجع على login tab
    document.querySelector('[data-tab="login"]').click();

    signupForm.reset();
  } else {
    alert(text);
  }
});

});









/* =============================== VISITOR ROUTE GUARD (ADD ONLY) =============================== */

const VISITOR_ALLOWED = [
  '#home',
  '#systems',
  '#schools',
  '#community',
  '#about',
  '#payment',
  '#login'
];

let CURRENT_ROLE = 'visitor';

// جلب الدور من السيرفر
async function syncSessionRole() {
  try {
    const res = await fetch('backend/auth/session.php');
    const data = await res.json();
    CURRENT_ROLE = data.role || 'visitor';
  } catch (e) {
    CURRENT_ROLE = 'visitor';
  }
}

// حارس الصفحات
function guardVisitorRoutes() {
  const hash = location.hash || '#home';

  // منع الزائر
  if (CURRENT_ROLE === 'visitor' && !VISITOR_ALLOWED.includes(hash)) {
    location.hash = '#login';
    return;
  }

  // 🔑 الحل الحقيقي هنا
  if (hash === '#profile' && CURRENT_ROLE !== 'visitor') {
    showSection("profile");
    showProfileByRole(CURRENT_ROLE);
  }
}

// أول تحميل
// document.addEventListener('DOMContentLoaded', async () => {
//   if (!location.hash) location.hash = '#home';
//   // await syncSessionRole();
//   guardVisitorRoutes();
// });

document.addEventListener('DOMContentLoaded', async () => {
  if (!location.hash) location.hash = '#home';
  // لا تعمل guard هون
});

// أي تغيير صفحة
window.addEventListener('hashchange', guardVisitorRoutes);























   ///////////////------------------------------------------------///////////////////////////------------------------------------------------////////////


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

  


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// ✅ عند تحميل الصفحة، فعّل وظائف التنقل والأزرار كلها مرة واحدة
document.addEventListener('DOMContentLoaded', () => {

  // ---- 1) تفعيل التنقل بين الأنظمة ----
  enableSystemNavigation();

//---------------------------------------------------------------------------------------

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


//---------------------------------------------------------------------------------------/////////////////////////////







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








//---------------------------------------------------------------------------------------/////////////////////////////////


// ========= SHOW COMPARE PAGE =========
document.querySelector('a[href="#compare"]')?.addEventListener("click", () => {
  show("#compare");
});

// ========= BUTTONS: SHOW BOXES =========
byId("showCompareSchools").addEventListener("click", () => {
  byId("schoolCompareBox").classList.remove("hide");
  byId("campCompareBox").classList.add("hide");
  fillSchoolDropdowns();
});

byId("showCompareCamps").addEventListener("click", () => {
  byId("campCompareBox").classList.remove("hide");
  byId("schoolCompareBox").classList.add("hide");
  fillCampDropdowns();
});


// ========= FILL SCHOOLS SELECT =========
function fillSchoolDropdowns() {
  const A = byId("schoolA");
  const B = byId("schoolB");

  A.innerHTML = `<option value="">Select School 1</option>`;
  B.innerHTML = `<option value="">Select School 2</option>`;

  SCHOOLS.forEach(s => {
    A.innerHTML += `<option value="${s.id}">${s.name}</option>`;
    B.innerHTML += `<option value="${s.id}">${s.name}</option>`;
  });
}

// ========= FILL CAMPS SELECT =========
function fillCampDropdowns() {
  const A = byId("campA");
  const B = byId("campB");

  A.innerHTML = `<option value="">Select Camp 1</option>`;
  B.innerHTML = `<option value="">Select Camp 2</option>`;

  CAMPS.forEach(c => {
    A.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    B.innerHTML += `<option value="${c.id}">${c.name}</option>`;
  });
}
// ========= COMPARE SCHOOLS =========
byId("btnCompareSchools").addEventListener("click", () => {
  const idA = byId("schoolA").value;
  const idB = byId("schoolB").value;

  if (!idA || !idB) {
    alert("Please select two schools.");
    return;
  }

  const A = DB_SCHOOLS.find(s => String(s.id) === String(idA));
  const B = DB_SCHOOLS.find(s => String(s.id) === String(idB));

  if (!A || !B) {
    alert("School data not loaded yet.");
    return;
  }

  renderSchoolComparison(A, B);
});

function renderSchoolComparison(A, B) {

  const programsA = A.programs
    ? A.programs.split(',').map(x => x.trim()).filter(Boolean).join(", ")
    : "No programs available";

  const programsB = B.programs
    ? B.programs.split(',').map(x => x.trim()).filter(Boolean).join(", ")
    : "No programs available";

  const feesA = A.fees
    ? A.fees.split(',').map(x => x.trim()).filter(Boolean).join("<br>")
    : "Fees will be announced soon";

  const feesB = B.fees
    ? B.fees.split(',').map(x => x.trim()).filter(Boolean).join("<br>")
    : "Fees will be announced soon";

  byId("schoolCompareResult").innerHTML = `
    <div class="compare-grid fade-in">

      <!-- School A -->
      <div class="compare-item">
        <img class="compare-img" src="${A.images[0]}" alt="${A.name}">
        <div class="compare-body">
          <div class="compare-title">${A.name}</div>
          <div class="compare-sub">${A.city} • ${A.system}</div>

          <div class="compare-info">Rating: ${A.rating}</div>
          <div class="compare-info">Address: ${A.address}</div>
          <div class="compare-info">Phone: ${A.phone}</div>
          <div class="compare-info">Email: ${A.email}</div>

          <div class="compare-programs">
            <strong>Programs:</strong><br>${programsA}
          </div>

          <div class="compare-programs" style="margin-top:10px;">
            <strong>Fees:</strong><br>${feesA}
          </div>

          <div class="compare-programs" style="margin-top:12px;">
            <strong>Description:</strong><br>${A.desc}
          </div>
        </div>
      </div>

      <!-- School B -->
      <div class="compare-item">
        <img class="compare-img" src="${B.images[0]}" alt="${B.name}">
        <div class="compare-body">
          <div class="compare-title">${B.name}</div>
          <div class="compare-sub">${B.city} • ${B.system}</div>

          <div class="compare-info">Rating: ${B.rating}</div>
          <div class="compare-info">Address: ${B.address}</div>
          <div class="compare-info">Phone: ${B.phone}</div>
          <div class="compare-info">Email: ${B.email}</div>

          <div class="compare-programs">
            <strong>Programs:</strong><br>${programsB}
          </div>

          <div class="compare-programs" style="margin-top:10px;">
            <strong>Fees:</strong><br>${feesB}
          </div>

          <div class="compare-programs" style="margin-top:12px;">
            <strong>Description:</strong><br>${B.desc}
          </div>
        </div>
      </div>

    </div>
  `;
}

// ========= COMPARE CAMPS =========
byId("btnCompareCamps").addEventListener("click", () => {
  const A = CAMPS.find(c => c.id === byId("campA").value);
  const B = CAMPS.find(c => c.id === byId("campB").value);

  if (!A || !B) {
    alert("Please select two camps.");
    return;
  }

  renderCampComparison(A, B);
});

function renderCampComparison(A, B) {
  byId("campCompareResult").innerHTML = `
    <div class="compare-grid fade-in">

      <!-- Camp A -->
      <div class="compare-item">
        <img class="camp-compare-img" src="${A.img}" alt="${A.name}" />

        <div class="compare-body">
          <div class="camp-compare-title">${A.name}</div>
          <div class="camp-compare-sub">${A.city}</div>

          <div class="camp-info">
            <span class="icon"></span> Phone: ${A.phone}
          </div>

          <div class="camp-info">
            <span class="icon"></span> Location: ${A.city}
          </div>

          <div class="camp-desc">
            <strong>Description:</strong><br>${A.desc}
          </div>
        </div>
      </div>

    

      <!-- Camp B -->
      <div class="compare-item">
        <img class="camp-compare-img" src="${B.img}" alt="${B.name}" />

        <div class="compare-body">
          <div class="camp-compare-title">${B.name}</div>
          <div class="camp-compare-sub">${B.city}</div>

          <div class="camp-info">
            <span class="icon"></span> Phone: ${B.phone}
          </div>

          <div class="camp-info">
            <span class="icon"></span> Location: ${B.city}
          </div>

          <div class="camp-desc">
            <strong>Description:</strong><br>${B.desc}
          </div>
        </div>
      </div>

    </div>
  `;
}

////////////////////////////////////////////////////////////////


// ================= SYSTEM CARDS → FILTER =================
document.querySelectorAll('.sys.card').forEach(card => {
  card.addEventListener('click', () => {

    const system = card.getAttribute('data-system');

    // روح على صفحة المدارس
    location.hash = '#schools';

    // انتظر تحميل القسم + الفلاتر
    setTimeout(() => {
      const fSystem = byId('fSystem');

      if (!fSystem) {
        console.error('fSystem not found');
        return;
      }

      // حط قيمة النظام
      fSystem.value = system;

      // شغّل الفلترة
      applyFilters();
    }, 300);

  });
});

//------------------------------------999999---------------------------------------------------

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

//--------------------------------------9999999-------------------------------------------------

function showProfileByRole(role) {
  if (location.hash !== "#profile") return;

  if (!role) {
    role = sessionStorage.getItem("currentRole");
  }

  if (!role) return;

  // إخفاء الجميع
  qsa("#profile_parent, #profile_school, #profile_admin")
    .forEach(p => p.classList.add("hide"));

  const root = qs("#profile_" + role);
  if (!root) return;

  root.classList.remove("hide");
  setupProfileTabs(root);
}


window.addEventListener('DOMContentLoaded', () => {
  enableSystemNavigation();
});

show(location.hash || '#home');



document.addEventListener("click", (e) => {
  const el = e.target.closest(".require-login");
  if (!el) return;

  if (CURRENT_ROLE === "visitor") {
    e.preventDefault();
    location.hash = "#login";
  }
});
