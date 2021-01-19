import Feed from '../components/Feed'
import Layout from '../components/Layout'
import Suggestions from '../components/Suggestions'

function Index(){
    return (
        <Layout>
            <Feed posts={['lucas', 'sousa', 'assuncao']}></Feed>
            <Suggestions></Suggestions>
        </Layout>
    )
}
// export async function getServerSideProps(context){
    
// }


export default Index