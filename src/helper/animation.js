export const animationForIceCream = (direction = 'left') =>{
    return {
        initial: {
            x: direction == 'left' ? -200 : 200,
            opacity: 0
        },
        animationEntry: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                delay: 0
            }
        },
        animationFloating: {
            y: [0, -10, 0, 10, 0],
            transition:{
                duration: 4,
                repeat: Infinity,
                ease: 'easeIn',
                delay: 2
            }
        }
    }
}

export const animationForText = (direction = 'top') =>{
    return {
        initial: {
            y: direction == 'top' ? -200 : 200,
            opacity: 0
        },
        animationEntry: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .7,
                ease: 'easeInOut',
                delay: 0
            }
        }
    }
}

export const animationForButton = (direction = 'top') =>{
    return {
        initial: {
            y: direction == 'top' ? -200 : 200,
            opacity: 0
        },
        animationEntry: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .7,
                ease: 'easeInOut',
                delay: .4
            }
        }
    }
}

