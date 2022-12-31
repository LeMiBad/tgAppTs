import { createEvent, createStore } from "effector";
import { IProduct } from "../types/ProductType";


const initialProduct =  {
    accountId: '',
    archived: false,
    article: '',
    barcodes: [{
        ean13: ''
    }],
    buyPrice: {
        value: 1,
        currency: {
            meta: {
                href: '',
                mediaType: '',
                metadataHref: '',
                type: '',
                uuidHref: ''
            }
        }
    },
    code: '',
    country: {
        meta: {
            href: '',
            mediaType: '',
            metadataHref: '',
            type: '',
            uuidHref: ''
        }
    },
    description: '',
    discountProhibited: false,
    externalCode: '',
    files: {
        meta: {
            href: '',
            limit: 1,
            mediaType: '',
            offset: 1,
            size: 1,
            type: ''
        } 
    },
    group: {
        meta: {
            href: '',
            metadataHref: '',
            type: '',
            mediaType: ''
        }
    },
    id: '',
    images: {
        meta: {
            href: '',
            type: '',
            mediaType: '',
            size: 1,
            limit: 1,
            offset: 1
        }
    },
    isSerialTrackable: false,
    meta: {
        href: '',
        metadataHref: '',
        type: '',
        mediaType: '', 
        uuidHref: ''
    },
    minPrice: {
        value: 1,
        currency: {
            meta: {
                href: '',
                mediaType: '', 
                metadataHref: '',
                type: '',
                uuidHref: ''
            }
        }
    },
    name: '',
    owner: {
        meta: {
            href: '',
            mediaType: '', 
            metadataHref: '',
            type: '',
            uuidHref: ''
        }
    },
    pathName: '',
    paymentItemType: '',
    productFolder: {
        meta: {
            href: '',
            mediaType: '', 
            metadataHref: '',
            type: '',
            uuidHref: ''
        }
    },
    salePrices: [{
        currency: {
            meta: {
                href: '',
                mediaType: '', 
                metadataHref: '',
                type: '',
                uuidHref: ''
            },
        },
        priceType: {
            meta: {
                href: '',
                type: '',
                mediaType: 'string'
            },
            id: '',
            name: '',
            externalCode: ''
        },
        value: 1
    }],
    shared: false,
    supplier: {
        meta: {
            href: '',
            mediaType: '', 
            metadataHref: '',
            type: '',
            uuidHref: ''
        }
    },
    trackingType: '',
    uom: {
        meta: {
            href: '',
            mediaType: '',
            metadataHref: '',
            type: ''
        }
    },
    updated: ''
}



export const productUpdate = createEvent<IProduct>()
export const $ProductPage = createStore<IProduct>(initialProduct)
    .on(productUpdate, (_, product) => {
        return product
    })