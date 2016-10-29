$(document).ready(function () {

    (function ($) {

        $.extend({

            APP: {

                formatTimer: function (a) {
                    if (a < 10) {
                        a = "0" + a;
                    }
                    return a;
                },

                startTimer: function (dir) {

                    var a;

                    // save type
                    $.APP.dir = dir;

                    // get current date
                    $.APP.d1 = new Date();

                    // get current timestamp (for calculations)
                    $.APP.t1 = $.APP.d1.getTime();

                    // if countdown add ms based on seconds in textfield, sets 5min (300) as default
                    $.APP.t1 += parseInt(300 * 1000);

                    // start loop
                    $.APP.loopTimer();

                },

                validateAnswers: function () {
                    var correctAnswers = $.cookie('correctAnswers');
                    if (typeof correctAnswers !== "undefined" && correctAnswers !== "null") {
                        var countAnswers = parseInt(correctAnswers);
                        var maxNumberOfItems = 6;
                        if (countAnswers < maxNumberOfItems) {
                            var message = "Te hicieron falta " + (maxNumberOfItems - correctAnswers) + " de " + maxNumberOfItems + " respuestas correctas.";
                            swal({ title: "No lo lograste!!!", text: message, type: "error" }, function () {
                                $("body").find('audio').remove();
                                $.cookie("correctAnswers", null);
                                window.location.href = 'index.html';
                            });
                            $("body").find('audio').remove();
                            $("body").append('<audio id="youLoser"><source src="sounds/youLoser.mp3" type="audio/mpeg"></source></audio>');
                            var audio = document.getElementById('youLoser');
                            audio.play();
                        }

                        if (countAnswers === maxNumberOfItems) {
                            var message = "Felicitaciones, completaste el crucigrama.";
                            swal({ title: "Sos pilas, lo lograste!!!", text: message, type: "success" }, function () {
                                $("body").find('audio').remove();
                                $.cookie("correctAnswers", null);
                                window.location.href = 'index.html';
                            });
                            $("body").find('audio').remove();
                            $("body").append('<audio id="wellDone"><source src="sounds/wellDone.mp3" type="audio/mpeg"></source></audio>');
                            var audio = document.getElementById('wellDone');
                            audio.play();
                        }

                    } else if (typeof correctAnswers === 'undefined' || correctAnswers === 'null') {
                        var message = "No adivinaste al menos una palabra :(";
                        swal({ title: "Y entonces???", text: message, type: "error" }, function () {
                            $("body").find('audio').remove();
                            $.cookie("correctAnswers", null);
                            window.location.href = 'index.html';
                        });
                        $("body").find('audio').remove();
                        $("body").append('<audio id="suicidebomb"><source src="sounds/suicidebomb.mp3" type="audio/mpeg"></source></audio>');
                        var audio = document.getElementById('suicidebomb');
                        audio.play();
                    }
                },

                loopTimer: function () {
                    var ms = 0;
                    var s = 0;
                    var m = 0;
                    var h = 0;

                    // get current date and convert it into 
                    // timestamp for calculations
                    var d2 = new Date();
                    var t2 = d2.getTime();

                    // calculate time difference between
                    // initial and current timestamp
                    var td = $.APP.t1 - t2;

                    // calculate milliseconds
                    ms = td % 1000;
                    if (ms < 1) {
                        ms = 0;
                    } else {
                        // calculate seconds
                        s = (td - ms) / 1000;
                        if (s < 1) {
                            s = 0;
                        } else {
                            // calculate minutes   
                            var m = (s - (s % 60)) / 60;
                            if (m < 1) {
                                m = 0;
                            } else {
                                // calculate hours
                                var h = (m - (m % 60)) / 60;
                                if (h < 1) {
                                    h = 0;
                                }
                            }
                        }
                    }

                    // substract elapsed minutes & hours
                    ms = Math.round(ms / 100);
                    s = s - (m * 60);
                    m = m - (h * 60);

                    // update display
                    $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                    $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                    $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));

                    if (m === 1 && s === 1 && ms === 9) {
                        //initialize jquery toasty js
                        $("body").toasty();
                        $("body").toasty('pop');
                    }

                    // calls "correct answer" validation from the cookie
                    if (m === 0 && s === 0 && ms === 1) {
                        $.APP.validateAnswers();
                    }
                    // loop
                    $.APP.t = setTimeout($.APP.loopTimer, 1);
                }
            }
        });
    })(jQuery);
});
