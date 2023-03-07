         function displayRandomImages()   
         {  
              
            var imageArray = [  
            {   
              //address URL of the image  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Absol.png",  
              //size for the image to be display on webpage  
              width: "256",  
              height: "256"  
            },   
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Azumarill.png",  
              width: "256",  
              height: "256"  
            },   
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Blastoise.png",  
              width: "256",  
              height: "256"  
            },
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Blissey.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Aegislash.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Charizard.png",  
              width: "256",  
              height: "256"  
            },  
         
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Cinderace.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Clefable.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Cramorant.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Decidueye.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Delphox.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Dodrio.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Dragapult.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Dragonite.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Duraludon.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Eldegoss.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Espeon.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Garchomp.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Gardevoir.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Gengar.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Glaceon.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Greedent.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Greninja.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Hoopa.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Lucario.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Machamp.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Mamoswine.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Mew.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Mr.Mime.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Ninetales.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Pikachu.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Sableye.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Scizor.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Scyther.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Slowbro.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Snorlax.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Sylveon.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Talonflame.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Trevenant.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Tsareena.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Tyranitar.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Urshifu.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Venusaur.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Wigglytuff.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Zeraora.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Zoroark.png",  
              width: "256",  
              height: "256"  
            },  
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Comfey.png",  
              width: "256",  
              height: "256"  
            },  
	    {  
              src: "https://www.serebii.net/pokemonunite/pokemon/888.png",  
              width: "256",  
              height: "256"  
            },  
            
         
            {  
              src: "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Buzzwole.png",  
              width: "256",  
              height: "256"  
             } ];  
               
             //find the length of the array of images  
             var arrayLength = imageArray.length;  
             var newArray = [];  
             for (var i = 0; i < arrayLength; i++) {  
                 newArray[i] = new Image();  
                 newArray[i].src = imageArray[i].src;  
                 newArray[i].width = imageArray[i].width;  
                 newArray[i].height = imageArray[i].height;  
             }  
              
           // create random image number  
           function getRandomNum(min, max)   
           {  
               // generate and return a random number for the image to be displayed   
               imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
               return newArray[imgNo];  
           }    
           
           // 0 is first image and (preBuffer.length - 1) is last image of the array  
           var newImage = getRandomNum(0, newArray.length - 1);  
            
           // remove the previous images  
           var images = document.getElementsByTagName('img');  
           var l = images.length;  
           for (var p = 0; p < l; p++) {  
              images[0].parentNode.removeChild(images[0]);  
           }  
           // display the new random image    
           document.body.appendChild(newImage);  
         }  
         function path() {
             var message = ["Go top path","Go Central Path","Go Bottom path"];
             var a = Math.floor(Math.random() * message.length);
         
             window.alert(message[a]);
         }
        function items() {
             var message = ["Aeos Cookie","Assault Vest","Attack weight","Buddy barrier","Choice Specs","Drain Crown","Energy Amplifier","Exp. Share","Float Stone","Focus Band","Leftovers","Muscle band","Razor Claw","Rocky Helmet","Scope lens","Score Shield","Shell bell","Sp. Atk Specs","Weakness Policy", "Wise Glasses", "Slick Spoon", "Rescue hood", "Rusted Sword"]
                
             var b = Math.floor(Math.random() * message.length);
         
             window.alert(message[b]);
        } 
        
        function battle() {
            var message = ["Eject button", "Fluffy Tail", "Full Heal", "Goal Getter", "Potion", "Slow Smoke", "X Attack", "X speed",]
                
             var c = Math.floor(Math.random() * message.length);
         
             window.alert(message[c]);
        }
      
		
		
		
