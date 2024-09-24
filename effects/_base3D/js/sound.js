var mns = musicAndSfx = {
    soundEffects: {
        sfx_name: { id: 'sfx_name', src: ['sounds/name.m4a'], audio: null, loop: false, volume: 0.3 }
    },
    music: {
        mzk_name: { id: 'mzk_name', src: ['sounds/name.m4a'], audio: null, loop: false, volume: 0.2 }
    }
}

function loadSoundEffects() {
    for (soundEffect in mns) {
        qname = mns[soundEffect];
        src = sound.src;
        sound.audio = new Howl({src, volume: sound.volume });
    }
}

function playSound(_soundName) {
    if (soundsEnabled==true) {
        stereoSound();
        mns[_soundName].audio.play();
    }
}

function stereoSound() {
    pan = 0; // Range: -1 to 1
    mns.sfx_name.audio.stereo(pan);
}