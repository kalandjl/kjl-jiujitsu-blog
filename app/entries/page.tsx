import Entries from "@/components/Entries/Entries"


const Home = () => {

    return (
        <>
            <Entries 
            limit={1000} 
            pageLimit={10}
            entryLinked={true}
            showTags/>  
        </>
    )
}

export default Home