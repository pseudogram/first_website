/**
 * Created by Dattlee on 30/11/2015.
 */

var slider = {
    freq: 18,  // time between each frame in milliseconds
    fadeStep: 2,  // amount of opacity to increase at each frame (until it reaches 100)
    bewtweenFades: 3000,  // time to wait between slider changes

    // here go slider files except the first one, which is defined in html
    imgFiles: [
        'images/sailing.jpg',
        'images/climbing.jpg'
    ],
    current: 0,  // index number of currently visible slider
    imgs: [],  // here we will load image elements of all sliders

    init: function() {
        slider.imgArea = document.getElementById('slider');

        // load the first slider <img> into imgs (from html DOM)
        // the 'loaded' property is used later on to prevent from displaying an
        // image that has not been fully downloaded
        var img = slider.imgArea.getElementsByTagName('img')[0];
        img.loaded = true;
        slider.imgs.push(img);

        // create remaining <img> elements and load into imgs
        for (var i=0; i<slider.imgFiles.length; i++) {
            img = document.createElement('img');
            img.src = slider.imgFiles[i];
            img.onload = function() {
                this.loaded = true;
            }
            slider.imgs.push(img);
        }

        setTimeout(slider.fadeNext, slider.bewtweenFades);
    },

    /* initialize fade transition into the next image */
    fadeNext: function() {
        slider.current++;

        if (slider.current >= slider.imgs.length) {
            // reached the end of sequence - start from beginning
            slider.current = 0;
        }

        if (!slider.imgs[slider.current].loaded) {
            // give up if image is not loaded and try again in a second
            slider.current--;
            setTimeout(slider.fadeNext, 1000);
            return;
        }

        // add the next image to DOM just after currently visible <img>
        // initially at opacity 0
        var img = slider.imgs[slider.current];
        slider.setOpacity(img, 0);

        slider.imgArea.appendChild(img);

        slider.opacity = 0;  // internal opacity counter (doesn't affect display)
        slider.currentImg = img;
        setTimeout(slider.fadeIn, slider.freq);
    },

    /* fade in <img> */
    fadeIn: function() {
        slider.opacity += slider.fadeStep;
        if (slider.opacity > 100) {
            slider.opacity = 100;
        }

        slider.setOpacity(slider.currentImg, slider.opacity);

        if (slider.opacity < 100) {
            // continue fading
            setTimeout(slider.fadeIn, slider.freq);
        } else {
            // fading finished - new <img> is fully visible
            // so let's remove old <img> from DOM
            var firstImg = slider.imgArea.getElementsByTagName('img')[0];
            slider.imgArea.removeChild(firstImg);
            setTimeout(slider.fadeNext, slider.bewtweenFades);
        }
    },

    /* cross-browser set opacity to element */
    setOpacity: function(elem, op) {
        op = Math.round(op);
        elem.style.opacity = op/100;
        elem.style.filter = "alpha(opacity=" + op + ")";
    }
}