/**
 * Created by admin on 2017/8/11.
 */

(function(window){
    function init() {
        initResume();
        initContact()

    }
    function initResume() {
        initStyle()
        initResumeBind();

    }

    var firstTime = false;
    function initResumeBind() {
        $("#skill").on("click", function() {
            if (!firstTime) {
                var startColor = '#f4d03f';
                var endColor = '#f4d03f';
                var element1 = document.getElementById('line-container1');
                var element2 = document.getElementById('line-container2');
                var element3 = document.getElementById('line-container3');
                var circle1 = new ProgressBar.Circle(element1, {
                    color: startColor,
                    trailColor: '#fff6da',
                    trailWidth: 7,
                    duration: 2000,
                    easing: 'easeInOut',
                    strokeWidth: 8,
                    // Set default step function for all animate calls
                    step: function(state, circle1) {
                        circle1.path.setAttribute('stroke', state.color);
                    }
                });
                var circle2 = new ProgressBar.Circle(element2, {
                    color: startColor,
                    trailColor: '#fff6da',
                    trailWidth: 7,
                    duration: 2000,
                    easing: 'easeInOut',
                    strokeWidth: 8,
                    // Set default step function for all animate calls
                    step: function(state, circle2) {
                        circle2.path.setAttribute('stroke', state.color);
                        // $("#progress-text2").text((circle2.value() * 100).toFixed(0) + "%");
                    }
                });
                var circle3 = new ProgressBar.Circle(element3, {
                    color: startColor,
                    trailColor: '#fff6da',
                    trailWidth: 7,
                    duration: 2000,
                    easing: 'easeInOut',
                    strokeWidth: 8,
                    // Set default step function for all animate calls
                    step: function(state, circle3) {
                        circle3.path.setAttribute('stroke', state.color);
                        // $("#progress-text3").text( "70%");
                    }
                });
                var line = new ProgressBar.Line('#bar1', {
                    strokeWidth: 20,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#f4d03f',
                    trailColor: '#fff6da',
                    trailWidth: 21,
                });
                var line2 = new ProgressBar.Line('#bar2', {
                    strokeWidth: 20,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#f4d03f',
                    trailColor: '#fff6da',
                    trailWidth: 21,
                });
                var line3 = new ProgressBar.Line('#bar3', {
                    strokeWidth: 20,
                    easing: 'easeInOut',
                    duration: 1400,
                    color: '#f4d03f',
                    trailColor: '#fff6da',
                    trailWidth: 21,
                });
                setTimeout(function() {
                    circle1.animate(0.80, {
                        from: {
                            color: startColor
                        },
                        to: {
                            color: endColor
                        }
                    });
                    circle3.animate(0.60, {
                        from: {
                            color: startColor
                        },
                        to: {
                            color: endColor
                        }
                    });
                }, 1200);
                setTimeout(function() {
                    circle2.animate(0.60, {
                        from: {
                            color: startColor
                        },
                        to: {
                            color: endColor
                        }
                    });
                }, 1500);
                setTimeout(function() {
                    line.animate(1.0);
                    line2.animate(1.0);
                    line3.animate(1.0);
                }, 1800);
                firstTime = true;
            }
        });
    }

    var eduTap = $('.education-class li')
    function initStyle() {
        eduTap.on('click', function() {
            var $this = $(this);
            if ($this.hasClass('current')) {
                $this.removeClass('current');
            } else {
                eduTap.removeClass('current');
                $this.addClass('current');
            }
        });
    }
    function initContact() {

    }
    window.page={
        init:function () {
            init()
        }
    }
})(window)

