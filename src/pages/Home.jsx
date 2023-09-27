import ListPosts from "../components/ListPost"

//
const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      {/* Se manda a traves del parametro 'url' la ruta que queremos obtener datos */}
      <ListPosts url={'/posts'}/>
    </main>
  )
}

export default Home
