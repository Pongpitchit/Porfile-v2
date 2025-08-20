function copyGithub() {
  const githubURL = "https://github.com/Pongpitchit"; // 🔁 แก้เป็น GitHub จริงของคุณ
  navigator.clipboard.writeText(githubURL).then(() => {
    alert("✅ GitHub URL copied to clipboard!");
  }).catch(err => {
    alert("❌ Failed to copy: " + err);
  });
}

const text = "DYNAMIC WEB MAGIC WITH BESTTPOXLARR";
const typingElement = document.getElementById("typing");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    // เมื่อพิมพ์จบ รอ 10 วิ แล้วลบข้อความและเริ่มใหม่
    setTimeout(() => {
      typingElement.textContent = "";
      index = 0;
      typeWriter();
    }, 10000); // 10000 ms = 10 วินาที
  }
}

typeWriter();

// Nar Bar
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // ลบ active กับ จุดเก่าทุกตัว
      navLinks.forEach(l => {
        l.classList.remove('active');
        const oldDot = l.querySelector('.active-dot');
        if (oldDot) oldDot.remove();
      });

      // เพิ่ม active ให้ลิงก์ที่กด
      link.classList.add('active');

      // สร้างจุด • ที่ active
      const dot = document.createElement('span');
      dot.classList.add('active-dot');
      dot.textContent = '•';

      // ใส่จุดในลิงก์นั้น
      link.appendChild(dot);
    });
  });

  // ถ้ามี active ลิงก์ตั้งต้น (เช่น หน้าโหลด) ให้แสดงจุดด้วย
  const activeLink = document.querySelector('.navbar-nav .nav-link.active');
  if (activeLink) {
    const dot = document.createElement('span');
    dot.classList.add('active-dot');
    dot.textContent = '•';
    activeLink.appendChild(dot);
  }
});

