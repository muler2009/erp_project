import { useState } from "react"

interface SubmenuProps {
    sideParent: string
    controller: boolean
}


const Submenu = (props: SubmenuProps) => {
    const { sideParent, controller } = props
    const [subnav, setSubnav] = useState<boolean>(false);
    const showSubnav = () => setSubnav(!subnav);
  return (
    <div>
      test
    </div>
  )
}

export default Submenu
