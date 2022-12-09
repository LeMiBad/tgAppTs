import { useState } from "react"


const useOpen = () => {
    const [isOpen, setIsOpen] = useState(false)

    return {
        openState: isOpen,
        switchHandler: () => isOpen? setIsOpen(false) : setIsOpen(true)
    }
}

export default useOpen