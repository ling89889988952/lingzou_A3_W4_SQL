(() => {
    console.log("fire");


    let icon = document.querySelectorAll(".trackholder");
    let dropZones = document.querySelectorAll(".seat");
    let audio = document.getElementById('audio1');
    let iconBoard = document.querySelectorAll(".iconImg");
    let audioBox = document.querySelectorAll(".audioBox");

  //create audio function 
    function loadAuido(){
        console.log('audio load');
        audio.load();
    }


    function playAudio(){
        console.log('audio play');
        audio.play();
    }

    function pauseAudio(){
        console.log('audio pause');
        audio.pause(true);
    }

    function toggleAudio(){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    }


    function switchAudioTrack(){
        currentTrack = this.dataset.currenttrack;

        if(!audio.src.includes(currentTrack)){
            audio.src = `audio/${currentTrack}`;
            audio.load();
        }
        
        toggleAudio();   

    }


    icon.forEach(icon => {
        icon.addEventListener("click", switchAudioTrack);
    });

    // creat the chrous founction

    function loadAudioBox() {
       audioBox.load();
    }

    function playAudioBox(){      
        audioBox.play();
    }

    // function pauseAudioBox(){
    //     audioBox.pause();
    // }


    // function toggleAudioBox(){
    //     if(audioBox.paused){
    //         audioBox.play();
    //     }else{
    //         audioBox.pause();
    //     }
    // }


//  Create the drag & drop event 
//  Make the icon can be drag to the chorus area

     icon.forEach(icon => {
        icon.addEventListener("dragstart", function(e){
            console.log("you drag me");
            e.dataTransfer.setData("text/plain", this.id);
        });
     });

    dropZones.forEach(zone => {
        zone.addEventListener("dragover", function(e){
            e.preventDefault();
            console.log("dragged over me");
        });
        zone.addEventListener("drop",function(e) {
                e.preventDefault();
                console.log('you can drop!'); 

                let icon = e.dataTransfer.getData("text/plain");
                
        
                // if(e.currentTarget.firstElementChild){
                //     let currentImage = e.currentTarget.firstElementChild;
                //     dropZones.appendChild(currentImage);
                   
                // }

                e.currentTarget.appendChild(document.querySelector(`#${icon}`)); 
                // e.currentTarget.firstElementChild.dataset.currenttrack(document.createElement('audio'));

                // pull the dataset.currenttrack, create a new audio element (document.createElement('audio'))

                // set the source, load it and play it
            })
                // e.currentTarget.firstElementChild.dataset.currenttrack(document.createElement('audio'));

                // let audioPlay = 

             // switchAudioBoxTrack();

            // let audio = e.dataTransfer.getData("audio");

            // e.currentTarget.firstElementChild.dataset.currenttrack(document.createElement('audio'));

       
    })

       function switchAudioBoxTrack(){
       currentTrack = this.dataset.currenttrack;

        if(audioBox.src.includes('currentTrack')){
            audioBox.src = `audio/${currentTrac}`;
            audioBox.load();
        }
        
        playAudioBox();   

    }


     dropZones.forEach(zone => {
        zone.addEventListener("drop", switchAudioBoxTrack);
    });

    
 
//  Make the icon can be drag  back to the voice area


    iconBoard.forEach(board => {
        board.addEventListener("dragover", function(e){
            e.preventDefault();
            console.log("where to go?");
        });

        board.addEventListener("drop", function(e){
            e.preventDefault();
            console.log('you can take me back!');

            let icon = e.dataTransfer.getData("text/plain");

            e.target.appendChild(document.querySelector(`#${icon}`));

            console.log('Thanks');
            
        })
    })

   
    

   




   

})();