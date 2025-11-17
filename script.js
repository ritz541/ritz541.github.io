// Music widget interaction
document.addEventListener('DOMContentLoaded', function () {
    const playBtn = document.querySelector('.play-btn');
    let isPlaying = false;

    playBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        isPlaying = !isPlaying;
        playBtn.innerHTML = isPlaying ? '❚❚' : '▶';
        playBtn.style.fontSize = isPlaying ? '14px' : '12px';
        playBtn.style.marginLeft = isPlaying ? '0' : '2px';
    });

    // Prevent control buttons from navigating when clicked
    document.querySelectorAll('.control-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
    });
});
