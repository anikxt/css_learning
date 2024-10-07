//  Problem: When we click on our bars icon, nothing happens..

// Goal: We want our mobile menu to open when we click on our bars icon!

// Solution: Create a click event on the bars icon that changes the display property on the mobile menu from none to flex.

// Steps:
// 1. Select the bars icon.
// 2. Select the mobile nav.
// 3. Create a click event listener.

const mobileNav = () => {
  const barsBtn = document.querySelector('#bars-btn');
  const mobileNav = document.querySelector('#mobile-nav');
  const closeBtn = document.querySelector('#close-btn');

  const handleBarsBtn = () => (mobileNav.style.display = 'flex');
  const handleCloseBtn = () => (mobileNav.style.display = 'none');

  barsBtn.addEventListener('click', handleBarsBtn);
  closeBtn.addEventListener('click', handleCloseBtn);
};

export default mobileNav;
