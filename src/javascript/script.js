document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggle")
    const profileImage = document.querySelector("#header__profile img")
    const srcFavicon = document.getElementById("src-favicon")
    const html = document.documentElement


    toggleSwitch.addEventListener("change", () => {
        html.classList.toggle("light-theme")

        profileImage.style.opacity = "0"
        profileImage.style.filter = "blur(10px)"

        setTimeout(() => {
            if (html.classList.contains("light-theme")) {
                profileImage.setAttribute("src", "./src/assets/images/avatar-light.png");
                profileImage.setAttribute("alt", "Foto de perfil, Avatar usando casaco com capuz com o céu aparecendo ao fundo");
                srcFavicon.setAttribute("href", "./src/assets/images/avatar-light.png")
            } else {
                profileImage.setAttribute("src", "./src/assets/images/avatar.png");
                profileImage.setAttribute("alt", "Foto de perfil, Astronauta flutuando no espaço segurando uma água viva");
                srcFavicon.setAttribute("href", "./src/assets/images/avatar.png")
            }

            profileImage.style.opacity = "1"
            profileImage.style.filter = "blur(0px)"
        }, 150)
    })
})