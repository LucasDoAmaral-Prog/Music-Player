import { Playlist } from "./musicObject.js";
console.log(Playlist)
var muted_Volume = false;

var loop = false;
let click_Play = true;

var posMusic = 0;

let Interval;

var style = document.getElementById('style')

let input_Music     = document.getElementById("range");
let input_Volume    = document.getElementById("Audio-range");

let progress_Music  = document.getElementsByClassName("progressBar-Music")[0];
let progress_Volume = document.getElementById("progressAudio")

let disc_Music  = document.getElementsByClassName("image-Music")[0];
let loop_Audio = document.getElementById("loop"); 

let show_ControlAudio   = document.getElementById("options");
let control_Audio       = document.getElementById("options");

let order_Options  = document.getElementById("order");
let control_Div    = document.getElementById("control");
let order_Control  = document.getElementById("order-control");
let order_Velocity = document.getElementsByClassName("order-Velocity")[0];
let order_Playlist = document.getElementsByClassName("playlist-Order")[0];

let paragraph_Velocity = document.getElementById("velocity");
let paragraph_Playlist = document.getElementById("playlist-2");

let choose_Speed     = document.getElementById("speed");
let choose_Playlist   = document.getElementById("playlist");

const btn_Close        = document.getElementById("Close");
const btn_arrowBack    = document.getElementById("arrow-back");
const btn_arrowBack_2  = document.getElementById("back-Playlist");

const final_Result    = document.getElementsByClassName('paragraph-stop')[1];
const stopWatch_Music = document.getElementsByClassName('paragraph-stop')[0];

const btn_Back      = document.getElementById("back-Music");
const btn_backWards = document.getElementById("backWards-Music");
const btn_Play      = document.getElementById("play-Music");
const btn_forWards  = document.getElementById("forWards-Music");
const btn_Next      = document.getElementById("next-Music");

const music_Tracks = document.querySelector("audio");

const audio_Desmuted = document.getElementById("audio");

btn_forWards.addEventListener("click", increaseTime);
btn_backWards.addEventListener("click", decreaseTime);
btn_Play.addEventListener("click", playAndPauseMusic);
btn_Next.addEventListener("click", nextMusic);
btn_Back.addEventListener("click", backMusic);

input_Music.addEventListener("input", chooseTime);
input_Volume.addEventListener("input", chooseVolume);
audio_Desmuted.addEventListener("click", muteVolume);

loop_Audio.addEventListener("click", enableLoop);

show_ControlAudio.addEventListener("mouseover", showDescription);
control_Audio.addEventListener("click", showMenu);

paragraph_Velocity.addEventListener("click", showVelocity);
paragraph_Playlist.addEventListener("click", showPlaylist);

btn_Close.addEventListener("click", executeClose);
btn_arrowBack.addEventListener("click", executeBack);
btn_arrowBack_2.addEventListener("click", executeBackPlaylist);


function nextMusic(){

    if (posMusic == Playlist.length-1){

        posMusic = 0;
        instructionsMusic(posMusic)
        music_Tracks.currentTime = 0;
        click_Play = true;        
        disc_Music.style = 'animation: none'
        playAndPauseMusic(this);

    } 
    
    else {
        
        posMusic++;
        instructionsMusic(posMusic)
        music_Tracks.currentTime = 0;
        disc_Music.style = 'animation: none'
        click_Play = true;
        playAndPauseMusic(this);

    }
}

function backMusic(){

    if (posMusic == 0){

        posMusic = Playlist.length-1
        instructionsMusic(posMusic)
        music_Tracks.currentTime = 0;
        click_Play = false;        
        disc_Music.style = 'animation: none'
        playAndPauseMusic(this);

    } 

    else {
        
        posMusic--;
        instructionsMusic(posMusic)
        music_Tracks.currentTime = 0;
        click_Play = false;        
        disc_Music.style = 'animation: none'
        playAndPauseMusic(this);

    }

}

function instructionsMusic(index){

    let title_Music  = document.getElementById('title');
    let singer_Music = document.getElementById("singer");

    let image_Body   = document.getElementById("image-main");
    let image_Music  = document.getElementById("music-Image");

    let design_Music  = document.getElementsByClassName("design-Music")[0];
    
    let order_List    = document.getElementsByClassName("order-list")[0];

    title_Music.innerHTML  = Playlist[index].song;
    singer_Music.innerHTML = Playlist[index].singer;

    image_Body.src  = Playlist[index].filePhoto;
    image_Music.src = Playlist[index].filePhoto;

    design_Music.style.backgroundColor   = "rgba" + Playlist[index].backgroundDesign;

    order_List.style.backgroundColor     = "rgba" + Playlist[index].backgroundList;
    order_Control.style.backgroundColor  = "rgba" + Playlist[index].backgroundControl;
    order_Velocity.style.backgroundColor = "rgba" + Playlist[index].backgroundVelocity;

    style.innerHTML       = ".input-Music input[type='range']::-webkit-slider-thumb{background-color: rgb" + Playlist[index].backgroundMusicInput + "} .audio input[type='range']::-webkit-slider-thumb{background-color: rgb" + Playlist[index].backgroundMusicInput + "}";
    progress_Music.style  = "background-color: rgb" + Playlist[index].backgroundMusicInput;
    progress_Volume.style = "background-color: rgb" + Playlist[index].backgroundMusicInput;

    music_Tracks.src = Playlist[index].fileAudio;

} 
let mouse_Out = true; // Define a variável globalmente

const rangeInput = document.querySelector(".input-Music input[type='range']");

// Evento para detectar quando o usuário clica no range (segurando o controle)
rangeInput.addEventListener("mousedown", () => {
    mouse_Out = false; // Bloqueia a mudança automática da música
});

// Evento para detectar quando o usuário solta o controle do range
rangeInput.addEventListener("mouseup", () => {
    mouse_Out = true; // Agora pode mudar a música normalmente
});

instructionsMusic(posMusic)




function musicTime(){

    input_Music.max   = music_Tracks.duration;
    input_Music.value = music_Tracks.currentTime;

    progress_Music.style       = "background-color: rgb" + Playlist[posMusic].backgroundProgressMusic
    progress_Music.style.width = input_Music.value/Playlist[posMusic].accountProgress() + "%";

    const rangeInput = document.querySelector(".input-Music input[type='range']");

    let final_Minutes = parseInt(Math.floor(music_Tracks.duration / 60));
    let final_Seconds = parseInt(Math.round(music_Tracks.duration % 60));

    let minutes_Music = Math.floor(music_Tracks.currentTime / 60);
    let seconds_Music = Math.floor(music_Tracks.currentTime % 60);

    final_Minutes = final_Minutes > '9' ? 

        final_Minutes
    :
        final_Minutes = "0" + final_Minutes;

    final_Seconds = final_Seconds > '9'?
    
        final_Seconds
    :
        final_Seconds = "0" + final_Seconds;


    minutes_Music = minutes_Music > '9' ? 

        minutes_Music
    :
        minutes_Music = "0" + minutes_Music;

    seconds_Music = seconds_Music > '9' ?

        seconds_Music
    :
        seconds_Music = "0" + seconds_Music;

    changeMusic()

    stopWatch_Music.innerText = minutes_Music + ":" + seconds_Music;
    final_Result.innerText    = final_Minutes + ":" + final_Seconds;

}

function changeMusic(){

    const time_Final = music_Tracks.duration;
    let time_Current = music_Tracks.currentTime;

    if (mouse_Out && time_Current == time_Final) {
        nextMusic();
        time_Current = 0;
    }

}

setInterval(musicTime, 15 );
progress_Volume.style.width = input_Volume.value*1.15 + "%";

function playAndPauseMusic(e){  

    music_Tracks.volume = input_Volume.value/100;
    progress_Volume.style.width = input_Volume.value*1.15 + "%";

    if(click_Play){
        btn_Play.src="./images/pausa.png";
        music_Tracks.play();
        click_Play = false
        disc_Music.style = "animation-name: musicAnimation; animation-duration: 5s; animation-iteration-count: infinite; animation-timing-function: linear;"
        disc_Music.style.animationPlayState = "running"; // Garante que a animação esteja em execução

    }else{
        click_Play = true
        btn_Play.src  = "./images/play.png"
        music_Tracks.pause();
        disc_Music.style.animationPlayState = "paused"; // Pausa a animação sem reiniciar

    }


}

function muteVolume(e){

    clearInterval(Interval)

    audio_Desmuted.src = "./images/mute.png";

    music_Tracks.volume = 0;

    input_Volume.value = 0;

    progress_Volume.style.width = input_Volume.value*1,15 + "%";
    audio_Desmuted.removeEventListener(e.type, muteVolume);
    audio_Desmuted.addEventListener(e.type, defaultVolume);

    muted_Volume = true;

}

function defaultVolume(e){

    clearInterval(Interval);

    music_Tracks.volume = 1;

    audio_Desmuted.src = "./images/aumentar-o-volume.png"
    
    input_Volume.value = 50;

    progress_Volume.style.backgroundColor = "rgb" + Playlist[posMusic].backgroundProgressVolume;
    progress_Volume.style.width = input_Volume.value*1.15 + "%";

    audio_Desmuted.removeEventListener(e.type, defaultVolume);
    audio_Desmuted.addEventListener(e.type, muteVolume);

    muted_Volume = false;

}

function chooseVolume(){

    if (!muted_Volume){

        music_Tracks.volume = input_Volume.value/100;
        progress_Volume.style.width = input_Volume.value *1.1+ "%";


        if (music_Tracks.volume > 0){

            audio_Desmuted.src   = "./images/aumentar-o-volume.png";
            audio_Desmuted.style = " height: 28px;";

        }

        if (music_Tracks.volume < 0.3){

            audio_Desmuted.src   = "./images/volume-baixo.png";
            audio_Desmuted.style = " height: 28px;";

        }

        if (music_Tracks.volume == 0){

            audio_Desmuted.style = " height: 28px;";
            audio_Desmuted.src   = "./images/mute.png";

        }
    }
}



function showMenu(){

    control_Audio.style  = 'display: none';
    control_Div.style    = 'filter: blur(15px)';
    order_Options.style  = 'display: block; filter: blur(0) !important; background-color: rgba' + Playlist[posMusic].backgroundList;
    order_Control.style  =  'display: block; filter: blur(0) !important; background-color: rgba' + Playlist[posMusic].backgroundControl;

}

function showVelocity(){

    order_Velocity.style  = "background-color: rgba" + Playlist[posMusic].backgroundVelocity;
    choose_Speed.style  = 'display: block;'
    order_Options.style = 'display: none;'

    let velocity_Choose = document.getElementById("choose");
    let group_Velocity  = velocity_Choose.children;

    for(let i = 0; i < group_Velocity.length; i++){


        group_Velocity[i].onclick = function(e){
           
            music_Tracks.playbackRate = e.target.id;

        };
    }
}

function showPlaylist(e){

    order_Options.style   = 'display: none;';
    choose_Playlist.style = "display: block;";
    order_Playlist.style  = "background-color: rgba" + Playlist[posMusic].backgroundList;

    let playlist_ID = document.getElementById("playlist");
    let group_Playlist = playlist_ID.children;


    for(let i = 0; i < group_Playlist.length; i++){

        group_Playlist[i].onclick = function(e){

            for(let j = 0; j < Playlist.length; j++){   
            
                if (Playlist[j].fileAudio == e.target.id ){

                    posMusic = j;
                    instructionsMusic(posMusic)
                    music_Tracks.currentTime = 0;
                    playAndPauseMusic(this);

                }
            }
        }
    }
}

function showDescription(e){


    show_ControlAudio.removeEventListener(e.type, arguments.calle);
    show_ControlAudio.addEventListener("mouseout", hideDescription);

}

function hideDescription(e){


    show_ControlAudio.removeEventListener(e.type, arguments.calle);
    show_ControlAudio.addEventListener("mouseover", showDescription);

}


function executeClose(){

    control_Audio.style = 'display: block; ';
    control_Div.style  = 'filter: blur(0)';
    order_Options.style = 'display: none';

}

function executeBack(){

    choose_Speed.style.display = 'none';
    order_Options.style  = 'display: block;  background-color: rgba' + Playlist[posMusic].backgroundList;

}

function executeBackPlaylist(){

    order_Options.style  = 'display: block;  background-color: rgba' + Playlist[posMusic].backgroundList;
    choose_Playlist.style   = 'display: none; background-color: rgba'  + Playlist[posMusic].backgroundList;

}

function enableLoop(e){

    if(!loop){

        music_Tracks.loop = true;
        loop_Audio.style = 'filter: invert(100%)';

    }
    
    else{

        music_Tracks.loop = false;
        loop_Audio.style = 'filter: invert(55%)';

    }

    loop = !loop;

}

function chooseTime(){

    music_Tracks.currentTime = input_Music.value;

}

function increaseTime(){ 

    music_Tracks.currentTime += 10;

}

function decreaseTime(){ 

    music_Tracks.currentTime -= 10;
    
}
