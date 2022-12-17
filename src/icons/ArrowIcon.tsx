import { useStore } from "effector-react"
import { $tgInfo } from "../store/tgData"

const ArrowIcon: React.FC<{func: () => void}> = ({func}) => {
    const {dark} = useStore($tgInfo)

    return <div onClick={func} style={{transform: 'rotate(90deg)'}}>
        <svg width="24" focusable="false" viewBox="0 0 24 24" fill={dark? 'white' : 'black'} aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="m12.0003 15.5996-5.7857-5.785 1.414-1.4143 4.3717 4.3711 4.3717-4.3711 1.4141 1.4143-5.7858 5.785z"></path></svg>
    </div>
}

export default ArrowIcon