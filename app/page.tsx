import Link from "next/link";

export default function Home(){
  return(
    <div>
      <p>Welcome To Countries List</p>
      <br />
      <br />
      <h1> <Link href="./country">Click here for Countries List</Link></h1>
    </div>
  )
}