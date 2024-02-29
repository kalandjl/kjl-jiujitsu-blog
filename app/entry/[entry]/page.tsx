import Entries from "@/components/Entries";
import getEntries from "@/utils/getEntries";

export const revalidate = 3600

const Tag = async ({ params }: any) => {

    const { entry } = params;
    const limit = 10

    const entries: any = (await getEntries(limit, ["__name__", "==", entry]))
        .map(entry => ({...entry.data(), id: entry.id}))

    return (
        <>
            <Entries 
            limit={limit}
            manualEntries={entries}
            entriesCollapsed={false}
            showTags />
        </>
    );
};

export default Tag