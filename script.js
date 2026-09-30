/* ============================================
   SCRIPT.JS - SPANDANA'S BIRTHDAY SURPRISE
   ============================================ */

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Smooth scroll to a specific section
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Show a specific screen
 */
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const screen = document.getElementById(screenId);
  if (screen) {
    screen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Handle image loading errors gracefully
 */
function handleImageError(imgElement) {
  imgElement.classList.add('hidden');
  const placeholder = imgElement.nextElementSibling;
  if (placeholder && placeholder.classList.contains('gallery-placeholder')) {
    placeholder.style.display = 'flex';
  }
}

/**
 * Check if an audio element can play
 */
function canPlayAudio() {
  const audio = new Audio();
  return typeof audio.play === 'function';
}

/**
 * Check if a video element can play
 */
function canPlayVideo() {
  const video = document.createElement('video');
  return video.canPlayType && video.canPlayType('video/mp4') !== '';
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initializeWelcome();
  initializeMusic();
  initializeScrollAnimations();
  initializeGallery();
  initializeVideo();
  createBackgroundHearts();
});

// ============================================
// WELCOME SECTION
// ============================================

function openSurprise() {
  // Add animation to welcome button
  const button = event.target.closest('button');
  if (button) {
    button.style.animation = 'heartPop 0.6s ease forwards';
  }

  // Scroll to hero section
  setTimeout(() => {
    showScreen('hero');
    triggerHeartExplosion();
  }, 300);

  // Attempt to play music
  attemptMusicPlayback();
}

function initializeWelcome() {
  // Welcome screen is already active from CSS
}

// ============================================
// MUSIC MANAGEMENT
// ============================================

let musicPlaying = false;

function initializeMusic() {
  const musicButton = document.getElementById('musicButton');
  const bgMusic = document.getElementById('bgMusic');

  if (!musicButton || !bgMusic) return;

  musicButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      document.querySelector('.music-indicator').classList.remove('playing');
      sessionStorage.setItem('musicState', 'paused');
    } else {
      attemptMusicPlayback();
    }
  });

  // Restore music state
  const savedState = sessionStorage.getItem('musicState');
  if (savedState === 'playing') {
    attemptMusicPlayback();
  }
}

function attemptMusicPlayback() {
  const bgMusic = document.getElementById('bgMusic');
  if (!bgMusic) return;

  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        musicPlaying = true;
        document.querySelector('.music-indicator').classList.add('playing');
        sessionStorage.setItem('musicState', 'playing');
      })
      .catch(error => {
        console.log('Audio playback failed (this is normal on first interaction)', error);
      });
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
  // Use Intersection Observer for scroll reveals
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.screen').forEach(screen => {
    observer.observe(screen);
  });
}

// ============================================
// GALLERY MANAGEMENT
// ============================================

function initializeGallery() {
  const images = document.querySelectorAll('.gallery-image');

  images.forEach(img => {
    // Check if image loaded successfully
    if (img.complete) {
      if (img.naturalHeight === 0) {
        handleImageError(img);
      }
    }
  });
}

// ============================================
// CAKE INTERACTION
// ============================================

function blowCandles() {
  const flames = document.querySelectorAll('.flame');
  const wishMessage = document.getElementById('wishMessage');

  // Animate flames going out
  flames.forEach((flame, index) => {
    setTimeout(() => {
      flame.classList.add('out');
    }, index * 100);
  });

  // Show wish message
  setTimeout(() => {
    wishMessage.innerHTML = 'Your wish is now set! 💫';
    wishMessage.style.opacity = '1';

    // Trigger celebration
    triggerConfetti();
    triggerHeartExplosion();
  }, 500);

  // Reset after delay
  setTimeout(() => {
    flames.forEach(flame => flame.classList.remove('out'));
    wishMessage.innerHTML = '';
  }, 4000);
}

// ============================================
// VIDEO MANAGEMENT
// ============================================

function initializeVideo() {
  const video = document.getElementById('birthdayVideo');
  const placeholder = document.getElementById('videoPlaceholder');

  if (!video || !placeholder) return;

  // Check if video source exists by attempting to load
  video.addEventListener('error', function() {
    video.style.display = 'none';
    placeholder.style.display = 'flex';
  });

  video.addEventListener('loadstart', function() {
    placeholder.style.display = 'none';
    video.style.display = 'block';
  });

  // Check initially
  if (video.src || video.querySelector('source')) {
    video.load();
  } else {
    placeholder.style.display = 'flex';
  }
}

function showVideoMessage() {
  const videoMessage = document.getElementById('videoMessage');
  if (videoMessage) {
    videoMessage.innerHTML = 'I Love You, Spandana ❤️';
    videoMessage.style.animation = 'fadeInUp 0.8s ease';
  }

  // Trigger heart explosion after video
  setTimeout(() => {
    triggerHeartExplosion();
  }, 500);
}

// ============================================
// BACKGROUND HEARTS
// ============================================

function createBackgroundHearts() {
  const bgHeartsContainer = document.getElementById('bgHearts');
  if (!bgHeartsContainer) return;

  const heartCount = 15;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';

    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = 8 + Math.random() * 4;
    const randomOpacity = 0.3 + Math.random() * 0.4;

    heart.style.left = randomX + '%';
    heart.style.top = '-50px';
    heart.style.animationDelay = randomDelay + 's';
    heart.style.animationDuration = randomDuration + 's';
    heart.style.opacity = randomOpacity;
    heart.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';

    bgHeartsContainer.appendChild(heart);

    // Recreate heart after animation
    setTimeout(() => {
      heart.remove();
      createBackgroundHearts();
    }, randomDuration * 1000);
  }
}

// ============================================
// PARTICLE EFFECTS
// ============================================

function createHeartParticle() {
  const heart = document.createElement('div');
  heart.className = 'heart-particle';
  heart.innerHTML = '❤️';

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const endX = startX + (Math.random() - 0.5) * 300;
  const endY = startY - 300 - Math.random() * 200;

  heart.style.left = startX + 'px';
  heart.style.top = startY + 'px';

  document.body.appendChild(heart);

  // Animate
  heart.animate(
    [
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`, opacity: 0 }
    ],
    {
      duration: 2000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'forwards'
    }
  );

  // Clean up
  setTimeout(() => {
    heart.remove();
  }, 2000);
}

function triggerHeartExplosion() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createHeartParticle();
    }, i * 30);
  }
}

function createConfettiPiece() {
  const colors = ['💗', '💕', '💖', '✨', '🌸'];
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.innerHTML = colors[Math.floor(Math.random() * colors.length)];

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const angle = Math.random() * Math.PI * 2;
  const velocity = 5 + Math.random() * 10;
  const endX = startX + Math.cos(angle) * velocity * 100;
  const endY = startY + Math.sin(angle) * velocity * 100 + 200;

  confetti.style.left = startX + 'px';
  confetti.style.top = startY + 'px';
  confetti.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';

  document.body.appendChild(confetti);

  // Animate
  confetti.animate(
    [
      { 
        transform: 'translate(0, 0) rotate(0deg) scale(1)', 
        opacity: 1 
      },
      { 
        transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(${Math.random() * 360}deg) scale(0)`, 
        opacity: 0 
      }
    ],
    {
      duration: 3000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'forwards'
    }
  );

  // Clean up
  setTimeout(() => {
    confetti.remove();
  }, 3000);
}

function triggerConfetti() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createConfettiPiece();
    }, i * 50);
  }
}

// ============================================
// FINAL SURPRISE TRIGGER
// ============================================

function triggerFinalSurprise() {
  const finalScreen = document.getElementById('final');
  
  // Wait for scroll to finish
  setTimeout(() => {
    // Create sparkles
    createFinalSparkles();
    
    // Trigger celebrations
    setTimeout(() => {
      triggerHeartExplosion();
      triggerConfetti();
    }, 2000);
  }, 500);
}

function createFinalSparkles() {
  const sparklesContainer = document.getElementById('finalSparkles');
  if (!sparklesContainer) return;

  for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = (0.5 + Math.random() * 1.5) + 'rem';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.opacity = Math.random() * 0.6 + 0.4;
    sparkle.style.pointerEvents = 'none';

    sparklesContainer.appendChild(sparkle);

    // Animate
    sparkle.animate(
      [
        { 
          transform: 'scale(0) rotate(0deg)', 
          opacity: 0 
        },
        { 
          transform: 'scale(1) rotate(180deg)', 
          opacity: Math.random() * 0.6 + 0.4 
        },
        { 
          transform: 'scale(0) rotate(360deg)', 
          opacity: 0 
        }
      ],
      {
        duration: 2000 + Math.random() * 1000,
        delay: Math.random() * 500,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );

    // Clean up
    setTimeout(() => {
      sparkle.remove();
    }, 3500);
  }
}

// ============================================
// SCROLL TO FINAL SECTION
// ============================================

// Detect when final section comes into view
const observerForFinal = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      triggerFinalSurprise();
      observerForFinal.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

document.addEventListener('DOMContentLoaded', function() {
  const finalScreen = document.getElementById('final');
  if (finalScreen) {
    observerForFinal.observe(finalScreen);
  }
});

// ============================================
// ANIMATIONS SETUP
// ============================================

// Add keyframe for heart pop animation if not in CSS
if (!document.querySelector('style[data-animation="heartPop"]')) {
  const style = document.createElement('style');
  style.setAttribute('data-animation', 'heartPop');
  style.textContent = `
    @keyframes heartPop {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0.2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

function adjustForMobile() {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Reduce particle count on mobile
    document.documentElement.style.setProperty('--particle-count', '15');
  }
}

window.addEventListener('resize', adjustForMobile);
adjustForMobile();

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.tagName === 'BUTTON') {
      activeElement.click();
    }
  }
});

// ============================================
// SESSION STORAGE
// ============================================

// Save visit state
function saveVisitState() {
  sessionStorage.setItem('visitDate', new Date().toISOString());
  sessionStorage.setItem('pageVisited', 'true');
}

// Restore visit state
window.addEventListener('beforeunload', saveVisitState);
window.addEventListener('load', function() {
  const visited = sessionStorage.getItem('pageVisited');
  if (visited === 'true') {
    // User has visited before in this session
  }
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', function(e) {
  console.error('Error:', e.message);
  // Gracefully handle errors without breaking the experience
});

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add focus outlines for keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-nav');
});

// Announce screen changes to screen readers
const screenChangeObserver = new MutationObserver(function(mutations) {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const screen = mutation.target;
      if (screen.classList.contains('active')) {
        const title = screen.querySelector('h1, h2, h3');
        if (title) {
          const announcement = document.createElement('div');
          announcement.className = 'sr-only';
          announcement.setAttribute('role', 'status');
          announcement.setAttribute('aria-live', 'polite');
          announcement.textContent = 'Showing: ' + title.textContent;
          document.body.appendChild(announcement);
          
          setTimeout(() => announcement.remove(), 1000);
        }
      }
    }
  });
});

document.querySelectorAll('.screen').forEach(screen => {
  screenChangeObserver.observe(screen, { attributes: true, attributeFilter: ['class'] });
});

// ============================================
// EXPORT FUNCTIONS FOR TESTING
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    openSurprise,
    blowCandles,
    scrollToSection,
    triggerHeartExplosion,
    triggerConfetti
  };
}
