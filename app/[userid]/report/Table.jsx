import { refreshAccessToken, getRecords } from '@/app/utils/zohoAuth';

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
            <table className='table text-center table-responsive border table-hover table-striped'>
                <thead>
                    <tr>
                        <th className='text-secondary'>Issue Type</th>
                        <th className='text-secondary'>Issue</th>
                        <th className='text-secondary'>Issue Details</th>
                        <th className='text-secondary'>Priority</th>
                        <th className='text-secondary'>Reported By</th>
                        <th className='text-secondary'>Reported Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    {records.data.length > 0 ? (
                        records.data.map((record, index) => (
                            <tr key={index}>
                                <td>{record.Issue_Type}</td>
                                <td>{record.Issue}</td>
                                <td>{record.Issue_Details}</td>
                                <td>{record.Priority}</td>
                                <td>{record.Reported_By.display_value}</td>
                                <td>{record.Reported_Date_Time}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No Records Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Table;
