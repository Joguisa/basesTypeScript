"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio0 = AudioLevel.min;
    let currentAudio1 = AudioLevel.max;
    let currentAudio2 = AudioLevel.medium;
    console.log(currentAudio0);
    console.log(currentAudio1);
    console.log(currentAudio2);
    console.log(AudioLevel);
})();
