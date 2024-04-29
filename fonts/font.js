import { Lato, Merriweather, Montserrat, Plus_Jakarta_Sans, Poppins, Source_Serif_4 } from "next/font/google";






export const merri = Merriweather({ 
    subsets: ['latin'],
    weight:['400','700'] ,
    variable:'--merri'
    })

export const poppins = Poppins({ 
    subsets: ['latin'],
    weight:['300', '400','500','600','700','800'] ,
    variable:'--poppins'
    })

export const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight:['500'] ,
    variable:'--jakarta' 
})

export const lato = Lato({
    subsets: ['latin'],
    weight:['100','300', '400', '700','900'] ,
    variable:'--lato' 
})

export const source = Source_Serif_4({
    subsets: ['latin'],
    weight:['700'] ,
    variable:'--source' 
})

export const monsterrat = Montserrat({
    subsets: ['latin'],
    weight:['700'] ,
    variable:'--monsterrat' 
})