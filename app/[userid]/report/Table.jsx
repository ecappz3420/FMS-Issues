import { refreshAccessToken, getRecords } from '@/app/utils/zohoAuth';
import SearchableTable from './Searchabletable';

const Table = async ({ userid }) => {
    let records = [];

    try {
        const access_token = await refreshAccessToken();
        records = await getRecords(userid, access_token, "Issues");
    } catch (error) {
        console.error("Error fetching records:", error);
    }

    return (
        <>
           <SearchableTable initialRecords={records}/>
        </>
    );
};

export default Table;
