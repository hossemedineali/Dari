


const Post = ({id}) => {

console.log(id)
        return ( <h1 className="absolute top-[250px]">{id} </h1> );
    }
    
    export default Post;



    export const getServerSideProps: GetServerSideProps = async (context) => {
        // ...
      }