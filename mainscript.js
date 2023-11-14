var typed1 = new Typed(".aboutinfo", {
    strings: [
        "Varnothsava, the festival which celebrates the talents and cherishes the enthusiasm among the techno buds has completed its journey of 10 beautiful years, with every year adding a new glory to its account! ",
        "This is the second line of text."
    ],
    typeSpeed: 15,
    backSpeed: 10, // Adjust the backspacing speed
    smartBackspace: true, // Enable smart backspacing
    onComplete: function() {
        var typed2 = new Typed(".about-info", {
            strings: [
                "Milestones are reached when impossible is made possible, Varnothsava is one such milestone that gives out a platform for all kinds of talents ranging from technical to gamings and from cultural to western art forms!",
                " Technical and Cultural events with the glimpse of thrill and excitement VARNOTHSAVA 2024 awaits for you ...."
            ],
            typeSpeed: 15,
            backSpeed: 10, // Adjust the backspacing speed
            smartBackspace: true, // Enable smart backspacing
            showCursor: false // Optional: hide the cursor after typing
        });
    }
});
