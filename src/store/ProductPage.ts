import { createEvent, createStore } from "effector";

interface IProductPage {
    name: string
    description: string
    price: string
    img: string
    kinds: string[]
}

const initialProductPage = {
    name: 'Шаурма',
    description: 'Вот тут должно находится описания для данного товара, например его плюсы и минус и многое другое',
    price: '200',
    img: 'https://ням.орг/wp-content/uploads/2020/09/SHaurma-1.jpg',
    kinds: ['С сыром', 'С халапенью', 'С картошкой фри', 'С беконом'],
}


export const productUpdate = createEvent()
export const $ProductPage = createStore<IProductPage>(initialProductPage)
    .on(productUpdate, (_, product) => {
        return product
    })