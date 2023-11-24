import { useEffect, useState, useRef } from "react"

const imageSet = [
    {
        description: "Image 1",
        url: "https://i.imgur.com/B8ta5Aa.jpeg"
    }, {
        description: "Image 2",
        url: `${process.env.PUBLIC_URL}/images/pic1.jpg`
    }
]

export default function CustomImage() {
    const [imageSelected, setImageSelected] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        updateImage();
        timerRef.current = setInterval(() => {
            updateImage();
        }, 5000)

        return () => {
            clearInterval(timerRef.current)
        }
    }, [])

    const updateImage = () => {
        setImageSelected(number => (number + 1) % imageSet.length)
    }

    return (
        <div className="w-40 aspect-square mb-10 rounded-full">
            <img src={imageSet[imageSelected].url}
                alt={imageSet[imageSelected].description}
                className="rounded-full object-cover"
            />
        </div>
    )
}