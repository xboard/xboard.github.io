
gasendEvent = function(){
    gtag('event', 'finished_reading', {
        event_category: 'Articles',
        event_label: 'User read until the end',
        value: 100
      });
}

onVisibility = function(element) {
    var options = {
      root: document.getElementById("page-content"),
      threshold: 0.5
    }
  
    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.intersectionRatio >= 0.75) {
                gasendEvent();            
            }
        }
      });
    }, options);
  
    observer.observe(element);
  }

onVisibility(document.getElementById("chegou-no-fim"));