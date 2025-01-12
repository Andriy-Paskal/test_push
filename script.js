$(document).ready(function () {
    const $slider = $(".slider");
    const $handle = $(".handle");
    const $beforeImage = $(".before");

    $slider.on("mousemove touchmove", function (event) {
        const sliderOffset = $slider.offset().left;
        const sliderWidth = $slider.width();
        let xPos = event.pageX || event.originalEvent.touches[0].pageX;
        xPos -= sliderOffset;

        // Limit handle movement within slider bounds
        if (xPos < 0) xPos = 0;
        if (xPos > sliderWidth) xPos = sliderWidth;

        // Update handle and before image clipping
        const percentage = (xPos / sliderWidth) * 100;
        $handle.css("left", `${percentage}%`);
        $beforeImage.css("clip-path", `inset(0 ${100 - percentage}% 0 0)`);
    });
});
