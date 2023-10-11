
(() => {
    
    enum AudioLevel {
        min,
        medium,
        max
    }

    let currentAudio0 = AudioLevel.min;
    let currentAudio1 = AudioLevel.max;
    let currentAudio2 = AudioLevel.medium;

    console.log(currentAudio0);
    console.log(currentAudio1);
    console.log(currentAudio2);

    console.log(AudioLevel);
    
    

})()