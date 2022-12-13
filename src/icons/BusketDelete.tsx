import { useStore } from "effector-react"
import { $tgInfo } from "../store/tgData"


const BusketDelete = () => {
    const {dark} = useStore($tgInfo)
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="30px" height="30px"><g id="surface108376417"><path style={{stroke: 'none', fillRule: 'nonzero', fill: dark? 'white' : 'black', fillOpacity: 1}} d="M 21 2 C 19.355469 2 18 3.355469 18 5 L 18 7 L 10.15625 7 C 10.097656 6.992188 10.042969 6.984375 9.984375 6.988281 C 9.9375 6.988281 9.886719 6.992188 9.839844 7 L 8 7 C 7.640625 6.996094 7.304688 7.183594 7.121094 7.496094 C 6.941406 7.808594 6.941406 8.191406 7.121094 8.503906 C 7.304688 8.816406 7.640625 9.003906 8 9 L 9 9 L 9 45 C 9 46.644531 10.355469 48 12 48 L 38 48 C 39.644531 48 41 46.644531 41 45 L 41 9 L 42 9 C 42.359375 9.003906 42.695312 8.816406 42.878906 8.503906 C 43.058594 8.191406 43.058594 7.808594 42.878906 7.496094 C 42.695312 7.183594 42.359375 6.996094 42 7 L 40.167969 7 C 40.058594 6.980469 39.949219 6.980469 39.84375 7 L 32 7 L 32 5 C 32 3.355469 30.644531 2 29 2 Z M 21 4 L 29 4 C 29.554688 4 30 4.445312 30 5 L 30 7 L 20 7 L 20 5 C 20 4.445312 20.445312 4 21 4 Z M 11 9 L 18.832031 9 C 18.941406 9.019531 19.050781 9.019531 19.15625 9 L 30.832031 9 C 30.941406 9.019531 31.050781 9.019531 31.15625 9 L 39 9 L 39 45 C 39 45.554688 38.554688 46 38 46 L 12 46 C 11.445312 46 11 45.554688 11 45 Z M 18.984375 13.988281 C 18.433594 13.996094 17.992188 14.449219 18 15 L 18 40 C 17.996094 40.359375 18.183594 40.695312 18.496094 40.878906 C 18.808594 41.058594 19.191406 41.058594 19.503906 40.878906 C 19.816406 40.695312 20.003906 40.359375 20 40 L 20 15 C 20.003906 14.730469 19.898438 14.46875 19.707031 14.277344 C 19.515625 14.085938 19.253906 13.980469 18.984375 13.988281 Z M 24.984375 13.988281 C 24.433594 13.996094 23.992188 14.449219 24 15 L 24 40 C 23.996094 40.359375 24.183594 40.695312 24.496094 40.878906 C 24.808594 41.058594 25.191406 41.058594 25.503906 40.878906 C 25.816406 40.695312 26.003906 40.359375 26 40 L 26 15 C 26.003906 14.730469 25.898438 14.46875 25.707031 14.277344 C 25.515625 14.085938 25.253906 13.980469 24.984375 13.988281 Z M 30.984375 13.988281 C 30.433594 13.996094 29.992188 14.449219 30 15 L 30 40 C 29.996094 40.359375 30.183594 40.695312 30.496094 40.878906 C 30.808594 41.058594 31.191406 41.058594 31.503906 40.878906 C 31.816406 40.695312 32.003906 40.359375 32 40 L 32 15 C 32.003906 14.730469 31.898438 14.46875 31.707031 14.277344 C 31.515625 14.085938 31.253906 13.980469 30.984375 13.988281 Z M 30.984375 13.988281 "/></g></svg>
}
export default BusketDelete