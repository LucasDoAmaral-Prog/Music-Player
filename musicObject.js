const music_Tracks = document.querySelector("audio");

export let Playlist = [

    createObject
    (
        //NAME
        "Save a Prayer 2009 - Remaster",
        //SINGER
        "Duran Duran",
        //File Photo
        "./images/SaveAprayer.jpg",
        //File Audio
        "./musics/SaveAprayer.mp3",
        //Progress
        verifyTime,
        //Design
        "(36, 36, 194, 0.577)",
        //LIST 
        "(56, 119, 236, 0.549)",
        //CONTROL
        "(56, 119, 236, 0.549)",
        //VELOCITY 
        "(56, 119, 236, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(56, 119, 236)", 
        "(56, 119, 236)", 
        //VOLUMEINPUT AND PROGRESS
        "(56, 119, 236)",  
        "(56, 119, 236)"

    ),

    createObject
    (
        // NAME//
        "Tempo Perdido", 
        //SINGER 
        "Legião Urbana",
        //FILE IMAGE
        "./images/Legiao_Urbana.jpg", 
        // FILE AUDIO
        "./musics/Tempo_Perdido.mp3",
        //Progress
        verifyTime,
        //DESIGN
        "(18, 39, 59, 0.637)",
        //LIST 
        "(72, 154, 248, 0.349)",
        //CONTROL
        "(72, 154, 248, 0.349)",
        //VELOCITY 
        "(72, 154, 248, 0.349)", 
        //MUSICINPUT AND PROGRESS
        "(0, 132, 255)", 
        "(0, 132, 255)", 
        //VOLUMEINPUT AND PROGRESS
        "(0, 132, 255)", 
        "(0, 132, 255)"
    ),

    createObject
    (
        // NAME//
        "Sunday Bloody Sunday", 
        //SINGER 
        "U2", 
         //FILE IMAGE
        "./images/SundayBlood.jpg", 
        // FILE AUDIO
        "./musics/SundayBloody.mp3",
        //Progress
        verifyTime,
        //DESIGN
        "(255,99,71, 0.349)",
        //LIST 
        "(165,42,42, 0.549)",
        //CONTROL
        "(165,42,42, 0.549)",
        //VELOCITY 
        "(165,42,42, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(165,42,42)", 
        "(165,42,42)", 
        //VOLUMEINPUT AND PROGRESS
        "(165,42,42)", 
        "(165,42,42)"
    ),

   createObject
    (
        //NAME
        "Owner of a Lonely Heart",
        //SINGER
        "Yes",
        //File Photo
        "./images/ownerLonely.jpg",
        //File Audio
        "./musics/ownerLonely.mp3",
        //Progress
        verifyTime,
        //Design
        "(160,82,45, 0.349)",
        //LIST 
        "(160,82,45, 0.549)",
        //CONTROL
        "(160,82,45, 0.549)",
        //VELOCITY 
        "(160,82,45, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(139,69,19)", 
        "(139,69,19)", 
        //VOLUMEINPUT AND PROGRESS
        "(139,69,19)",  
        "(139,69,19)"

    ),

    createObject
    (
        //NAME
        "Hold The Line",
        //SINGER
        "Toto",
        //File Photo
        "./images/holdTheLine.jpg",
        //File Audio
        "./musics/HoldtheLine.mp3",
        //Progress
        verifyTime,
        //Design
        "(123,104,238, 0.349)",
        //LIST 
        "(123,104,238, 0.549)",
        //CONTROL
        "(123,104,238, 0.549)",
        //VELOCITY 
        "(123,104,238, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(128,0,128)", 
        "(128,0,128)", 
        //VOLUMEINPUT AND PROGRESS
        "(128,0,128)",  
        "(128,0,128)"

    ),

    createObject
    (
        //NAME
        "Acenda o farol",
        //SINGER
        "Tim Maia",
        //File Photo
        "./images/timMaia.jpg",
        //File Audio
        "./musics/AcendaOFarol.mp3",
        //Progress
        verifyTime,
        //Design
        "(112,128,144, 0.349)",
        //LIST 
        "(112,128,144, 0.549)",
        //CONTROL
        "(112,128,144, 0.549)",
        //VELOCITY 
        "(112,128,144, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(112,128,144)", 
        "(112,128,144)", 
        //VOLUMEINPUT AND PROGRESS
        "(128,0,128)",  
        "(128,0,128)"

    ),

    createObject
    (
        //NAME
        "Eduarda e Mônica",
        //SINGER
        "Legião Urbana",
        //File Photo
        "./images/EduardoEmonica.jpg",
        //File Audio
        "./musics/EduardoEmonica.mp3",
        //Progress
        verifyTime,
        //Design
        "(255,140,0, 0.349)",
        //LIST 
        "(255,140,0, 0.549)",
        //CONTROL
        "(255,140,0, 0.549)",
        //VELOCITY 
        "(255,140,0, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(255,69,0)", 
        "(255,69,0)", 
        //VOLUMEINPUT AND PROGRESS
        "(255,69,0)",  
        "(255,69,0)"

    ),
    
]

function createObject(name_Music, name_Singer, name_filePhoto, name_fileAudio, account, colorDesign_HEX, colorList_HEX, colorControl_HEX, colorVelocity_HEX, colorMusicInput_HEX, colorProgressMusic_HEX, colorAudioInput_HEX, colorProgressVolume_HEX){

    return {

       song: name_Music,
       singer: name_Singer,   
       filePhoto: name_filePhoto,
       fileAudio: name_fileAudio,
       accountProgress: account,
       backgroundDesign: colorDesign_HEX,
       backgroundList: colorList_HEX,
       backgroundControl: colorControl_HEX,
       backgroundVelocity: colorVelocity_HEX,
       backgroundMusicInput: colorMusicInput_HEX,
       backgroundProgressMusic: colorProgressMusic_HEX,
       backgroundAudioInput: colorAudioInput_HEX,
       backgroundProgressVolume: colorProgressVolume_HEX,

    }

}

function verifyTime(){

    let time_All = parseInt(music_Tracks.duration);
    time_All     = time_All/100;

    return time_All

}