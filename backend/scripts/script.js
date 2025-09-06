
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function() {
      console.log('Menu button clicked');
      // Toggle between visible and hidden states
      if (menu.classList.contains('top-[-400px]')) {
        menu.classList.remove('top-[-400px]', 'opacity-0');
        menu.classList.add('top-[80px]', 'opacity-100');
      } else {
        menu.classList.remove('top-[80px]', 'opacity-100');
        menu.classList.add('top-[-400px]', 'opacity-0');
      }
    });
  }
});
