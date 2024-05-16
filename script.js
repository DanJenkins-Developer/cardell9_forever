// Hello

const cardellPicEl = document.getElementById("cardell_pic")

const getRandomPic = ()  =>  {
    
    const currentDir = window.location.pathname;

    const pathWithoutFile = currentDir.replace(/\/[^/]+$/, "");

    const picsDir = pathWithoutFile + "/cardell_pics/"

    console.log(currentDir)
    console.log(pathWithoutFile)
    console.log(picsDir)

    const picNames = ['20220406_132216.jpg', 'E77FBF21-9EB8-49B7-80EB-DA33BF4FD718.jpg', 'IMG_0928.jpg']

    const min = 0;
    const max = 2;

    const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;

    const randomPicName = picNames[randomNumber]

    console.log(randomNumber)
    console.log(randomPicName)

    const randomPicPath = picsDir + randomPicName

    console.log(randomPicPath)

    return randomPicPath
}

const pic = getRandomPic()
console.log("From function ::" + pic)
cardellPicEl.src = pic
