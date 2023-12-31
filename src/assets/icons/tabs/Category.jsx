import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Category = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#F9B023"
            fillRule="evenodd"
            stroke="#F9B023"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 4.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0ZM8.347 4.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0ZM19 15.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0ZM8.347 15.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Category
