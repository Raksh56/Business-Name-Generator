function generator(a, b, c) {
    random = Math.floor(Math.random() * 3)
    console.log(random)

    if (random == 0)
        return a
    else if (random == 1)
        return b
    else
        return c

}
console.log(generator("BrightPath", "Technologies", "Apparel") + " " + generator("LunaNova ", "Innovations", "Velvet") + " " + generator("Solutions ", "Pixel", "Logistics"))


// -------------------------------------------OR



let business_1 = {
    1: "BrightPath",
    2: "Technologies",
    3: "Apparel"
}
let business_2 = {
    1: "LunaNova",
    2: "Innovations",
    3: "Velvet"
}
let business_3 = {
    1: "Solutions",
    2: "Pixel",
    3: "Logistics"
}
random_1 = Math.floor(Math.random()*3+1)
random_2 = Math.floor(Math.random()*3+1)
random_3 = Math.floor(Math.random()*3+1)
console.log(random_1,random_2,random_3)

console.log(`${business_1[random_1]} ${business_2[random_2]} ${business_3[random_3]}`)