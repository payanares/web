const rootElement = document.querySelector(":root");
  
    function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    window.onscroll = function() {
      window.scrollTo(scrollTop, scrollLeft);
    }
    
    rootElement.style.scrollBehavior ='auto';
  }

  function enableScroll(){
    window.onscroll = function(){ }
    rootElement.style.scrollBehavior ='smooth';
    localStorage.setItem('opened','true');
    
  }
    
  if(!localStorage.getItem('opened')){
  disableScroll(); 
  }


document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.btn-play-music');
    const audio = document.getElementById('song');
    if (playButton && audio) {
        playButton.addEventListener('click', function() {
            if (audio.paused) {
                fadeInAudio(audio, 10000); // Fade in over 1 second
                audio.play();  
                playButton.textContent = 'Pause Music'; 
            } else {
                fadeOutAudio(audio, 10000); // Fade out over 1 second
                setTimeout(() => {
                    audio.pause();
                    playButton.textContent = 'Play Music'; 
                }, 3000); 
            }
        });
    }

    // Add an event listener to the button that triggers scrolling to home
    if (homeButton) {
        homeButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            if (!hasScrolledToHome) {
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                hasScrolledToHome = true; 
            }
        });
    }
});

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                alert("Konfirmasi kehadiran berhasil terkirim, Terimakasih "+n+", Have a nice day!");
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});

simplyCountdown('.simply-countdown', {
    year: 2024, 
    month: 11, 
    day: 3, 
    hours: 8,
    words: {
        days: { singular: 'Day', plural: 'Days' },
        hours: { singular: 'Hour', plural: 'Hours' },
        minutes: { singular: 'Minute', plural: 'Minutes' },
        seconds: { singular: 'Second', plural: 'Seconds' }
    },
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        observer.observe(el);
    });
});

// Function to gradually increase the volume
function fadeInAudio(audio, duration) {
    let startTime = null;
    const initialVolume = 0;
    const targetVolume = 0.3;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        audio.volume = initialVolume + (targetVolume - initialVolume) * progress;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// Function to gradually decrease the volume
function fadeOutAudio(audio, duration) {
    let startTime = null;
    const initialVolume = audio.volume;
    const targetVolume = 0;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        audio.volume = initialVolume - (initialVolume - targetVolume) * progress;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            audio.volume = targetVolume;
        }
    }

    requestAnimationFrame(step);
}

//   Undangan

const urlParams = new URLSearchParams(window.location.search);
  const n = urlParams.get('n');
  console.log(n);

  const namaUndangan = document.querySelector('.hero .header span');
  if (namaUndangan) {
    namaUndangan.innerText = n;
  }

  const namaUndangan2 = document.querySelector('.offcanvas-title span');
  if (namaUndangan2) {
    namaUndangan2.innerText = n;
  }

  document.querySelector('#nama').value = n;

  document.getElementById('year').textContent = new Date().getFullYear();

    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://respatis-wedding.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();


        // toast
        const toastTrigger = document.getElementById('liveToastBtn')
        const toastLiveExample = document.getElementById('liveToast')

        if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
        }
        // end toast