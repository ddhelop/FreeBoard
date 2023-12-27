import { useEffect, useState } from 'react'
import RandomDogUI from './RandomDog.presenter'
import axios from 'axios';

export default function RandomDogPage(): JSX.Element {
  const [dogImg, setDogImg] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async ():Promise<void> => {
      new Array(12).fill(1).forEach(async (_) => {
        const result = await axios.get("https://dog.ceo/api/breeds/image/random");
        setDogImg((prev) => [...prev, result.data.message]);
      })
    }
    void getImg();
  }, [])

  return (
    <RandomDogUI dogImg={dogImg} />
  )
}
