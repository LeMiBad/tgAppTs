import axios from "axios"

interface IImage {
    filename: string
    meta: {
        href: string 
        type: string 
        mediaType: string 
        downloadHref: string
    }
    miniature: {
        type: string
        mediaType: string
    }
    tiny: {
        href: string 
        type: string 
        mediaType: string
    }
    title: string
    updated: string
} 

export const getImage = async (url: string, acces: string) => {
    const config = {
        headers: {
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Accept": "*/*",
            "Content-Type": "application/json",
            'Access-Control-Allow-Credentials': "true",
            "Authorization": `Bearer ${acces}`
        },
    }


    const images: Promise<any>[] = []
    
    const imagesUrl = await axios(`https://www.mc.optimiser.website/api/remap/1.2/entity/product/${url.split('/').slice(8).join('/')}`, config)
    
    if(imagesUrl.data.rows.length) {
        imagesUrl.data.rows.forEach(async (imgData: IImage) => {
            const cfg = {
                method: 'post',
                url: 'https://www.mc.optimiser.website/api/get_image',
                headers: { 
                    'Authorization': `Bearer ${acces}`, 
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "img_id": imgData.meta.downloadHref.split('/').slice(7).join('/')
                })
            }

            images.push(axios(cfg))
        })
    }

    return images
}
