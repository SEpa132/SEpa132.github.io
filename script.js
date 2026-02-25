document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.getElementById('emailLink');
  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      const email = "am9qbw@dollicons.com";

      // 尝试复制
      navigator.clipboard.writeText(email).then(() => {
        alert("✅ 邮箱已复制：" + email);
      }).catch(err => {
        console.log("❌复制失败");
      });
    });
  }
  
});
