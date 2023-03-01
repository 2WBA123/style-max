import image1 from '../images/nightout.jpg'
import image2 from '../images/office.jpg'
import image3 from '../images/modestfashion.jpg'
import image4 from '../images/cultural.jpg'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
