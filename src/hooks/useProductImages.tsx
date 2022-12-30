import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import { $acces } from "../store/skladData"
import { getImage } from "../utils/getImage"



const useImages = (product: any) => {
    const {access_token} = useStore($acces)
    const [{images, isLoading}, setImages] = useState<{images: string[], isLoading: boolean}>({images: [], isLoading: true})


    useEffect(() => {
        getImage(product.images.meta.href, access_token)
            .then(data => {
                console.log(data)
                Promise.all(data)
                    .then(data => {
                        const final: string[] = []
                        data.forEach(item => {
                            final.push(item.data.img_url)
                        })
                        setImages({images: final, isLoading: false})
                    })
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access_token, product.images.meta.href])

    return {images, isLoading}
}

export default useImages