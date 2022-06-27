import Link from "next/link";
export default function Projects() {
  return (
    <>
    <h1>Produdos</h1>
    <nav>
        <Link href='/products/pants/azul'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Calça Azul</a></Link><br/>
        <Link href='/products/pants/vermelha'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Calça Vermelha</a></Link><br/>
        <Link href='/products/shirt'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Camisas</a></Link><br/>
        <Link href='/'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Home</a></Link>
      </nav>
    </>
 
  )

}