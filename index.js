        const URL = window.location.href;
        const link = document.querySelector('#link-text');
        const button = document.querySelector('#share-button');
  
        document.getElementById("share-btn").addEventListener('click', () => {
            console.log("button clicked")
            link.textContent = URL;
            link.href = URL;
            console.log("URL",URL)
            console.log(document.getElementsByClassName("popup-main"))
            document.getElementsByClassName("popup-main")[0].style.display = 'block';
        });

        document.getElementById("close-btn").addEventListener('click',()=>{
            document.getElementById("popup").style.display = 'none';
        })

        document.getElementById("copy-btn").addEventListener('click', () => {
            navigator.clipboard.writeText(URL);
        })

        document.getElementById("menu-icon").addEventListener('click', () => {
            document.querySelectorAll(".header-main")[0].style.display = "flex";
            document.getElementById("menu-icon").style.display = "none";
            document.getElementById("menu-close-btn").style.display = "block";        
           
        })

        document.getElementById("menu-close-btn").addEventListener('click', () => {
            closePopup();
        })
        
        function closePopup(){
            document.querySelectorAll(".header-main")[0].style.display = "none";
            document.getElementById("menu-icon").style.display = "block";
            document.getElementById("menu-close-btn").style.display = "none";
        }