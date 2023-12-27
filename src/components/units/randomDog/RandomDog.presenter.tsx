import * as R from "./RandomDog.styles"
import { IRandomDogUIProps } from "./RandomDog.types"

export default function RandomDogUI(props: IRandomDogUIProps) {
  return (
    <R.Wrapper>
      <div>
      {props.dogImg.map((el) => (
            <R.DogImg key={el} src={el} />            
        ))}
      </div>
    </R.Wrapper>
  )
}
