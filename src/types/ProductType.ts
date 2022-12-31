export interface IProduct {
    accountId: string
    archived: boolean
    article: string
    barcodes: {
        ean13: string
    }[]
    buyPrice: {
        value: number
        currency: {
            meta: {
                href: string
                mediaType: string 
                metadataHref: string
                type: string
                uuidHref: string
            }
        }
    }
    code: string
    country: {
        meta: {
            href: string
            mediaType: string 
            metadataHref: string
            type: string
            uuidHref: string
        }
    }
    description: string
    discountProhibited: boolean
    externalCode: string
    files: {
        meta: {
            href: string
            limit: number
            mediaType: string
            offset: number
            size: number
            type: string
        } 
    }
    group: {
        meta: {
            href: string
            metadataHref: string
            type: string
            mediaType: string
        }
    }
    id: string
    images: {
        meta: {
            href: string
            type: string
            mediaType: string
            size: number
            limit: number
            offset: number
        }
    }
    isSerialTrackable: boolean
    meta: {
        href: string
        metadataHref: string
        type: string
        mediaType: string 
        uuidHref: string
    }
    minPrice: {
        value: number
        currency: {
            meta: {
                href: string
                mediaType: string 
                metadataHref: string
                type: string
                uuidHref: string
            }
        }
    }
    name: string
    owner: {
        meta: {
            href: string
            mediaType: string 
            metadataHref: string
            type: string
            uuidHref: string
        }
    }
    pathName: string
    paymentItemType: string
    productFolder: {
        meta: {
            href: string
            mediaType: string 
            metadataHref: string
            type: string
            uuidHref: string
        }
    }
    salePrices: {
        currency: {
            meta: {
                href: string
                mediaType: string 
                metadataHref: string
                type: string
                uuidHref: string
            }
        }
        priceType: {
            meta: {
                href: string
                type: string
                mediaType: string
            },
            id: string
            name: string
            externalCode: string
        }
        value: number
    }[]
    shared: boolean
    supplier: {
        meta: {
            href: string
            mediaType: string 
            metadataHref: string
            type: string
            uuidHref: string
        }
    }
    trackingType: string
    uom: {
        meta: {
            href: string
            mediaType: string
            metadataHref: string
            type: string
        }
    }
    updated: string
}