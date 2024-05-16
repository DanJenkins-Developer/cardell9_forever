// Hello

const cardellPicEl = document.getElementById("cardell_pic")


const getRandomPic = (index)  =>  {
    
    const currentDir = window.location.pathname;

    const pathWithoutFile = currentDir.replace(/\/[^/]+$/, "");

    const picsDir = pathWithoutFile + "/cardell_pics/"

    const picNames = ['20220406_132216.jpg', 'E77FBF21-9EB8-49B7-80EB-DA33BF4FD718.jpg', 'IMG_0928.jpg']

    const min = 0;
    const max = 2;

    const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;

    const randomPicName = picNames[randomNumber]

    const randomPicPath = picsDir + randomPicName

    return randomPicPath
}



// const pic = getRandomPic()
// console.log("From function ::" + pic)
// cardellPicEl.src = pic



const updateImage = () => {

    const pic = getRandomPic();
    //const pic = getPicture();
    console.log("From function ::" + pic);
    cardellPicEl.src = pic;
    
    // Apply fade-in animation
    cardellPicEl.classList.remove("fade-out");
    cardellPicEl.classList.add("fade-in");
    
    setTimeout(() => {
        // Apply fade-out animation after 3 seconds
        cardellPicEl.classList.remove("fade-in");
        cardellPicEl.classList.add("fade-out");
    }, 4000);
};

updateImage();

setInterval(updateImage, 7000);
