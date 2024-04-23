$(document).ready(function () {
    $('.button-close').click(function () {
        $('#top').slideUp('slow');
        $('#top').children().hide();
        $(this).hide();
    });
    $('.dropdown').hover(function () {
        $('.dropdown-menu').hide();
        $(this).prev('.nav-link').addClass('show');
        $(this).children('.dropdown-menu').slideDown('fast');
        $('.dropdown').mouseleave(function () {
            $('.dropdown').mouseleave(function () {
                $('.dropdown-menu').hide();
            });
        });
    }, function () {
        $(this).children('.dropdown-menu').hover(function () {
        }, function () {
            $(this).hide();
        });
    });
    $('.wd').hover(function () {
        $('.dropdown-menu').hide();
    })
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals'),
                sign: $(this).data('sign')
            }, options);

            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            $self.data('countTo', data);
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof (settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof (settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 5000,
        refreshInterval: 100,
        decimals: 0,
        sign: '', // Default is empty, can be '+' or '%'
        formatter: formatter,
        onUpdate: null,
        onComplete: null
    };

    function formatter(value, settings) {
        var formattedValue = value.toFixed(settings.decimals);
        if (settings.sign === '%') {
            formattedValue += settings.sign;
        } else if (settings.sign === '+') {
            formattedValue += settings.sign;
        }
        return formattedValue;
    }
}(jQuery));

jQuery(function ($) {
    $('.count-number').each(function () {
        var $this = $(this);
        count.call($this);
    });

    function count() {
        var $this = $(this);
        $this.countTo({
            from: $this.data('from'),
            to: $this.data('to'),
            speed: $this.data('speed'),
            refreshInterval: $this.data('refresh-interval'),
            decimals: $this.data('decimals'),
            sign: $this.data('sign')
        });
    }
});

const slider = () => {
    const imgitem = document.querySelector(".swiper .img-list");
    const imglist = document.querySelector(".img-list");
    const slideButton = document.querySelectorAll(".swiper .swiper-button");
    const maxScrollLeft = imgitem.scrollWidth - imgitem.clientWidth;

    let w = window.innerWidth;

    slideButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "swiper-button-prev" ? -1 : 1;
            let scrollAmount;

            if (w >= 992) {
                scrollAmount = ((imgitem.clientWidth / 3) + 20) * direction;
            } else if (w <= 991 && w >= 768) {
                scrollAmount = ((imgitem.clientWidth / 2)+20) * direction;
            } else if (w <= 767) {
                scrollAmount = (imgitem.clientWidth+20) * direction;
            }
            imgitem.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButton = () => {
        slideButton[0].style.display = imgitem.scrollLeft <= 0 ? "none" : "block";
        slideButton[1].style.display = imgitem.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    imgitem.addEventListener("scroll", () => {
        handleSlideButton();
    });
};

window.addEventListener("load", slider);

const slider2 = () => {
    const imgitem2 = document.querySelector(".swiper2 .img-list2");
    const imglist2 = document.querySelector(".img-list2");
    const slideButton2 = document.querySelectorAll(".swiper2 .swiper-button2");
    const maxScrollLeft2 = imgitem2.scrollWidth - imgitem2.clientWidth;

    let w2 = window.innerWidth;

    slideButton2.forEach(button2 => {
        button2.addEventListener("click", () => {
            const direction2 = button2.id === "swiper-button-prev2" ? -1 : 1;
            let scrollAmount2;

            if (w2 >= 1200) {
                scrollAmount2 = (imgitem2.clientWidth / 5) * direction2;
            }
            else if (w2 <= 1199 && w2 >= 992) {
                scrollAmount2 = (imgitem2.clientWidth / 4) * direction2;
            }
            else if (w2 <= 991 && w2 >= 768) {
                scrollAmount2 = (imgitem2.clientWidth / 3) * direction2;
            }
            else if (w2 <= 767 && w2 >= 576) {
                scrollAmount2 = (imgitem2.clientWidth / 2) * direction2;
            }
            else if (w2 <= 575) {
                scrollAmount2 = imgitem2.clientWidth * direction2;
            }
            imgitem2.scrollBy({ left: scrollAmount2, behavior: "smooth" });
        });
    });

    const handleSlideButton2 = () => {
        slideButton2[0].style.display = imgitem2.scrollLeft <= 0 ? "none" : "block";
        slideButton2[1].style.display = imgitem2.scrollLeft >= maxScrollLeft2 ? "none" : "block";
    };
    imgitem2.addEventListener("scroll", () => {
        handleSlideButton2();
    });
};
window.addEventListener("load", slider2);

const slider3 = () => {
    const imgitem3 = document.querySelector(".swiper3 .img-list3");
    const slideButton3 = document.querySelectorAll(".swiper3 .swiper-button3");
    const maxScrollLeft3 = imgitem3.scrollWidth - imgitem3.clientWidth;

    let w3 = window.innerWidth;

    slideButton3.forEach(button3 => {
        button3.addEventListener("click", () => {
            const direction3 = button3.id === "swiper-button-prev3" ? -1 : 1;
            let scrollAmount3;

            if (w3 >= 1200) {
                scrollAmount3 = (imgitem3.clientWidth / 5) * direction3;
            }
            else if (w3 <= 1199 && w3 >= 992) {
                scrollAmount3 = (imgitem3.clientWidth / 4) * direction3;
            }
            else if (w3 <= 991 && w3 >= 768) {
                scrollAmount3 = (imgitem3.clientWidth / 3) * direction3;
            }
            else if (w3 <= 767 && w3 >= 576) {
                scrollAmount3 = (imgitem3.clientWidth / 2) * direction3;
            }
            else if (w3 <= 575) {
                scrollAmount3 = imgitem3.clientWidth * direction3;
            }
            imgitem3.scrollBy({ left: scrollAmount3, behavior: "smooth" });
        });
    });

    const handleSlideButton3 = () => {
        slideButton3[0].style.display = imgitem3.scrollLeft <= 0 ? "none" : "block";
        slideButton3[1].style.display = imgitem3.scrollLeft >= maxScrollLeft3 ? "none" : "block";
    };
    imgitem3.addEventListener("scroll", () => {
        handleSlideButton3();
    });
};
window.addEventListener("load", slider3);

const slider4 = () => {
    const imgitem4 = document.querySelector(".swiper4 .img-list4");
    const slideButton4 = document.querySelectorAll(".swiper4 .swiper-button4");
    const maxScrollLeft4 = imgitem4.scrollWidth - imgitem4.clientWidth;

    let w4 = window.innerWidth;

    slideButton4.forEach(button4 => {
        button4.addEventListener("click", () => {
            const direction4 = button4.id === "swiper-button-prev4" ? -1 : 1;
            let scrollAmount4;

            if (w4 >= 1200) {
                scrollAmount4 = (imgitem4.clientWidth / 4) * direction4;
            } else if (w4 <= 1199 && w4 >= 992) {
                scrollAmount4 = (imgitem4.clientWidth / 3) * direction4;
            } else if (w4 <= 991 && w4 >= 768) {
                scrollAmount4 = (imgitem4.clientWidth / 2) * direction4;
            } else if (w4 <= 767) {
                scrollAmount4 = imgitem4.clientWidth * direction4;
            }
            imgitem4.scrollBy({ left: scrollAmount4, behavior: "smooth" });
        });
    });

    const handleSlideButton4 = () => {
        slideButton4[0].style.display = imgitem4.scrollLeft <= 0 ? "none" : "block";
        slideButton4[1].style.display = imgitem4.scrollLeft >= maxScrollLeft4 ? "none" : "block";
    };
    imgitem4.addEventListener("scroll", () => {
        handleSlideButton4();
    });
};
window.addEventListener("load", slider4);