
const Home = () => {

    const src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvHbDUrn6JZ45qo66KMFhdvoNnmGoYNhu71a77L_1QiWpW5yvFHegJd0EtUyrQpKtXOpyT9cLKMe36/pubhtml?gid=590690975&amp;single=true&amp;widget=true&amp;headers=false"

    return (
        <>
            {/* Google sheets interactive graphs */}
            <div className="w-full h-screen">
                <iframe
                width="100%" 
                height="100%"
                src={src}
                />
            </div>
        </>
    )
}

export default Home