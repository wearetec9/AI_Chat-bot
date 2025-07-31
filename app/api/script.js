import axios  from "axios";
import * as cheerio from 'cheerio'
async function GET(){
    url = 'https://fitgirl-repacks.site/popular-repacks/'
    const axios = require('axios')
    try{

        const data = await axios.get(url)
        const res = data.data
        console.log(res)
        const $ = cheerio.load('html')
        const images = []
        $('.widget-grid-view-image a img').each(function(index,element){
            const src = $(element).attr('src');
            if(src){
                images.push(src.startsWith('//'))?
                'https:'+src:src
            }
        })
        console.log(images)
    }
    catch(err){
        console.log(err)
    }
    

    
}