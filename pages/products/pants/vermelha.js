import Link from "next/link";
export default function Vermelha() {
  return (
    <>
    <nav>
      <Link href='/'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Voltar</a></Link><br/>
      <Link href='/products'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Podutos</a></Link><br/>
    </nav>
    <h1>Calça Vermelha: R$ 109.99</h1>
    </>
 
  )

}