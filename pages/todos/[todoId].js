import Link from "next/link";
// import { useRouter } from "next/router";

export async function getStaticProps(context) {
  console.log('context', context)
  const { params } = context;

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
  const todo = await data.json();

  return {
    props: { todo },
  }
};

export async function getStaticPaths() {
  
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  
  const data = await response.json();

    const paths = data.map((todo) => {
      return {
        params: {
          todoId: `${todo.id}`,
        },
      }
    });

  return { paths, fallback: false }; 
}


export default function Todo({ todo }) {
  // const router = useRouter();
  // const todoId = router.query.todoId;

  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h1>Exibindo o todo: {todo.id}</h1>
      <h4>Title: { todo.title }</h4>
      <p>
        
        <Link href={`/todos/${todo.id}/comments/1`}>
          <a>Detalhes</a>
        </Link>
      </p>
      {/* <p>
        Comentário: le le le... 
        <Link href={`/todos/${todoId}/comments/2`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentário: lli li li... 
        <Link href={`/todos/${todoId}/comments/3`}>
          <a>Detalhes</a>
        </Link>
      </p> */}
    </>
  )
}