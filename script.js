// Hello

const cardellPicEl = document.getElementById("cardell_pic")

const picNames = ['20220406_132216.jpg', 'E77FBF21-9EB8-49B7-80EB-DA33BF4FD718.jpg', 'IMG_0928.jpg', '7473AC61-57B2-42E3-8C16-51D615774F1E.jpg', 'IMG_0592.jpg' , 'IMG_5148.png', '1A674065-B3B7-42CA-8DCD-B2226CA6C1D4.jpg', '3FC04FD3-A607-4615-B507-2034BE66EBFF.jpg', 'IMG_20220331_134320186_HDR.jpg']
let index = 0
const picsNamesLength = picNames.length - 1


// const getRandomPic = (index)  =>  {
    
//     const currentDir = window.location.pathname;

//     const pathWithoutFile = currentDir.replace(/\/[^/]+$/, "");

//     const picsDir = pathWithoutFile + "/cardell_pics/"

//     const picNames = ['20220406_132216.jpg', 'E77FBF21-9EB8-49B7-80EB-DA33BF4FD718.jpg', 'IMG_0928.jpg', '7473AC61-57B2-42E3-8C16-51D615774F1E.jpg', 'IMG_0592.jpg' , 'IMG_5148.png']

//     const min = 0;
//     const max = 2;

//     const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;

//     const randomPicName = picNames[randomNumber]

//     const randomPicPath = picsDir + randomPicName

//     return randomPicPath
// }

const getNextPicturePath = ()  =>  {
    
    const currentDir = window.location.pathname;

    const pathWithoutFile = currentDir.replace(/\/[^/]+$/, "");

    const picsDir = pathWithoutFile + "/cardell_pics/"

    

    const randomPicPath = picsDir + picNames[index]

    return randomPicPath
}



// const pic = getRandomPic()
// console.log("From function ::" + pic)
// cardellPicEl.src = pic



const updateImage = () => {

    //const pic = getRandomPic();
    const pic = getNextPicturePath()
    console.log("From function ::" + pic);
    cardellPicEl.src = pic;
    
    // Apply fade-in animation
    cardellPicEl.classList.remove("fade-out");
    cardellPicEl.classList.add("fade-in");

    index = index + 1

    if(index > picsNamesLength)
        index = 0
    
    setTimeout(() => {
        // Apply fade-out animation after 3 seconds
        cardellPicEl.classList.remove("fade-in");
        cardellPicEl.classList.add("fade-out");
    }, 4000);
};

updateImage();

setInterval(updateImage, 7000);
