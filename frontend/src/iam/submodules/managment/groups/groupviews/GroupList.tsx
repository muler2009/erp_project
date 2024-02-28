import GroupTable from '../../../../components/Table/GroupTable'
import { useGetGroupsQuery } from '../../../../features/groupsAPI'
import { GROUP_COLUMN } from '../../constants/columns/groupColumn'

const GroupList = () => {
    const { data, isSuccess, isLoading} = useGetGroupsQuery()
  return (
    <div>  
        {isLoading && <p>please wait it is loading ...</p>}
        {
            isSuccess ? (
                data?.length > 0 ? (
                <div>
                    <GroupTable 
                        columns={GROUP_COLUMN}
                        data={data || []}                        
                    />
                </div>
                
                ) : (
                    <div className='flex flex-col'>
                        <GroupTable 
                        columns={GROUP_COLUMN}
                        data={data || []}                                          
                    />
                        <p className='text-black text-center text-[18px] text-opacity-50'>No Group available.</p>                      
                    </div>
                )
            ) : null
        }
    </div>
  )
}

export default GroupList
