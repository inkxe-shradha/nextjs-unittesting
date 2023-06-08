import React from 'react'

type Carousal = {
    sys: Object
    title: string
    description: string
    image: {
        url: string
        title: string
    }
}

type IProps = {
    carousal: Carousal[]
}

const Carousal: React.FC<IProps> = (props) => {
    console.log(props.carousal, 'Props')

    return (
        <div>
            Carousal - https://www.youtube.com/watch?v=yqe5UB_BF7Q From 15min
        </div>
    )
}

export default Carousal
